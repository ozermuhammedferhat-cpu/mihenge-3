export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { link } = req.body;

  if (!link) {
    return res.status(400).json({ error: 'Link boş olamaz' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API anahtarı yapılandırılmamış' });
  }

  // Step 1: Fetch article content
  let articleText = '';
  let articleTitle = '';

  try {
    const pageRes = await fetch(link, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'tr-TR,tr;q=0.9,en-US;q=0.8',
      },
      signal: AbortSignal.timeout(10000)
    });

    if (!pageRes.ok) throw new Error(`Sayfa açılamadı: ${pageRes.status}`);
    const html = await pageRes.text();

    // Extract title
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    if (titleMatch) articleTitle = titleMatch[1].trim();
    const ogTitle = html.match(/<meta[^>]+property="og:title"[^>]+content="([^"]+)"/i);
    if (ogTitle) articleTitle = ogTitle[1].trim();

    // Extract text
    articleText = html
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<nav[\s\S]*?<\/nav>/gi, ' ')
      .replace(/<footer[\s\S]*?<\/footer>/gi, ' ')
      .replace(/<header[\s\S]*?<\/header>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 5000);

  } catch (err) {
    return res.status(400).json({
      error: `Sayfa okunamadı: ${err.message}`
    });
  }

  if (!articleText || articleText.length < 80) {
    return res.status(400).json({
      error: 'Sayfadan yeterli içerik çıkarılamadı. Bu site erişimi engelliyor olabilir.'
    });
  }

  // Step 2: First pass — extract claims without search
  const extractPrompt = `Sen bir Türk gerçek-denetim asistanısın. Aşağıdaki haber metnindeki somut, doğrulanabilir iddiaları tespit et ve her birini ayrı ayrı analiz et.

KAYNAK: ${articleTitle || link}
METİN:
"""
${articleText}
"""

Bu haberdeki olgusal iddiaları (rakamlar, alıntılar, olaylar, istatistikler) tespit et.
Bilgi ve muhakemene dayanarak her iddianın ne kadar doğru olduğunu değerlendir.
Her iddia için bilinen güvenilir kaynakları referans ver.

SADECE geçerli JSON döndür:

{
  "overallScore": 0-100,
  "overallVerdict": "DOĞRU" | "KISMEN DOĞRU" | "YANLIŞ" | "KARISIK" | "DOĞRULANAMAZ",
  "summary": "Haberin genel doğruluk değerlendirmesi. Türkçe, 2-3 cümle.",
  "articleTitle": "${articleTitle}",
  "claims": [
    {
      "claim": "Haberden tespit edilen somut iddia",
      "verdict": "DOĞRU" | "KISMEN DOĞRU" | "YANLIŞ" | "DOĞRULANAMAZ",
      "verdictEn": "true" | "partial" | "false" | "unverifiable",
      "explanation": "Bu iddianın doğru/yanlış olduğunun gerekçesi. Hangi kaynaklar ne söylüyor. Türkçe, 3-5 cümle.",
      "sources": [
        {
          "title": "Kaynak adı veya haber başlığı",
          "url": "https://kaynak-url.com",
          "domain": "site-adi.com",
          "stance": "DESTEKLER" | "ÇÜRÜTÜR" | "NÖTR"
        }
      ]
    }
  ]
}`;

  try {
    // Try with search first, fallback to without
    let result = null;

    // Attempt 1: with google search grounding
    try {
      const r1 = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: extractPrompt }] }],
            generationConfig: { temperature: 0.1, maxOutputTokens: 6000 },
            tools: [{ googleSearch: {} }]
          })
        }
      );

      if (r1.ok) {
        const d1 = await r1.json();
        const text1 = d1.candidates?.[0]?.content?.parts
          ?.filter(p => p.text)?.map(p => p.text)?.join('') || '';
        if (text1.includes('{')) {
          const cleaned = text1.replace(/```json|```/g, '').trim();
          const match = cleaned.match(/\{[\s\S]*\}/);
          if (match) result = JSON.parse(match[0]);
        }
      }
    } catch (e) {
      console.log('Search attempt failed, trying without search:', e.message);
    }

    // Attempt 2: without search tool
    if (!result) {
      const r2 = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: extractPrompt }] }],
            generationConfig: { temperature: 0.1, maxOutputTokens: 6000 }
          })
        }
      );

      if (!r2.ok) {
        const errData = await r2.json();
        throw new Error(errData.error?.message || 'AI servisi hatası');
      }

      const d2 = await r2.json();
      const text2 = d2.candidates?.[0]?.content?.parts
        ?.filter(p => p.text)?.map(p => p.text)?.join('') || '';

      if (!text2) throw new Error('Analiz yapılamadı, tekrar deneyin');

      const cleaned = text2.replace(/```json|```/g, '').trim();
      const match = cleaned.match(/\{[\s\S]*\}/);
      if (!match) throw new Error('Yanıt işlenemedi');
      result = JSON.parse(match[0]);
    }

    return res.status(200).json(result);

  } catch (err) {
    console.error('Error:', err);
    return res.status(500).json({ error: err.message });
  }
}
