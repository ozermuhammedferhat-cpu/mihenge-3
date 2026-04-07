<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>VÃ¼cut SÄ±vÄ±larÄ± & Kan Fizyolojisi | Akademik Kaynak</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400&family=JetBrains+Mono:wght@400;500&family=Outfit:wght@300;400;500;600;700&display=swap');

  :root {
    --bg: #0d1117;
    --surface: #161b22;
    --surface2: #1c2128;
    --border: #30363d;
    --accent: #c9a84c;
    --accent2: #e05c5c;
    --accent3: #5c9ee0;
    --accent4: #5ce0a0;
    --text: #e6edf3;
    --text-muted: #8b949e;
    --text-dim: #4a5568;
    --red: #e05c5c;
    --blue: #5c9ee0;
    --green: #5ce0a0;
    --gold: #c9a84c;
    --purple: #a07ee0;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Outfit', sans-serif;
    font-weight: 300;
    line-height: 1.7;
    min-height: 100vh;
  }

  /* TOP BAR */
  .topbar {
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .topbar-brand {
    font-family: 'Crimson Pro', serif;
    font-size: 1.1rem;
    color: var(--accent);
    letter-spacing: 0.05em;
  }

  .topbar-nav {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  }

  .nav-btn {
    background: none;
    border: 1px solid var(--border);
    color: var(--text-muted);
    padding: 5px 12px;
    border-radius: 6px;
    font-size: 0.72rem;
    font-family: 'Outfit', sans-serif;
    cursor: pointer;
    transition: all 0.2s;
    font-weight: 400;
    letter-spacing: 0.03em;
  }

  .nav-btn:hover, .nav-btn.active {
    border-color: var(--accent);
    color: var(--accent);
    background: rgba(201,168,76,0.06);
  }

  /* HERO */
  .hero {
    padding: 60px 32px 40px;
    max-width: 960px;
    margin: 0 auto;
    text-align: center;
  }

  .hero-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.68rem;
    color: var(--accent);
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-bottom: 16px;
    opacity: 0.8;
  }

  .hero h1 {
    font-family: 'Crimson Pro', serif;
    font-size: 2.8rem;
    font-weight: 300;
    color: var(--text);
    line-height: 1.2;
    margin-bottom: 16px;
  }

  .hero h1 span {
    color: var(--accent);
    font-style: italic;
  }

  .hero-desc {
    font-size: 0.9rem;
    color: var(--text-muted);
    max-width: 600px;
    margin: 0 auto 32px;
  }

  .source-badges {
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .badge {
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 5px 14px;
    font-size: 0.72rem;
    color: var(--text-muted);
    font-family: 'JetBrains Mono', monospace;
  }

  .badge.primary { border-color: var(--accent); color: var(--accent); }
  .badge.blue { border-color: var(--blue); color: var(--blue); }
  .badge.green { border-color: var(--green); color: var(--green); }

  /* CONTENT */
  .content {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 24px 80px;
  }

  /* SECTIONS */
  .section {
    display: none;
    animation: fadeIn 0.3s ease;
  }

  .section.active { display: block; }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* CARDS */
  .card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 28px;
    margin-bottom: 20px;
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
  }

  .card-icon {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    flex-shrink: 0;
  }

  .card-icon.gold { background: rgba(201,168,76,0.12); border: 1px solid rgba(201,168,76,0.3); }
  .card-icon.red { background: rgba(224,92,92,0.12); border: 1px solid rgba(224,92,92,0.3); }
  .card-icon.blue { background: rgba(92,158,224,0.12); border: 1px solid rgba(92,158,224,0.3); }
  .card-icon.green { background: rgba(92,224,160,0.12); border: 1px solid rgba(92,224,160,0.3); }
  .card-icon.purple { background: rgba(160,126,224,0.12); border: 1px solid rgba(160,126,224,0.3); }

  .card-title {
    font-family: 'Crimson Pro', serif;
    font-size: 1.35rem;
    font-weight: 400;
    color: var(--text);
  }

  .card-subtitle {
    font-size: 0.72rem;
    color: var(--text-muted);
    font-family: 'JetBrains Mono', monospace;
    margin-top: 2px;
  }

  /* INFO GRID */
  .info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 12px;
    margin: 16px 0;
  }

  .info-item {
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 14px;
  }

  .info-label {
    font-size: 0.68rem;
    color: var(--text-muted);
    font-family: 'JetBrains Mono', monospace;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 6px;
  }

  .info-value {
    font-family: 'Crimson Pro', serif;
    font-size: 1.2rem;
    color: var(--text);
  }

  .info-value.gold { color: var(--gold); }
  .info-value.red { color: var(--red); }
  .info-value.blue { color: var(--blue); }
  .info-value.green { color: var(--green); }

  /* HIGHLIGHT BOXES */
  .highlight {
    border-radius: 8px;
    padding: 16px 20px;
    margin: 12px 0;
    border-left: 3px solid;
    font-size: 0.88rem;
  }

  .highlight.warning { background: rgba(224,92,92,0.06); border-color: var(--red); }
  .highlight.info { background: rgba(92,158,224,0.06); border-color: var(--blue); }
  .highlight.success { background: rgba(92,224,160,0.06); border-color: var(--green); }
  .highlight.gold { background: rgba(201,168,76,0.06); border-color: var(--gold); }
  .highlight.purple { background: rgba(160,126,224,0.06); border-color: var(--purple); }

  .highlight strong {
    display: block;
    font-weight: 600;
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 6px;
  }

  .highlight.warning strong { color: var(--red); }
  .highlight.info strong { color: var(--blue); }
  .highlight.success strong { color: var(--green); }
  .highlight.gold strong { color: var(--gold); }
  .highlight.purple strong { color: var(--purple); }

  /* TABLE */
  .table-wrap { overflow-x: auto; margin: 16px 0; }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.85rem;
  }

  th {
    background: var(--surface2);
    color: var(--text-muted);
    font-weight: 500;
    padding: 10px 14px;
    text-align: left;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    border-bottom: 1px solid var(--border);
  }

  td {
    padding: 10px 14px;
    border-bottom: 1px solid rgba(48,54,61,0.5);
    color: var(--text);
  }

  tr:last-child td { border-bottom: none; }
  tr:hover td { background: rgba(255,255,255,0.015); }

  td.key { color: var(--gold); font-weight: 500; }
  td.blue-val { color: var(--blue); font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; }
  td.red-val { color: var(--red); }
  td.green-val { color: var(--green); }

  /* ACCORDION */
  .accordion {
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 8px;
    margin-bottom: 10px;
    overflow: hidden;
  }

  .accordion-header {
    padding: 14px 20px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.88rem;
    font-weight: 500;
    transition: background 0.2s;
  }

  .accordion-header:hover { background: rgba(255,255,255,0.03); }

  .accordion-header.open { color: var(--accent); }

  .accordion-body {
    display: none;
    padding: 0 20px 18px;
    font-size: 0.85rem;
    color: var(--text-muted);
    border-top: 1px solid var(--border);
    padding-top: 16px;
  }

  .accordion-body.open { display: block; }

  .chevron { transition: transform 0.2s; font-size: 0.8rem; color: var(--text-muted); }
  .chevron.open { transform: rotate(180deg); }

  /* COMPARE GRID */
  .compare-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
    margin: 12px 0;
  }

  .compare-card {
    background: var(--surface2);
    border-radius: 8px;
    padding: 16px;
    border: 1px solid var(--border);
    text-align: center;
  }

  .compare-card .label {
    font-size: 0.7rem;
    font-family: 'JetBrains Mono', monospace;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 8px;
  }

  .compare-card .label.hypo { color: var(--blue); }
  .compare-card .label.iso { color: var(--green); }
  .compare-card .label.hyper { color: var(--red); }

  .compare-card .val { font-family: 'Crimson Pro', serif; font-size: 1.05rem; }

  /* PROTEIN PROGRESS */
  .protein-bar {
    margin: 10px 0;
  }

  .protein-bar-label {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    margin-bottom: 5px;
  }

  .protein-bar-label span:first-child { color: var(--text); font-weight: 500; }
  .protein-bar-label span:last-child { color: var(--text-muted); font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; }

  .bar-track {
    background: var(--surface2);
    border-radius: 4px;
    height: 7px;
    overflow: hidden;
    border: 1px solid var(--border);
  }

  .bar-fill {
    height: 100%;
    border-radius: 4px;
    transition: width 0.8s ease;
  }

  /* STARLING DIAGRAM */
  .starling-box {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 0;
    margin: 16px 0;
    border: 1px solid var(--border);
    border-radius: 8px;
    overflow: hidden;
  }

  .starling-end {
    padding: 16px;
    background: var(--surface2);
  }

  .starling-mid {
    background: rgba(201,168,76,0.08);
    border-left: 1px solid var(--border);
    border-right: 1px solid var(--border);
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .starling-label {
    font-size: 0.68rem;
    color: var(--text-muted);
    font-family: 'JetBrains Mono', monospace;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 12px;
    display: block;
  }

  .starling-row {
    display: flex;
    justify-content: space-between;
    font-size: 0.82rem;
    padding: 4px 0;
    border-bottom: 1px solid rgba(255,255,255,0.04);
  }

  .starling-row:last-child { border-bottom: none; }
  .starling-arrow { color: var(--accent); font-size: 1.4rem; }

  /* SECTION DIVIDER */
  .section-divider {
    display: flex;
    align-items: center;
    gap: 14px;
    margin: 32px 0 20px;
  }

  .section-divider h2 {
    font-family: 'Crimson Pro', serif;
    font-size: 1.6rem;
    font-weight: 300;
    color: var(--text);
    white-space: nowrap;
  }

  .divider-line {
    flex: 1;
    height: 1px;
    background: var(--border);
  }

  .divider-num {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.65rem;
    color: var(--text-dim);
  }

  /* TEXTBOOK NOTE */
  .textbook-note {
    background: linear-gradient(135deg, rgba(201,168,76,0.04), rgba(92,158,224,0.04));
    border: 1px solid rgba(201,168,76,0.2);
    border-radius: 8px;
    padding: 14px 18px;
    margin: 12px 0;
    display: flex;
    gap: 12px;
    align-items: flex-start;
  }

  .textbook-note .icon { font-size: 1.2rem; margin-top: 2px; }
  .textbook-note-content { flex: 1; }
  .textbook-note-source {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.65rem;
    color: var(--gold);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 4px;
  }
  .textbook-note-text { font-size: 0.84rem; color: var(--text-muted); }

  /* EXAM CALLOUT */
  .exam-callout {
    background: rgba(224,92,92,0.05);
    border: 1px dashed rgba(224,92,92,0.4);
    border-radius: 8px;
    padding: 12px 16px;
    margin: 10px 0;
    font-size: 0.82rem;
  }

  .exam-callout::before {
    content: "ğŸ“Œ SINAV NOTU: ";
    font-weight: 600;
    font-size: 0.7rem;
    color: var(--red);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  /* DEHIDRATE TABLE */
  .dehid-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin: 12px 0;
  }

  .dehid-card {
    border-radius: 8px;
    padding: 14px;
    border: 1px solid;
  }

  .dehid-card.mild { border-color: var(--green); background: rgba(92,224,160,0.04); }
  .dehid-card.moderate { border-color: var(--gold); background: rgba(201,168,76,0.04); }
  .dehid-card.severe { border-color: var(--red); background: rgba(224,92,92,0.04); }

  .dehid-title {
    font-weight: 600;
    font-size: 0.78rem;
    margin-bottom: 6px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .dehid-card.mild .dehid-title { color: var(--green); }
  .dehid-card.moderate .dehid-title { color: var(--gold); }
  .dehid-card.severe .dehid-title { color: var(--red); }

  .dehid-pct {
    font-family: 'Crimson Pro', serif;
    font-size: 1.3rem;
    margin-bottom: 6px;
  }

  .dehid-card.mild .dehid-pct { color: var(--green); }
  .dehid-card.moderate .dehid-pct { color: var(--gold); }
  .dehid-card.severe .dehid-pct { color: var(--red); }

  /* QUIZ */
  .quiz-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 24px;
    margin-bottom: 18px;
  }

  .quiz-q {
    font-family: 'Crimson Pro', serif;
    font-size: 1.1rem;
    color: var(--text);
    margin-bottom: 16px;
    line-height: 1.5;
  }

  .quiz-q .qnum {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.65rem;
    color: var(--text-muted);
    display: block;
    margin-bottom: 6px;
    letter-spacing: 0.08em;
  }

  .quiz-options { display: flex; flex-direction: column; gap: 8px; }

  .quiz-opt {
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 7px;
    padding: 10px 16px;
    cursor: pointer;
    font-size: 0.85rem;
    transition: all 0.15s;
    text-align: left;
    color: var(--text);
    font-family: 'Outfit', sans-serif;
    display: flex;
    gap: 10px;
    align-items: flex-start;
  }

  .quiz-opt .opt-letter {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.7rem;
    color: var(--text-muted);
    min-width: 18px;
    margin-top: 2px;
  }

  .quiz-opt:hover { border-color: var(--accent); color: var(--text); background: rgba(201,168,76,0.04); }
  .quiz-opt.correct { background: rgba(92,224,160,0.1); border-color: var(--green); color: var(--green); }
  .quiz-opt.wrong { background: rgba(224,92,92,0.1); border-color: var(--red); color: var(--red); }
  .quiz-opt.disabled { pointer-events: none; }

  .quiz-explain {
    display: none;
    margin-top: 14px;
    padding: 14px;
    background: rgba(92,224,160,0.04);
    border: 1px solid rgba(92,224,160,0.2);
    border-radius: 7px;
    font-size: 0.83rem;
    color: var(--text-muted);
    line-height: 1.6;
  }

  .quiz-explain.show { display: block; }

  /* RESPONSIVE */
  @media (max-width: 680px) {
    .hero h1 { font-size: 1.9rem; }
    .compare-row { grid-template-columns: 1fr; }
    .dehid-grid { grid-template-columns: 1fr; }
    .info-grid { grid-template-columns: 1fr 1fr; }
    .topbar-nav { display: none; }
    .starling-box { grid-template-columns: 1fr; }
    .starling-mid { border: none; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
  }

  ul, ol { padding-left: 20px; }
  li { margin-bottom: 5px; font-size: 0.87rem; color: var(--text-muted); }
  li strong { color: var(--text); font-weight: 500; }

  p { font-size: 0.87rem; color: var(--text-muted); margin-bottom: 10px; }
  p strong { color: var(--text); font-weight: 500; }

  .mono { font-family: 'JetBrains Mono', monospace; font-size: 0.85em; }
  .gold-text { color: var(--gold); }
  .red-text { color: var(--red); }
  .blue-text { color: var(--blue); }
  .green-text { color: var(--green); }
  .purple-text { color: var(--purple); }
</style>
</head>
<body>

<div class="topbar">
  <div class="topbar-brand">ğŸ©¸ KAN & VÃœCUT SIVILARI FÄ°ZYOLOJÄ°SÄ°</div>
  <div class="topbar-nav">
    <button class="nav-btn active" onclick="showSection('vucut', this)">VÃ¼cut SÄ±vÄ±larÄ±</button>
    <button class="nav-btn" onclick="showSection('kan', this)">Kan Dokusu</button>
    <button class="nav-btn" onclick="showSection('plazma', this)">Plazma</button>
    <button class="nav-btn" onclick="showSection('hemoreoloji', this)">Hemoreoloji</button>
    <button class="nav-btn" onclick="showSection('quiz', this)">Soru Bank.</button>
  </div>
</div>

<div class="hero">
  <div class="hero-label">Prof. Dr. Metin BaÅŸtuÄŸ Â· Ankara Ãœniversitesi TÄ±p FakÃ¼ltesi</div>
  <h1>VÃ¼cut SÄ±vÄ±larÄ± ve <span>KanÄ±n Fizyolojisi</span></h1>
  <p class="hero-desc">Ders notlarÄ±, slaytlar ve uluslararasÄ± fizyoloji kaynaklarÄ±ndan derlenen kapsamlÄ± akademik Ã§alÄ±ÅŸma kaynaÄŸÄ±.</p>
  <div class="source-badges">
    <div class="badge primary">BaÅŸtuÄŸ Ders NotlarÄ±</div>
    <div class="badge blue">Guyton & Hall 14â€“15. BaskÄ±</div>
    <div class="badge green">NCBI / StatPearls</div>
    <div class="badge">Boron & Boulpaep</div>
  </div>
</div>

<div class="content">

<!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• SECTION 1: VÃœCUT SIVILARI â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
<div id="section-vucut" class="section active">

  <div class="section-divider">
    <div class="divider-num">01</div>
    <h2>VÃ¼cut SÄ±vÄ± KompartmanlarÄ±</h2>
    <div class="divider-line"></div>
  </div>

  <div class="card">
    <div class="card-header">
      <div class="card-icon gold">ğŸ’§</div>
      <div>
        <div class="card-title">Toplam VÃ¼cut Suyu</div>
        <div class="card-subtitle">Total Body Water (TBW)</div>
      </div>
    </div>

    <div class="info-grid">
      <div class="info-item">
        <div class="info-label">Genel aralÄ±k</div>
        <div class="info-value gold">%45â€“75</div>
      </div>
      <div class="info-item">
        <div class="info-label">Erkek (saÄŸlÄ±klÄ±)</div>
        <div class="info-value blue">%60â€“65</div>
      </div>
      <div class="info-item">
        <div class="info-label">KadÄ±n (saÄŸlÄ±klÄ±)</div>
        <div class="info-value">%50â€“55</div>
      </div>
      <div class="info-item">
        <div class="info-label">Tipik referans (70 kg)</div>
        <div class="info-value">~40 L</div>
      </div>
    </div>

    <div class="highlight info">
      <strong>Neden kadÄ±nlarda daha az?</strong>
      Deri altÄ± yaÄŸ dokusunun miktarÄ± erkeklere gÃ¶re fazladÄ±r. YaÄŸ dokusu metabolik olarak az aktif ve dÃ¼ÅŸÃ¼k su iÃ§eriklidir. Bu nedenle vÃ¼cut yaÄŸ oranÄ± arttÄ±kÃ§a toplam vÃ¼cut suyu oranÄ± azalÄ±r.
    </div>

    <div class="textbook-note">
      <div class="icon">ğŸ“š</div>
      <div class="textbook-note-content">
        <div class="textbook-note-source">Guyton & Hall â€” BÃ¶lÃ¼m 25</div>
        <div class="textbook-note-text">Ortalama kan hacmi vÃ¼cut aÄŸÄ±rlÄ±ÄŸÄ±nÄ±n yaklaÅŸÄ±k %7'sine denk gelir â€” 70 kg bir eriÅŸkinde ~5 litre. PlazmanÄ±n yaklaÅŸÄ±k %60'Ä±, eritrositlerin %40'Ä± oluÅŸturduÄŸu bu hacim; cinsiyet, kilo ve diÄŸer faktÃ¶rlere gÃ¶re Ã¶nemli Ã¶lÃ§Ã¼de deÄŸiÅŸebilir.</div>
      </div>
    </div>

    <div class="exam-callout">ZayÄ±f bireylerde su iÃ§eriÄŸi kilolu bireylerden fazladÄ±r. YaÅŸla birlikte yaÄŸ artar, su azalÄ±r â€” bunlarÄ±n her ikisi de fizyoloji sÄ±navlarÄ±nda sÄ±k sorulan tersine-mantÄ±k sorularÄ±dÄ±r.</div>
  </div>

  <div class="card">
    <div class="card-header">
      <div class="card-icon blue">ğŸ—‚ï¸</div>
      <div>
        <div class="card-title">Kompartmanlar</div>
        <div class="card-subtitle">Fluid Compartments</div>
      </div>
    </div>

    <div class="table-wrap">
      <table>
        <tr>
          <th>Kompartman</th>
          <th>Oran</th>
          <th>Ã–rnek Hacim (40L TBW)</th>
          <th>Ã–zellik</th>
        </tr>
        <tr>
          <td class="key">HÃ¼cre iÃ§i sÄ±vÄ± (ICF)</td>
          <td class="blue-val">%55 (TBW)</td>
          <td>~22 L</td>
          <td>En bÃ¼yÃ¼k kompartman</td>
        </tr>
        <tr>
          <td class="key">Ä°nterstisyel sÄ±vÄ± + Lenf</td>
          <td class="blue-val">%75 (ECF)</td>
          <td>~12 L</td>
          <td>HÃ¼creler arasÄ± alan</td>
        </tr>
        <tr>
          <td class="key">Plazma</td>
          <td class="blue-val">%25 (ECF)</td>
          <td>~2.75 L</td>
          <td>Damar iÃ§i, protein zengin</td>
        </tr>
        <tr>
          <td class="key">Kemik sÄ±vÄ±sÄ±</td>
          <td class="blue-val">â€”</td>
          <td>~1 L</td>
          <td>TrabekÃ¼ler boÅŸluklar</td>
        </tr>
        <tr>
          <td class="key">TranssellÃ¼ler sÄ±vÄ±</td>
          <td class="blue-val">â€”</td>
          <td>~3.25 L</td>
          <td>BOS, gÃ¶ziÃ§i, sinoviyal, plevralâ€¦</td>
        </tr>
      </table>
    </div>

    <div class="highlight info">
      <strong>Guyton HatÄ±rlatÄ±cÄ±</strong>
      Guyton & Hall'a gÃ¶re ECF, vÃ¼cut aÄŸÄ±rlÄ±ÄŸÄ±nÄ±n yaklaÅŸÄ±k %20'sine denk gelir; bu da 70 kg'lÄ±k bir kiÅŸide yaklaÅŸÄ±k 14 litredir. Ä°nterstisyel sÄ±vÄ± ECF'nin dÃ¶rtte Ã¼Ã§Ã¼nÃ¼ oluÅŸtururken plazma yaklaÅŸÄ±k dÃ¶rtte birini oluÅŸturur.
    </div>
  </div>

  <div class="section-divider">
    <div class="divider-num">02</div>
    <h2>Konsantrasyon KavramlarÄ±</h2>
    <div class="divider-line"></div>
  </div>

  <div class="card">
    <div class="card-header">
      <div class="card-icon purple">âš–ï¸</div>
      <div>
        <div class="card-title">Osmolalite Â· Osmolarite Â· Tonisite</div>
        <div class="card-subtitle">Birbiriyle karÄ±ÅŸtÄ±rÄ±lan 3 kritik kavram</div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-header" onclick="toggleAcc(this)">
        <span>ğŸ”¬ Osmolalite <span style="color:var(--text-muted);font-weight:300"> â€” temel kabul edilen Ã¶lÃ§Ã¼m</span></span>
        <span class="chevron">â–¾</span>
      </div>
      <div class="accordion-body">
        <p><strong>TanÄ±m:</strong> 1 kilogram Ã§Ã¶zÃ¼cÃ¼ (su) iÃ§indeki aktif partikÃ¼l sayÄ±sÄ±. Birimi: <span class="mono">mOsm/kg Hâ‚‚O</span></p>
        <p>Normal plazma osmolalitesi: <span class="gold-text"><strong>280â€“300 mOsm/kg</strong></span></p>
        <p>Klinikteki Ã¶lÃ§Ã¼m yÃ¶ntemi "donma noktasÄ± depresyonu" osmometresidir â€” bu nedenle pratikte osmolalite Ã¶lÃ§Ã¼lÃ¼r, osmolarite deÄŸil.</p>
        <div class="highlight purple">
          <strong>Akademik Kaynak (NCBI / Eur J Med Res 2025)</strong>
          Klinisyenler iÃ§in osmolalite (mOsm/kg Hâ‚‚O) kullanÄ±mÄ± Ã¶nerilir Ã§Ã¼nkÃ¼ farklÄ± su iÃ§eriÄŸine sahip Ã§Ã¶zeltiler karÅŸÄ±laÅŸtÄ±rÄ±ldÄ±ÄŸÄ±nda osmolarite yanÄ±ltÄ±cÄ± sonuÃ§lar verebilir.
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-header" onclick="toggleAcc(this)">
        <span>ğŸ“ Osmolarite <span style="color:var(--text-muted);font-weight:300"> â€” pratik kullanÄ±m</span></span>
        <span class="chevron">â–¾</span>
      </div>
      <div class="accordion-body">
        <p><strong>TanÄ±m:</strong> 1 litre Ã§Ã¶zeltideki partikÃ¼l sayÄ±sÄ±. Birimi: <span class="mono">mOsm/L</span></p>
        <p>Osmolalite ile osmolarite arasÄ±ndaki fark biyolojik sÄ±vÄ±larda <strong>yaklaÅŸÄ±k %1â€“2</strong>'dir. HocamÄ±zÄ±n dediÄŸi gibi, bu nedenle klinik pratikte genellikle osmolarite kullanÄ±lÄ±r.</p>
        <div class="highlight gold">
          <strong>Guyton & Hall'dan</strong>
          Su hÃ¼cre zarlarÄ±ndan Ã§ok hÄ±zlÄ± geÃ§tiÄŸinden, ICF ve ECF osmolariteleri birkaÃ§ dakika iÃ§inde dengeye ulaÅŸÄ±r. Sodyum ve klorÃ¼r gibi birÃ§ok solÃ¼t hÃ¼cre zarÄ±ndan geÃ§emeyebildiÄŸinden, osmol sayÄ±sÄ± deÄŸiÅŸmez.
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-header" onclick="toggleAcc(this)">
        <span>ğŸ¯ Tonisite <span style="color:var(--text-muted);font-weight:300"> â€” hÃ¼cre hacmini belirleyen</span></span>
        <span class="chevron">â–¾</span>
      </div>
      <div class="accordion-body">
        <p><strong>TanÄ±m:</strong> GÃ¶receli bir kavram. HÃ¼cre zarÄ±ndan <em>geÃ§emeyen</em> (impermeant) solÃ¼tlerin oluÅŸturduÄŸu efektif osmotik basÄ±nÃ§. Naâº, Clâ» gibi iyonlar tonisiteyi belirler; Ã¼re ve glikoz hÃ¼cre iÃ§ine girebildiÄŸinden tonisite yaratmaz.</p>

        <div class="compare-row">
          <div class="compare-card">
            <div class="label hypo">HÄ°POTONÄ°K</div>
            <div class="val">%0.2 NaCl</div>
            <p style="font-size:0.78rem;margin-top:8px;color:var(--text-muted)">Su hÃ¼cre iÃ§ine girer â†’ ÅŸiÅŸme â†’ hemoliz riski</p>
          </div>
          <div class="compare-card">
            <div class="label iso">Ä°ZOTONÄ°K</div>
            <div class="val">%0.9 NaCl</div>
            <p style="font-size:0.78rem;margin-top:8px;color:var(--text-muted)">HÃ¼cre hacmi deÄŸiÅŸmez. Normal eritrosit gÃ¶rÃ¼nÃ¼mÃ¼</p>
          </div>
          <div class="compare-card">
            <div class="label hyper">HÄ°PERTONÄ°K</div>
            <div class="val">%2 NaCl</div>
            <p style="font-size:0.78rem;margin-top:8px;color:var(--text-muted)">Su hÃ¼creden Ã§Ä±kar â†’ bÃ¼zÃ¼ÅŸme (krenasyon)</p>
          </div>
        </div>

        <div class="highlight warning">
          <strong>Dikkat: %5 Glikoz â€” AldatÄ±cÄ±!</strong>
          %5 glikoz baÅŸlangÄ±Ã§ta izotonik (â‰ˆ280 mOsm/L) gibi gÃ¶rÃ¼nse de, glikoz hÃ¼cre iÃ§ine metabolize edilerek alÄ±ndÄ±ÄŸÄ±nda Ã§Ã¶zeltinin efektif tonisitesi hipotonik hale gelir. Bu yÃ¼zden BaÅŸtuÄŸ hocamÄ±z "%0.9 NaCl daha doÄŸru" demiÅŸtir.
        </div>

        <div class="textbook-note">
          <div class="icon">ğŸ“š</div>
          <div class="textbook-note-content">
            <div class="textbook-note-source">Guyton & Hall + Boron & Boulpaep</div>
            <div class="textbook-note-text">Ä°zotonik, hipotonik ve hipertonik terimleri Ã§Ã¶zeltiyi hÃ¼cre hacmine etkisi bakÄ±mÄ±ndan tanÄ±mlar. Tonisite yalnÄ±zca impermeant solÃ¼t konsantrasyonuna baÄŸlÄ±dÄ±r. 1 mOsm/L'lik impermanent solÃ¼t konsantrasyon farkÄ± hÃ¼cre zarÄ±nda yaklaÅŸÄ±k 19.3 mmHg osmotik basÄ±nÃ§ oluÅŸturur â€” bu son derece bÃ¼yÃ¼k bir kuvvettir.</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="section-divider">
    <div class="divider-num">03</div>
    <h2>Dehidratasyon & Overhidratasyon</h2>
    <div class="divider-line"></div>
  </div>

  <div class="card">
    <div class="card-header">
      <div class="card-icon red">ğŸš¨</div>
      <div>
        <div class="card-title">Dehidratasyon</div>
        <div class="card-subtitle">SÄ±nÄ±flandÄ±rma ve Klinik Ã–nemi</div>
      </div>
    </div>

    <div class="dehid-grid">
      <div class="dehid-card mild">
        <div class="dehid-title">Hafif</div>
        <div class="dehid-pct">&lt;%5 kayÄ±p</div>
        <ul style="padding-left:14px">
          <li style="font-size:0.78rem">Susama hissi</li>
          <li style="font-size:0.78rem">Rehidratasyon kolay</li>
        </ul>
      </div>
      <div class="dehid-card moderate">
        <div class="dehid-title">Orta</div>
        <div class="dehid-pct">&gt;%10 kayÄ±p</div>
        <ul style="padding-left:14px">
          <li style="font-size:0.78rem">GÃ¶z kararmasÄ±</li>
          <li style="font-size:0.78rem">Acil tedavi gerekir</li>
        </ul>
      </div>
      <div class="dehid-card severe">
        <div class="dehid-title">Ciddi</div>
        <div class="dehid-pct">&gt;%15 kayÄ±p</div>
        <ul style="padding-left:14px">
          <li style="font-size:0.78rem">Kalp atÄ±mÄ± hÄ±zlanÄ±r</li>
          <li style="font-size:0.78rem">NabÄ±z zayÄ±flar, bayÄ±lma</li>
          <li style="font-size:0.78rem">Acil hastane tedavisi</li>
        </ul>
      </div>
    </div>

    <div class="table-wrap" style="margin-top:16px">
      <table>
        <tr>
          <th>Tip</th>
          <th>Mekanizma</th>
          <th>Neden?</th>
        </tr>
        <tr>
          <td class="key">Ä°zotonik</td>
          <td>Su = Sodyum kaybÄ±</td>
          <td class="green-val">Ä°shal, kusma</td>
        </tr>
        <tr>
          <td class="key">Hipertonik</td>
          <td>Su kaybÄ± daha fazla</td>
          <td class="gold-text">YÃ¼ksek ateÅŸ, terleme</td>
        </tr>
        <tr>
          <td class="key">Hipotonik</td>
          <td>Sodyum kaybÄ± daha fazla</td>
          <td class="red-text">AÅŸÄ±rÄ± diÃ¼retik kullanÄ±mÄ±</td>
        </tr>
      </table>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <div class="card-icon blue">ğŸ’§â¬†ï¸</div>
      <div>
        <div class="card-title">Hiperhidratasyon (Su Zehirlenmesi)</div>
        <div class="card-subtitle">Nedenleri â€” Ciddidir, tedavi gerektirir</div>
      </div>
    </div>
    <ul>
      <li><strong>Kalp yetmezliÄŸi</strong> â€” yeterli pompalama olmadÄ±ÄŸÄ±nda sÄ±vÄ± birikmesi</li>
      <li><strong>BÃ¶brek yetmezliÄŸi</strong> â€” atÄ±lamayan sÄ±vÄ± birikmesi</li>
      <li><strong>ADH hipersekresyonu</strong> â€” vasopressin aÅŸÄ±rÄ± salgÄ±lanmasÄ± â†’ antidiÃ¼rez</li>
      <li><strong>YanlÄ±ÅŸ IV sÄ±vÄ± tedavisi</strong> â€” fazladan serum uygulamasÄ±</li>
      <li><strong>YenidoÄŸanlar</strong> â€” renal filtrasyon mekanizmasÄ± henÃ¼z geliÅŸmemiÅŸ</li>
      <li><strong>Psikolojik polidipsi</strong> â€” gÃ¼nlÃ¼k 8+ litre su tÃ¼ketimi</li>
    </ul>
  </div>

</div>
<!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• SECTION 2: KAN DOKUSU â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
<div id="section-kan" class="section">

  <div class="section-divider">
    <div class="divider-num">04</div>
    <h2>Kan Dokusu</h2>
    <div class="divider-line"></div>
  </div>

  <div class="card">
    <div class="card-header">
      <div class="card-icon red">ğŸ©¸</div>
      <div>
        <div class="card-title">KanÄ±n Fiziksel Ã–zellikleri</div>
        <div class="card-subtitle">BaÄŸ dokusunun sÄ±vÄ± formu</div>
      </div>
    </div>

    <div class="info-grid">
      <div class="info-item">
        <div class="info-label">Miktar (Erkek)</div>
        <div class="info-value blue">~5 L</div>
      </div>
      <div class="info-item">
        <div class="info-label">Miktar (KadÄ±n)</div>
        <div class="info-value">~4.5 L</div>
      </div>
      <div class="info-item">
        <div class="info-label">YenidoÄŸan</div>
        <div class="info-value">~450 mL</div>
      </div>
      <div class="info-item">
        <div class="info-label">pH</div>
        <div class="info-value gold">7.4</div>
      </div>
      <div class="info-item">
        <div class="info-label">Viskozite (suya gÃ¶re)</div>
        <div class="info-value red">Ã—5</div>
      </div>
      <div class="info-item">
        <div class="info-label">Spesifik aÄŸÄ±rlÄ±k (total kan)</div>
        <div class="info-value">1052â€“1061</div>
      </div>
    </div>

    <div class="highlight info">
      <strong>Renk FarkÄ±</strong>
      Arteryel kan oksihemoglobin iÃ§erdiÄŸinden <strong style="color:#e05c5c">parlak kÄ±rmÄ±zÄ±</strong>; venÃ¶z kan deoksihemoglobin aÄŸÄ±rlÄ±klÄ± olduÄŸundan <strong style="color:#7b7bb0">morumsu-kÄ±rmÄ±zÄ±</strong> gÃ¶rÃ¼nÃ¼r.
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <div class="card-icon gold">ğŸ”¬</div>
      <div>
        <div class="card-title">Hematokrit</div>
        <div class="card-subtitle">KanÄ±n ÅŸekilli elemanlarÄ± / Toplam kan hacmi</div>
      </div>
    </div>

    <div class="info-grid">
      <div class="info-item">
        <div class="info-label">Erkek (normal)</div>
        <div class="info-value blue">%41â€“51</div>
      </div>
      <div class="info-item">
        <div class="info-label">KadÄ±n (normal)</div>
        <div class="info-value">%37â€“47</div>
      </div>
      <div class="info-item">
        <div class="info-label">YenidoÄŸan âš ï¸</div>
        <div class="info-value gold">%60â€“62</div>
      </div>
    </div>

    <div class="highlight warning">
      <strong>Klinik DeÄŸerlendirme</strong>
      Normalin Ã¼zeri â†’ <strong>Polisitemi / Hiperemi</strong> | Normalin altÄ± â†’ <strong>Anemi</strong>. Guyton & Hall'a gÃ¶re aÄŸÄ±r anemide hematokrit 0.10'a kadar dÃ¼ÅŸebilir; polisitemide 0.65'e kadar Ã§Ä±kabilir.
    </div>

    <div class="exam-callout">YenidoÄŸan hematokriti (%60â€“62) KESINLIKLE bilinmeli â€” eriÅŸkin deÄŸerlerinden belirgin yÃ¼ksek olduÄŸu iÃ§in hem mantÄ±k sorusu hem hatÄ±rlatma sorusu olarak Ã§Ä±kabilir.</div>

    <div class="textbook-note">
      <div class="icon">ğŸ“š</div>
      <div class="textbook-note-content">
        <div class="textbook-note-source">Guyton & Hall â€” BÃ¶lÃ¼m 25</div>
        <div class="textbook-note-text">SantrifÃ¼jde tam paketleme mÃ¼mkÃ¼n olmadÄ±ÄŸÄ± iÃ§in eritrositler arasÄ±nda %3â€“4 plazma hapsolur. Bu nedenle gerÃ§ek (true) hematokrit, Ã¶lÃ§Ã¼len deÄŸerden biraz dÃ¼ÅŸÃ¼ktÃ¼r. Erkeklerde Ã¶lÃ§Ã¼len hematokrit yaklaÅŸÄ±k 0.40, kadÄ±nlarda 0.36'dÄ±r.</div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <div class="card-icon green">ğŸ“Š</div>
      <div>
        <div class="card-title">KanÄ±n BileÅŸimi</div>
        <div class="card-subtitle">HÃ¼cresel ve plazma komponentleri</div>
      </div>
    </div>

    <div class="table-wrap">
      <table>
        <tr>
          <th>BileÅŸen</th>
          <th>Oran</th>
          <th>Alt Tipler</th>
        </tr>
        <tr>
          <td class="key">Plazma</td>
          <td class="blue-val">%55</td>
          <td>Su, proteinler (albumin/globÃ¼lin/fibrinojen), iyonlar, gazlar, hormonlarâ€¦</td>
        </tr>
        <tr>
          <td class="key">Eritrositler</td>
          <td class="blue-val">%45</td>
          <td>Hemoglobin taÅŸÄ±yÄ±cÄ±; oksijen transportu</td>
        </tr>
        <tr>
          <td class="key">LÃ¶kositler + Trombositler</td>
          <td class="blue-val">&lt;%1</td>
          <td>Lenfosit, monosit, nÃ¶trofil, eozinofil, bazofil + platelet</td>
        </tr>
      </table>
    </div>
  </div>

</div>

<!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• SECTION 3: PLAZMA â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
<div id="section-plazma" class="section">

  <div class="section-divider">
    <div class="divider-num">05</div>
    <h2>Plazma BileÅŸimi</h2>
    <div class="divider-line"></div>
  </div>

  <div class="card">
    <div class="card-header">
      <div class="card-icon gold">ğŸ§ª</div>
      <div>
        <div class="card-title">PlazmanÄ±n Genel Ã–zellikleri</div>
        <div class="card-subtitle">Saman renginde, berrak sÄ±vÄ±</div>
      </div>
    </div>

    <div class="info-grid">
      <div class="info-item">
        <div class="info-label">Su iÃ§eriÄŸi</div>
        <div class="info-value blue">%91â€“92</div>
      </div>
      <div class="info-item">
        <div class="info-label">Protein iÃ§eriÄŸi</div>
        <div class="info-value gold">~%7</div>
      </div>
      <div class="info-item">
        <div class="info-label">DiÄŸer (elektrolit, hormonâ€¦)</div>
        <div class="info-value">~%2</div>
      </div>
      <div class="info-item">
        <div class="info-label">Total protein (referans)</div>
        <div class="info-value green">7.3 g/dL (6.4â€“8.3)</div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <div class="card-icon blue">ğŸ”¬</div>
      <div>
        <div class="card-title">Plazma Proteinleri</div>
        <div class="card-subtitle">Albumin Â· GlobÃ¼lin Â· Fibrinojen</div>
      </div>
    </div>

    <div class="protein-bar">
      <div class="protein-bar-label">
        <span>Albumin</span>
        <span>4.7 g/dL Â· %55 Â· 69,000 Da</span>
      </div>
      <div class="bar-track"><div class="bar-fill" style="width:55%;background:linear-gradient(90deg,var(--gold),rgba(201,168,76,0.4))"></div></div>
    </div>

    <div class="protein-bar" style="margin-top:12px">
      <div class="protein-bar-label">
        <span>GlobÃ¼lin</span>
        <span>2.3 g/dL Â· %38 Â· 156,000 Da (Î³)</span>
      </div>
      <div class="bar-track"><div class="bar-fill" style="width:38%;background:linear-gradient(90deg,var(--blue),rgba(92,158,224,0.4))"></div></div>
    </div>

    <div class="protein-bar" style="margin-top:12px">
      <div class="protein-bar-label">
        <span>Fibrinojen</span>
        <span>0.3 g/dL Â· %7 Â· 300,000â€“400,000 Da</span>
      </div>
      <div class="bar-track"><div class="bar-fill" style="width:7%;background:linear-gradient(90deg,var(--red),rgba(224,92,92,0.4))"></div></div>
    </div>

    <div class="exam-callout">Albumin/GlobÃ¼lin oranÄ± = 2/1 â€” sÄ±navda sorulur. AÄŸÄ±rlÄ±k sÄ±rasÄ±: Albumin (69k) < GlobÃ¼lin-Î³ (156k) < Fibrinojen (300â€“400k). Elektroforezde en hafif olan albumin en Ã¶nce gider.</div>

    <div class="table-wrap" style="margin-top:16px">
      <table>
        <tr>
          <th>Protein</th>
          <th>Kaynak</th>
          <th>BaÅŸlÄ±ca Fonksiyon</th>
        </tr>
        <tr>
          <td class="key">Albumin</td>
          <td>KaraciÄŸer (17g/gÃ¼n)</td>
          <td>Onkotik basÄ±nÃ§; yaÄŸ asidi, bilirubin, tiroksin, kortizol, ilaÃ§ taÅŸÄ±ma</td>
        </tr>
        <tr>
          <td class="key">Î±-GlobÃ¼lin</td>
          <td>KaraciÄŸer</td>
          <td>Lipit ve yaÄŸda Ã§Ã¶zÃ¼nen vitamin taÅŸÄ±ma</td>
        </tr>
        <tr>
          <td class="key">Î²-GlobÃ¼lin</td>
          <td>KaraciÄŸer</td>
          <td>Transferrin (Fe), Haptoglobin (Hb), Seruloplazmin (Cu)</td>
        </tr>
        <tr>
          <td class="key">Î³-GlobÃ¼lin (Ig)</td>
          <td>B lenfositler</td>
          <td>Antikorlar: IgG, IgA, IgM, IgE, IgD <em>("GAMDE")</em></td>
        </tr>
        <tr>
          <td class="key">Fibrinojen</td>
          <td>KaraciÄŸer (az)</td>
          <td>PÄ±htÄ±laÅŸmanÄ±n anahtarÄ± â†’ fibrine dÃ¶nÃ¼ÅŸÃ¼r</td>
        </tr>
      </table>
    </div>

    <div class="highlight info">
      <strong>Serum â‰  Plazma</strong>
      Serum = Plazma âˆ’ PÄ±htÄ±laÅŸma faktÃ¶rleri. Fibrinojen fibrine dÃ¶nÃ¼ÅŸtÃ¼ÄŸÃ¼nde kanda pÄ±htÄ±laÅŸma gerÃ§ekleÅŸmiÅŸ olur ve geriye kalan sÄ±vÄ± seruma dÃ¶nÃ¼ÅŸÃ¼r. Bu nedenle serumda fibrinojen bulunmaz.
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <div class="card-icon green">â¤ï¸</div>
      <div>
        <div class="card-title">Onkotik BasÄ±nÃ§ (Starling Kuvvetleri)</div>
        <div class="card-subtitle">Kolloid osmotik basÄ±nÃ§ â€” Kapiller sÄ±vÄ± alÄ±ÅŸveriÅŸinin Ã¶zÃ¼</div>
      </div>
    </div>

    <div class="highlight gold">
      <strong>Temel Ä°lke</strong>
      Albumin, 1 g baÅŸÄ±na 18 mL suyu damar iÃ§inde tutar. Plazma albumini 3 g/dL'nin altÄ±na dÃ¼ÅŸerse Ã¶dem oluÅŸur. Albumin kapillerden geÃ§emediÄŸi iÃ§in onkotik basÄ±nÃ§ sabit kalÄ±r.
    </div>

    <div class="starling-box">
      <div class="starling-end">
        <span class="starling-label">Arteriyel UÃ§</span>
        <div class="starling-row"><span>Kapiller basÄ±nÃ§</span><span class="blue-val">30 mmHg</span></div>
        <div class="starling-row"><span>Onkotik basÄ±nÃ§</span><span class="blue-val">25 mmHg</span></div>
        <div class="starling-row"><span style="color:var(--red)"><strong>Net filtrasyon</strong></span><span style="color:var(--red)"><strong>+5 mmHg â†’ dÄ±ÅŸarÄ±</strong></span></div>
      </div>
      <div class="starling-mid">
        <div style="text-align:center">
          <div class="starling-arrow">â‡„</div>
          <div style="font-size:0.65rem;color:var(--text-muted);margin-top:6px;font-family:'JetBrains Mono',monospace">KAPILLer</div>
        </div>
      </div>
      <div class="starling-end">
        <span class="starling-label">VenÃ¶z UÃ§</span>
        <div class="starling-row"><span>Kapiller basÄ±nÃ§</span><span class="blue-val">15 mmHg</span></div>
        <div class="starling-row"><span>Onkotik basÄ±nÃ§</span><span class="blue-val">25 mmHg</span></div>
        <div class="starling-row"><span style="color:var(--green)"><strong>Net emilim</strong></span><span style="color:var(--green)"><strong>âˆ’10 mmHg â†’ iÃ§eri</strong></span></div>
      </div>
    </div>

    <div class="textbook-note">
      <div class="icon">ğŸ“š</div>
      <div class="textbook-note-content">
        <div class="textbook-note-source">NCBI / Oncotic Pressure Review + Starling Equation</div>
        <div class="textbook-note-text">Albumin, plazma onkotik basÄ±ncÄ±nÄ±n yaklaÅŸÄ±k %80'ini oluÅŸturur â€” toplam plazma proteininin yalnÄ±zca %50'si olmasÄ±na karÅŸÄ±n. Bunun nedeni albuminin yÃ¼ksek molekÃ¼l sayÄ±sÄ± ve Gibbs-Donnan etkisinin eklenmesidir. Normal kapiller onkotik basÄ±nÃ§ ortalama 25â€“28 mmHg'dÄ±r.</div>
      </div>
    </div>

    <div class="highlight warning">
      <strong>Ã–dem Nedenleri â€” Starling BozulmasÄ±</strong>
      <ul style="margin-top:8px">
        <li>â†“ Albumin (karaciÄŸer sirozu, nefrotik sendrom, aÃ§lÄ±k, yanÄ±k)</li>
        <li>â†‘ Kapiller hidrostatik basÄ±nÃ§ (kalp yetmezliÄŸi, venÃ¶z tÄ±kanma)</li>
        <li>â†‘ Kapiller permeabilite (inflamasyon, alerji)</li>
        <li>Lenfatik yetersizlik (lenfÃ¶dem)</li>
      </ul>
    </div>

    <div class="card" style="margin-top:12px;border-color:rgba(160,126,224,0.2)">
      <div style="font-size:0.8rem;color:var(--purple);font-family:'JetBrains Mono',monospace;margin-bottom:8px">PLASMAFEREZÄ°S</div>
      <p>Tedavi amaÃ§lÄ± plazma deÄŸiÅŸimidir. KanÄ±n plazma proteinleri ayrÄ±lÄ±r ve yeniden verilir. OtoimmÃ¼n hastalÄ±klarda patolojik antikorlarÄ±n kandan uzaklaÅŸtÄ±rÄ±lmasÄ± iÃ§in kullanÄ±lÄ±r ve geÃ§ici Ã§Ã¶zÃ¼m saÄŸlar.</p>
    </div>
  </div>

  <div class="section-divider">
    <div class="divider-num">06</div>
    <h2>Plazma Protein Seviyeleri: DeÄŸiÅŸimler</h2>
    <div class="divider-line"></div>
  </div>

  <div class="card">
    <div class="card-header">
      <div class="card-icon red">ğŸ“ˆğŸ“‰</div>
      <div>
        <div class="card-title">DÃ¼zey DeÄŸiÅŸimlerinin Klinik Ã–nemi</div>
      </div>
    </div>

    <div class="highlight success">
      <strong>Protein DÃ¼zeyinin ARTTIÄI Durumlar</strong>
      GerÃ§ek bir artÄ±ÅŸ deÄŸil, konsantrasyon artÄ±ÅŸÄ±dÄ±r (sÄ±vÄ± kaybÄ± nedeniyle):
      <ul style="margin-top:6px">
        <li>YaygÄ±n yanÄ±klar â€” plazma sÄ±vÄ±sÄ± dokulara sÄ±zar</li>
        <li>Dehidratasyon â€” su kaybÄ± nedeniyle konsantrasyon artar</li>
      </ul>
    </div>

    <div class="highlight warning">
      <strong>Protein DÃ¼zeyinin AZALDIÄI Durumlar</strong>
      <ul style="margin-top:6px">
        <li>Hemoraji (kanama)</li>
        <li>KaraciÄŸer sirozu (sentez yetersizliÄŸi)</li>
        <li>Nefrit ve nefrotik sendrom (idrarla protein kaybÄ±)</li>
        <li>Uzun sÃ¼reli aÃ§lÄ±k</li>
        <li>BaÄŸÄ±rsakta emilim bozukluÄŸu</li>
      </ul>
    </div>
  </div>

</div>

<!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• SECTION 4: HEMOREOLOJÄ° â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
<div id="section-hemoreoloji" class="section">

  <div class="section-divider">
    <div class="divider-num">07</div>
    <h2>Hemoreoloji & Kan AkÄ±ÅŸÄ±</h2>
    <div class="divider-line"></div>
  </div>

  <div class="card">
    <div class="card-header">
      <div class="card-icon blue">ğŸŒ€</div>
      <div>
        <div class="card-title">Viskozite</div>
        <div class="card-subtitle">KanÄ±n akmaya karÅŸÄ± gÃ¶sterdiÄŸi direnÃ§</div>
      </div>
    </div>

    <div class="info-grid">
      <div class="info-item">
        <div class="info-label">Normal kan (suya gÃ¶re)</div>
        <div class="info-value red">Ã—3 (normal)</div>
      </div>
      <div class="info-item">
        <div class="info-label">Slayttaki deÄŸer</div>
        <div class="info-value">Ã—5 (Ã¶lÃ§Ã¼len)</div>
      </div>
      <div class="info-item">
        <div class="info-label">Plazma (suya gÃ¶re)</div>
        <div class="info-value">Ã—1.5â€“2</div>
      </div>
    </div>

    <div class="highlight info">
      <strong>Viskoziteyi Belirleyen Temel FaktÃ¶r: ERÄ°TROSÄ°TLER</strong>
      Hematokrit arttÄ±kÃ§a eritrositler arasÄ± etkileÅŸim artar ve viskozite Ã¼stel olarak yÃ¼kselir. AÅŸÄ±rÄ± hematokrit kÃ¼Ã§Ã¼k damarlarda akÄ±mÄ± gÃ¼Ã§leÅŸtirir.
    </div>

    <div class="section-divider" style="margin-top:20px">
      <h2 style="font-size:1.1rem">Poiseuille YasasÄ±</h2>
      <div class="divider-line"></div>
    </div>

    <div style="background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:16px;text-align:center;margin:12px 0;font-family:'JetBrains Mono',monospace;font-size:0.95rem;color:var(--gold)">
      F = Î”P Â· Ï€râ´ / (8Î·L) &nbsp;&nbsp;â†’&nbsp;&nbsp; R = 8Î·L / Ï€râ´
    </div>

    <div class="highlight gold">
      <strong>âš ï¸ En Kritik FaktÃ¶r: DAMAR Ã‡API (râ´)</strong>
      DirenÃ§, yarÄ±Ã§apÄ±n 4. kuvvetiyle ters orantÄ±lÄ±dÄ±r. YarÄ±Ã§ap 2 katÄ±na Ã§Ä±karsa direnÃ§ 16 kat azalÄ±r! Bu nedenle kan basÄ±ncÄ±nÄ±n dÃ¼zenlenmesinde damar Ã§apÄ± her zaman Ã¶n plana Ã§Ä±kar. HocamÄ±z bu formÃ¼lÃ¼ ezberlememizi istedi.
    </div>

    <div class="table-wrap">
      <table>
        <tr>
          <th>DeÄŸiÅŸken</th>
          <th>Etkisi</th>
          <th>DirenÃ§ ile Ä°liÅŸki</th>
        </tr>
        <tr>
          <td class="key">Damar yarÄ±Ã§apÄ± (r)</td>
          <td>râ´'Ã¼ etkiler</td>
          <td class="red-val">TERS orantÄ±lÄ± (en Ã¶nemli)</td>
        </tr>
        <tr>
          <td class="key">Viskozite (Î·)</td>
          <td>Kan kÄ±vamÄ±</td>
          <td class="red-val">DoÄŸru orantÄ±lÄ±</td>
        </tr>
        <tr>
          <td class="key">Damar uzunluÄŸu (L)</td>
          <td>Ã‡oÄŸunlukla sabit</td>
          <td class="red-val">DoÄŸru orantÄ±lÄ±</td>
        </tr>
        <tr>
          <td class="key">BasÄ±nÃ§ farkÄ± (Î”P)</td>
          <td>AkÄ±mÄ± saÄŸlar</td>
          <td class="green-val">DoÄŸru orantÄ±lÄ± (akÄ±mla)</td>
        </tr>
      </table>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <div class="card-icon purple">ğŸ“‰</div>
      <div>
        <div class="card-title">Eritrosit Sedimentasyon HÄ±zÄ± (ESH)</div>
        <div class="card-subtitle">ESR â€” Westergren YÃ¶ntemi</div>
      </div>
    </div>

    <div class="table-wrap">
      <table>
        <tr>
          <th>YaÅŸ / Cinsiyet</th>
          <th>Normal ESH</th>
        </tr>
        <tr>
          <td>0â€“50 yaÅŸ, Erkek</td>
          <td class="blue-val">&lt;15 mm/h</td>
        </tr>
        <tr>
          <td>0â€“50 yaÅŸ, KadÄ±n</td>
          <td class="blue-val">&lt;20 mm/h</td>
        </tr>
        <tr>
          <td>51â€“85 yaÅŸ, Erkek</td>
          <td class="blue-val">&lt;20 mm/h</td>
        </tr>
        <tr>
          <td>51â€“85 yaÅŸ, KadÄ±n</td>
          <td class="blue-val">&lt;30 mm/h</td>
        </tr>
        <tr>
          <td>&gt;85 yaÅŸ, Erkek</td>
          <td class="blue-val">&lt;30 mm/h</td>
        </tr>
        <tr>
          <td>&gt;85 yaÅŸ, KadÄ±n</td>
          <td class="blue-val">&lt;42 mm/h</td>
        </tr>
      </table>
    </div>

    <div class="accordion">
      <div class="accordion-header" onclick="toggleAcc(this)">
        <span>ESH'Ä± etkileyen faktÃ¶rler</span>
        <span class="chevron">â–¾</span>
      </div>
      <div class="accordion-body">
        <p><strong>Eritrositlere baÄŸlÄ±:</strong></p>
        <ul>
          <li>Negatif membran potansiyeli â†’ birbirini iterler â†’ yavaÅŸ Ã§Ã¶kerler</li>
          <li>Eritrosit sayÄ±sÄ± â†‘ â†’ itme â†‘ â†’ Ã§Ã¶kÃ¼ÅŸ azalÄ±r; sayÄ± â†“ â†’ Ã§Ã¶kÃ¼ÅŸ artar</li>
          <li>BÃ¼yÃ¼k eritrositler daha hÄ±zlÄ±, kÃ¼Ã§Ã¼kler daha yavaÅŸ Ã§Ã¶ker</li>
          <li>Rulo formasyonu â†’ sedimentasyonu artÄ±rÄ±r</li>
        </ul>
        <p style="margin-top:12px"><strong>Plazmaya baÄŸlÄ±:</strong></p>
        <ul>
          <li><strong style="color:var(--red)">Fibrinojen ve globÃ¼lin</strong> â†’ rulo oluÅŸumunu artÄ±rÄ±r â†’ ESH â†‘</li>
          <li><strong style="color:var(--green)">Albumin</strong> â†’ ESH'Ä± azaltÄ±r (rulo oluÅŸumunu engeller)</li>
        </ul>
        <div class="highlight gold">
          <strong>Klinik Anlam</strong>
          ESH nonspesifik bir inflamasyon gÃ¶stergesidir. Ä°nflamasyonda akut faz reaktanlarÄ± (fibrinojen) artar â†’ ESH yÃ¼kselir. Anemi (eritrosit â†“) da ESH'Ä± yÃ¼kseltir.
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-header" onclick="toggleAcc(this)">
        <span>Efektif viskozite nelere baÄŸlÄ±dÄ±r?</span>
        <span class="chevron">â–¾</span>
      </div>
      <div class="accordion-body">
        <ul>
          <li><strong>Fibrinojen konsantrasyonu</strong></li>
          <li><strong>Hematokrit</strong></li>
          <li><strong>Damar Ã§apÄ±</strong></li>
          <li><strong>Lineer velosite (Ã§izgisel hÄ±z)</strong></li>
          <li><strong>SÄ±caklÄ±k</strong></li>
        </ul>
        <p style="margin-top:10px">Kapillerlerden geÃ§en eritrositler tek sÄ±ra halinde geÃ§erek (tek sÄ±ra akÄ±m) viskozite direncini azaltÄ±r. Kan akÄ±mÄ± yavaÅŸladÄ±kÃ§a rulo formasyonu artarak viskozite yÃ¼kselir.</p>
      </div>
    </div>
  </div>

</div>

<!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• SECTION 5: QUIZ â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
<div id="section-quiz" class="section">

  <div class="section-divider">
    <div class="divider-num">08</div>
    <h2>Soru BankasÄ±</h2>
    <div class="divider-line"></div>
  </div>

  <div class="highlight info" style="margin-bottom:20px">
    <strong>NasÄ±l KullanÄ±lÄ±r?</strong>
    SorularÄ± okuyun, bir ÅŸÄ±kkÄ± seÃ§in. Cevap ve aÃ§Ä±klama hemen gÃ¶rÃ¼nÃ¼r. GeÃ§miÅŸ yÄ±l sÄ±navlarÄ±ndan ve textbook sorularÄ±ndan derlenmiÅŸtir.
  </div>

  <!-- Q1 -->
  <div class="quiz-card" id="q1">
    <div class="quiz-q">
      <span class="qnum">SORU 37 Â· GeÃ§miÅŸ YÄ±l SÄ±navÄ±</span>
      Vitamin B12'yi taÅŸÄ±yan plazma proteini nedir?
    </div>
    <div class="quiz-options">
      <div class="quiz-opt" onclick="answer(this,'q1','wrong','A')"><span class="opt-letter">A</span> Transferrin</div>
      <div class="quiz-opt" onclick="answer(this,'q1','wrong','B')"><span class="opt-letter">B</span> Haptoglobulin</div>
      <div class="quiz-opt" onclick="answer(this,'q1','wrong','C')"><span class="opt-letter">C</span> 2,3 Bifosfogliserat</div>
      <div class="quiz-opt" onclick="answer(this,'q1','wrong','D')"><span class="opt-letter">D</span> Spesifik G Protein</div>
      <div class="quiz-opt" onclick="answer(this,'q1','correct','E')"><span class="opt-letter">E</span> Transkobalamin</div>
    </div>
    <div class="quiz-explain" id="explain-q1">
      <strong style="color:var(--green)">âœ“ DOÄRU: E â€” Transkobalamin</strong><br><br>
      Plazma transport proteinleri: <em>Transferrin</em> = FeÂ³âº taÅŸÄ±r | <em>Haptoglobulin</em> = Hb baÄŸlar | <em>Hemopeksin</em> = Hem taÅŸÄ±r | <em>Seruloplazmin</em> = Cu baÄŸlar, FeÂ²âºâ†’FeÂ³âº | <em>Transkobalamin</em> = Vit-Bâ‚â‚‚ | <em>Spesifik G Protein</em> = Vit-D | <em>Prealbumin</em> = Tiroksin, Vit-A. Bu tabloyu bilmek kritik!
    </div>
  </div>

  <!-- Q2 -->
  <div class="quiz-card" id="q2">
    <div class="quiz-q">
      <span class="qnum">SORU 72 Â· GeÃ§miÅŸ YÄ±l SÄ±navÄ±</span>
      Dehidratasyonla ilgili hangisi doÄŸrudur?
    </div>
    <div class="quiz-options">
      <div class="quiz-opt" onclick="answer(this,'q2','wrong','A')"><span class="opt-letter">A</span> Hafif dÃ¼zeyde su kaybÄ± %10'dur</div>
      <div class="quiz-opt" onclick="answer(this,'q2','wrong','B')"><span class="opt-letter">B</span> Ä°zotonik dehidratasyonun nedeni diÃ¼retik kullanÄ±mÄ±dÄ±r</div>
      <div class="quiz-opt" onclick="answer(this,'q2','wrong','C')"><span class="opt-letter">C</span> Orta dÃ¼zeyde dehidratasyon acil hastane tedavisi gerektirir</div>
      <div class="quiz-opt" onclick="answer(this,'q2','wrong','D')"><span class="opt-letter">D</span> Hipotonik dehidratasyon kusma ve ishalde gÃ¶rÃ¼lÃ¼r</div>
      <div class="quiz-opt" onclick="answer(this,'q2','correct','E')"><span class="opt-letter">E</span> Hipertonik dehidratasyon yÃ¼ksek ateÅŸte gÃ¶rÃ¼lÃ¼r</div>
    </div>
    <div class="quiz-explain" id="explain-q2">
      <strong style="color:var(--green)">âœ“ DOÄRU: E â€” Hipertonik dehidratasyon yÃ¼ksek ateÅŸte gÃ¶rÃ¼lÃ¼r</strong><br><br>
      <strong>YanlÄ±ÅŸ ÅÄ±klar:</strong> A yanlÄ±ÅŸ â€” hafif &lt;%5 kayÄ±p, %10 orta dÃ¼zeyde. B yanlÄ±ÅŸ â€” izotonik = ishal/kusma; diÃ¼retik â†’ hipotonik. C yanlÄ±ÅŸ â€” orta dÃ¼zey acil tedavi gerektirir ama <em>hastane</em> tedavisi ciddi (&gt;%15) iÃ§in zorunlu. D yanlÄ±ÅŸ â€” hipotonik = diÃ¼retik; kusma/ishal â†’ izotonik.
    </div>
  </div>

  <!-- Q3 -->
  <div class="quiz-card" id="q3">
    <div class="quiz-q">
      <span class="qnum">SORU 4 Â· GeÃ§miÅŸ YÄ±l SÄ±navÄ±</span>
      Plazma iÃ§eriÄŸi ile ilgili hangisi yanlÄ±ÅŸtÄ±r?
    </div>
    <div class="quiz-options">
      <div class="quiz-opt" onclick="answer(this,'q3','wrong','A')"><span class="opt-letter">A</span> PlazmanÄ±n yaklaÅŸÄ±k %92'si sudur</div>
      <div class="quiz-opt" onclick="answer(this,'q3','wrong','B')"><span class="opt-letter">B</span> Plazmada en fazla bulunan katÄ± madde proteindir</div>
      <div class="quiz-opt" onclick="answer(this,'q3','wrong','C')"><span class="opt-letter">C</span> Albumin/globulin oranÄ± 2/1'dir</div>
      <div class="quiz-opt" onclick="answer(this,'q3','wrong','D')"><span class="opt-letter">D</span> Plazma proteinlerinin ayrÄ±lmasÄ±nda elektroforez yÃ¶ntemi kullanÄ±lÄ±r</div>
      <div class="quiz-opt" onclick="answer(this,'q3','correct','E')"><span class="opt-letter">E</span> Plazma proteinlerinden en aÄŸÄ±r olanÄ± albumindir</div>
    </div>
    <div class="quiz-explain" id="explain-q3">
      <strong style="color:var(--green)">âœ“ DOÄRU YANIT: E â€” Plazma proteinlerinden en aÄŸÄ±r olanÄ± fibrinojendir (300â€“400k Da)</strong><br><br>
      Albumin en hafif (69k Da), ardÄ±ndan globÃ¼lin (Î²â‚: 90k, Î³: 156k), en aÄŸÄ±r fibrinojen (300â€“400k Da). Soru "en aÄŸÄ±r" yerine albumini Ã¶ne Ã§Ä±karÄ±yor ve bu yanlÄ±ÅŸ â€” tuzak bir seÃ§enek!
    </div>
  </div>

  <!-- Q4 - Conceptual -->
  <div class="quiz-card" id="q4">
    <div class="quiz-q">
      <span class="qnum">KAVRAMSAL SORU Â· Textbook</span>
      Bir hastanÄ±n albumin dÃ¼zeyi 2 g/dL'ye dÃ¼ÅŸmÃ¼ÅŸtÃ¼r. Beklenen klinik bulgu nedir?
    </div>
    <div class="quiz-options">
      <div class="quiz-opt" onclick="answer(this,'q4','wrong','A')"><span class="opt-letter">A</span> Eritrosit sedimentasyon hÄ±zÄ± azalÄ±r</div>
      <div class="quiz-opt" onclick="answer(this,'q4','correct','B')"><span class="opt-letter">B</span> Periferik Ã¶dem geliÅŸir</div>
      <div class="quiz-opt" onclick="answer(this,'q4','wrong','C')"><span class="opt-letter">C</span> Kan pÄ±htÄ±laÅŸmasÄ± bozulur</div>
      <div class="quiz-opt" onclick="answer(this,'q4','wrong','D')"><span class="opt-letter">D</span> Viskozite artar</div>
      <div class="quiz-opt" onclick="answer(this,'q4','wrong','E')"><span class="opt-letter">E</span> Hematokrit yÃ¼kselir</div>
    </div>
    <div class="quiz-explain" id="explain-q4">
      <strong style="color:var(--green)">âœ“ DOÄRU: B â€” Periferik Ã¶dem</strong><br><br>
      Albumin 3 g/dL'nin altÄ±na dÃ¼ÅŸtÃ¼ÄŸÃ¼nde onkotik basÄ±nÃ§ yetersiz kalÄ±r â†’ kapillerden sÄ±vÄ± sÄ±zmaya devam eder ancak venÃ¶z uÃ§ta geri Ã§ekilemez â†’ interstisyel sÄ±vÄ± birikir â†’ <strong>Ã¶dem</strong>. Bu; karaciÄŸer sirozu, nefrotik sendrom ve kwashiorkorda gÃ¶rÃ¼len temel mekanizmadÄ±r. ESH albumin azalÄ±nca artar (azalmaz). PÄ±htÄ±laÅŸma fibrinojen ile ilgili, albuminle deÄŸil.
    </div>
  </div>

  <!-- Q5 -->
  <div class="quiz-card" id="q5">
    <div class="quiz-q">
      <span class="qnum">KLÄ°NÄ°K UYGULAMA SORUSU</span>
      Bir hastaya hipotonik Ã§Ã¶zelti (%0.2 NaCl) IV verildiÄŸinde eritrositlerde ne olur?
    </div>
    <div class="quiz-options">
      <div class="quiz-opt" onclick="answer(this,'q5','wrong','A')"><span class="opt-letter">A</span> BÃ¼zÃ¼ÅŸÃ¼r (krenasyon)</div>
      <div class="quiz-opt" onclick="answer(this,'q5','correct','B')"><span class="opt-letter">B</span> ÅiÅŸer, hemoliz riski oluÅŸur</div>
      <div class="quiz-opt" onclick="answer(this,'q5','wrong','C')"><span class="opt-letter">C</span> DeÄŸiÅŸmez</div>
      <div class="quiz-opt" onclick="answer(this,'q5','wrong','D')"><span class="opt-letter">D</span> Sedimentasyon hÄ±zÄ± azalÄ±r</div>
      <div class="quiz-opt" onclick="answer(this,'q5','wrong','E')"><span class="opt-letter">E</span> Hematokrit dÃ¼ÅŸer</div>
    </div>
    <div class="quiz-explain" id="explain-q5">
      <strong style="color:var(--green)">âœ“ DOÄRU: B â€” ÅiÅŸer, hemoliz riski</strong><br><br>
      Hipotonik Ã§Ã¶zelti hÃ¼cre dÄ±ÅŸÄ±nda daha az osmotik partikÃ¼l demektir â†’ su osmozla hÃ¼cre iÃ§ine girer â†’ eritrositler ÅŸiÅŸer â†’ dayanamayan eritrositler patlar = <strong>hemoliz</strong>. Ä°Ã§lerindeki hemoglobin serbestleÅŸir â†’ kan kÄ±rmÄ±zÄ±ya dÃ¶ner (kendi rengine dÃ¶ndÃ¼ÄŸÃ¼ iÃ§in "hemoliz" adÄ± verilmiÅŸtir). A seÃ§eneÄŸi hipertonik iÃ§in geÃ§erlidir.
    </div>
  </div>

</div><!-- end quiz section -->

</div><!-- end content -->

<script>
function showSection(name, btn) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('section-' + name).classList.add('active');
  btn.classList.add('active');
  window.scrollTo({top: 60, behavior: 'smooth'});
}

function toggleAcc(header) {
  const body = header.nextElementSibling;
  const chevron = header.querySelector('.chevron');
  const isOpen = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  header.classList.toggle('open', !isOpen);
  chevron.classList.toggle('open', !isOpen);
}

function answer(el, qid, result, letter) {
  const card = document.getElementById(qid);
  const opts = card.querySelectorAll('.quiz-opt');
  opts.forEach(o => {
    o.classList.add('disabled');
    const l = o.querySelector('.opt-letter').textContent;
    if (l === letter) o.classList.add(result);
    if (result === 'wrong' && o !== el) {
      // find correct one
    }
  });
  // mark all correct ones green
  const explain = document.getElementById('explain-' + qid);
  explain.classList.add('show');

  // find and mark correct if user wrong
  if (result === 'wrong') {
    opts.forEach(o => {
      // correct is always last in our markup for wrong answers
    });
  }
}

// Animate bars on load
window.addEventListener('load', () => {
  const bars = document.querySelectorAll('.bar-fill');
  bars.forEach(b => {
    const w = b.style.width;
    b.style.width = '0';
    setTimeout(() => { b.style.width = w; }, 300);
  });
});
</script>
</body>
</html>
