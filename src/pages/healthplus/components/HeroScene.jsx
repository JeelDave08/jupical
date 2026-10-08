import { useEffect, useState } from "react";

export default function HeroScene() {
  const [floors, setFloors] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setFloors(5);
      return undefined;
    }
    let visible = 0;
    const timer = window.setInterval(() => {
      visible = visible >= 5 ? 0 : visible + 1;
      setFloors(visible);
    }, 2200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="hp-scene-wrap">
      <svg className="hp-scene" viewBox="0 0 520 420" role="img" aria-label="An animated healthcare scene with a hospital, care team and ambulance">
        <defs>
          <linearGradient id="hp-sky" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#dbeafe" /><stop offset="1" stopColor="#f4f9ff" /></linearGradient>
          <linearGradient id="hp-building" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#fff" /><stop offset="1" stopColor="#e8f1ff" /></linearGradient>
          <linearGradient id="hp-coat" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff" /><stop offset="1" stopColor="#dbeafe" /></linearGradient>
          <filter id="hp-shadow" x="-30%" y="-30%" width="160%" height="180%"><feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#4f83cc" floodOpacity=".18" /></filter>
        </defs>
        <rect x="1" y="1" width="518" height="418" rx="22" fill="url(#hp-sky)" />
        <circle cx="445" cy="72" r="37" fill="#fff" opacity=".65" />
        <circle cx="445" cy="72" r="24" fill="#bfdbfe" opacity=".4" />
        <g className="hp-cloud hp-cloud-one" fill="#fff" opacity=".8"><ellipse cx="95" cy="77" rx="38" ry="14" /><circle cx="78" cy="68" r="14" /><circle cx="101" cy="63" r="19" /></g>
        <g className="hp-cloud hp-cloud-two" fill="#fff" opacity=".65"><ellipse cx="350" cy="104" rx="31" ry="11" /><circle cx="338" cy="97" r="11" /><circle cx="357" cy="92" r="14" /></g>
        <path d="M0 337 Q118 313 226 335T520 326V375H0Z" fill="#d7e7fb" opacity=".8" />
        <rect x="0" y="370" width="520" height="50" fill="#93b4e6" /><rect x="0" y="370" width="520" height="5" fill="#1d4ed8" />

        <g filter="url(#hp-shadow)">
          <rect x="290" y="96" width="156" height="274" rx="10" fill="url(#hp-building)" stroke="#7da9e6" strokeWidth="3" />
          <path d="M280 100 368 53l88 47" fill="#dbeafe" stroke="#7da9e6" strokeWidth="3" strokeLinejoin="round" />
          {Array.from({ length: 5 }, (_, index) => {
            const y = 116 + index * 48;
            const on = index < floors;
            return <g key={index} className={`hp-building-floor ${on ? "hp-building-floor-on" : ""}`}>
              <rect x="303" y={y} width="130" height="39" rx="4" fill="#fff" stroke="#bfdbfe" strokeWidth="1.5" />
              {[0, 1, 2, 3].map((window) => <rect key={window} x={312 + window * 29} y={y + 10} width="17" height="18" rx="3" fill="#7dd3fc" />)}
            </g>;
          })}
          <g className={floors >= 5 ? "hp-cross hp-cross-visible" : "hp-cross"} transform="translate(347 58)">
            <rect x="0" y="0" width="42" height="28" rx="6" fill="#1d4ed8" /><path d="M18 5h7v7h7v7h-7v7h-7v-7h-7v-7h7z" fill="#fff" />
          </g>
        </g>

        <g className="hp-doctor" transform="translate(85 194)" filter="url(#hp-shadow)">
          <path d="M18 63q29-22 58 0l11 86H6z" fill="url(#hp-coat)" stroke="#b8d0ef" strokeWidth="2" />
          <path d="M38 59h21v20H38z" fill="#f2b99e" />
          <circle cx="49" cy="34" r="25" fill="#f4c7ae" />
          <path d="M24 34q0-34 28-32 27 2 25 31l-7-10-17-8-19 9z" fill="#263b61" />
          <path d="M43 38h2m12 0h2" stroke="#203453" strokeWidth="3" strokeLinecap="round" />
          <path d="M43 49q7 6 14 0" fill="none" stroke="#bd6f68" strokeWidth="2" strokeLinecap="round" />
          <path d="m37 62 12 16 12-16" fill="#1d4ed8" />
          <path d="M47 83q-15 28 2 39 17-11 1-39" fill="none" stroke="#1d4ed8" strokeWidth="3" />
          <circle cx="50" cy="122" r="5" fill="#38bdf8" stroke="#1d4ed8" strokeWidth="2" />
          <g className="hp-doctor-arm"><path d="M12 78 0 105l25 14" fill="none" stroke="#f4c7ae" strokeWidth="9" strokeLinecap="round" /><rect x="-1" y="91" width="18" height="23" rx="3" fill="#fff" stroke="#1d4ed8" /><path d="M3 98h10m-10 5h8" stroke="#38bdf8" strokeWidth="2" /></g>
        </g>

        <g className="hp-nurse" transform="translate(205 220)">
          <ellipse cx="25" cy="129" rx="23" ry="5" fill="#6687b9" opacity=".25" />
          <path d="M8 64q17-17 34 0l7 66H2z" fill="#38bdf8" stroke="#1d4ed8" strokeWidth="2" />
          <circle cx="25" cy="36" r="19" fill="#f0bea5" />
          <path d="M6 35q1-26 21-26 21 0 18 27l-6-10-24-2z" fill="#263b61" />
          <path d="M8 22q18-17 36 0l-3 7H10z" fill="#fff" stroke="#8db7ea" strokeWidth="2" />
          <path d="M20 36h1m9 0h1" stroke="#203453" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M20 45q5 4 10 0" fill="none" stroke="#bd6f68" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M9 76 0 102m40-25 11 25" stroke="#f0bea5" strokeWidth="7" strokeLinecap="round" />
          <path d="M13 130v16m23-16v16" stroke="#314d77" strokeWidth="8" strokeLinecap="round" />
        </g>

        <g className="hp-ambulance" filter="url(#hp-shadow)">
          <rect x="-105" y="329" width="88" height="35" rx="8" fill="#fff" stroke="#7da9e6" strokeWidth="2" />
          <path d="M-33 340h16l10 12v12h-26z" fill="#dbeafe" stroke="#7da9e6" strokeWidth="2" />
          <rect x="-102" y="341" width="60" height="7" rx="3" fill="#38bdf8" />
          <path d="M-79 333h12v5h-12z" fill="#ef4444" className="hp-ambulance-light" />
          <path d="M-73 352h4v4h4v4h-4v4h-4v-4h-4v-4h4z" fill="#ef4444" />
          <circle cx="-83" cy="366" r="6" fill="#203453" /><circle cx="-28" cy="366" r="6" fill="#203453" />
        </g>

        <polyline className="hp-ecg" points="22,295 84,295 96,282 107,310 121,269 137,302 150,295 216,295" fill="none" stroke="#1d4ed8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <g className="hp-badge hp-badge-a"><path d="M60 135 78 125l18 10v21l-18 10-18-10z" fill="#fff" stroke="#bfdbfe" strokeWidth="2" /><path d="M74 140h8v7h7v8h-7v7h-8v-7h-7v-8h7z" fill="#1d4ed8" /></g>
        <g className="hp-badge hp-badge-b"><path d="M454 197 472 187l18 10v21l-18 10-18-10z" fill="#fff" stroke="#bfdbfe" strokeWidth="2" /><path d="M463 209q9-11 17 0-8 11-17 0" fill="none" stroke="#1d4ed8" strokeWidth="2.5" /></g>
        <g className="hp-badge hp-badge-c"><path d="M251 129 267 120l16 9v19l-16 9-16-9z" fill="#dbeafe" stroke="#93c5fd" strokeWidth="2" /><path d="M263 133v11m-5-5h10" stroke="#1d4ed8" strokeWidth="3" strokeLinecap="round" /></g>
        <g className="hp-badge hp-badge-d"><path d="M466 290 480 282l14 8v16l-14 8-14-8z" fill="#fff" stroke="#bfdbfe" strokeWidth="2" /><path d="m474 298 5 5 9-11" fill="none" stroke="#1d4ed8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></g>
      </svg>
    </div>
  );
}
