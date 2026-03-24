export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { link } = req.body;
  if (!link) return res.status(400).json({ error: 'Link boş olamaz' });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'API anahtarı yapılandırılmamış' });

  // Today's date
  const today = new Date().toLocaleDateString('tr-TR', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

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

  const prompt = `Sen Mihenge AI adlı profesyonel bir gerçek-denetim asistanısın.

ÖNEMLİ: Bugünün tarihi ${today}. Sen bir yapay zeka olarak bilgi kesim tarihinden sonraki olayları bilmiyor olabilirsin. Ancak bu, haberin yanlış olduğu anlamına GELMEZ. Eğer bir olayı bilmiyorsan "DOĞRULANAMAZ" olarak işaretle, asla "yanlış" veya "gelecekte" deme. Tarihi gerçekmiş gibi kabul et çünkü bugün ${today} tarihidir.

KAYNAK: ${articleTitle || link}
METİN: ${articleText}

GÖREV:
- Haberdeki somut iddiaları tespit et
- Bildiğin bilgilerle doğrula
- Bilmediğin/doğrulayamadığın şeyleri "DOĞRULANAMAZ" olarak işaretle
- "Gelecekte gerçekleşecek" deme — bugün ${today}

ÇIKTI: SADECE JSON, başka hiçbir şey yazma.

{
  "overallScore": 75,
  "overallVerdict": "KISMEN DOĞRU",
  "summary": "Haberin genel değerlendirmesi.",
  "articleTitle": "${articleTitle.replace(/"/g, "'")}",
  "claims": [
    {
      "claim": "Tespit edilen iddia",
      "verdict": "DOĞRU",
      "verdictEn": "true",
      "explanation": "Açıklama.",
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
          tools: [{ googleSearch: {} }],
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
    const parts = geminiData.candidates?.[0]?.content?.parts || [];
    const rawText = parts.filter(p => p.text).map(p => p.text).join('');

    if (!rawText) {
      const finishReason = geminiData.candidates?.[0]?.finishReason || 'unknown';
      throw new Error(`AI yanıt üretemedi (${finishReason}). Tekrar deneyin.`);
    }

    let result = null;

    try { result = JSON.parse(rawText.trim()); } catch(e) {}

    if (!result) {
      const match = rawText.match(/\{[\s\S]*"claims"[\s\S]*\}/);
      if (match) try { result = JSON.parse(match[0]); } catch(e) {}
    }

    if (!result) {
      const cleaned = rawText.replace(/^```json\s*/i, '').replace(/\s*```$/i, '').trim();
      try { result = JSON.parse(cleaned); } catch(e) {}
    }

    if (!result) {
      const start = rawText.indexOf('{');
      const end = rawText.lastIndexOf('}');
      if (start !== -1 && end !== -1) {
        try { result = JSON.parse(rawText.slice(start, end + 1)); } catch(e) {}
      }
    }

    if (!result) throw new Error('AI yanıtı işlenemedi. Farklı bir haber linki deneyin.');

    return res.status(200).json(result);

  } catch (err) {
    console.error('Error:', err.message);
    return res.status(500).json({ error: err.message });
  }
}
