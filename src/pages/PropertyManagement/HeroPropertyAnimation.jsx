import './HeroPropertyAnimation.css';

export default function HeroPropertyAnimation() {
  return (
    <div className="hpa-scene">
      <svg className="hpa-svg" viewBox="0 0 640 560" role="img" aria-label="Animated isometric property scene with a house, tower, signs, key and dashboard cards, changing from day to dusk">
      <defs>
      <linearGradient id="hp2-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#d3e5ff"/><stop offset=".6" stopColor="#eaf2ff"/><stop offset="1" stopColor="#cbe0ff"/></linearGradient>
      <radialGradient id="hp2-glow" cx=".5" cy=".5" r=".5"><stop offset="0" stopColor="#fff" stopOpacity=".85"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></radialGradient>
      <linearGradient id="hp2-top" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#ffffff"/><stop offset="1" stopColor="#cfe0ff"/></linearGradient>
      <linearGradient id="hp2-tl" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#ffffff"/><stop offset="1" stopColor="#dbe8ff"/></linearGradient>
      <linearGradient id="hp2-tr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#b3cdfb"/><stop offset="1" stopColor="#7aa5ee"/></linearGradient>
      <linearGradient id="hp2-gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fff1a8"/><stop offset=".5" stopColor="#fbbf24"/><stop offset="1" stopColor="#d97706"/></linearGradient>
      <filter id="hp2-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#1747d6" floodOpacity=".2"/></filter>
      <g id="hp2-wT" fill="none" strokeDasharray="13 6" strokeWidth="12">
      <g transform="matrix(1 .5 0 1 344 188)"><line x1="7" x2="39" y1="24" y2="24"/><line x1="7" x2="39" y1="52" y2="52"/><line x1="7" x2="39" y1="80" y2="80"/><line x1="7" x2="39" y1="108" y2="108"/><line x1="7" x2="39" y1="136" y2="136"/><line x1="7" x2="39" y1="164" y2="164"/></g>
      <g transform="matrix(1 -.5 0 1 390 211)"><line x1="7" x2="39" y1="24" y2="24"/><line x1="7" x2="39" y1="52" y2="52"/><line x1="7" x2="39" y1="80" y2="80"/><line x1="7" x2="39" y1="108" y2="108"/><line x1="7" x2="39" y1="136" y2="136"/><line x1="7" x2="39" y1="164" y2="164"/></g></g>
      <g id="hp2-wH" fill="none"><g transform="matrix(1 .5 0 1 183 362)"><line x1="10" x2="42" y1="28" y2="28" strokeWidth="26"/></g><g transform="matrix(1 -.5 0 1 235 388)"><line x1="32" x2="46" y1="28" y2="28" strokeWidth="18"/></g></g>
      </defs>
      <rect width="640" height="560" fill="url(#hp2-bg)"/>
      <circle cx="320" cy="300" r="270" fill="url(#hp2-glow)"/>
      <g fill="#93c5fd" opacity=".6"><circle cx="40" cy="30" r="2"/><circle cx="60" cy="30" r="2"/><circle cx="80" cy="30" r="2"/><circle cx="40" cy="48" r="2"/><circle cx="60" cy="48" r="2"/><circle cx="80" cy="48" r="2"/></g>
      
      {/* sun + clouds */}
      <g className="hpa-sun"><circle cx="320" cy="96" r="40" fill="#fde68a" opacity=".35"/><circle cx="320" cy="96" r="24" fill="url(#hp2-gold)"/></g>
      <g fill="#fff" opacity=".85"><g className="hpa-cloud" transform="translate(220 50)"><ellipse rx="30" ry="11"/><ellipse cx="16" cy="-8" rx="18" ry="11"/><ellipse cx="-14" cy="-6" rx="14" ry="9"/></g>
      <g className="hpa-cloud hpa-c2" transform="translate(410 190)"><ellipse rx="26" ry="9"/><ellipse cx="14" cy="-7" rx="15" ry="9"/></g></g>
      
      <ellipse className="hpa-shadow" cx="320" cy="548" rx="210" ry="14" fill="#1747d6"/>
      
      {/* ISLAND */}
      <g className="hpa-isl">
      <polygon points="90,400 320,500 320,526 90,426" fill="#8fb4f3"/><polygon points="320,500 550,400 550,426 320,526" fill="#6d9be9"/>
      <polygon points="90,400 320,300 550,400 320,500" fill="url(#hp2-top)" stroke="#bcd3fb" strokeWidth="2"/>
      <polygon points="130,400 320,317 510,400 320,483" fill="#cfeee2"/>
      <polygon className="hpa-pulse" points="130,400 320,317 510,400 320,483"/><polygon className="hpa-pulse hpa-p2" points="130,400 320,317 510,400 320,483"/>
      
      {/* tower */}
      <g filter="url(#hp2-sh)">
      <polygon points="344,378 390,401 390,211 344,188" fill="url(#hp2-tl)" stroke="#5b95f5" strokeWidth="2"/>
      <polygon points="390,401 436,378 436,188 390,211" fill="url(#hp2-tr)" stroke="#5b95f5" strokeWidth="2"/>
      <polygon points="344,188 390,211 436,188 390,165" fill="#f3f8ff" stroke="#5b95f5" strokeWidth="2"/></g>
      <use href="#hp2-wT" stroke="#7fc0ff"/>
      <polygon points="378,401 390,407 402,401 402,385 378,372" fill="#1747d6" opacity=".0"/>
      <line x1="390" y1="186" x2="390" y2="146" stroke="#1747d6" strokeWidth="3"/><circle className="hpa-blink" cx="390" cy="144" r="4.5" fill="#ef4444"/>
      
      {/* house */}
      <g filter="url(#hp2-sh)">
      <polygon points="183,420 235,446 235,388 183,362" fill="#fff" stroke="#5b95f5" strokeWidth="2"/>
      <polygon points="235,446 287,420 287,362 235,388" fill="#c9dcfc" stroke="#5b95f5" strokeWidth="2"/>
      <g transform="matrix(1 -.5 0 1 235 388)"><rect x="6" y="20" width="20" height="38" rx="3" fill="#1747d6"/></g>
      <polygon points="177,362 235,391 235,314" fill="#3b82f6" stroke="#1747d6" strokeWidth="3" strokeLinejoin="round"/>
      <polygon points="235,391 293,362 235,314" fill="#1747d6" stroke="#0f2f9c" strokeWidth="3" strokeLinejoin="round"/></g>
      <use href="#hp2-wH" stroke="#7fc0ff"/>
      
      {/* trees */}
      <g className="hpa-tree"><g transform="translate(318 354)"><rect x="-2" y="-8" width="4" height="10" fill="#7aa5ee"/><circle cy="-18" r="12" fill="#5fd0b0"/><circle cx="-8" cy="-12" r="8" fill="#7be0c3"/><circle cx="8" cy="-12" r="8" fill="#49c2a0"/></g></g>
      <g className="hpa-tree hpa-t2"><g transform="translate(332 466) scale(1.15)"><rect x="-2" y="-8" width="4" height="10" fill="#7aa5ee"/><circle cy="-18" r="12" fill="#5fd0b0"/><circle cx="-8" cy="-12" r="8" fill="#7be0c3"/><circle cx="8" cy="-12" r="8" fill="#49c2a0"/></g></g>
      
      {/* signs */}
      <g className="hpa-sway"><g transform="translate(80 350)"><rect x="38" y="38" width="5" height="26" fill="#5b95f5"/><g transform="rotate(-7 46 19)"><rect width="92" height="38" rx="8" fill="#fff" stroke="#5b95f5" strokeWidth="2.5"/><text className="hpa-sg" x="46" y="24" textAnchor="middle">FOR SALE</text></g></g></g>
      <g className="hpa-sway hpa-s2"><g transform="translate(452 352)"><rect x="18" y="38" width="5" height="30" fill="#5b95f5"/><g transform="rotate(5 48 19)"><rect width="96" height="38" rx="8" fill="#fff" stroke="#5b95f5" strokeWidth="2.5"/><text className="hpa-sg" x="48" y="24" textAnchor="middle">FOR RENT</text></g></g></g>
      
      {/* key + coin */}
      <g transform="translate(238 268)"><circle className="hpa-glow" r="42" fill="#fde68a"/><g className="hpa-key"><circle cx="-18" cy="0" r="15" fill="none" stroke="#1747d6" strokeWidth="7"/><circle cx="-18" cy="0" r="4" fill="#bfdbfe"/><rect x="-3" y="-3.5" width="52" height="7" rx="3" fill="#1747d6"/><rect x="34" y="3" width="7" height="12" fill="#1747d6"/><rect x="44" y="3" width="7" height="9" fill="#1747d6"/></g></g>
      <g className="hpa-coin"><g transform="translate(470 300)"><ellipse cy="8" rx="20" ry="8" fill="#b45309"/><ellipse rx="20" ry="8" fill="url(#hp2-gold)" stroke="#b45309" strokeWidth="1.5"/><text y="4" textAnchor="middle" fontSize="11" fontWeight="700" fill="#92400e">₹</text></g></g>
      </g>
      
      {/* DUSK overlay */}
      <rect className="hpa-dusk" width="640" height="560" fill="#0b1a4a"/>
      <g className="hpa-nw"><g fill="#fff"><circle className="hpa-tw" cx="90" cy="120" r="2"/><circle className="hpa-tw hpa-b" cx="250" cy="70" r="1.8"/><circle className="hpa-tw hpa-c" cx="400" cy="100" r="2"/><circle className="hpa-tw" cx="450" cy="210" r="1.6"/><circle className="hpa-tw hpa-b" cx="60" cy="250" r="1.8"/><circle className="hpa-tw hpa-c" cx="600" cy="170" r="2"/></g>
      <g transform="translate(320 98)"><circle r="22" fill="#fef9c3"/><circle cx="9" cy="-5" r="20" fill="#0b1a4a"/></g></g>
      <g className="hpa-isl"><g className="hpa-nw"><use href="#hp2-wT" stroke="#fde68a"/><use href="#hp2-wH" stroke="#fde68a"/></g></g>
      
      {/* CARDS */}
      <g className="hpa-f1"><g transform="translate(24 50)" filter="url(#hp2-sh)"><rect width="150" height="112" rx="16" fill="#fff"/>
      <text className="hpa-t1" x="14" y="26">PORTFOLIO GROWTH</text>
      <g fill="#60a5fa"><rect className="hpa-bar" x="16" y="74" width="18" height="26" rx="4"/><rect className="hpa-bar hpa-b2" x="44" y="66" width="18" height="34" rx="4"/><rect className="hpa-bar hpa-b3" x="72" y="70" width="18" height="30" rx="4"/><rect className="hpa-bar hpa-b4" x="100" y="58" width="18" height="42" rx="4"/></g>
      <path className="hpa-arrow" d="M18 70 L48 58 L78 63 L126 38 M112 36 L127 37 L122 51" fill="none" stroke="#1747d6" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/></g></g>
      
      <g className="hpa-f2"><g transform="translate(466 40)" filter="url(#hp2-sh)"><rect x="0" y="12" width="150" height="100" rx="16" fill="#fff"/>
      <rect x="0" y="12" width="150" height="28" rx="16" fill="#e8f0ff"/><rect x="0" y="28" width="150" height="12" fill="#e8f0ff"/>
      <rect x="28" y="0" width="6" height="24" rx="3" fill="#1747d6"/><rect x="116" y="0" width="6" height="24" rx="3" fill="#1747d6"/>
      <text className="hpa-t1" x="14" y="31">LEASE • VERIFIED</text>
      <rect x="14" y="50" width="38" height="36" rx="9" fill="#e3eeff"/><path className="hpa-tick" d="M22 69l7 7 13-15" fill="none" stroke="#16a34a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="62" y="54" width="74" height="6" rx="3" fill="#9dbcf5"/><rect x="62" y="68" width="56" height="6" rx="3" fill="#9dbcf5"/><rect x="62" y="82" width="38" height="6" rx="3" fill="#bfd7ff"/>
      <g className="hpa-vb"><circle cx="126" cy="98" r="10" fill="#22c55e"/><path d="M121 98l3.5 3.5 7-8" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></g></g></g>
      
      <g className="hpa-f3"><g transform="translate(20 196)" filter="url(#hp2-sh)"><rect width="152" height="82" rx="16" fill="#fff"/>
      <text className="hpa-t1" x="14" y="26">RENT COLLECTED</text><text className="hpa-t3" x="14" y="52">₹4,25,000</text>
      <rect x="14" y="62" width="124" height="7" rx="3.5" fill="#dbe8ff"/><rect className="hpa-fillbar" x="14" y="62" width="124" height="7" rx="3.5" fill="#1747d6"/>
      <g className="hpa-stamp"><g transform="translate(116 22) rotate(-10)"><rect x="-20" y="-10" width="40" height="20" rx="5" fill="#fff" stroke="#16a34a" strokeWidth="2"/><text y="4.5" textAnchor="middle" fontSize="11" fontWeight="800" fill="#16a34a">PAID</text></g></g></g></g>
      
      <g className="hpa-f4"><g transform="translate(468 186)" filter="url(#hp2-sh)"><rect width="148" height="80" rx="16" fill="#fff"/>
      <g transform="translate(16 18)"><circle cx="22" cy="22" r="20" fill="none" stroke="#dbe8ff" strokeWidth="8"/><circle className="hpa-ring" cx="22" cy="22" r="20" fill="none" stroke="#1747d6" strokeWidth="8" strokeLinecap="round"/><text x="22" y="26" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0b1f4d">94%</text></g>
      <text className="hpa-t1" x="70" y="38">OCCUPANCY</text><text className="hpa-t2" x="70" y="54">Units let</text></g></g>
      </svg>
    </div>
  );
}
