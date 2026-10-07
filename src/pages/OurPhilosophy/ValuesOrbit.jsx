/* ================================================================
   ValuesOrbit — six pills around a dashed circle at 60° steps.
   Auto-advances every 4.5 s. Hover/click selects. Keyboard nav.
   prefers-reduced-motion: no auto-advance.
   ================================================================ */
import { useState, useEffect, useRef, useCallback } from 'react';
import { VALUES } from './philosophyData';

const REDUCE =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

/* Convert polar (index, radius=40) → SVG percentage coords */
function angle(i) {
  return ((i * 60 - 90) * Math.PI) / 180;
}
function nodePos(i) {
  return {
    left: `${50 + 40 * Math.cos(angle(i))}%`,
    top:  `${50 + 40 * Math.sin(angle(i))}%`,
  };
}
function lineEnd(i) {
  return {
    x2: 50 + 40 * Math.cos(angle(i)),
    y2: 50 + 40 * Math.sin(angle(i)),
  };
}

export default function ValuesOrbit() {
  const [cur, setCur] = useState(0);
  const [fade, setFade] = useState(true);
  const timerRef = useRef(null);
  const ringRef = useRef(null);

  /* ---- helpers ---- */
  const stopTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  }, []);

  const showSlide = useCallback((i) => {
    setFade(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setCur(i);
        setFade(true);
      });
    });
  }, []);

  const selectAndStop = useCallback(
    (i) => {
      stopTimer();
      showSlide(i);
    },
    [stopTimer, showSlide]
  );

  /* ---- auto-advance ---- */
  useEffect(() => {
    if (REDUCE) return;
    timerRef.current = setInterval(() => {
      setCur((prev) => {
        const next = (prev + 1) % VALUES.length;
        setFade(false);
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            setCur(next);
            setFade(true);
          })
        );
        return prev; // keep prev momentarily; state updates are batched
      });
    }, 4500);
    return () => stopTimer();
  }, [stopTimer]);

  /* ---- keyboard nav on ring ---- */
  function onRingKeyDown(e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      selectAndStop((cur + 1) % VALUES.length);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      selectAndStop((cur - 1 + VALUES.length) % VALUES.length);
    }
  }

  const { x2, y2 } = lineEnd(cur);
  const [label, desc] = VALUES[cur];
  const cleanLabel = label.replace('\n', ' ');

  return (
    <section className="phil-values" id="values">
      <div className="phil-wrap">
        <h2 className="phil-section-h2">Our Core Values</h2>
        <p className="phil-section-sub">
          Every decision we make in architecture, in communication, in
          delivery flows from the same beliefs. These aren't words on a
          wall. They're the reason we have never failed a project.
        </p>

        <div className="phil-orb">
          {/* ---- Ring ---- */}
          <div
            className="phil-ring"
            id="phil-ring"
            role="tablist"
            aria-label="Core values"
            ref={ringRef}
            onKeyDown={onRingKeyDown}
          >
            {/* SVG: dashed circle + animated line */}
            <svg
              viewBox="0 0 100 100"
              aria-hidden="true"
              className="phil-ring__svg"
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#D6E4FA"
                strokeWidth="0.4"
                strokeDasharray="1 2"
              />
              <line
                x1="50"
                y1="50"
                x2={x2}
                y2={y2}
                stroke="#0A6CFF"
                strokeWidth="0.7"
                strokeLinecap="round"
                style={{ transition: 'all 0.5s' }}
              />
            </svg>

            {/* Hub */}
            <div className="phil-hub" aria-hidden="true">
              <img
                src="/hero/logo.png"
                alt="Jupical"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>

            {/* Pill nodes */}
            {VALUES.map(([name], i) => (
              <button
                key={name}
                role="tab"
                aria-selected={i === cur}
                id={`phil-tab-${i}`}
                aria-controls="phil-panel"
                className={`phil-node${i === cur ? ' phil-node--active' : ''}`}
                style={nodePos(i)}
                onClick={() => selectAndStop(i)}
                onMouseEnter={() => selectAndStop(i)}
              >
                <span className="phil-node__label">
                  {name.includes('\n')
                    ? name.split('\n').map((line, idx, arr) => (
                        <span key={idx} style={{ display: 'block' }}>
                          {line}
                        </span>
                      ))
                    : name}
                </span>
                <i className="phil-node__num" aria-hidden="true">
                  {i + 1}
                </i>
              </button>
            ))}
          </div>

          {/* ---- Detail panel ---- */}
          <div
            id="phil-panel"
            role="tabpanel"
            aria-live="polite"
            className="phil-panel"
          >
            <div
              className={`phil-panel__inner${fade ? ' phil-panel__inner--fade' : ''}`}
            >
              <span className="phil-panel__num">{cur + 1} / {VALUES.length}</span>
              <h3 className="phil-panel__h3">{cleanLabel}</h3>
              <p className="phil-panel__p">{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
