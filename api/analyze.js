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

  // Step 1: Fetch the article content
  let articleText = '';
  let articleTitle = '';

  try {
    const pageRes = await fetch(link, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7',
      },
      signal: AbortSignal.timeout(10000)
    });

    if (!pageRes.ok) throw new Error(`Sayfa açılamadı: ${pageRes.status}`);

    const html = await pageRes.text();

    // Extract title
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    if (titleMatch) articleTitle = titleMatch[1].trim();

    // Extract og:title as fallback
    const ogTitle = html.match(/<meta[^>]+property="og:title"[^>]+content="([^"]+)"/i);
    if (ogTitle && !articleTitle) articleTitle = ogTitle[1].trim();

    // Extract main text content - remove scripts, styles, nav, footer
    let text = html
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
      .replace(/&#39;/g, "'")
      .replace(/\s+/g, ' ')
      .trim();

    // Limit to first 6000 chars to stay within token limits
    articleText = text.slice(0, 6000);

  } catch (err) {
    return res.status(400).json({
      error: `Sayfa okunamadı: ${err.message}. Lütfen haber metnini manuel olarak kopyalayın.`
    });
  }

  if (!articleText || articleText.length < 100) {
    return res.status(400).json({
      error: 'Sayfadan yeterli içerik çıkarılamadı. Bazı siteler erişimi engelliyor olabilir.'
    });
  }

  // Step 2: Analyze with Gemini
  const prompt = `Sen Mihenge adlı profesyonel bir Türk gerçek-denetim (fact-check) asistanısın.

KAYNAK BİLGİSİ:
- URL: ${link}
- Başlık: ${articleTitle || 'belirtilmedi'}

ANALİZ EDİLECEK HABER METNİ:
"""
${articleText}
"""

GÖREV:
1. Bu haberdeki tüm somut iddiaları, rakamları, alıntıları ve olgusal iddiaları tespit et
2. Her iddiayı Google arama yaparak birden fazla bağımsız kaynakla doğrula
3. Farklı siyasi görüşteki gazetelerden, resmi kaynaklardan ve uluslararası haber ajanslarından kaynak bul
4. Her kaynak için gerçek URL ver — "çeşitli kaynaklar" gibi belirsiz ifade KULLANMA

KAYNAK KURALLARI:
- Her iddia için EN AZ 2-3 farklı, bağımsız kaynak bul
- Resmi açıklamalar: politikacı/kurum Twitter/X hesabı veya resmi web sitesi
- Uluslararası ajanslar: Reuters, AP, AFP, BBC
- Farklı görüşteki Türk medyası: Cumhuriyet, Sabah, Sözcü, Hürriyet, T24, Bianet
- Bilimsel iddialarda: PubMed, WHO, Nature, Science

SADECE geçerli JSON döndür, başka hiçbir şey yazma:

{
  "overallScore": 0-100,
  "overallVerdict": "DOĞRU" | "KISMEN DOĞRU" | "YANLIŞ" | "KARISIK" | "DOĞRULANAMAZ",
  "summary": "İçeriğin genel doğruluk değerlendirmesi. Türkçe, 2-3 cümle.",
  "articleTitle": "${articleTitle}",
  "claims": [
    {
      "claim": "Haberden tespit edilen somut iddia",
      "verdict": "DOĞRU" | "KISMEN DOĞRU" | "YANLIŞ" | "DOĞRULANAMAZ",
      "verdictEn": "true" | "partial" | "false" | "unverifiable",
      "explanation": "Bu iddianın neden doğru/yanlış olduğu. Hangi kaynaklar ne söylüyor. Spesifik ol. Türkçe, 3-5 cümle.",
      "sources": [
        {
          "title": "Haberin başlığı",
          "url": "https://gercek-url.com",
          "domain": "site-adi.com",
          "stance": "DESTEKLER" | "ÇÜRÜTÜR" | "NÖTR"
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
          generationConfig: { temperature: 0.1, maxOutputTokens: 8000 },
          tools: [{ google_search: {} }]
        })
      }
    );

    if (!geminiRes.ok) {
      const errData = await geminiRes.json();
      throw new Error(errData.error?.message || 'Gemini API hatası');
    }

    const geminiData = await geminiRes.json();
    const rawText = geminiData.candidates?.[0]?.content?.parts
      ?.filter(p => p.text)?.map(p => p.text)?.join('') || '';

    if (!rawText) throw new Error('Gemini boş yanıt döndürdü');

    let result;
    try {
      const cleaned = rawText.replace(/```json|```/g, '').trim();
      const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
      result = JSON.parse(jsonMatch ? jsonMatch[0] : cleaned);
    } catch (e) {
      throw new Error('Yanıt işlenemedi, tekrar deneyin');
    }

    return res.status(200).json(result);

  } catch (err) {
    console.error('Error:', err);
    return res.status(500).json({ error: err.message });
  }
}
