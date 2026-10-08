import React from 'react';

const tones = [
  ['#dff2ff', '#83caff', '#0a6cff'], ['#dff8f1', '#8be2c9', '#078caa'],
  ['#e9e9ff', '#a8b2ff', '#525ce8'], ['#e1f5ff', '#9eddf4', '#168abf'],
  ['#f2eaff', '#c8a9ff', '#8655d9'], ['#e1f5fb', '#9fd9ef', '#167fab'],
  ['#ffeaf0', '#ffb8ce', '#df557c'], ['#e3f7ee', '#a6dfbd', '#168656'],
  ['#e8f3ff', '#a9caff', '#246bd2'], ['#fff2dd', '#ffd38c', '#d58820'],
  ['#e3f5ff', '#a7ddf5', '#167ebb'], ['#e8f7ff', '#a8dcff', '#0879d1'],
];

function Canvas({ index, label, children }) {
  const [from, to] = tones[index];
  return (
    <svg className="hp-illustration" viewBox="0 0 320 180" role="img" aria-label={label} xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id={`hp-g-${index}`} x1="0" y1="0" x2="1" y2="1"><stop stopColor={from} /><stop offset="1" stopColor={to} /></linearGradient></defs>
      <rect width="320" height="180" fill={`url(#hp-g-${index})`} />
      <circle cx="275" cy="18" r="58" fill="#fff" opacity=".2" />
      <circle cx="23" cy="174" r="65" fill="#fff" opacity=".18" />
      <g stroke={tones[index][2]} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">{children}</g>
    </svg>
  );
}

export function GearIllustration() {
  return <Canvas index={0} label="System configuration gear"><g fill="#fff"><circle cx="160" cy="90" r="44" /><path d="M156 28h8l6 17 15 6 15-8 12 12-8 15 6 15 17 6v17l-17 6-6 15 8 15-12 12-15-8-15 6-6 17h-17l-6-17-15-6-15 8-12-12 8-15-6-15-17-6V86l17-6 6-15-8-15 12-12 15 8 15-6z" /></g><circle cx="160" cy="90" r="17" fill="#bbdef7" /></Canvas>;
}
export function BuildingIllustration() {
  return <Canvas index={1} label="Healthcare center building"><g fill="#fff" stroke="none"><rect x="91" y="30" width="138" height="126" rx="10" /><path d="M76 154h168v8H76z" /></g><g fill="#92dfcf" stroke="none"><path d="M108 48h23v22h-23zm39 0h23v22h-23zm39 0h23v22h-23zm-78 37h23v22h-23zm39 0h23v22h-23zm39 0h23v22h-23z" /></g><path d="M146 121h28v35h-28" fill="#fff" /></Canvas>;
}
export function DoctorIllustration() {
  return <Canvas index={2} label="Doctor profile illustration"><path d="M106 157c7-37 23-55 54-60 31 5 47 23 54 60" fill="#fff" stroke="none" /><path d="M129 70c0-28 12-43 31-43s31 15 31 43v15c0 20-14 35-31 35s-31-15-31-35z" fill="#f2c3a5" stroke="none" /><path d="M127 75c-8-33 7-56 34-56 25 0 39 19 30 48l-12-17c-14 9-31 12-47 10z" fill="#294461" stroke="none" /><path d="M143 77h6m20 0h6m-24 20c6 5 12 5 18 0" stroke="#65464b" strokeWidth="3" /><path d="M143 115v42m34-42v42m-34-23h34" fill="none" stroke="#8e9aff" strokeWidth="7" /></Canvas>;
}
export function ClipboardIllustration() {
  return <Canvas index={3} label="Patient records clipboard"><rect x="104" y="24" width="112" height="137" rx="12" fill="#fff" stroke="none" /><rect x="135" y="18" width="50" height="18" rx="7" fill="#168abf" stroke="none" /><path d="m124 66 6 6 10-13m8 8h48m-72 25 6 6 10-13m8 8h48m-72 25 6 6 10-13m8 8h48" fill="none" /></Canvas>;
}
export function SurgeryIllustration() {
  return <Canvas index={4} label="Surgery lamp and hospital bed"><path d="M160 19v38m-52 0h104m-89 0v15m74-15v15" fill="none" /><path d="M119 72h82l-10 17h-62z" fill="#fff" stroke="none" /><circle cx="160" cy="80" r="5" fill="#b995ef" stroke="none" /><path d="M106 112h108v33H106z" fill="#fff" stroke="none" /><path d="M94 145h132m-111 0v15m90-15v15m-89-48h104" fill="none" /></Canvas>;
}
export function MriIllustration() {
  return <Canvas index={5} label="MRI scanner"><rect x="86" y="38" width="144" height="108" rx="23" fill="#fff" stroke="none" /><circle cx="147" cy="92" r="42" fill="#a6dff1" /><circle cx="147" cy="92" r="26" fill="#fff" stroke="none" /><path d="M178 131h66v12h-66m20 0v13m46-13v13" fill="none" /><path d="M97 59v68" stroke="#167fab" strokeWidth="8" /></Canvas>;
}
export function HeartbeatIllustration() {
  return <Canvas index={6} label="Heartbeat and ECG"><path d="M160 43c-18-23-57-7-57 23 0 34 57 66 57 66s57-32 57-66c0-30-39-46-57-23z" fill="#fff" strokeWidth="3" /><path d="M34 108h61l13-18 16 40 20-68 19 46h33l10-16 13 16h68" fill="none" stroke="#df557c" strokeWidth="5" /></Canvas>;
}
export function ShieldIllustration() {
  return <Canvas index={7} label="Insurance shield with check"><path d="m160 24 58 20v42c0 36-21 57-58 75-37-18-58-39-58-75V44z" fill="#fff" stroke="none" /><path d="m127 88 22 22 45-49" fill="none" stroke="#168656" strokeWidth="9" /></Canvas>;
}
export function MonitorIllustration() {
  return <Canvas index={8} label="Doctor portal monitor and calendar"><rect x="55" y="29" width="210" height="112" rx="12" fill="#fff" stroke="none" /><path d="M129 158h62m-31-17v17" fill="none" /><rect x="75" y="47" width="78" height="75" rx="7" fill="#bbd6ff" stroke="none" /><path d="M75 67h78m-58-28v19m39-19v19m-43 24h10m12 0h10m-32 15h10m12 0h10" fill="none" strokeWidth="3" /><rect x="169" y="49" width="74" height="70" rx="8" fill="#bbd6ff" stroke="none" /><circle cx="206" cy="72" r="14" fill="#fff" stroke="none" /><path d="M185 108c3-21 39-21 42 0" fill="#246bd2" stroke="none" /></Canvas>;
}
export function PatientPortalIllustration() {
  return <Canvas index={9} label="Patient portal"><rect x="111" y="23" width="98" height="135" rx="16" fill="#fff" stroke="none" /><circle cx="160" cy="65" r="19" fill="#ffd38c" stroke="none" /><path d="M130 109c5-29 55-29 60 0" fill="#d58820" stroke="none" /><path d="M133 127h54" stroke="#d58820" strokeWidth="5" /></Canvas>;
}
export function DoctorPhoneIllustration() {
  return <Canvas index={10} label="Mobile app for doctors"><rect x="118" y="13" width="84" height="154" rx="17" fill="#fff" stroke="none" /><rect x="127" y="29" width="66" height="122" rx="7" fill="#a9e0f6" stroke="none" /><circle cx="160" cy="62" r="16" fill="#fff" stroke="none" /><path d="M137 101c3-23 43-23 46 0m-42 17h38m-38 13h29" fill="none" stroke="#167ebb" strokeWidth="4" /></Canvas>;
}
export function PatientPhoneIllustration() {
  return <Canvas index={11} label="Mobile app for patients"><rect x="118" y="13" width="84" height="154" rx="17" fill="#fff" stroke="none" /><rect x="127" y="29" width="66" height="122" rx="7" fill="#b4e4ff" stroke="none" /><rect x="138" y="42" width="44" height="36" rx="8" fill="#fff" stroke="none" /><path d="M160 48v23m-11-11h22" fill="none" stroke="#0879d1" strokeWidth="4" /><rect x="138" y="88" width="44" height="20" rx="6" fill="#fff" stroke="none" /><path d="M146 98h28m-28 24h28" fill="none" stroke="#0879d1" strokeWidth="4" /><rect x="138" y="115" width="44" height="20" rx="6" fill="#fff" stroke="none" /></Canvas>;
}

export function DoctorHero() {
  return (
    <div className="hp-hero-art" aria-label="Healthcare professional illustration">
      <svg className="hp-doctor-svg" viewBox="0 0 400 400" role="img" aria-label="Doctor with stethoscope holding a tablet">
        <defs>
          <radialGradient id="hp-doctor-glow"><stop stopColor="#fff" /><stop offset="1" stopColor="#dff3ff" stopOpacity="0" /></radialGradient>
          <linearGradient id="hp-doctor-coat" x1="0" y1="0" x2=".9" y2="1"><stop stopColor="#fff" /><stop offset="1" stopColor="#e8f1ff" /></linearGradient>
          <linearGradient id="hp-doctor-scrub" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#0a6cff" /><stop offset="1" stopColor="#00b4ff" /></linearGradient>
          <linearGradient id="hp-doctor-skin" x1="0" y1="0" x2=".9" y2="1"><stop stopColor="#f8d2b9" /><stop offset="1" stopColor="#dfa486" /></linearGradient>
          <linearGradient id="hp-doctor-hair" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#35465d" /><stop offset="1" stopColor="#172940" /></linearGradient>
          <filter id="hp-doctor-card-shadow" x="-.3" y="-.3" width="1.6" height="1.8"><feDropShadow dx="0" dy="5" stdDeviation="7" floodColor="#347fae" floodOpacity=".16" /></filter>
          <filter id="hp-doctor-soft-shadow" x="-.3" y="-.3" width="1.6" height="1.8"><feDropShadow dx="0" dy="7" stdDeviation="9" floodColor="#236b9d" floodOpacity=".16" /></filter>
        </defs>
        <circle cx="200" cy="174" r="158" fill="url(#hp-doctor-glow)" />
        <path d="M39 230c8-61 53-108 119-117 69-9 153 21 185 91 25 56 3 133-39 161H92c-43-27-61-79-53-135z" fill="#dff2ff" opacity=".55" />
        <ellipse cx="202" cy="374" rx="114" ry="14" fill="#74b7dc" opacity=".2" />
        <ellipse cx="202" cy="206" rx="170" ry="126" fill="none" stroke="#8ccfff" strokeWidth="1.2" opacity=".52" />
        <path d="M45 262c29-96 91-153 178-157 62-3 119 27 147 76" fill="none" stroke="#7fc7fa" strokeWidth="1.5" strokeDasharray="2 6" opacity=".7" />
        <circle cx="49" cy="252" r="4" fill="#4aaff5" /><circle cx="83" cy="123" r="4" fill="#78c4f4" />
        <circle cx="312" cy="74" r="4" fill="#2a9cf0" /><circle cx="354" cy="247" r="4" fill="#58b6f2" />
        <ellipse cx="202" cy="369" rx="132" ry="16" fill="#eaf8ff" opacity=".85" />
        <ellipse cx="202" cy="369" rx="132" ry="16" fill="none" stroke="#a9ddfa" strokeWidth="2" opacity=".65" />
        <g className="hp-info-card hp-float-calendar" filter="url(#hp-doctor-card-shadow)">
          <rect x="8" y="61" width="132" height="52" rx="11" fill="#fff" />
          <path d="M8 78h132m-107-23v14m73-14v14" fill="none" stroke="#80acd0" strokeWidth="3" strokeLinecap="round" />
          <path d="M20 89h7m9 0h7m9 0h7m-32 12h7m9 0h7m9 0h7" stroke="#9db9d2" strokeWidth="3" strokeLinecap="round" />
          <circle cx="67" cy="101" r="4" fill="#0a6cff" />
          <text x="79" y="94" fill="#345474" fontSize="7.6" fontFamily="system-ui, sans-serif" fontWeight="650">Appointment</text>
          <text x="79" y="104" fill="#345474" fontSize="7.6" fontFamily="system-ui, sans-serif" fontWeight="650">Scheduling</text>
        </g>
        <g className="hp-info-card hp-info-qualified" filter="url(#hp-doctor-card-shadow)">
          <rect x="8" y="155" width="112" height="43" rx="11" fill="#fff" />
          <path d="m29 166 11 4v8c0 8-5 12-11 15-7-3-11-7-11-15v-8z" fill="#e8f4ff" stroke="#0a6cff" strokeWidth="1.5" />
          <path d="m24 179 4 4 7-8" fill="none" stroke="#0a6cff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <text x="48" y="181" fill="#345474" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="650">Qualified Care</text>
        </g>
        <g className="hp-info-card hp-info-patient" filter="url(#hp-doctor-card-shadow)">
          <rect x="267" y="45" width="127" height="45" rx="11" fill="#fff" />
          <path d="M285 61c-5-8-16-3-14 5 1 6 13 14 13 14s13-8 14-14c2-8-9-13-13-5z" fill="#e8f4ff" stroke="#0a9fe8" strokeWidth="1.4" />
          <text x="304" y="64" fill="#345474" fontSize="7.4" fontFamily="system-ui, sans-serif" fontWeight="650">Patient Care</text>
          <text x="304" y="75" fill="#345474" fontSize="7.4" fontFamily="system-ui, sans-serif" fontWeight="650">Management</text>
        </g>
        <g className="hp-info-card hp-info-lab" filter="url(#hp-doctor-card-shadow)">
          <rect x="286" y="111" width="106" height="45" rx="11" fill="#fff" />
          <path d="M307 120v8l-7 13a3 3 0 0 0 3 5h15a3 3 0 0 0 3-5l-7-13v-8m-6 0h8m-14 16h19" fill="none" stroke="#0a8bdc" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          <text x="330" y="132" fill="#345474" fontSize="7.6" fontFamily="system-ui, sans-serif" fontWeight="650">Lab</text>
          <text x="330" y="143" fill="#345474" fontSize="7.6" fontFamily="system-ui, sans-serif" fontWeight="650">Management</text>
        </g>
        <g className="hp-plus hp-plus-one"><path d="M117 39v16m-8-8h16" stroke="#0a6cff" strokeWidth="4" strokeLinecap="round" /></g>
        <g className="hp-plus hp-plus-two"><path d="M352 209v14m-7-7h14" stroke="#00a9ed" strokeWidth="4" strokeLinecap="round" /></g>
        <g className="hp-plus hp-plus-three"><path d="M112 277v12m-6-6h12" stroke="#00a9ed" strokeWidth="3.5" strokeLinecap="round" /></g>
        <g className="hp-doctor-enter" filter="url(#hp-doctor-soft-shadow)">
          <g className="hp-doctor-body">
            <path d="M119 361c5-68 16-118 53-145 12-9 25-14 43-16h14c20 2 38 8 53 21 31 27 42 76 48 140z" fill="url(#hp-doctor-coat)" />
            <path d="M161 230c12-17 29-26 51-29l18 1c24 4 42 13 56 32l-18 99H171z" fill="url(#hp-doctor-scrub)" />
            <path d="M190 198h48l12 34-36 32-35-34z" fill="url(#hp-doctor-skin)" />
            <path d="M173 224 203 259l-19 22-39-42c8-8 17-13 28-15zm83 0-29 35 19 22 39-42c-8-8-18-13-29-15z" fill="#fff" />
            <path d="M191 223h48m-49 2 13 34m36-34-13 34" fill="none" stroke="#d5e3f3" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M216 259h4v78h-4z" fill="#e8f1ff" opacity=".75" />
            <path d="M177 288v49m74-49v49" stroke="#d4e1f0" strokeWidth="2" />
            <rect x="244" y="296" width="30" height="32" rx="4" fill="#fff" stroke="#c7d9ec" strokeWidth="2" />
            <path d="M250 304h18m-18 6h18" stroke="#8eaaca" strokeWidth="2" strokeLinecap="round" />
            <circle cx="259" cy="319" r="3" fill="#0a6cff" />
            <path d="M164 229c4 25 11 43 28 50l-14 19-38-42c5-12 12-21 24-27zm87 0c-2 23-8 43-24 52l15 17 37-42c-6-12-14-21-28-27z" fill="url(#hp-doctor-coat)" />
            <path d="M148 257c-14 20-18 47-19 72l-3 21c-1 9 5 15 13 14l24-4 4-19-12-3 13-54" fill="url(#hp-doctor-coat)" />
            <path d="M143 346c-5 1-9 5-10 10l-3 11c-2 7 4 12 10 9l19-8 7-15-12-9z" fill="url(#hp-doctor-skin)" />
            <path d="M162 359c-5-4-12-4-17-1l-11 6c-5 3-3 9 3 10l22-4 9-6z" fill="url(#hp-doctor-skin)" />
            <path d="M192 237c2 30 8 52 25 60 18-8 25-31 27-60" fill="none" stroke="#d8f2ff" strokeWidth="5" strokeLinecap="round" />
            <path d="M215 294c-8 20-5 34 3 35 9 1 12-12 7-31" fill="none" stroke="#178bd9" strokeWidth="3.8" strokeLinecap="round" />
            <circle cx="220" cy="333" r="6" fill="#178bd9" />
            <rect x="157" y="281" width="20" height="40" rx="4" fill="#fff" stroke="#c7d9ec" strokeWidth="2" />
            <path d="M162 289h10m-10 6h10" stroke="#8eaaca" strokeWidth="2" strokeLinecap="round" />
          </g>
          <g className="hp-doctor-head" transform="translate(100 94) scale(.55)">
            <circle cx="264" cy="106" r="22" fill="url(#hp-doctor-hair)" />
            <circle cx="271" cy="109" r="13" fill="#263a52" />
            <path d="M168 93c2-37 24-58 56-58 33 0 53 23 52 59l-4 45c-3 30-23 49-51 49-31 0-51-22-53-53z" fill="url(#hp-doctor-skin)" />
            <path d="M166 105c-12-31-2-64 18-78 18-13 52-13 70 2 15 13 20 35 17 59l-10-5c-3-16-10-27-22-35-13 11-36 17-66 16l-6 41z" fill="url(#hp-doctor-hair)" />
            <path d="M167 83c-4 17-2 37 5 52l-12 4c-13-27-15-55-7-76 5-15 14-25 29-32-12 14-17 30-15 52z" fill="#263a52" />
            <path d="M244 83c10 3 18 8 23 16l-4 39c-4 27-18 43-42 48 29-17 24-63 23-103z" fill="#d99e81" opacity=".24" />
            <path d="M184 105c7-5 14-6 21-3m19 0c7-4 14-3 20 2" fill="none" stroke="#59413f" strokeWidth="2.8" strokeLinecap="round" />
            <g className="hp-eye"><path d="M185 120c5-4 11-4 16 0" fill="none" stroke="#4b4143" strokeWidth="2.6" strokeLinecap="round" /><path d="M185 121h16" stroke="#f3c2a7" strokeWidth="5" strokeLinecap="round" /></g>
            <g className="hp-eye"><path d="M224 120c5-4 11-4 16 0" fill="none" stroke="#4b4143" strokeWidth="2.6" strokeLinecap="round" /><path d="M224 121h16" stroke="#f3c2a7" strokeWidth="5" strokeLinecap="round" /></g>
            <path d="M213 122c-1 8-4 14-2 17 2 2 5 2 7 0" fill="none" stroke="#c78670" strokeWidth="2" strokeLinecap="round" />
            <path d="M203 151c7 6 17 6 24 0" fill="none" stroke="#a9585b" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M181 143c5 4 10 4 14 1m47-1c-5 4-10 4-14 1" fill="#e88886" opacity=".22" />
            <path d="M178 91c3 13 2 33 0 45l-7-14 1-27zm81 13c0 13-1 23-3 33l-7-12 1-22z" fill="#263a52" />
          </g>
          <g className="hp-doctor-tablet" filter="url(#hp-doctor-card-shadow)">
            <rect x="56" y="276" width="69" height="91" rx="9" fill="#304b68" transform="rotate(-8 56 276)" />
            <rect x="62" y="282" width="57" height="76" rx="5" fill="#f8fcff" transform="rotate(-8 62 282)" />
            <path className="hp-tablet-ecg" d="m69 323 12 0 5-10 7 21 8-32 8 21 8 0" fill="none" stroke="#0a9ee8" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M85 347h25" stroke="#bfd5e8" strokeWidth="2" strokeLinecap="round" />
          </g>
          <g className="hp-doctor-wave">
            <path d="M258 229c11 1 20 8 26 19l15 27-17 14-24-21-16-24z" fill="url(#hp-doctor-coat)" />
            <path d="M277 280c-5-12-2-22 7-29l18-15 4-23c1-8 10-9 12-1l2 18 13-12c6-5 12 0 8 7l-10 14c8-5 14 1 9 7l-13 14c7-1 11 6 4 11l-25 20c-12 9-25 4-29-11z" fill="url(#hp-doctor-skin)" />
            <path d="m307 237 2-21m12 19 13-12m-8 27 13-10m-20 24 14-4" fill="none" stroke="#c98f76" strokeWidth="1.7" strokeLinecap="round" />
          </g>
        </g>
        <g className="hp-laptop" filter="url(#hp-doctor-card-shadow)">
          <path d="m196 309 103 5 12 49-107-4z" fill="#aac3e4" />
          <path d="m203 315 89 4 8 36-89-3z" fill="#eaf6ff" />
          <path d="m210 323 74 3 2 2-74-3z" fill="#c9e0f5" />
          <path d="m188 361 127 4 21 12c2 2 0 4-4 4l-132-5-17-11c-2-2 0-4 5-4z" fill="#d7e7f7" />
          <path d="m204 366 91 3m-84 3 78 2m-68-5 3 3m16-3 3 3m16-2 3 3m16-2 3 3" stroke="#9eb9d8" strokeWidth="1.5" strokeLinecap="round" />
          <path d="m234 337 8 0 4-7 5 14 7-21 6 14 14 0" fill="none" stroke="#1ba6e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <g className="hp-medical-docs" filter="url(#hp-doctor-card-shadow)">
          <rect x="319" y="294" width="38" height="54" rx="7" fill="#47baff" transform="rotate(5 319 294)" />
          <rect x="333" y="301" width="39" height="55" rx="7" fill="#168df1" transform="rotate(5 333 301)" />
          <path d="M351 317v22m-11-11h22" stroke="#fff" strokeWidth="5" strokeLinecap="round" transform="rotate(5 351 328)" />
          <path d="M346 344h16" stroke="#c7edff" strokeWidth="2" strokeLinecap="round" />
        </g>
        <path className="hp-wide-ecg" d="M18 350h54l10-11 10 23 14-41 13 30h35m112 0h38l11-10 10 22 14-39 11 27h45" fill="none" stroke="#29afe3" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity=".55" />
      </svg>
    </div>
  );
}
