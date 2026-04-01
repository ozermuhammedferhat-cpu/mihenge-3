export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { link } = req.body;
  if (!link) return res.status(400).json({ error: 'Link boş olamaz' });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'API anahtarı yapılandırılmamış' });

  const today = new Date().toLocaleDateString('tr-TR', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

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
    articleTitle = (ogTitle?.[1] || titleTag?.[1] || 'Haber').trim().replace(/"/g, "'");

    articleText = html
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim().slice(0, 4000);

  } catch (err) {
    return res.status(400).json({ error: `Sayfa okunamadı: ${err.message}` });
  }

  const prompt = `Bugünün tarihi ${today}. Aşağıdaki haberi doğrula ve SADECE JSON döndür. 
  Markdown kullanma, açıklama yapma.
  KAYNAK: ${articleTitle}
  METİN: ${articleText}`;

  try {
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    );

    if (!geminiRes.ok) {
      const errData = await geminiRes.json();
      throw new Error(errData.error?.message || 'AI servisi hatası');
    }

    const geminiData = await geminiRes.json();
    const rawText = geminiData.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!rawText) throw new Error("AI yanıt üretmedi.");

    // JSON bloğunu metnin içinden cımbızla çekme
    const start = rawText.indexOf('{');
    const end = rawText.lastIndexOf('}');
    if (start === -1 || end === -1) throw new Error("Format hatası: " + rawText);
    
    const cleanJson = rawText.slice(start, end + 1);
    return res.status(200).json(JSON.parse(cleanJson));

  } catch (err) {
    console.error('Hata:', err.message);
    return res.status(500).json({ error: "Analiz başarısız: " + err.message });
  }
}
