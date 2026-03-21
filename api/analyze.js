export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { link, title, claims } = req.body;

  if (!claims || claims.length === 0) {
    return res.status(400).json({ error: 'En az bir iddia gerekli' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API anahtarı yapılandırılmamış' });
  }

  const prompt = `Sen Mihenge adlı Türk bir gerçek-denetim (fact-check) asistanısın.
Görevin: Verilen içerikleri ve iddiaları güvenilir kaynaklarla araştırıp doğrulamak.

İÇERİK BİLGİSİ:
- Link: ${link || 'belirtilmedi'}
- Başlık/Kaynak: ${title || 'belirtilmedi'}

KONTROL EDİLECEK İÇERİK/İDDİALAR:
${claims.map((c, i) => `${i+1}. "${c}"`).join('\n')}

GÖREV:
1. Her iddia için internette bilinen gerçekleri, bilimsel konsensüsü ve güvenilir kaynakları kullanarak analiz et
2. Bilimsel iddialarda WHO, CDC, Nature, PubMed gibi kaynakları referans al
3. Siyasi/haber iddialarda Reuters, AP, BBC, resmi kaynakları referans al
4. Türkçe içerikler için hem Türkçe hem İngilizce kaynak bilgini kullan

SADECE aşağıdaki JSON formatında yanıt ver, başka hiçbir şey yazma:

{
  "overallScore": 0-100 arası sayı (100 = tamamen doğru, 0 = tamamen yanlış),
  "overallVerdict": "DOĞRU" veya "KISMEN DOĞRU" veya "YANLIŞ" veya "KARISIK" veya "DOĞRULANAMAZ",
  "summary": "Genel değerlendirme özeti Türkçe 2-3 cümle",
  "claims": [
    {
      "claim": "iddia metni (kısa özet)",
      "verdict": "DOĞRU" veya "KISMEN DOĞRU" veya "YANLIŞ" veya "DOĞRULANAMAZ",
      "verdictEn": "true" veya "partial" veya "false" veya "unverifiable",
      "explanation": "Bu iddianın doğru/yanlış olduğunun gerekçesi Türkçe 3-4 cümle",
      "sources": [
        {
          "title": "Kaynak adı",
          "url": "https://kaynak-url.com",
          "domain": "kaynak-alan-adı.com",
          "stance": "DESTEKLER" veya "ÇÜRÜTÜR" veya "NÖTR"
        }
      ]
    }
  ]
}`;

  try {
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.2,
            maxOutputTokens: 4000,
          },
          tools: [{ googleSearch: {} }]
        })
      }
    );

    if (!geminiRes.ok) {
      const errData = await geminiRes.json();
      throw new Error(errData.error?.message || 'Gemini API hatası');
    }

    const geminiData = await geminiRes.json();
    const rawText = geminiData.candidates?.[0]?.content?.parts?.[0]?.text || '';

    // JSON parse
    let result;
    try {
      const cleaned = rawText.replace(/```json|```/g, '').trim();
      const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
      result = JSON.parse(jsonMatch ? jsonMatch[0] : cleaned);
    } catch(e) {
      throw new Error('Yanıt ayrıştırılamadı, tekrar deneyin');
    }

    return res.status(200).json(result);

  } catch (err) {
    console.error('Gemini error:', err);
    return res.status(500).json({ error: err.message });
  }
}
