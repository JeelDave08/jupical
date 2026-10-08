export default function PropertyScene() {
  return (
    <div className="jp-cons__pms-scene-wrap">
      <svg className="jp-cons__pms-scene" viewBox="0 0 560 450" role="img" aria-label="Animated illustration of property buildings, homes, rental documents and portfolio growth">
        <defs>
          <linearGradient id="pms-sky" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#dbeafe" /><stop offset="1" stopColor="#f7fbff" /></linearGradient>
          <linearGradient id="pms-tower" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#fff" /><stop offset="1" stopColor="#dcecff" /></linearGradient>
          <linearGradient id="pms-home" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff" /><stop offset="1" stopColor="#e6f2ff" /></linearGradient>
          <filter id="pms-shadow" x="-30%" y="-30%" width="160%" height="180%"><feDropShadow dx="0" dy="9" stdDeviation="9" floodColor="#4579bf" floodOpacity=".18" /></filter>
        </defs>
        <rect x="1" y="1" width="558" height="448" rx="24" fill="url(#pms-sky)" />
        <circle cx="442" cy="85" r="57" fill="#fff" opacity=".42" />
        <circle cx="442" cy="85" r="36" fill="#cfe4ff" opacity=".48" />
        <path d="M0 350q90-27 184 0t200-6 176 6v100H0z" fill="#e3efff" />

        <g className="jp-cons__pms-skyline" opacity=".56">
          <path d="M60 320V222l38-24 38 24v98z" fill="#c4dcfa" stroke="#8eb4e6" strokeWidth="2" />
          <path d="M142 320V185h60v135z" fill="#d5e7fc" stroke="#8eb4e6" strokeWidth="2" />
          <path d="M205 320V228l35-21 35 21v92z" fill="#c8def9" stroke="#8eb4e6" strokeWidth="2" />
          <path d="M404 320V202l39-24 39 24v118z" fill="#c4dcfa" stroke="#8eb4e6" strokeWidth="2" />
          {[0,1,2,3].map((i) => <g key={i} className={`jp-cons__pms-window jp-cons__pms-window-${i}`} style={{ animationDelay: `${i * .35}s` }}>
            <rect x={75 + i * 16} y={242 + (i % 2) * 31} width="9" height="15" rx="2" fill="#60a5fa" />
            <rect x={155 + i * 13} y={202 + (i % 2) * 32} width="9" height="15" rx="2" fill="#60a5fa" />
            <rect x={419 + i * 15} y={223 + (i % 2) * 34} width="9" height="15" rx="2" fill="#60a5fa" />
          </g>)}
        </g>

        <g className="jp-cons__pms-building" filter="url(#pms-shadow)">
          <rect x="280" y="136" width="124" height="205" rx="9" fill="url(#pms-tower)" stroke="#75a5df" strokeWidth="2.5" />
          <path d="M269 144h146l-15-24h-116z" fill="#bfdbfe" stroke="#75a5df" strokeWidth="2.5" strokeLinejoin="round" />
          <rect x="295" y="165" width="94" height="28" rx="5" fill="#fff" stroke="#c6def8" />
          <path d="M307 176h70m-70 7h52" stroke="#9ab9e4" strokeWidth="3" strokeLinecap="round" />
          {[0,1,2,3].map((row) => <g key={row}>
            {[0,1,2].map((column) => <rect key={column} className={`jp-cons__pms-window jp-cons__pms-window-${row + column}`} style={{ animationDelay: `${(row * 3 + column) * .22}s` }} x={296 + column * 31} y={210 + row * 29} width="20" height="17" rx="3" fill="#70c5f5" />)}
          </g>)}
          <rect x="330" y="325" width="26" height="16" rx="4" fill="#1d4ed8" />
          <path d="M338 326v15m10-15v15" stroke="#fff" strokeWidth="2" />
        </g>

        <g className="jp-cons__pms-house" filter="url(#pms-shadow)">
          <path d="m75 302 89-72 91 72v68H75z" fill="url(#pms-home)" stroke="#6696d3" strokeWidth="3" strokeLinejoin="round" />
          <path d="m62 304 102-83 104 83" fill="none" stroke="#1d4ed8" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="101" y="306" width="42" height="36" rx="4" fill="#8ed7fb" stroke="#4982c3" strokeWidth="2" />
          <path d="M122 306v36m-21-18h42" stroke="#fff" strokeWidth="2" />
          <rect x="174" y="320" width="35" height="50" rx="4" fill="#fff" stroke="#7ea6d6" strokeWidth="2" />
          <circle cx="201" cy="345" r="2" fill="#1d4ed8" />
        </g>

        <g className="jp-cons__pms-sale-sign" transform="rotate(-6 91 225)">
          <path d="M92 225v57" stroke="#527cac" strokeWidth="4" />
          <rect x="50" y="191" width="84" height="36" rx="7" fill="#fff" stroke="#6c9edb" strokeWidth="2" />
          <text x="92" y="214" textAnchor="middle">FOR SALE</text>
        </g>
        <g className="jp-cons__pms-rent-sign" transform="rotate(5 451 250)">
          <path d="M451 250v55" stroke="#527cac" strokeWidth="4" />
          <rect x="411" y="216" width="80" height="36" rx="7" fill="#fff" stroke="#6c9edb" strokeWidth="2" />
          <text x="451" y="239" textAnchor="middle">FOR RENT</text>
        </g>

        <g className="jp-cons__pms-calendar" filter="url(#pms-shadow)">
          <rect x="354" y="38" width="139" height="111" rx="13" fill="#fff" stroke="#d3e3fb" strokeWidth="2" />
          <path d="M354 69h139" stroke="#d3e3fb" strokeWidth="2" />
          <path d="M382 32v14m83-14v14" stroke="#1d4ed8" strokeWidth="5" strokeLinecap="round" />
          <rect x="373" y="83" width="33" height="29" rx="6" fill="#e9f4ff" />
          <path d="m381 97 7 7 12-15" className="jp-cons__pms-check-draw" fill="none" stroke="#1d4ed8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M419 87h55m-55 13h44m-44 13h31" stroke="#9cb8dd" strokeWidth="4" strokeLinecap="round" />
          <text x="374" y="60">LEASE • VERIFIED</text>
        </g>

        <g className="jp-cons__pms-key" transform="translate(248 117) rotate(-16)">
          <circle cx="0" cy="0" r="14" fill="#fff" stroke="#1d4ed8" strokeWidth="4" />
          <circle cx="0" cy="0" r="5" fill="#bfdbfe" />
          <path d="M12 10 48 44m-6-6 7-7m-1 15 7-7" stroke="#1d4ed8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="40" y="39" width="18" height="15" rx="4" fill="#38bdf8" />
        </g>

        <g className="jp-cons__pms-chart" filter="url(#pms-shadow)">
          <rect x="20" y="58" width="128" height="102" rx="13" fill="#fff" stroke="#d3e3fb" strokeWidth="2" />
          <text x="35" y="81">PORTFOLIO GROWTH</text>
          <path d="M36 143h95M44 136v-17m24 17v-30m24 30V111m24 25V94" stroke="#9cd8f5" strokeWidth="11" strokeLinecap="round" className="jp-cons__pms-bars" />
          <path d="m39 123 27-13 24 6 36-28" fill="none" stroke="#1d4ed8" strokeWidth="3" strokeLinecap="round" className="jp-cons__pms-chart-line" />
          <path d="m117 88 10-2-2 10" fill="none" stroke="#1d4ed8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        <g className="jp-cons__pms-receipt" transform="translate(427 306) rotate(8)" filter="url(#pms-shadow)">
          <path d="M0 0h73v87l-9-6-9 6-9-6-9 6-9-6-9 6-9-6-10 6z" fill="#fff" stroke="#9bb9e2" strokeWidth="2" />
          <circle cx="20" cy="22" r="10" fill="#eaf5ff" />
          <path d="M16 22h8m-4-4v8m19-8h15m-15 9h20m-37 14h37m-37 9h29" stroke="#74a0d8" strokeWidth="3" strokeLinecap="round" />
          <text x="46" y="72" textAnchor="middle">PAID</text>
        </g>

        <g className="jp-cons__pms-coins" transform="translate(291 337)">
          <ellipse cx="20" cy="23" rx="22" ry="8" fill="#bfdbfe" stroke="#5a8bc8" strokeWidth="2" />
          <path d="M-2 14v8c0 5 10 9 22 9s22-4 22-9v-8" fill="#e8f4ff" stroke="#5a8bc8" strokeWidth="2" />
          <ellipse cx="20" cy="14" rx="22" ry="8" fill="#fff" stroke="#5a8bc8" strokeWidth="2" />
          <text x="20" y="18" textAnchor="middle">$</text>
          <g className="jp-cons__pms-coin-top"><ellipse cx="20" cy="2" rx="17" ry="7" fill="#fff" stroke="#5a8bc8" strokeWidth="2" /><text x="20" y="6" textAnchor="middle">$</text></g>
        </g>
        <ellipse cx="280" cy="399" rx="225" ry="16" fill="#60a5fa" opacity=".15" className="jp-cons__pms-platform" />
      </svg>
    </div>
  );
}
