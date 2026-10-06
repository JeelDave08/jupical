import "./HeroVisual.css";

const W = 1448;
const H = 1086;
const px = (x) => `${(x / W) * 100}%`;
const py = (y) => `${(y / H) * 100}%`;

const ISLANDS = [
  ["education", 520, 112, 905, 330],
  ["manufacturing", 90, 225, 465, 495],
  ["construction", 920, 235, 1320, 535],
  ["inventory", 1005, 585, 1390, 850],
  ["integration", 90, 640, 465, 890],
  ["finance", 500, 755, 910, 1040],
];

const LINES = [
  [715, 300, 715, 490],
  [375, 425, 528, 512],
  [1012, 465, 910, 518],
  [410, 735, 560, 650],
  [1037, 695, 870, 650],
  [718, 745, 718, 683],
];

const ICONS = {
  education: (<><path d="M22 10 12 5 2 10l10 5 10-5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></>),
  manufacturing: <path d="M2 20V8l6 4V8l6 4V4h4v16z" />,
  construction: (<><path d="M2 18h20v2H2z" /><path d="M4 18a8 8 0 0 1 16 0" /><path d="M10 10V5h4v5" /></>),
  inventory: (<><path d="M21 8 12 3 3 8v8l9 5 9-5z" /><path d="M3 8l9 5 9-5M12 13v8" /></>),
  integration: (<><path d="M10 14a4 4 0 0 0 5.6 0l3-3a4 4 0 0 0-5.6-5.6l-1 1" /><path d="M14 10a4 4 0 0 0-5.6 0l-3 3a4 4 0 0 0 5.6 5.6l1-1" /></>),
  finance: <path d="M12 2v20M17 6.5C16 5 14.2 4.5 12 4.5c-3 0-5 1.3-5 3.3 0 4.2 10 2 10 6.4 0 2-2 3.3-5 3.3-2.4 0-4.4-.7-5.5-2.3" />,
};

const CHIPS = [
  ["education", 738, 82, "Education"],
  ["manufacturing", 295, 197, "Manufacturing"],
  ["construction", 1210, 207, "Construction"],
  ["inventory", 1285, 568, "Inventory"],
  ["integration", 245, 611, "Integration"],
];

const FACES = [
  ["front", "Certified", <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M9 12l2 2 4-4" /></>],
  ["right", "Expert", <path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6l-5.4 2.9 1.2-6L3.3 9.3l6.1-.7z" />],
  ["back", "Manufacturing", <path d="M2 20V8l6 4V8l6 4V4h4v16z" />],
  ["left", "ERP", <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1" /></>],
];

export default function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="hv-stage">
        <div className="hv-base" style={{ left: px(715), top: py(595) }} />

        <svg className="hv-lines" viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
          {LINES.map(([x1, y1, x2, y2], i) => (
            <g key={i}>
              <line className="hv-dots" x1={x1} y1={y1} x2={x2} y2={y2} />
              <circle className="hv-end" cx={x2} cy={y2} r="7" />
            </g>
          ))}
        </svg>

        {ISLANDS.map(([name, l, t, r], i) => (
          <img
            key={name}
            className="hv-island"
            src={`/hero/island-${name}.png`}
            alt={name}
            style={{ left: px(l), top: py(t), width: `${((r - l) / W) * 100}%`, "--d": `${i * 0.7}s` }}
          />
        ))}

        <div className="hv-cube-wrap" style={{ left: px(715), top: py(480) }}>
          <div className="hv-cube">
            {FACES.map(([cls, word, icon]) => (
              <div className={`hv-face hv-${cls}`} key={cls}>
                <span className="hv-fic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                </span>
                <span className="hv-word">{word}</span>
              </div>
            ))}
            <div className="hv-face hv-top"><img src="/hero/logo.png" alt="Jupical" /></div>
            <div className="hv-face hv-bottom" />
          </div>
        </div>

        {CHIPS.map(([key, x, y, label]) => (
          <div className="hv-chip" key={key} style={{ left: px(x), top: py(y) }}>
            <span className="hv-ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                {ICONS[key]}
              </svg>
            </span>
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
