import './HeroLoanAnimation.css';

export default function HeroLoanAnimation() {
  return (
    <div className="hla-scene">
      <svg className="hla-svg" viewBox="0 0 640 560" role="img" aria-label="Animated loan scene with a house, key, falling coins, EMI schedule and repayment gauge">
      <defs>
      <linearGradient id="ls-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#0b1f4d"/><stop offset=".55" stopColor="#1747d6"/><stop offset="1" stopColor="#0ea5e9"/></linearGradient>
      <radialGradient id="ls-glow" cx=".5" cy=".5" r=".5"><stop offset="0" stopColor="#bae6fd" stopOpacity=".5"/><stop offset="1" stopColor="#bae6fd" stopOpacity="0"/></radialGradient>
      <linearGradient id="ls-wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff"/><stop offset="1" stopColor="#cfe0ff"/></linearGradient>
      <linearGradient id="ls-gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fde68a"/><stop offset="1" stopColor="#f59e0b"/></linearGradient>
      <filter id="ls-sh" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#04112e" floodOpacity=".35"/></filter>
      </defs>
      <rect width="640" height="560" fill="url(#ls-bg)"/>
      <circle cx="320" cy="290" r="230" fill="url(#ls-glow)"/>
      
      {/* sparkles */}
      <g fill="#bae6fd">
      <path className="hla-tw" transform="translate(120 190)" d="M-2.5 -8h5v5.5h5.5v5h-5.5v5.5h-5v-5.5h-5.5v-5h5.5z"/>
      <path className="hla-tw hla-b" transform="translate(540 230)" d="M-2.5 -8h5v5.5h5.5v5h-5.5v5.5h-5v-5.5h-5.5v-5h5.5z"/>
      <path className="hla-tw hla-c" transform="translate(70 330)" d="M-2.5 -8h5v5.5h5.5v5h-5.5v5.5h-5v-5.5h-5.5v-5h5.5z"/>
      <path className="hla-tw" transform="translate(585 340)" d="M-2.5 -8h5v5.5h5.5v5h-5.5v5.5h-5v-5.5h-5.5v-5h5.5z"/>
      </g>
      
      {/* orbit */}
      <g className="hla-orbit"><circle cx="320" cy="290" r="215" fill="none" stroke="#bae6fd" strokeOpacity=".4" strokeWidth="2" strokeDasharray="5 11"/>
      <circle cx="320" cy="75" r="6" fill="#5eead4"/><circle cx="535" cy="290" r="5" fill="#fde68a"/><circle cx="170" cy="476" r="5" fill="#bae6fd"/></g>
      
      {/* platform */}
      <ellipse cx="320" cy="438" rx="215" ry="30" fill="#04112e" opacity=".35"/>
      <ellipse className="hla-ripple" cx="320" cy="436" rx="200" ry="26"/><ellipse className="hla-ripple hla-r2" cx="320" cy="436" rx="200" ry="26"/>
      <ellipse cx="320" cy="430" rx="170" ry="22" fill="#7dd3fc" opacity=".35"/>
      
      {/* house */}
      <g className="hla-house" filter="url(#ls-sh)">
      <rect x="296" y="196" width="22" height="46" rx="3" fill="#cfe0ff"/>
      <rect x="245" y="262" width="150" height="160" rx="8" fill="url(#ls-wall)"/>
      <path d="M226 266 L320 176 L414 266 Z" fill="#1747d6" stroke="#38bdf8" strokeWidth="6" strokeLinejoin="round"/>
      <circle cx="320" cy="238" r="19" fill="#fff"/><text x="320" y="246" textAnchor="middle" fontSize="22" fontWeight="700" fill="#1747d6">₹</text>
      <rect x="266" y="286" width="32" height="30" rx="5" fill="#38bdf8"/><rect x="342" y="286" width="32" height="30" rx="5" fill="#38bdf8"/>
      <path d="M282 286v30M266 301h32M358 286v30M342 301h32" stroke="#fff" strokeWidth="2.5"/>
      <rect x="298" y="352" width="44" height="70" rx="8" fill="#0b1f4d"/><circle cx="332" cy="390" r="3" fill="#fde68a"/>
      <g><circle cx="276" cy="400" r="14" fill="#1747d6"/><text x="276" y="405" textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff">%</text></g>
      </g>
      {/* key */}
      <g transform="translate(398 318)"><g className="hla-key"><line x1="0" y1="0" x2="0" y2="12" stroke="#fde68a" strokeWidth="3"/><circle cx="0" cy="26" r="13" fill="none" stroke="url(#ls-gold)" strokeWidth="6"/><rect x="-3" y="39" width="6" height="40" rx="2" fill="url(#ls-gold)"/><rect x="3" y="58" width="11" height="5" fill="url(#ls-gold)"/><rect x="3" y="69" width="8" height="5" fill="url(#ls-gold)"/></g></g>
      
      {/* falling coins */}
      <g><g className="hla-coin hla-c1" transform="translate(290 30)"><g className="hla-spinc"><circle r="12" fill="url(#ls-gold)" stroke="#b45309" strokeWidth="1.5"/><text y="5" textAnchor="middle" fontSize="13" fontWeight="700" fill="#92400e">₹</text></g></g>
      <g className="hla-coin hla-c2" transform="translate(335 20)"><g className="hla-spinc" style={{ animationDelay: '-.4s' }}><circle r="12" fill="url(#ls-gold)" stroke="#b45309" strokeWidth="1.5"/><text y="5" textAnchor="middle" fontSize="13" fontWeight="700" fill="#92400e">₹</text></g></g>
      <g className="hla-coin hla-c3" transform="translate(312 36)"><g className="hla-spinc" style={{ animationDelay: '-.8s' }}><circle r="12" fill="url(#ls-gold)" stroke="#b45309" strokeWidth="1.5"/><text y="5" textAnchor="middle" fontSize="13" fontWeight="700" fill="#92400e">₹</text></g></g>
      <g className="hla-coin hla-c4" transform="translate(354 40)"><g className="hla-spinc" style={{ animationDelay: '-.2s' }}><circle r="12" fill="url(#ls-gold)" stroke="#b45309" strokeWidth="1.5"/><text y="5" textAnchor="middle" fontSize="13" fontWeight="700" fill="#92400e">₹</text></g></g></g>
      
      {/* card: application */}
      <g className="hla-f1"><g transform="translate(24 70)" filter="url(#ls-sh)"><rect width="184" height="62" rx="14" fill="#fff"/>
      <rect x="12" y="12" width="38" height="38" rx="10" fill="#dbe8ff"/><path d="M23 20h14l5 5v17H23z" fill="#fff" stroke="#1747d6" strokeWidth="2"/><path className="hla-tick" d="M27 34l5 5 8-9" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <text className="hla-t1" x="60" y="29">Loan Application</text><text className="hla-t2" x="60" y="46">Approved today</text></g></g>
      
      {/* card: progress */}
      <g className="hla-f2"><g transform="translate(432 58)" filter="url(#ls-sh)"><rect width="184" height="74" rx="14" fill="#fff"/>
      <text className="hla-t1" x="14" y="26">Loan progress</text><text className="hla-t2" x="14" y="60">₹ 12,45,000 disbursed</text>
      <rect x="14" y="34" width="156" height="9" rx="4.5" fill="#dbe8ff"/><rect className="hla-bar" x="14" y="34" width="156" height="9" rx="4.5" fill="#1747d6"/></g></g>
      
      {/* card: EMI */}
      <g className="hla-f3"><g transform="translate(24 384)" filter="url(#ls-sh)"><rect width="184" height="100" rx="14" fill="#fff"/>
      <text className="hla-t1" x="14" y="26">EMI Schedule</text>
      <g fill="#dbe8ff"><rect x="14" y="40" width="20" height="20" rx="5"/><rect x="42" y="40" width="20" height="20" rx="5"/><rect x="70" y="40" width="20" height="20" rx="5"/><rect x="98" y="40" width="20" height="20" rx="5"/><rect x="126" y="40" width="20" height="20" rx="5"/><rect x="154" y="40" width="20" height="20" rx="5"/>
      <rect x="14" y="68" width="20" height="20" rx="5"/><rect x="42" y="68" width="20" height="20" rx="5"/><rect x="70" y="68" width="20" height="20" rx="5"/><rect x="98" y="68" width="20" height="20" rx="5"/><rect x="126" y="68" width="20" height="20" rx="5"/><rect x="154" y="68" width="20" height="20" rx="5"/></g>
      <g fill="#22c55e">
      <rect className="hla-emi" style={{ animationDelay: '0s' }} x="14" y="40" width="20" height="20" rx="5"/><rect className="hla-emi" style={{ animationDelay: '.6s' }} x="42" y="40" width="20" height="20" rx="5"/><rect className="hla-emi" style={{ animationDelay: '1.2s' }} x="70" y="40" width="20" height="20" rx="5"/><rect className="hla-emi" style={{ animationDelay: '1.8s' }} x="98" y="40" width="20" height="20" rx="5"/><rect className="hla-emi" style={{ animationDelay: '2.4s' }} x="126" y="40" width="20" height="20" rx="5"/><rect className="hla-emi" style={{ animationDelay: '3s' }} x="154" y="40" width="20" height="20" rx="5"/>
      <rect className="hla-emi" style={{ animationDelay: '3.6s' }} x="14" y="68" width="20" height="20" rx="5"/><rect className="hla-emi" style={{ animationDelay: '4.2s' }} x="42" y="68" width="20" height="20" rx="5"/><rect className="hla-emi" style={{ animationDelay: '4.8s' }} x="70" y="68" width="20" height="20" rx="5"/></g></g></g>
      
      {/* card: gauge */}
      <g className="hla-f4"><g transform="translate(432 384)" filter="url(#ls-sh)"><rect width="184" height="100" rx="14" fill="#fff"/>
      <text className="hla-t1" x="14" y="26">Repayment</text>
      <g transform="translate(92 0)" fill="none" strokeWidth="9" strokeLinecap="round"><path d="M-46 84 A46 46 0 0 1 -23 44" stroke="#ef4444"/><path d="M-16 40 A46 46 0 0 1 16 40" stroke="#f59e0b"/><path d="M23 44 A46 46 0 0 1 46 84" stroke="#22c55e"/>
      <line className="hla-needle" x1="0" y1="52" x2="0" y2="84" stroke="#0b1f4d" strokeWidth="4"/></g>
      <circle cx="92" cy="84" r="6" fill="#0b1f4d"/></g></g>
      </svg>
    </div>
  );
}
