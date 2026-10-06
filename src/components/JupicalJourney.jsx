import { useEffect, useRef, useState } from 'react';
import './JupicalJourney.css';

// ALIGNMENT MODE: Set to true during calibration, false for production.
const DEBUG = false;

const NW = 1024;
const NH = 1024;

/*
  Smooth cubic bezier centerline for the 3D infinity / figure-8 track on journey_visual_blue.png
*/
const TRACK_PATH =
  'M 175 870 ' +
  'C 201 853, 279 803, 330 765 ' +
  'C 381 727, 462 681, 480 640 ' +
  'C 498 599, 465 565, 440 520 ' +
  'C 415 475, 335 399, 330 372 ' +
  'C 325 345, 383 360, 410 360 ' +
  'C 437 360, 470 356, 492 374 ' +
  'C 515 392, 531 434, 545 470 ' +
  'C 559 506, 552 557, 575 590 ' +
  'C 598 623, 645 657, 685 670 ' +
  'C 725 683, 783 690, 815 670 ' +
  'C 848 650, 893 602, 880 550 ' +
  'C 868 498, 777 405, 740 360 ' +
  'C 703 315, 658 297, 660 280 ' +
  'C 662 263, 713 277, 750 260 ' +
  'C 787 243, 845 199, 880 176 ' +
  'C 915 153, 933 138, 960 120 ' +
  'C 987 102, 1027 78, 1040 70';

const MILESTONES = [
  { year: '2016', label: 'Founded', fraction: 0.165 },
  { year: '2018', label: 'Pvt. Ltd. Registration', fraction: 0.302 },
  { year: '2020', label: 'Global Expansion', fraction: 0.538 },
  { year: '2024', label: 'Scaling Worldwide', fraction: 0.810 },
  { year: '2026', label: 'Future Growth', fraction: 0.917 },
  { year: '2030', label: 'Vision 2030', fraction: 0.959 },
];

const MOVE_DURATION = 1700; // ms
const PAUSE_DURATION = 900; // ms
const EXIT_DURATION = 2800; // ms

// Easing function: x < 0.5 ? 2*x^2 : 1 - (-2*x + 2)^2 / 2
function ease(x) {
  return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
}

export default function JupicalJourney() {
  const cardRef = useRef(null);
  const pathRef = useRef(null);
  const rocketRef = useRef(null);
  const animFrameRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  const [activeMilestone, setActiveMilestone] = useState(null);
  const [milestonePositions, setMilestonePositions] = useState([]);

  // Compute milestone points from path length
  useEffect(() => {
    if (!pathRef.current) return;
    const path = pathRef.current;
    const totalLength = path.getTotalLength();
    if (!totalLength) return;

    const positions = MILESTONES.map((m) => {
      const pt = path.getPointAtLength(m.fraction * totalLength);
      return { ...m, x: pt.x, y: pt.y };
    });
    setMilestonePositions(positions);
  }, []);

  const runAnimation = () => {
    if (!pathRef.current || !rocketRef.current) return;
    const path = pathRef.current;
    const totalLength = path.getTotalLength();
    if (!totalLength) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      const lastStop = MILESTONES[MILESTONES.length - 1];
      const pt = path.getPointAtLength(lastStop.fraction * totalLength);
      const ptNext = path.getPointAtLength(Math.min(totalLength, (lastStop.fraction + 0.002) * totalLength));
      const angle = (Math.atan2(ptNext.y - pt.y, ptNext.x - pt.x) * 180) / Math.PI;
      if (rocketRef.current) {
        rocketRef.current.setAttribute('transform', `translate(${pt.x}, ${pt.y}) rotate(${angle}) scale(0.95)`);
        rocketRef.current.style.opacity = '1';
        rocketRef.current.style.display = 'block';
      }
      setActiveMilestone(null);
      return;
    }

    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }

    setActiveMilestone(null);

    const stops = [0, ...MILESTONES.map((m) => m.fraction)];
    let segIndex = 0;
    let state = 'move'; // 'move' | 'pause' | 'exit' | 'done'
    let stateStartTime = performance.now();

    const F_LAST = stops[stops.length - 1];
    const D1 = (1 - F_LAST) * totalLength;
    const D2 = 0.6 * NW;

    const setRocketAt = (f, opacity = 1) => {
      const clampedF = Math.max(0, Math.min(1, f));
      const pt = path.getPointAtLength(clampedF * totalLength);
      const deltaF = clampedF + 0.002 <= 1 ? clampedF + 0.002 : clampedF - 0.002;
      const pt2 = path.getPointAtLength(deltaF * totalLength);
      const dx = clampedF + 0.002 <= 1 ? pt2.x - pt.x : pt.x - pt2.x;
      const dy = clampedF + 0.002 <= 1 ? pt2.y - pt.y : pt.y - pt2.y;
      const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

      if (rocketRef.current) {
        rocketRef.current.setAttribute(
          'transform',
          `translate(${pt.x}, ${pt.y}) rotate(${angle}) scale(0.95)`
        );
        rocketRef.current.style.opacity = String(opacity);
        rocketRef.current.style.display = 'block';
      }
    };

    // Initialize rocket at starting point
    setRocketAt(0, 1);

    const tick = (now) => {
      const elapsed = now - stateStartTime;

      if (state === 'move') {
        const progress = Math.min(1, elapsed / MOVE_DURATION);
        const t = ease(progress);
        const startF = stops[segIndex];
        const endF = stops[segIndex + 1];
        const currentF = startF + t * (endF - startF);

        setRocketAt(currentF, 1);

        if (progress >= 1) {
          state = 'pause';
          stateStartTime = now;
          setActiveMilestone(segIndex);
        }
      } else if (state === 'pause') {
        if (elapsed >= PAUSE_DURATION) {
          setActiveMilestone(null);
          segIndex++;
          if (segIndex < MILESTONES.length) {
            state = 'move';
            stateStartTime = now;
          } else {
            state = 'exit';
            stateStartTime = now;
          }
        }
      } else if (state === 'exit') {
        const progress = Math.min(1, elapsed / EXIT_DURATION);
        const k = progress;
        const dist = (D1 + D2) * Math.pow(k, 1.6);

        let opacity = 1;
        if (progress > 0.75) {
          opacity = Math.max(0, 1 - (progress - 0.75) / 0.25);
        }

        if (dist <= D1) {
          const currentF = F_LAST + dist / totalLength;
          setRocketAt(currentF, opacity);
        } else {
          const extraDist = dist - D1;
          const endPt = path.getPointAtLength(totalLength);
          const prevPt = path.getPointAtLength(Math.max(0, totalLength - 3));
          const dx = endPt.x - prevPt.x;
          const dy = endPt.y - prevPt.y;
          const mag = Math.hypot(dx, dy) || 1;
          const ux = dx / mag;
          const uy = dy / mag;
          const posX = endPt.x + ux * extraDist;
          const posY = endPt.y + uy * extraDist;
          const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

          if (rocketRef.current) {
            rocketRef.current.setAttribute(
              'transform',
              `translate(${posX}, ${posY}) rotate(${angle}) scale(0.95)`
            );
            rocketRef.current.style.opacity = String(opacity);
          }
        }

        if (progress >= 1) {
          state = 'done';
          if (rocketRef.current) {
            rocketRef.current.style.display = 'none';
          }
          return;
        }
      }

      if (state !== 'done') {
        animFrameRef.current = requestAnimationFrame(tick);
      }
    };

    animFrameRef.current = requestAnimationFrame(tick);
  };

  // IntersectionObserver to trigger animation once upon entering viewport
  useEffect(() => {
    const cardEl = cardRef.current;
    if (!cardEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            runAnimation();
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(cardEl);

    return () => {
      observer.disconnect();
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  // Replay on card click
  const handleCardClick = () => {
    runAnimation();
  };

  return (
    <section className="jj-section" id="journey" aria-label="Jupical Journey">
      <div className="jj-wrap">
        {/* Left Column: 3D Infinity Card */}
        <div
          className="jj-card"
          ref={cardRef}
          onClick={handleCardClick}
          title="Click to replay animation"
          role="region"
          aria-label="Interactive Journey Map"
        >
          <div className="jj-media">
            <img
              src="/journey_visual_blue.png"
              alt="Jupical Journey 3D Infinity Timeline"
              className="jj-img"
            />
            <svg
              className="jj-svg"
              viewBox={`0 0 ${NW} ${NH}`}
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="jj-body" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#cfd9f5" />
                </linearGradient>
                <radialGradient id="jj-flame" cx="1" cy="0.5" r="1">
                  <stop offset="0%" stopColor="#fff6c2" stopOpacity="1" />
                  <stop offset="50%" stopColor="#ffb347" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ff6a3d" stopOpacity="0" />
                </radialGradient>
                <filter id="jj-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Centerline Path */}
              <path
                ref={pathRef}
                d={TRACK_PATH}
                fill="none"
                stroke={DEBUG ? '#ff0000' : 'none'}
                strokeWidth={DEBUG ? '3' : '0'}
                strokeDasharray={DEBUG ? '6,3' : 'none'}
              />

              {/* Milestone Pulsing Rings (Only visible while paused at milestone) */}
              {milestonePositions.map((m, idx) => {
                const isActive = activeMilestone === idx;
                return (
                  <g key={m.year}>
                    {/* Active Pulsing Ring */}
                    {isActive && (
                      <circle
                        cx={m.x}
                        cy={m.y}
                        r={NW * 0.022}
                        fill="rgba(255, 122, 69, 0.2)"
                        stroke="#ff7a45"
                        strokeWidth="3"
                        filter="url(#jj-glow)"
                        className="jj-pulse-ring"
                      />
                    )}

                    {/* Debug Mode: Red marker & year label */}
                    {DEBUG && (
                      <g>
                        <circle cx={m.x} cy={m.y} r="6" fill="#ff0000" stroke="#ffffff" strokeWidth="2" />
                        <text
                          x={m.x + 10}
                          y={m.y + 4}
                          fill="#ff0000"
                          fontSize="16"
                          fontWeight="bold"
                          stroke="#ffffff"
                          strokeWidth="3"
                          paintOrder="stroke"
                        >
                          {m.year} ({m.fraction})
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}

              {/* Animated SVG Rocket */}
              <g ref={rocketRef} id="jj-rocket" style={{ display: 'none' }}>
                <ellipse cx="-24" cy="0" rx="26" ry="7" fill="url(#jj-flame)" />
                <path d="M-6,-9 L-16,-17 L-4,-4 Z" fill="#2f6bff" />
                <path d="M-6,9 L-16,17 L-4,4 Z" fill="#2f6bff" />
                <path
                  d="M-8,-8 C0,-12 14,-9 22,0 C14,9 0,12 -8,8 Z"
                  fill="url(#jj-body)"
                  stroke="#9db4ee"
                  strokeWidth="1"
                />
                <path d="M12,-7 C18,-5 21,-2 22,0 C21,2 18,5 12,7 Z" fill="#2f6bff" />
                <circle cx="5" cy="0" r="3.6" fill="#7cc8ff" stroke="#2f6bff" strokeWidth="1.4" />
              </g>
            </svg>
          </div>
        </div>

        {/* Right Column: Paragraphs & Button */}
        <div className="jj-text">
          <p className="jj-p">
            Founded in 2016 and officially registered as a Pvt. Ltd. in 2018, Jupical began with a vision to revolutionize business operations for industries worldwide. As a certified Odoo partner, our relentless pursuit of innovation has helped organizations across the globe achieve automation, efficiency, and measurable growth.
          </p>
          <p className="jj-p">
            Our dedicated resource model allows us to deliver Odoo ERP implementation and support services with consistent quality no matter where our clients are located.
          </p>
          <a href="#contact" className="jj-btn" id="jj-hire-btn">
            Hire Odoo Expert
          </a>
        </div>
      </div>
    </section>
  );
}
