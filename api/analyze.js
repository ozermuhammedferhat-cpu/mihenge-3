export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { link } = req.body;
  if (!link) return res.status(400).json({ error: 'Link boş olamaz' });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'API anahtarı yapılandırılmamış' });

  // Step 1: Fetch article
  let articleText = '';
  let articleTitle = '';

  try {
    const pageRes = await fetch(link, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml',
        'Accept-Language': 'tr-TR,tr;q=0.9',
      },
      signal: AbortSignal.timeout(10000)
    });

    if (!pageRes.ok) throw new Error(`Sayfa açılamadı: ${pageRes.status}`);
    const html = await pageRes.text();

    const ogTitle = html.match(/<meta[^>]+property="og:title"[^>]+content="([^"]+)"/i);
    const titleTag = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    articleTitle = (ogTitle?.[1] || titleTag?.[1] || '').trim();

    articleText = html
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<nav[\s\S]*?<\/nav>/gi, ' ')
      .replace(/<footer[\s\S]*?<\/footer>/gi, ' ')
      .replace(/<header[\s\S]*?<\/header>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"').replace(/\s+/g, ' ')
      .trim().slice(0, 4000);

  } catch (err) {
    return res.status(400).json({ error: `Sayfa okunamadı: ${err.message}` });
  }

  if (articleText.length < 80) {
    return res.status(400).json({ error: 'Sayfadan yeterli içerik çıkarılamadı.' });
  }

  // Step 2: Analyze — prompt JSON dışında HİÇBİR şey üretme
  const prompt = `Aşağıdaki haber metnini analiz et ve olgusal iddiaları doğrula.

KAYNAK: ${articleTitle || link}
METİN: ${articleText}

Yukarıdaki haberdeki somut, doğrulanabilir iddiaları tespit et ve her birini değerlendir.

ÇIKTI KURALLARI:
- SADECE JSON döndür
- JSON öncesinde veya sonrasında HİÇBİR metin, açıklama, markdown yazma
- Geçersiz JSON karakteri kullanma
- Tüm string değerlerde çift tırnak kullan

JSON ŞEMASI:
{
  "overallScore": 75,
  "overallVerdict": "KISMEN DOĞRU",
  "summary": "Haberin genel değerlendirmesi burada.",
  "articleTitle": "${articleTitle.replace(/"/g, "'")}",
  "claims": [
    {
      "claim": "İddia metni",
      "verdict": "DOĞRU",
      "verdictEn": "true",
      "explanation": "Açıklama metni burada.",
      "sources": [
        {
          "title": "Kaynak başlığı",
          "url": "https://ornek.com",
          "domain": "ornek.com",
          "stance": "DESTEKLER"
        }
      ]
    }
  ]
}`;

  try {
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.1,
            maxOutputTokens: 6000,
            responseMimeType: "application/json"
          }
        })
      }
    );

    if (!geminiRes.ok) {
      const errData = await geminiRes.json();
      throw new Error(errData.error?.message || 'AI servisi hatası');
    }

    const geminiData = await geminiRes.json();

    // Extract all text parts
    const parts = geminiData.candidates?.[0]?.content?.parts || [];
    const rawText = parts.filter(p => p.text).map(p => p.text).join('');

    if (!rawText) {
      // Log finish reason for debugging
      const finishReason = geminiData.candidates?.[0]?.finishReason || 'unknown';
      throw new Error(`AI yanıt üretemedi (sebep: ${finishReason}). Tekrar deneyin.`);
    }

    // Parse JSON — multiple strategies
    let result = null;

    // Strategy 1: Direct parse
    try { result = JSON.parse(rawText.trim()); } catch(e) {}

    // Strategy 2: Extract JSON block
    if (!result) {
      const match = rawText.match(/\{[\s\S]*"claims"[\s\S]*\}/);
      if (match) {
        try { result = JSON.parse(match[0]); } catch(e) {}
      }
    }

    // Strategy 3: Remove markdown fences
    if (!result) {
      const cleaned = rawText.replace(/^```json\s*/i, '').replace(/\s*```$/i, '').trim();
      try { result = JSON.parse(cleaned); } catch(e) {}
    }

    // Strategy 4: Find first { to last }
    if (!result) {
      const start = rawText.indexOf('{');
      const end = rawText.lastIndexOf('}');
      if (start !== -1 && end !== -1) {
        try { result = JSON.parse(rawText.slice(start, end + 1)); } catch(e) {}
      }
    }

    if (!result) {
      throw new Error('AI yanıtı işlenemedi. Farklı bir haber linki deneyin.');
    }

    return res.status(200).json(result);

  } catch (err) {
    console.error('Error:', err.message);
    return res.status(500).json({ error: err.message });
  }
}
