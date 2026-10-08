import { MODULES } from "../data/modules";

export default function ModuleTower({ active, label }) {
  return (
    <aside className="hp-tower" aria-label="Health center module progress">
      <svg className="hp-tower-svg" viewBox="0 0 160 360" role="img" aria-label={`${active} of ${MODULES.length} modules completed`}>
        <path d="M80 18v18M68 36h24M80 38 67 52M80 38l13 14" className="hp-tower-roof" />
        {MODULES.map((module, index) => {
          const y = 348 - (index + 1) * 24;
          const isOn = index < active;
          return (
            <g className={`hp-tower-floor ${isOn ? "hp-tower-floor-on" : ""}`} key={module.n}>
              <rect x="24" y={y} width="112" height="22" rx="6" />
              <text x="80" y={y + 15} textAnchor="middle">{module.n}</text>
            </g>
          );
        })}
        <path className="hp-tower-base" d="M14 348h132" />
      </svg>
      <p className="hp-tower-label">{label}</p>
    </aside>
  );
}
