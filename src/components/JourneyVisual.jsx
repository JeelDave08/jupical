/**
 * JourneyVisual.jsx
 *
 * Renders journey_visual_blue.png unchanged (it already contains the
 * static 3-D rocket on the launchpad, milestone cards and the blue road).
 *
 * On top of that image we overlay an SVG with:
 *   • An invisible <path> that traces the actual road in the image.
 *   • An animated blue rocket + cyan exhaust glow that travel along
 *     that path using the Web Animations API (offsetDistance /
 *     CSS Motion Path) — no React state is touched during animation,
 *     so there are zero unnecessary re-renders.
 *
 * Journey:  2016 → 2018 → 2020 → 2022 → 2024 → 2026 → ∞
 * After the rocket fades out past 2026 it silently resets and loops.
 */

import { useEffect, useRef } from 'react';
import './JourneyVisual.css';

/* ─── Path geometry ────────────────────────────────────────────────────────
   The SVG viewBox is 1000×1000 matching the square image.
   Points are traced over the image's glowing blue road:

     Bottom-left launchpad (2016) → wide S-curve around the planet orb
     → top-right 2026 milestone → off-canvas ∞ extension.

   Tweak control points here if you want to micro-adjust the path.
─────────────────────────────────────────────────────────────────────────── */
const ROAD =
  'M 175,870 ' +
  // bottom section — launchpad to first bend
  'C 240,820 310,780 380,745 ' +
  // left arc going up
  'C 435,718 475,670 490,620 ' +
  // top of left loop
  'C 503,578 503,548 492,518 ' +
  // entering loop around planet
  'C 475,488 448,464 428,444 ' +
  // loop floor
  'C 400,418 390,402 402,382 ' +
  // loop right side rising
  'C 418,358 452,348 492,354 ' +
  // continuing clockwise
  'C 532,360 562,380 577,410 ' +
  // back past centre heading right
  'C 593,442 592,472 582,502 ' +
  // heading up-left exit from loop
  'C 567,534 546,560 536,595 ' +
  // sweeping right and up
  'C 521,636 522,682 542,722 ' +
  // right section
  'C 562,756 612,776 662,760 ' +
  // curving toward upper-right
  'C 712,744 752,710 776,670 ' +
  // top right section
  'C 802,630 812,582 800,532 ' +
  // descending near 2024
  'C 786,480 762,444 750,414 ' +
  // rising toward 2026
  'C 740,384 746,350 772,324 ' +
  // 2026 milestone
  'C 802,294 846,283 877,268 ';

// Extension past 2026 — curves toward top-right off-canvas (∞)
const FUTURE =
  'C 920,248 972,228 1044,212 ' +
  'C 1110,196 1170,192 1240,192';

const FULL_PATH = ROAD + FUTURE;

// What fraction (0-1) of FULL_PATH corresponds to the 2026 milestone
// The road section is ~87 % of the full path
const FRAC_2026 = 0.87;

// Timing (seconds)
const DURATION_TOTAL  = 14;   // full journey start → end
const PAUSE_2026      = 1.0;  // hold at 2026 before going to ∞
const FADE_OUT_DUR    = 2.5;  // opacity fade while travelling to ∞
const PAUSE_AT_START  = 0.8;  // invisible pause before re-appearing

export default function JourneyVisual() {
  const containerRef = useRef(null);
  const rocketRef    = useRef(null);
  const exhaustRef   = useRef(null);
  const activeAnims  = useRef([]);
  const running      = useRef(false);

  /* ── helpers ─────────────────────────────────────────────────────────── */

  /** Promisified delay */
  const wait = ms => new Promise(r => setTimeout(r, ms));

  /** Direct-DOM offsetDistance animation via Web Animations API */
  const animOffset = (el, from, to, durationSec, easing = 'cubic-bezier(0.37,0,0.63,1)') => {
    let resolve;
    const promise = new Promise(r => { resolve = r; });
    const anim = el.animate(
      [{ offsetDistance: `${from}%` }, { offsetDistance: `${to}%` }],
      { duration: durationSec * 1000, easing, fill: 'forwards' }
    );
    activeAnims.current.push(anim);
    anim.onfinish = () => {
      el.style.offsetDistance = `${to}%`;
      resolve();
    };
    anim.oncancel = () => resolve();
    return promise;
  };

  /** Direct-DOM opacity fade */
  const animOpacity = (el, from, to, durationSec) => {
    const anim = el.animate(
      [{ opacity: from }, { opacity: to }],
      { duration: durationSec * 1000, easing: 'ease-in', fill: 'forwards' }
    );
    activeAnims.current.push(anim);
  };

  /** Cancel all running animations immediately */
  const cancelAll = () => {
    activeAnims.current.forEach(a => { try { a.cancel(); } catch (_) {} });
    activeAnims.current = [];
  };

  /* ── main loop ───────────────────────────────────────────────────────── */
  const loop = async () => {
    const rocket  = rocketRef.current;
    const exhaust = exhaustRef.current;
    if (!rocket || !exhaust || !running.current) return;

    // Reset positions silently (opacity 0)
    rocket.style.offsetDistance  = '0%';
    exhaust.style.offsetDistance = '0%';
    rocket.style.opacity  = '0';
    exhaust.style.opacity = '0';

    await wait(PAUSE_AT_START * 1000);
    if (!running.current) return;

    // Appear at launchpad
    rocket.style.opacity  = '1';
    exhaust.style.opacity = '1';

    const durTo2026   = DURATION_TOTAL * FRAC_2026;
    const durToInfty  = DURATION_TOTAL * (1 - FRAC_2026);

    // ── Phase 1: 2016 → 2026 ──
    await animOffset(rocket,  0, FRAC_2026 * 100, durTo2026);
    await animOffset(exhaust, 0, FRAC_2026 * 100, durTo2026);
    if (!running.current) return;

    await wait(PAUSE_2026 * 1000);
    if (!running.current) return;

    // ── Phase 2: 2026 → ∞ (with fade) ──
    animOffset(rocket,  FRAC_2026 * 100, 100, durToInfty);
    animOffset(exhaust, FRAC_2026 * 100, 100, durToInfty);
    animOpacity(rocket,  1, 0, FADE_OUT_DUR);
    animOpacity(exhaust, 1, 0, FADE_OUT_DUR);

    await wait(durToInfty * 1000);
    if (!running.current) return;

    // tiny pause, then restart
    await wait(400);
    if (running.current) loop();
  };

  /* ── Intersection Observer ───────────────────────────────────────────── */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running.current) {
          running.current = true;
          loop();
        } else if (!entry.isIntersecting && running.current) {
          running.current = false;
          cancelAll();
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);

    return () => {
      running.current = false;
      cancelAll();
      obs.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── Render ──────────────────────────────────────────────────────────── */
  return (
    <div className="journey-visual" ref={containerRef}>

      {/* Base image — completely untouched */}
      <img
        src="/journey_visual_blue.png"
        alt="Jupical Technologies journey timeline"
        className="journey-visual__img"
        draggable="false"
      />

      {/* SVG overlay — only the animated rocket lives here */}
      <svg
        className="journey-visual__svg"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          {/* Cyan exhaust glow */}
          <radialGradient id="jv-exh" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#00E5FF" stopOpacity="1"  />
            <stop offset="55%"  stopColor="#0075FF" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#003FFF" stopOpacity="0"  />
          </radialGradient>

          {/* Rocket body gradient */}
          <linearGradient id="jv-rbody" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#42A5F5" />
            <stop offset="100%" stopColor="#0D47A1" />
          </linearGradient>

          {/* Drop-shadow + glow for rocket */}
          <filter id="jv-glow" x="-70%" y="-70%" width="240%" height="240%">
            <feGaussianBlur stdDeviation="4.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Soft glow for exhaust */}
          <filter id="jv-exh-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Cyan exhaust (travels slightly behind rocket) ── */}
        <g
          ref={exhaustRef}
          style={{
            offsetPath:     `path("${FULL_PATH}")`,
            offsetDistance: '0%',
            offsetRotate:   'auto',
            opacity: 0,
            willChange: 'offset-distance, opacity',
          }}
        >
          {/* Main glow blob pointing backward */}
          <ellipse
            cx="-26" cy="0"
            rx="28" ry="10"
            fill="url(#jv-exh)"
            filter="url(#jv-exh-glow)"
          />
          {/* Bright core streak */}
          <ellipse
            cx="-18" cy="0"
            rx="12" ry="5"
            fill="#00E5FF"
            opacity="0.85"
          />
          {/* Tiny hot-white centre */}
          <ellipse
            cx="-14" cy="0"
            rx="5" ry="2.5"
            fill="#ffffff"
            opacity="0.9"
          />
        </g>

        {/* ── Animated Rocket ── */}
        {/*
            The rocket points in the +X direction (nose at right).
            offsetRotate:'auto' auto-rotates it to face the path tangent.
            Rocket is centred at (0,0) so offset-anchor hits its nose.
        */}
        <g
          ref={rocketRef}
          style={{
            offsetPath:     `path("${FULL_PATH}")`,
            offsetDistance: '0%',
            offsetRotate:   'auto',
            opacity: 0,
            willChange: 'offset-distance, opacity',
          }}
          filter="url(#jv-glow)"
        >
          {/* Body */}
          <ellipse cx="0" cy="0" rx="16" ry="9" fill="url(#jv-rbody)" />

          {/* Nose cone */}
          <path
            d="M 14,-4 Q 28,0 14,4 Z"
            fill="#64B5F6"
          />

          {/* Belly highlight */}
          <ellipse cx="-1" cy="2" rx="10" ry="4.5" fill="#E3F2FD" opacity="0.65" />

          {/* Porthole */}
          <circle cx="3" cy="-1" r="4"   fill="white"   opacity="0.95" />
          <circle cx="3" cy="-1" r="2.5" fill="#29B6F6" />
          <circle cx="2" cy="-2" r="1"   fill="white"   opacity="0.7"  />

          {/* Upper fin */}
          <path d="M -14,-2 L -22,-11 L -8,-6 Z" fill="#0D47A1" />
          {/* Lower fin */}
          <path d="M -14, 2 L -22, 11 L -8, 6 Z"  fill="#0D47A1" />

          {/* Nozzle */}
          <rect x="-20" y="-3.5" width="7" height="7" rx="2.5" fill="#42A5F5" />
          {/* Nozzle opening glow */}
          <ellipse cx="-20" cy="0" rx="3" ry="3.5" fill="#00E5FF" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
}
