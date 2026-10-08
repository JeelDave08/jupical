export default function LendingScene() {
  return (
    <svg className="jp-cons__loan-scene" viewBox="0 0 560 440" role="img" aria-label="Animated LoanSuite lending dashboard illustration">
      <defs>
        <linearGradient id="jp-cons-loan-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#eaf4ff" /><stop offset="1" stopColor="#f8fcff" /></linearGradient>
        <linearGradient id="jp-cons-loan-blue" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#0a6cff" /><stop offset="1" stopColor="#00b4ff" /></linearGradient>
        <linearGradient id="jp-cons-loan-coat" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff" /><stop offset="1" stopColor="#dceaff" /></linearGradient>
        <filter id="jp-cons-loan-shadow" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#1978de" floodOpacity=".18" /></filter>
      </defs>
      <rect x="6" y="8" width="548" height="424" rx="34" fill="url(#jp-cons-loan-bg)" />
      <circle cx="288" cy="205" r="158" fill="#cde8ff" opacity=".54" />
      <circle cx="288" cy="205" r="126" fill="none" stroke="#8bcfff" strokeWidth="2" strokeDasharray="5 9" className="jp-cons__orbit" />
      <path d="M88 322C138 228 194 163 277 149s154 15 207 112" fill="none" stroke="#55baff" strokeWidth="2" opacity=".7" className="jp-cons__orbit-line" />
      <g fill="#0a6cff"><circle cx="111" cy="285" r="4"/><circle cx="205" cy="168" r="4"/><circle cx="461" cy="257" r="4"/><circle cx="379" cy="92" r="4"/></g>
      <ellipse cx="282" cy="391" rx="178" ry="22" fill="#78c8ff" opacity=".25" className="jp-cons__platform" />

      <g className="jp-cons__loan-house" filter="url(#jp-cons-loan-shadow)">
        <path d="M56 157l44-38 44 38v57H56z" fill="#fff" stroke="#a8d5ff" strokeWidth="3" />
        <path d="M46 160l54-47 54 47" fill="none" stroke="url(#jp-cons-loan-blue)" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="91" y="178" width="20" height="36" rx="3" fill="#dcedff" />
        <rect x="65" y="169" width="16" height="16" rx="3" fill="#bfe4ff" />
        <path d="M129 140v-18h15v31" fill="#c7e5ff" stroke="#84c7ff" strokeWidth="2" />
        <g className="jp-cons__key-float"><circle cx="146" cy="202" r="18" fill="url(#jp-cons-loan-blue)"/><circle cx="146" cy="202" r="6" fill="none" stroke="#fff" strokeWidth="3"/><path d="M160 202h25m-8 0v7m-7-7v5" stroke="#fff" strokeWidth="3" strokeLinecap="round"/></g>
      </g>

      <g className="jp-cons__loan-person">
        <path d="M224 213c5-44 26-67 62-67 35 0 59 26 61 67l-12 83H231z" fill="url(#jp-cons-loan-coat)" stroke="#c4dcf5" strokeWidth="2" />
        <path d="M264 150l21 24 20-24 15 17-24 43h-24l-25-43z" fill="#0a6cff" />
        <path d="M257 102c0-22 15-37 34-37s34 15 34 37v30c0 22-15 37-34 37s-34-15-34-37z" fill="#e9b99d" />
        <path d="M256 111c-5-35 10-54 37-54 27 0 41 20 34 53-8-4-13-12-15-20-12 11-31 17-56 16z" fill="#253a5a" />
        <path d="M267 115q5-5 11 0m17 0q5-5 11 0" fill="none" stroke="#263b59" strokeWidth="3" strokeLinecap="round" />
        <circle cx="273" cy="124" r="2.4" fill="#18304d"/><circle cx="300" cy="124" r="2.4" fill="#18304d"/>
        <path d="M280 139q9 7 18 0" fill="none" stroke="#a85f63" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M254 178l-20 39 18 18 21-39m32-18 21 39-18 18-22-39" fill="none" stroke="#b5d4f4" strokeWidth="8" strokeLinecap="round" />
        <path d="M273 175q11 15 22 0" fill="none" stroke="#fff" strokeWidth="4" />
        <path d="M260 222v68m45-68v68" stroke="#d1e4f8" strokeWidth="2" />
        <rect x="296" y="230" width="21" height="28" rx="4" fill="#fff" stroke="#9fcfff" strokeWidth="2" />
        <path d="M301 239h11m-11 5h8" stroke="#0a6cff" strokeWidth="2" strokeLinecap="round" />
        <path d="M258 187q-7 44 18 58 24-13 21-54" fill="none" stroke="#183b71" strokeWidth="4" strokeLinecap="round" />
        <circle cx="277" cy="245" r="6" fill="#00b4ff" stroke="#fff" strokeWidth="2" />
      </g>

      <g className="jp-cons__tablet" filter="url(#jp-cons-loan-shadow)">
        <rect x="210" y="267" width="90" height="63" rx="8" fill="#153d76" transform="rotate(-8 210 267)" />
        <rect x="218" y="274" width="75" height="48" rx="4" fill="#eaf7ff" transform="rotate(-8 218 274)" />
        <path d="M225 302l12-1 8-10 8 17 8-11 13 1" fill="none" stroke="#00a4ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="jp-cons__loan-ecg" />
      </g>

      <g className="jp-cons__loan-laptop" filter="url(#jp-cons-loan-shadow)">
        <path d="M178 325h174l18 37H160z" fill="#d9eaff" stroke="#9ecafa" strokeWidth="3" />
        <path d="M199 288h133a7 7 0 0 1 7 7v30H192v-30a7 7 0 0 1 7-7z" fill="#173c70" />
        <rect x="201" y="297" width="129" height="21" rx="3" fill="#f5fbff" />
        <path d="M208 311l14-7 12 5 16-8 15 7 19-8 11 4 16-5" fill="none" stroke="#00a4ff" strokeWidth="2.5" />
        <path d="M235 336h58" stroke="#a8c6e8" strokeWidth="3" strokeLinecap="round" />
      </g>

      <g className="jp-cons__loan-card jp-cons__loan-card--schedule" filter="url(#jp-cons-loan-shadow)">
        <rect x="24" y="42" width="155" height="78" rx="15" fill="#fff" />
        <rect x="40" y="59" width="35" height="35" rx="9" fill="#e3f3ff" />
        <path d="M48 55v9m19-9v9M43 69h29M48 76h6m8 0h6m-20 8h6m8 0h6" stroke="#0a6cff" strokeWidth="3" strokeLinecap="round" />
        <text x="84" y="72">Appointment</text><text x="84" y="90">Scheduling</text>
      </g>
      <g className="jp-cons__loan-card jp-cons__loan-card--care" filter="url(#jp-cons-loan-shadow)">
        <rect x="376" y="44" width="158" height="78" rx="15" fill="#fff" />
        <circle cx="408" cy="83" r="22" fill="url(#jp-cons-loan-blue)" />
        <path d="M396 83h8l5-10 7 21 5-11h7" fill="none" stroke="#fff" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round" />
        <text x="438" y="78">Patient Care</text><text x="438" y="96">Management</text>
      </g>
      <g className="jp-cons__loan-card jp-cons__loan-card--qualified" filter="url(#jp-cons-loan-shadow)">
        <rect x="24" y="263" width="147" height="65" rx="15" fill="#fff" />
        <path d="M55 276l20 7v16q-7 12-20 16-13-4-20-16v-16z" fill="url(#jp-cons-loan-blue)" />
        <path d="M45 297l7 7 13-15" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <text x="87" y="292">Qualified</text><text x="87" y="310">Care</text>
      </g>
      <g className="jp-cons__loan-card jp-cons__loan-card--lab" filter="url(#jp-cons-loan-shadow)">
        <rect x="392" y="263" width="142" height="65" rx="15" fill="#fff" />
        <path d="M418 276h19m-6 0v13l13 22q2 5-4 5h-26q-6 0-4-5l13-22v-13" fill="#ddf3ff" stroke="#0a6cff" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M415 303h25" stroke="#00b4ff" strokeWidth="5" strokeLinecap="round" />
        <text x="451" y="302">Lab</text><text x="451" y="317">Management</text>
      </g>
      <g className="jp-cons__calculator" filter="url(#jp-cons-loan-shadow)">
        <rect x="408" y="148" width="112" height="92" rx="14" fill="#fff" />
        <rect x="421" y="160" width="86" height="22" rx="5" fill="#e8f5ff" />
        <text x="428" y="176" className="jp-cons__digits">12,450</text>
        <g fill="#cce7ff"><rect x="421" y="191" width="16" height="12" rx="3"/><rect x="444" y="191" width="16" height="12" rx="3"/><rect x="467" y="191" width="16" height="12" rx="3"/><rect x="490" y="191" width="16" height="12" rx="3"/><rect x="421" y="210" width="16" height="12" rx="3"/><rect x="444" y="210" width="16" height="12" rx="3"/><rect x="467" y="210" width="16" height="12" rx="3"/><rect x="490" y="210" width="16" height="12" rx="3"/></g>
      </g>
      <g className="jp-cons__loan-document" filter="url(#jp-cons-loan-shadow)">
        <path d="M342 146h48l20 20v66h-68z" fill="#fff" stroke="#b5d7f8" strokeWidth="2" />
        <path d="M390 146v21h20" fill="#e5f4ff" stroke="#b5d7f8" strokeWidth="2" />
        <path d="M352 181h40m-40 10h34m-34 10h27" stroke="#b9d8f5" strokeWidth="3" strokeLinecap="round" />
        <path d="M351 222l9 9 19-21" fill="none" stroke="#00a66a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="jp-cons__check-draw" />
      </g>
      <g className="jp-cons__loan-progress" filter="url(#jp-cons-loan-shadow)">
        <rect x="184" y="54" width="164" height="52" rx="14" fill="#fff" />
        <text x="199" y="74">Loan progress</text>
        <rect x="199" y="83" width="134" height="9" rx="5" fill="#e5f1fd" />
        <rect x="199" y="83" width="0" height="9" rx="5" fill="url(#jp-cons-loan-blue)" className="jp-cons__progress-fill" />
      </g>
      <g className="jp-cons__coin-stack" fill="url(#jp-cons-loan-blue)" stroke="#70c2ff" strokeWidth="2">
        <ellipse cx="474" cy="376" rx="31" ry="9" className="jp-cons__coin jp-cons__coin--one"/><ellipse cx="474" cy="366" rx="31" ry="9" className="jp-cons__coin jp-cons__coin--two"/><ellipse cx="474" cy="356" rx="31" ry="9" className="jp-cons__coin jp-cons__coin--three"/>
        <path d="M469 356v20m9-20v20" stroke="#fff" strokeWidth="3" />
      </g>
      <g className="jp-cons__float-percent"><circle cx="88" cy="229" r="19" fill="#fff"/><text x="76" y="235" className="jp-cons__percent">%</text></g>
      <g className="jp-cons__float-coin"><circle cx="465" cy="128" r="16" fill="#fff"/><text x="459" y="135" className="jp-cons__dollar">$</text></g>
      <g className="jp-cons__medical-cross" fill="#55baff"><rect x="505" y="346" width="22" height="7" rx="3.5"/><rect x="512.5" y="338.5" width="7" height="22" rx="3.5"/></g>
    </svg>
  );
}
