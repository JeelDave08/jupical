import React, { useEffect, useRef } from 'react';
import './WhyJupical.css';

export default function WhyJupicalJourney() {
  const pathRef = useRef(null);
  const arrowHeadRef = useRef(null);
  const glowPathRef = useRef(null);

  /* Continuous smooth upward traveling arrow animation (4.5s loop) */
  useEffect(() => {
    let animId;
    let startTime = null;
    const duration = 4800; // ms

    const animateArrow = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) % duration;
      const progress = elapsed / duration; // 0 to 1

      const path = pathRef.current;
      const head = arrowHeadRef.current;
      const glowPath = glowPathRef.current;

      if (path && head && glowPath) {
        const totalLength = path.getTotalLength();
        // Leading edge of the arrow travels from 0 to totalLength
        const currentDist = progress * totalLength;
        const trailLength = Math.min(currentDist, totalLength * 0.45);

        // Update dash array for traveling stroke
        const dashArray = `0 ${currentDist - trailLength} ${trailLength} ${totalLength}`;
        path.setAttribute('stroke-dasharray', dashArray);
        glowPath.setAttribute('stroke-dasharray', dashArray);

        // Position & rotate arrowhead at leading point
        const point = path.getPointAtLength(currentDist);
        const nextDist = Math.min(totalLength, currentDist + 2);
        const nextPoint = path.getPointAtLength(nextDist);

        const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI);
        head.setAttribute(
          'transform',
          `translate(${point.x}, ${point.y}) rotate(${angle})`
        );
        head.setAttribute('opacity', progress > 0.02 && progress < 0.98 ? '1' : `${progress <= 0.02 ? progress * 50 : (1 - progress) * 50}`);
      }

      animId = requestAnimationFrame(animateArrow);
    };

    animId = requestAnimationFrame(animateArrow);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="why-journey-section" id="journey">
      <div className="container why-journey-container">
        {/* LEFT COLUMN: Narrative Timeline */}
        <div className="why-journey-left">
          <div className="why-badge">OUR JOURNEY</div>
          <h2 className="why-journey-heading">
            Out <span className="why-journey-heading-blue">Growth Story</span>
          </h2>
          <p className="why-journey-subtitle">
            From One Person's Vision to a Global Team
          </p>

          <div className="why-timeline-track">
            {/* Timeline Line */}
            <div className="why-timeline-vertical-line" />

            {/* 2016 Item */}
            <div className="why-timeline-item">
              <div className="why-timeline-node">
                <div className="why-timeline-dot" />
              </div>
              <div className="why-timeline-body">
                <h3 className="why-timeline-item-title">2016 – The Beginning</h3>
                <p>
                  Jupical started with a single resource and one clear vision: to deliver world-class ERP solutions built on open-source technology like Odoo, making enterprise-grade systems accessible to businesses of every size.
                </p>
              </div>
            </div>

            {/* 2018 Item */}
            <div className="why-timeline-item">
              <div className="why-timeline-node">
                <div className="why-timeline-dot" />
              </div>
              <div className="why-timeline-body">
                <h3 className="why-timeline-item-title">2018 – Official Foundation</h3>
                <p>
                  What began as an idea became a company. Jupical was officially registered as a Private Limited entity, marking the shift from a solo vision to a structured, accountable business.
                </p>
              </div>
            </div>

            {/* Today Item */}
            <div className="why-timeline-item">
              <div className="why-timeline-node">
                <div className="why-timeline-dot" />
              </div>
              <div className="why-timeline-body">
                <h3 className="why-timeline-item-title">Today – A Global Team</h3>
                <p>
                  Jupical has grown into a team of 40+ skilled professionals working with clients and Odoo partners across the globe, while staying true to the same founding vision: accurate, honest, and world-class ERP implementation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: 3D Growth Stage (Globe + 3 Pillars + Smooth Green Arrow) */}
        <div className="why-journey-right">
          <div className="why-growth-stage-wrapper">
            <svg
              className="why-growth-stage-svg"
              viewBox="0 0 620 540"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* 3D Pillar 2016 (Blue) */}
                <linearGradient id="p2016Top" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4FA0FF" />
                  <stop offset="100%" stopColor="#0075FF" />
                </linearGradient>
                <linearGradient id="p2016Left" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#006DE6" />
                  <stop offset="100%" stopColor="#004FB8" />
                </linearGradient>
                <linearGradient id="p2016Right" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0052CC" />
                  <stop offset="100%" stopColor="#003580" />
                </linearGradient>

                {/* 3D Pillar 2018 (Medium Blue) */}
                <linearGradient id="p2018Top" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38BDF8" />
                  <stop offset="100%" stopColor="#0075FF" />
                </linearGradient>
                <linearGradient id="p2018Left" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0075FF" />
                  <stop offset="100%" stopColor="#0057D9" />
                </linearGradient>
                <linearGradient id="p2018Right" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0050C8" />
                  <stop offset="100%" stopColor="#003B94" />
                </linearGradient>

                {/* 3D Pillar Today (Golden Yellow) */}
                <linearGradient id="pTodayTop" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF066" />
                  <stop offset="100%" stopColor="#FFC700" />
                </linearGradient>
                <linearGradient id="pTodayLeft" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FBBF24" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
                <linearGradient id="pTodayRight" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#D97706" />
                  <stop offset="100%" stopColor="#B45309" />
                </linearGradient>

                {/* Globe Gradients */}
                <radialGradient id="globeGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                  <stop offset="60%" stopColor="#E2F0FF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#BAE0FF" stopOpacity="0.4" />
                </radialGradient>

                {/* Growth Arrow Green/Cyan Gradient */}
                <linearGradient id="arrowStrokeGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00E5FF" />
                  <stop offset="50%" stopColor="#00E676" />
                  <stop offset="100%" stopColor="#00C853" />
                </linearGradient>

                {/* Filters */}
                <filter id="shadowPillar" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#0052CC" floodOpacity="0.25" />
                </filter>
                <filter id="arrowGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* 1. TRANSPARENT BLUE GLOBE IN BACKGROUND */}
              <g className="why-globe" transform="translate(420, 240)">
                {/* Globe Sphere */}
                <circle cx="0" cy="0" r="180" fill="url(#globeGrad)" />
                <circle cx="0" cy="0" r="180" stroke="#90C4FF" strokeWidth="1.5" opacity="0.6" />

                {/* Latitude Lines */}
                <ellipse cx="0" cy="0" rx="180" ry="60" stroke="#70B4FF" strokeWidth="1.2" strokeDasharray="4 4" fill="none" opacity="0.4" />
                <ellipse cx="0" cy="0" rx="180" ry="120" stroke="#70B4FF" strokeWidth="1.2" strokeDasharray="4 4" fill="none" opacity="0.3" />
                <line x1="-180" y1="0" x2="180" y2="0" stroke="#70B4FF" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.4" />

                {/* Longitude Lines */}
                <ellipse cx="0" cy="0" rx="60" ry="180" stroke="#70B4FF" strokeWidth="1.2" strokeDasharray="4 4" fill="none" opacity="0.4" />
                <ellipse cx="0" cy="0" rx="120" ry="180" stroke="#70B4FF" strokeWidth="1.2" strokeDasharray="4 4" fill="none" opacity="0.3" />

                {/* Stylized Continents on Globe */}
                <path d="M -120 -80 Q -80 -120 -20 -90 Q 20 -110 60 -70 Q 40 -30 -10 -40 Q -60 -20 -100 -50 Z" fill="#93C5FD" opacity="0.45" />
                <path d="M 20 20 Q 80 -10 130 30 Q 140 80 90 120 Q 40 100 20 60 Z" fill="#93C5FD" opacity="0.45" />
                <path d="M -140 10 Q -100 0 -70 40 Q -80 100 -120 120 Q -150 70 -140 10 Z" fill="#93C5FD" opacity="0.4" />
              </g>

              {/* 2. BASE CONCENTRIC DISCS */}
              <g className="why-growth-ground" transform="translate(380, 460)">
                <ellipse cx="0" cy="0" rx="220" ry="46" fill="#E1EFFF" opacity="0.8" />
                <ellipse cx="0" cy="0" rx="220" ry="46" stroke="#90C4FF" strokeWidth="2" />
                <ellipse cx="0" cy="-6" rx="170" ry="34" fill="#CCE5FF" opacity="0.8" />
                <ellipse cx="0" cy="-6" rx="170" ry="34" stroke="#0075FF" strokeWidth="1.8" />
              </g>

              {/* 3. THREE PROGRESSIVE 3D PILLARS */}

              {/* --- PILLAR 1: 2016 (SMALL BLUE BLOCK) --- */}
              <g className="why-pillar why-pillar--2016" transform="translate(180, 340)" filter="url(#shadowPillar)">
                {/* 2016 Label Above */}
                <text x="0" y="-30" textAnchor="middle" fill="#0075FF" fontWeight="800" fontSize="20" letterSpacing="-0.02em">2016</text>

                {/* Top Diamond Face */}
                <polygon points="0,-18 42,4 0,26 -42,4" fill="url(#p2016Top)" stroke="#60A5FA" strokeWidth="1" />

                {/* Left Side Face */}
                <polygon points="-42,4 0,26 0,110 -42,88" fill="url(#p2016Left)" />

                {/* Right Side Face */}
                <polygon points="0,26 42,4 42,88 0,110" fill="url(#p2016Right)" />

                {/* Lightbulb Icon on Left Face */}
                <g transform="translate(-21, 56) scale(0.9)">
                  {/* Bulb */}
                  <path d="M 0 -12 C -8 -12, -10 -4, -6 2 C -4 5, -4 8, -4 10 L 4 10 C 4 8, 4 5, 6 2 C 10 -4, 8 -12, 0 -12 Z" fill="#FFFFFF" opacity="0.95" />
                  <rect x="-3" y="11" width="6" height="3" rx="1" fill="#FEF08A" />
                  {/* Filament Glow Rays */}
                  <line x1="0" y1="-17" x2="0" y2="-14" stroke="#FEF08A" strokeWidth="2" strokeLinecap="round" />
                  <line x1="-12" y1="-14" x2="-9" y2="-11" stroke="#FEF08A" strokeWidth="2" strokeLinecap="round" />
                  <line x1="12" y1="-14" x2="9" y2="-11" stroke="#FEF08A" strokeWidth="2" strokeLinecap="round" />
                </g>
              </g>

              {/* --- PILLAR 2: 2018 (MEDIUM BLUE BLOCK) --- */}
              <g className="why-pillar why-pillar--2018" transform="translate(305, 275)" filter="url(#shadowPillar)">
                {/* 2018 Label Above */}
                <text x="0" y="-30" textAnchor="middle" fill="#0075FF" fontWeight="800" fontSize="22" letterSpacing="-0.02em">2018</text>

                {/* Top Diamond Face */}
                <polygon points="0,-22 48,5 0,32 -48,5" fill="url(#p2018Top)" stroke="#93C5FD" strokeWidth="1" />

                {/* Left Side Face */}
                <polygon points="-48,5 0,32 0,175 -48,148" fill="url(#p2018Left)" />

                {/* Right Side Face */}
                <polygon points="0,32 48,5 48,148 0,175" fill="url(#p2018Right)" />

                {/* Partnership / Handshake Icon on Left Face */}
                <g transform="translate(-24, 90) scale(0.9)">
                  <path d="M -14 0 L -6 -8 L 4 2 L -4 10 Z" fill="#FFFFFF" opacity="0.95" />
                  <path d="M 14 0 L 6 -8 L -4 2 L 4 10 Z" fill="#FFFFFF" opacity="0.75" />
                  <circle cx="0" cy="-2" r="3" fill="#FFFFFF" />
                  <path d="M -8 8 L 0 16 L 8 8" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" />
                </g>
              </g>

              {/* --- PILLAR 3: TODAY (TALL GOLDEN YELLOW BLOCK) --- */}
              <g className="why-pillar why-pillar--today" transform="translate(435, 195)" filter="url(#shadowPillar)">
                {/* Today Label Above */}
                <text x="0" y="-30" textAnchor="middle" fill="#0075FF" fontWeight="800" fontSize="24" letterSpacing="-0.02em">Today</text>

                {/* Top Diamond Face */}
                <polygon points="0,-26 56,6 0,38 -56,6" fill="url(#pTodayTop)" stroke="#FEF08A" strokeWidth="1" />

                {/* Left Side Face */}
                <polygon points="-56,6 0,38 0,255 -56,223" fill="url(#pTodayLeft)" />

                {/* Right Side Face */}
                <polygon points="0,38 56,6 56,223 0,255" fill="url(#pTodayRight)" />

                {/* Global Team Icon on Left Face */}
                <g transform="translate(-28, 130) scale(1.1)">
                  {/* Central Figure */}
                  <circle cx="0" cy="-8" r="5" fill="#FFFFFF" />
                  <path d="M -8 10 C -8 3, 8 3, 8 10 Z" fill="#FFFFFF" />
                  {/* Left Figure */}
                  <circle cx="-11" cy="-4" r="3.5" fill="#FFFFFF" opacity="0.85" />
                  <path d="M -17 10 C -17 5, -6 5, -6 10 Z" fill="#FFFFFF" opacity="0.85" />
                  {/* Right Figure */}
                  <circle cx="11" cy="-4" r="3.5" fill="#FFFFFF" opacity="0.85" />
                  <path d="M 6 10 C 6 5, 17 5, 17 10 Z" fill="#FFFFFF" opacity="0.85" />
                </g>
              </g>

              {/* ============================================================
                  4. CONTINUOUS UPWARD TRAVELING GREEN ARROW
                  ============================================================ */}
              {/* Reference curved path traversing 2016 → 2018 → Today → Upward Future */}
              <path
                id="growthTravelPath"
                ref={pathRef}
                d="M 130 400 Q 230 330 320 250 T 520 85"
                fill="none"
                stroke="url(#arrowStrokeGrad)"
                strokeWidth="7"
                strokeLinecap="round"
              />

              {/* Glowing Blur Trail */}
              <path
                ref={glowPathRef}
                d="M 130 400 Q 230 330 320 250 T 520 85"
                fill="none"
                stroke="#00E676"
                strokeWidth="14"
                strokeLinecap="round"
                opacity="0.5"
                filter="url(#arrowGlow)"
              />

              {/* Dynamic Traveling Arrowhead */}
              <g ref={arrowHeadRef} className="why-growth-arrowhead">
                <polygon
                  points="14,0 -10,-9 -4,0 -10,9"
                  fill="#00E676"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  filter="url(#arrowGlow)"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
