import { memo } from "react";

function HeroScene() {
  return (
    <div className="hp-scene-wrap hp-healthcare-scene-card" aria-label="Healthcare ERP interactive platform illustration">
      {/* Soft circular platform & radial aura */}
      <div className="hp-scene-glow" aria-hidden="true" />

      {/* Floating illustration container */}
      <div className="hp-scene-float-container">
        <img
          src="/healthcare/hero-doctor.webp"
          alt="Healthcare doctor using digital health ERP platform"
          className="hp-scene-image"
          loading="eager"
          decoding="async"
        />

        {/* Ambient futuristic orbit glow nodes overlay */}
        <svg
          className="hp-scene-orbits"
          viewBox="0 0 552 477"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Subtle glowing animated nodes along orbit arcs */}
          <circle cx="218" cy="74" r="3.5" className="hp-orbit-node hp-orbit-node-1" fill="#0084FF" />
          <circle cx="218" cy="74" r="7" className="hp-orbit-pulse hp-orbit-pulse-1" stroke="#38BDF8" strokeWidth="1.2" opacity="0.6" />

          <circle cx="398" cy="168" r="3" className="hp-orbit-node hp-orbit-node-2" fill="#0075FF" />
          <circle cx="398" cy="168" r="6" className="hp-orbit-pulse hp-orbit-pulse-2" stroke="#0075FF" strokeWidth="1" opacity="0.5" />

          <circle cx="431" cy="285" r="3.5" className="hp-orbit-node hp-orbit-node-3" fill="#38BDF8" />
          <circle cx="431" cy="285" r="7.5" className="hp-orbit-pulse hp-orbit-pulse-3" stroke="#38BDF8" strokeWidth="1.2" opacity="0.6" />

          <circle cx="238" cy="414" r="3" className="hp-orbit-node hp-orbit-node-4" fill="#0084FF" />
        </svg>

        {/* Floating 3D plus symbols around illustration */}
        <span className="hp-scene-plus hp-scene-plus-1" aria-hidden="true">+</span>
        <span className="hp-scene-plus hp-scene-plus-2" aria-hidden="true">+</span>
      </div>
    </div>
  );
}

export default memo(HeroScene);
