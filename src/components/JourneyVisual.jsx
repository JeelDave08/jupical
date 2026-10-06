/**
 * JourneyVisual.jsx
 *
 * Renders journey_visual_blue.png (static infinity-road with milestone cards).
 *
 * SVG overlay:
 *   • A closed infinity-shaped path that traces the blue road centre.
 *   • A rocket that travels the path continuously:
 *       2016 → 2018 → 2020 → 2024 → 2026 → 2030/∞ → back to 2016 (seamless)
 *   • Cyan exhaust trail rendered as a polyline behind the rocket.
 *   • Milestone dots subtly pulse when the rocket passes nearby.
 *
 * No React state is touched during animation — zero re-renders.
 * Uses requestAnimationFrame + SVGPathElement.getPointAtLength() for
 * true path-following with correct tangent-based rotation.
 */

import { useEffect, useRef } from 'react';
import './JourneyVisual.css';

/* ─────────────────────────────────────────────────────────────────────────
   INFINITY PATH  —  ViewBox: 1000 × 560
   Closed cubic-bezier infinity (∞) whose centre-line follows the blue road.
   Starts/ends at the LEFT TIP  (2016).  One full traversal = one loop.
────────────────────────────────────────────────────────────────────────── */
const INFINITY_PATH =
  'M 102,280 ' +
  // 2016 left tip → upper-left arc → 2018 top of left lobe
  'C 102,165 195,82  318,108 ' +
  // 2018 → sweep right across top of left lobe
  'C 402,128 450,170 488,222 ' +
  // cross-centre (going right & down)
  'C 526,274 546,294 578,310 ' +
  // 2024 — top of right lobe entry
  'C 618,326 675,314 728,282 ' +
  // 2026 — upper-right arc
  'C 798,242 868,198 894,232 ' +
  // 2030/∞ — right tip
  'C 924,260 924,300 894,328 ' +
  // right lobe bottom arc
  'C 860,368 790,386 728,360 ' +
  // swing back to centre crossing (bottom)
  'C 660,336 618,316 578,310 ' +
  // cross-centre (going left & up)
  'C 542,304 518,286 488,260 ' +
  // into bottom of left lobe — 2020
  'C 452,230 402,196 318,216 ' +
  // 2020 → bottom-left arc back to 2016
  'C 218,238 148,262 108,298 ' +
  'C 102,308 102,292 102,280 Z';

/*
  Fractional positions (0-1) of each milestone along the closed path.
  0.00 = leftmost point (2016).  Order follows the clock-wise upper half first.
*/
const MILESTONES = [
  { label: '2016', frac: 0.00 },
  { label: '2018', frac: 0.17 },
  { label: '2024', frac: 0.38 },
  { label: '2026', frac: 0.50 },
  { label: '2030', frac: 0.60 },
  { label: '2020', frac: 0.84 },
];

/* Duration for one complete loop */
const LOOP_MS = 18000;

/* Exhaust trail — number of historic positions to keep */
const TRAIL_LEN = 22;

export default function JourneyVisual() {
  const containerRef  = useRef(null);
  const pathRef       = useRef(null);   // hidden <path> for measurements
  const rocketGRef    = useRef(null);   // rocket <g>
  const trailGRef     = useRef(null);   // trail <g>
  const dotRefs       = useRef([]);     // milestone dot circles
  const rafRef        = useRef(null);
  const running       = useRef(false);
  const startTs       = useRef(null);
  const totalLen      = useRef(0);
  const posHistory    = useRef([]);

  /* ── Get {x, y, angle} at 0-1 fractional position ── */
  const getPoint = (frac) => {
    const len  = totalLen.current;
    const path = pathRef.current;
    if (!path || !len) return { x: 0, y: 0, angle: 0 };
    const dist    = ((frac % 1 + 1) % 1) * len;
    const pt      = path.getPointAtLength(dist);
    const eps     = Math.min(2, len * 0.0008);
    const ptA     = path.getPointAtLength((dist + eps) % len);
    const angle   = Math.atan2(ptA.y - pt.y, ptA.x - pt.x) * (180 / Math.PI);
    return { x: pt.x, y: pt.y, angle };
  };

  /* ── rAF tick ── */
  const tick = (ts) => {
    if (!running.current) return;
    if (!startTs.current) startTs.current = ts;

    const frac = ((ts - startTs.current) % LOOP_MS) / LOOP_MS;
    const { x, y, angle } = getPoint(frac);

    /* Rocket */
    const rg = rocketGRef.current;
    if (rg) {
      rg.setAttribute('transform', `translate(${x.toFixed(2)},${y.toFixed(2)}) rotate(${angle.toFixed(2)})`);
      rg.style.opacity = '1';
    }

    /* Trail */
    posHistory.current.push({ x, y });
    if (posHistory.current.length > TRAIL_LEN) posHistory.current.shift();

    const trailG = trailGRef.current;
    if (trailG && posHistory.current.length > 1) {
      let poly = trailG.firstChild;
      if (!poly) {
        poly = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
        poly.setAttribute('fill', 'none');
        poly.setAttribute('stroke-linecap', 'round');
        poly.setAttribute('stroke-linejoin', 'round');
        trailG.appendChild(poly);
      }
      const pts = posHistory.current.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
      poly.setAttribute('points', pts);
      poly.setAttribute('stroke', 'url(#jv-trail)');
      poly.setAttribute('stroke-width', '7');
      poly.setAttribute('opacity', '0.82');
    }

    /* Milestone dot pulses */
    MILESTONES.forEach((ms, i) => {
      const dot = dotRefs.current[i];
      if (!dot) return;
      let diff = Math.abs(frac - ms.frac);
      if (diff > 0.5) diff = 1 - diff;
      const prox  = diff < 0.05 ? (1 - diff / 0.05) : 0;
      dot.setAttribute('r', (4 + prox * 6).toFixed(1));
      dot.setAttribute('opacity', (0.55 + prox * 0.45).toFixed(2));
    });

    rafRef.current = requestAnimationFrame(tick);
  };

  /* ── Synchronize milestone dot positions with path (run once) ── */
  const placeDots = () => {
    MILESTONES.forEach((ms, i) => {
      const dot = dotRefs.current[i];
      if (!dot || !totalLen.current) return;
      const dist = ms.frac * totalLen.current;
      const pt   = pathRef.current.getPointAtLength(dist);
      dot.setAttribute('cx', pt.x);
      dot.setAttribute('cy', pt.y);
    });
  };

  const startLoop = () => {
    if (running.current) return;
    if (!totalLen.current && pathRef.current) {
      totalLen.current = pathRef.current.getTotalLength();
      placeDots();
    }
    posHistory.current = [];
    startTs.current    = null;
    running.current    = true;
    rafRef.current     = requestAnimationFrame(tick);
  };

  const stopLoop = () => {
    running.current = false;
    if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) startLoop();
        else                      stopLoop();
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => { stopLoop(); obs.disconnect(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="journey-visual" ref={containerRef}>

      {/* Base image — completely untouched */}
      <img
        src="/journey_visual_blue.png"
        alt="Jupical Technologies journey timeline — 2016 to 2030 and beyond"
        className="journey-visual__img"
        draggable="false"
      />

      {/* SVG overlay — rocket + trail */}
      <svg
        className="journey-visual__svg"
        viewBox="0 0 1000 560"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          {/* Exhaust trail gradient: transparent → bright cyan at rocket end */}
          <linearGradient id="jv-trail" gradientUnits="userSpaceOnUse"
            x1="0" y1="0" x2="1000" y2="0">
            <stop offset="0%"   stopColor="#00E5FF" stopOpacity="0"    />
            <stop offset="60%"  stopColor="#00BFFF" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="1"    />
          </linearGradient>

          {/* Rocket body */}
          <linearGradient id="jv-rbody" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#EEF6FF" />
            <stop offset="40%"  stopColor="#90CAF9" />
            <stop offset="100%" stopColor="#1565C0" />
          </linearGradient>

          {/* Fin */}
          <linearGradient id="jv-rfin" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#1976D2" />
            <stop offset="100%" stopColor="#0D47A1" />
          </linearGradient>

          {/* Rocket glow */}
          <filter id="jv-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3.5" result="b" />
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>

          {/* Exhaust nozzle glow */}
          <filter id="jv-exhf" x="-150%" y="-150%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="5" result="b" />
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>

          {/* Trail glow */}
          <filter id="jv-trailf" x="-20%" y="-100%" width="140%" height="300%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>

          {/* Milestone dot glow */}
          <filter id="jv-dotf" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Hidden measurement path */}
        <path ref={pathRef} d={INFINITY_PATH} fill="none" stroke="none" visibility="hidden" />

        {/* Exhaust trail */}
        <g ref={trailGRef} filter="url(#jv-trailf)" />

        {/* Milestone dots (positions set dynamically after path is measured) */}
        {MILESTONES.map((ms, i) => (
          <circle
            key={ms.label}
            ref={el => { dotRefs.current[i] = el; }}
            cx="0" cy="0" r="4"
            fill="#00E5FF"
            opacity="0.55"
            filter="url(#jv-dotf)"
          />
        ))}

        {/* ── Rocket — nose faces +X, rotate() aligns it to path tangent ── */}
        <g
          ref={rocketGRef}
          opacity="0"
          filter="url(#jv-glow)"
          style={{ willChange: 'transform' }}
        >
          {/* Exhaust glow (behind body) */}
          <ellipse cx="-24" cy="0" rx="16" ry="5.5"
            fill="#00E5FF" opacity="0.9" filter="url(#jv-exhf)" />
          <ellipse cx="-20" cy="0" rx="8"  ry="2.5"
            fill="#ffffff" opacity="0.85" />

          {/* Body */}
          <ellipse cx="0" cy="0" rx="18" ry="10" fill="url(#jv-rbody)" />
          {/* Belly highlight */}
          <ellipse cx="0" cy="3" rx="11" ry="4.5" fill="#E3F2FD" opacity="0.5" />

          {/* Nose cone */}
          <path d="M 15,-4.5 Q 32,0 15,4.5 Z" fill="#BBDEFB" />
          <ellipse cx="26" cy="0" rx="5" ry="2" fill="#64B5F6" opacity="0.65" />

          {/* Window */}
          <circle cx="3"   cy="-1" r="4.8" fill="white"    opacity="0.95" />
          <circle cx="3"   cy="-1" r="3.2" fill="#1E88E5"                  />
          <circle cx="1.5" cy="-2.5" r="1.3" fill="white"  opacity="0.8"  />

          {/* Fins */}
          <path d="M -14,-3.5 L -24,-14 L -8,-8 Z" fill="url(#jv-rfin)" />
          <path d="M -14, 3.5 L -24, 14 L -8, 8 Z"  fill="url(#jv-rfin)" />

          {/* Nozzle */}
          <rect x="-23" y="-4.5" width="8" height="9" rx="3" fill="#42A5F5" />
          <ellipse cx="-23" cy="0" rx="4" ry="4.5" fill="#00E5FF" opacity="0.88" />
        </g>
      </svg>
    </div>
  );
}
