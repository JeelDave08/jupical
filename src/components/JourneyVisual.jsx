import { useEffect, useId, useMemo, useRef } from "react";
import defaultBg from "./timeline-bg.jpg";
import defaultRocket from "./rocket.png";

/* ------------------------------------------------------------------ *
 *  RocketJourney / JourneyVisual
 *  A rocket takes off from the launch pad, flies along the highway
 *  through 2016 → 2026 (a green tick pops on every year it passes) and
 *  parks in front of the "Vision 2030" gate. Autoplays and loops forever.
 *
 *  All coordinates are in the artwork's own pixel space (1024 × 765).
 * ------------------------------------------------------------------ */

// Road centre line, in order of travel (the rocket hovers `hover` px above it)
const ROAD = [
  [262, 632], [305, 612], [348, 592], [372, 565], [365, 540], [335, 515],
  [310, 485], [303, 450], [318, 424], [355, 412], [410, 414], [470, 440],
  [530, 470], [590, 480], [645, 470], [685, 445], [660, 420], [625, 385],
  [618, 345], [640, 315], [690, 290], [745, 262], [800, 232], [850, 205],
];

// year, highlight box [x, y, w, h], road point the rocket passes (null = last stop)
const MILESTONES = [
  ["2016", [74, 514, 128, 80], [262, 632]],
  ["2018", [407, 538, 138, 78], [372, 565]],
  ["2020", [228, 320, 139, 66], [318, 424]],
  ["2022", [638, 490, 140, 66], [620, 478]],
  ["2024", [700, 350, 138, 80], [670, 435]],
  ["2026", [590, 182, 130, 78], [690, 290]],
  ["2030", null, null], // the vision: never ticked, only the label appears
];

const PAD_START = [[212, 600], [214, 556]]; // straight up from the launch pad

// Catmull-Rom → cubic Bézier path through the points
function smoothPath(P) {
  let d = `M${P[0][0]} ${P[0][1]}`;
  for (let i = 0; i < P.length - 1; i++) {
    const a = P[i - 1] || P[i], b = P[i], c = P[i + 1], e = P[i + 2] || c;
    d += ` C${b[0] + (c[0] - a[0]) / 6} ${b[1] + (c[1] - a[1]) / 6} ${c[0] - (e[0] - b[0]) / 6} ${c[1] - (e[1] - b[1]) / 6} ${c[0]} ${c[1]}`;
  }
  return d;
}

const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
const ease = (t) => 0.5 - Math.cos(Math.PI * t) / 2;

export default function RocketJourney({
  bgSrc = defaultBg,          // the artwork (1024 × 765)
  rocketSrc = defaultRocket,  // rocket cut-out, transparent PNG, nose pointing up
  liftoff = 1800,             // ms, take-off from the pad
  flight = 15500,             // ms, pad → gate  (smaller = faster)
  pause = 2600,               // ms, rest at the gate before the loop restarts
  hover = 26,                 // px the rocket flies above the road
  trail = 240,                // px length of the light trail
  className,
  style,
}) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const blurId = `rj-blur-${uid}`, glowId = `rj-glow-${uid}`;

  const pts = useMemo(() => [...PAD_START, ...ROAD.map(([x, y]) => [x, y - hover])], [hover]);
  const d = useMemo(() => smoothPath(pts), [pts]);

  const pathRef = useRef(null), trailGlowRef = useRef(null), trailLineRef = useRef(null);
  const rocketRef = useRef(null), flameRef = useRef(null), pillRef = useRef(null);
  const hlRefs = useRef([]), tickRefs = useRef([]);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const L = path.getTotalLength();
    if (!L) return;

    // samples used to find where the rocket passes each milestone
    const samples = [];
    for (let s = 0; s <= L; s += 3) {
      const q = path.getPointAtLength(s);
      samples.push([s, q.x, q.y]);
    }
    const at = MILESTONES.map((m, i) => {
      if (i === 0) return -1;        // 2016 ticks the moment the rocket starts
      if (!m[2]) return 0.985;       // the gate
      let best = 1e9, bd = 0;
      const tx = m[2][0], ty = m[2][1] - hover;
      for (const [s, x, y] of samples) {
        const e = (x - tx) ** 2 + (y - ty) ** 2;
        if (e < best) {
          best = e;
          bd = s;
        }
      }
      return bd / L;
    });

    let raf = 0, timer = 0, ang = 0, sx = 1, face = 1;

    const draw = (k) => {
      if (!pathRef.current || !rocketRef.current || !flameRef.current || !trailGlowRef.current || !trailLineRef.current) {
        return;
      }
      const dist = k * L;
      const a = path.getPointAtLength(dist);
      const b = path.getPointAtLength(Math.min(L, dist + 34));
      const c = path.getPointAtLength(Math.max(0, dist - 34));

      const slope = (Math.atan2(b.y - c.y, Math.max(Math.abs(b.x - c.x), 1)) * 180) / Math.PI;
      const dxn = (b.x - c.x) / (Math.hypot(b.x - c.x, b.y - c.y) || 1);

      // 3D "turn-around" flip when the road swings back to the left
      if (dxn < -0.22) face = -1;
      else if (dxn > 0.22) face = 1;

      let target = 90 + clamp(slope * 0.55, -30, 30); // 90° = nose pointing right
      if (k > 0.88) {                                  // last stretch: align with the road → aims into the gate opening
        const f = Math.min(1, (k - 0.88) / 0.08), s = f * f * (3 - 2 * f);
        target = target * (1 - s) + (90 + clamp(slope, -40, 40)) * s;
      }
      if (k > 0.93) face = 1;

      ang += (target - ang) * 0.1;
      sx += (face - sx) * 0.08;
      const sxx = Math.abs(sx) < 0.04 ? 0.04 * (sx < 0 ? -1 : 1) : sx;
      rocketRef.current.setAttribute("transform", `translate(${a.x},${a.y}) scale(${sxx},1) rotate(${ang})`);

      flameRef.current.setAttribute("ry", 20 + Math.random() * 10);
      flameRef.current.setAttribute("opacity", k > 0.99 ? 0 : 1);

      const tl = Math.min(dist, trail);
      const dash = `0 ${Math.max(0, dist - tl)} ${tl} ${L}`;
      const fade = k > 0.99 ? 0 : 1;
      trailGlowRef.current.setAttribute("stroke-dasharray", dash);
      trailLineRef.current.setAttribute("stroke-dasharray", dash);
      trailGlowRef.current.style.opacity = fade * 0.75;
      trailLineRef.current.style.opacity = fade * 0.9;

      MILESTONES.forEach((_, i) => {
        const on = k >= at[i] - 0.004;
        hlRefs.current[i]?.classList.toggle("on", on);
        tickRefs.current[i]?.classList.toggle("on", on);
      });
      if (pillRef.current) {
        pillRef.current.classList.toggle("on", k >= 0.985);
      }
    };

    const play = () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      ang = 0;
      sx = 1;
      face = 1;
      pillRef.current?.classList.remove("on");
      tickRefs.current.forEach((g) => g?.classList.remove("on"));
      hlRefs.current.forEach((g) => g?.classList.remove("on"));
      const t0 = performance.now();
      const frame = (now) => {
        const t = now - t0;
        let k;
        if (t < liftoff) k = ease(t / liftoff) * 0.04;
        else {
          const u = Math.min(1, (t - liftoff) / flight);
          k = 0.04 + ease(u) * 0.96;
          if (u >= 1) {
            draw(1);
            timer = window.setTimeout(play, pause);
            return;
          }
        }
        draw(k);
        raf = requestAnimationFrame(frame);
      };
      raf = requestAnimationFrame(frame);
    };

    const onVisible = () => {
      if (!document.hidden) play();
    };
    play(); // autoplay, loops forever
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [d, hover, liftoff, flight, pause, trail]);

  return (
    <div className={`rj ${className || ""}`} style={style}>
      <style>{CSS}</style>
      <div className="rj-stage">
        <svg
          viewBox="0 0 1024 765"
          role="img"
          aria-label="Animated company timeline: a rocket takes off and flies along the highway from 2016 to the 2030 vision"
        >
          <defs>
            <filter id={blurId} x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="7" />
            </filter>
            <radialGradient id={glowId}>
              <stop offset="0" stopColor="#fff" />
              <stop offset=".35" stopColor="#22E6FF" />
              <stop offset="1" stopColor="#22E6FF" stopOpacity="0" />
            </radialGradient>
          </defs>

          <image href={bgSrc} width="1024" height="765" />

          {/* 2016 card (redrawn so the rocket can leave the pad) */}
          <g fontFamily="system-ui,sans-serif">
            <rect x="74" y="514" width="128" height="80" rx="14" fill="#fff" stroke="#D3E2FA" strokeWidth="1.5" />
            <text x="88" y="540" fontSize="17" fontWeight="800" fill="#1E6BFF">🚀 2016</text>
            <text x="88" y="560" fontSize="12.5" fontWeight="700" fill="#0B2A6F">Founded</text>
            <text x="88" y="574" fontSize="9" fill="#4F6896">Started our journey with a</text>
            <text x="88" y="585" fontSize="9" fill="#4F6896">vision to simplify business</text>
          </g>

          {/* glow around each card once passed */}
          {MILESTONES.map(([year, box], i) => box && (
            <rect
              key={year}
              ref={(el) => (hlRefs.current[i] = el)}
              className="rj-hl"
              x={box[0]}
              y={box[1]}
              width={box[2]}
              height={box[3]}
              rx="14"
            />
          ))}

          <path ref={pathRef} d={d} fill="none" stroke="none" />
          <path
            ref={trailGlowRef}
            d={d}
            fill="none"
            stroke="#22E6FF"
            strokeWidth="14"
            strokeLinecap="round"
            filter={`url(#${blurId})`}
          />
          <path
            ref={trailLineRef}
            d={d}
            fill="none"
            stroke="#fff"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* animated green ticks */}
          {MILESTONES.map(([year, box], i) => box && (
            <g
              key={year}
              ref={(el) => (tickRefs.current[i] = el)}
              className="rj-tk"
              transform={`translate(${box[0] + box[2] - 6},${box[1] + 6})`}
            >
              <circle className="rg" r="11" fill="none" stroke="#19C37D" strokeWidth="2" />
              <g className="tki">
                <circle r="12" fill="#19C37D" stroke="#fff" strokeWidth="2.5" />
                <path
                  d="M-5.5 0.5 L-1.5 4.5 L6 -4"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
          ))}

          <g ref={rocketRef}>
            <ellipse ref={flameRef} cx="0" cy="60" rx="12" ry="26" fill={`url(#${glowId})`} />
            <image href={rocketSrc} x="-25" y="-47.5" width="50" height="95" />
          </g>

          <g ref={pillRef} className="rj-pill">
            <rect x="792" y="8" width="160" height="28" rx="14" fill="#fff" stroke="#22E6FF" strokeWidth="2" />
            <text
              x="872"
              y="27"
              textAnchor="middle"
              fontSize="13.5"
              fontWeight="800"
              fill="#0B2A6F"
              fontFamily="system-ui,sans-serif"
            >
              Vision 2030
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}

export { RocketJourney, RocketJourney as JourneyVisual };

const CSS = `
.rj{background:#ffffff;width:100%;max-width:100%;margin:0 auto}
.rj svg{display:block;width:100%;height:auto}
.rj-stage{
  -webkit-mask-image:linear-gradient(to right,transparent,#000 5%,#000 95%,transparent),linear-gradient(to bottom,transparent,#000 5%,#000 94%,transparent);
  -webkit-mask-composite:source-in;
  mask-image:linear-gradient(to right,transparent,#000 5%,#000 95%,transparent),linear-gradient(to bottom,transparent,#000 5%,#000 94%,transparent);
  mask-composite:intersect}
.rj-hl{fill:none;stroke:#22E6FF;stroke-width:3;opacity:0;transition:opacity .35s;filter:drop-shadow(0 0 9px rgba(34,230,255,.95))}
.rj-hl.on{opacity:1}
.rj-tk .tki{transform:scale(0);transform-box:fill-box;transform-origin:center}
.rj-tk.on .tki{animation:rj-pop .55s cubic-bezier(.2,1.7,.4,1) forwards}
.rj-tk path{stroke-dasharray:16;stroke-dashoffset:16}
.rj-tk.on path{animation:rj-draw .4s .25s ease forwards}
.rj-tk .rg{opacity:0;transform-box:fill-box;transform-origin:center}
.rj-tk.on .rg{animation:rj-ring .8s ease-out forwards}
.rj-pill{opacity:0;transition:opacity .6s .3s}
.rj-pill.on{opacity:1}
@keyframes rj-pop{to{transform:scale(1)}}
@keyframes rj-draw{to{stroke-dashoffset:0}}
@keyframes rj-ring{0%{opacity:.8;transform:scale(1)}100%{opacity:0;transform:scale(3)}}
`;
