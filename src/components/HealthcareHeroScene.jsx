import doctorNurse from '../assets/healthcare-doctor-nurse.webp';
import './HealthcareHeroScene.css';

export default function HealthcareHeroScene() {
  return (
    <div className="hc-scene">
      <svg viewBox="0 0 640 560" role="img" aria-label="Animated hospital scene with a doctor, a nurse and an ambulance">
      <defs>
      <linearGradient id="hc-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#0b1f4d"/><stop offset=".55" stopColor="#1747d6"/><stop offset="1" stopColor="#0ea5e9"/></linearGradient>
      <radialGradient id="hc-glow" cx=".5" cy=".5" r=".5"><stop offset="0" stopColor="#bae6fd" stopOpacity=".55"/><stop offset="1" stopColor="#bae6fd" stopOpacity="0"/></radialGradient>
      <linearGradient id="hc-bld" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffffff"/><stop offset="1" stopColor="#cfe0ff"/></linearGradient>
      <filter id="hc-sh" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#04112e" floodOpacity=".35"/></filter>
      </defs>
      <rect width="640" height="560" fill="url(#hc-bg)"/>
      <circle cx="320" cy="250" r="230" fill="url(#hc-glow)"/>
      
      {/*  rising plus signs  */}
      <g fill="#bae6fd">
      <path className="hc-plus hc-p1" transform="translate(70 500)" d="M-3 -10h6v7h7v6h-7v7h-6v-7h-7v-6h7z"/>
      <path className="hc-plus hc-p2" transform="translate(190 520)" d="M-3 -10h6v7h7v6h-7v7h-6v-7h-7v-6h7z"/>
      <path className="hc-plus hc-p3" transform="translate(450 510)" d="M-3 -10h6v7h7v6h-7v7h-6v-7h-7v-6h7z"/>
      <path className="hc-plus hc-p4" transform="translate(570 490)" d="M-3 -10h6v7h7v6h-7v7h-6v-7h-7v-6h7z"/>
      <path className="hc-plus hc-p5" transform="translate(320 530)" d="M-3 -10h6v7h7v6h-7v7h-6v-7h-7v-6h7z"/>
      </g>
      
      {/*  pulse rings behind hospital  */}
      <g transform="translate(320 150)"><circle className="hc-ring" r="40"/><circle className="hc-ring hc-r2" r="40"/><circle className="hc-ring hc-r3" r="40"/></g>
      
      {/*  hospital  */}
      <g filter="url(#hc-sh)">
      <rect x="205" y="120" width="230" height="290" rx="10" fill="url(#hc-bld)"/>
      <rect x="150" y="215" width="70" height="195" rx="8" fill="#e3ecff"/>
      <rect x="420" y="215" width="70" height="195" rx="8" fill="#e3ecff"/>
      </g>
      <g fill="#1747d6">
      <rect className="hc-win" x="228" y="190" width="30" height="24" rx="4"/><rect className="hc-win hc-b" x="278" y="190" width="30" height="24" rx="4"/><rect className="hc-win hc-c" x="332" y="190" width="30" height="24" rx="4"/><rect className="hc-win" x="382" y="190" width="30" height="24" rx="4"/>
      <rect className="hc-win hc-b" x="228" y="240" width="30" height="24" rx="4"/><rect className="hc-win hc-c" x="278" y="240" width="30" height="24" rx="4"/><rect className="hc-win" x="332" y="240" width="30" height="24" rx="4"/><rect className="hc-win hc-b" x="382" y="240" width="30" height="24" rx="4"/>
      <rect className="hc-win hc-c" x="168" y="240" width="34" height="24" rx="4"/><rect className="hc-win" x="168" y="285" width="34" height="24" rx="4"/>
      <rect className="hc-win hc-b" x="438" y="240" width="34" height="24" rx="4"/><rect className="hc-win hc-c" x="438" y="285" width="34" height="24" rx="4"/>
      </g>
      {/*  sign + cross  */}
      <rect x="262" y="124" width="116" height="52" rx="12" fill="#1747d6"/>
      <g className="hc-cross"><path transform="translate(320 150)" fill="#fff" d="M-6 -18h12v12h12v12h-12v12h-12v-12h-12v-12h12z"/></g>
      {/*  entrance  */}
      <rect x="285" y="330" width="70" height="80" rx="8" fill="#0b1f4d"/>
      <rect x="289" y="334" width="30" height="76" fill="#7dd3fc" opacity=".8"/><rect x="321" y="334" width="30" height="76" fill="#38bdf8" opacity=".8"/>
      
      {/*  road  */}
      <rect x="0" y="410" width="640" height="150" fill="#08142f"/>
      <rect x="0" y="410" width="640" height="6" fill="#38bdf8" opacity=".7"/>
      <g stroke="#7dd3fc" strokeWidth="4" strokeDasharray="26 22" opacity=".5"><line x1="0" y1="532" x2="640" y2="532"/></g>
      
      {/*  ECG  */}
      <path className="hc-ecg" d="M20 470 H110 L130 470 L145 430 L165 505 L182 450 L195 470 H300 L320 470 L335 420 L358 510 L376 455 L390 470 H620" fill="none" stroke="#5eead4" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      
      {/*  doctor + nurse photo  */}
      <ellipse cx="320" cy="438" rx="90" ry="9" fill="#04112e" opacity=".35"/>
      <g className="hc-hero"><image href={doctorNurse} x="230" y="257" width="180" height="179" filter="url(#hc-sh)"/></g>
      
      {/*  ambulance  */}
      <g className="hc-amb" transform="translate(0 0)"><g transform="translate(0 458)">
      <rect x="0" y="0" width="86" height="44" rx="8" fill="#fff"/>
      <path d="M86 12h22q10 0 14 14l4 18h-40z" fill="#fff"/>
      <path d="M92 16h14q6 0 9 10h-23z" fill="#38bdf8"/>
      <rect x="0" y="26" width="122" height="5" fill="#ef4444"/>
      <path transform="translate(40 14)" d="M-3 -8h6v5h5v6h-5v5h-6v-5h-5v-6h5z" fill="#ef4444"/>
      <rect className="hc-lightA" x="30" y="-8" width="12" height="8" rx="3" fill="#ef4444"/><rect className="hc-lightB" x="44" y="-8" width="12" height="8" rx="3" fill="#38bdf8"/>
      <circle cx="24" cy="46" r="9" fill="#0b1f4d"/><circle cx="24" cy="46" r="3.5" fill="#cbd5e1"/>
      <circle cx="98" cy="46" r="9" fill="#0b1f4d"/><circle cx="98" cy="46" r="3.5" fill="#cbd5e1"/>
      </g></g>
      
      {/*  floating module chips  */}
      <g className="hc-chip hc-float1"><g transform="translate(34 70)" filter="url(#hc-sh)"><rect width="176" height="48" rx="14" fill="#fff"/><rect x="10" y="9" width="30" height="30" rx="9" fill="#dbe8ff"/><path d="M17 20h16M17 27h10" stroke="#1747d6" strokeWidth="3" strokeLinecap="round"/><text x="50" y="30">Appointments</text></g></g>
      <g className="hc-chip hc-float2"><g transform="translate(440 60)" filter="url(#hc-sh)"><rect width="168" height="48" rx="14" fill="#fff"/><rect x="10" y="9" width="30" height="30" rx="9" fill="#d5f7f1"/><path d="M15 25h5l3-7 4 14 3-7h5" fill="none" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><text x="50" y="30">Patient Care</text></g></g>
      <g className="hc-chip hc-float3"><g transform="translate(28 330)" filter="url(#hc-sh)"><rect width="150" height="48" rx="14" fill="#fff"/><rect x="10" y="9" width="30" height="30" rx="9" fill="#e6e0ff"/><path d="M21 15h8M23 15v8l-6 10h20l-6-10v-8" fill="none" stroke="#6d28d9" strokeWidth="2.5" strokeLinejoin="round"/><text x="50" y="30">Lab</text></g></g>
      <g className="hc-chip hc-float4"><g transform="translate(468 340)" filter="url(#hc-sh)"><rect width="150" height="48" rx="14" fill="#fff"/><rect x="10" y="9" width="30" height="30" rx="9" fill="#ffe5d5"/><rect x="16" y="19" width="18" height="10" rx="5" fill="none" stroke="#ea580c" strokeWidth="2.5" transform="rotate(-30 25 24)"/><text x="50" y="30">Pharmacy</text></g></g>
      </svg>
    </div>
  );
}
