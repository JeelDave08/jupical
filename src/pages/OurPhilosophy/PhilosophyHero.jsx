/* ================================================================
   PhilosophyHero — full-viewport hero with animated network canvas
   ================================================================ */
import NetworkCanvas from './NetworkCanvas';

export default function PhilosophyHero() {
  return (
    <header className="phil-hero">
      <NetworkCanvas />

      {/* text layer — pointer-events:none so mouse still reaches canvas */}
      <div className="phil-hero__inner">
        <h1 className="phil-hero__h1">
          <span>Simplicity.</span>
          <span>Scalability.</span>
          <span className="phil-hero__h1--blue">Success.</span>
        </h1>
        <p className="phil-hero__sub">
          We don't just implement ERP we transform how businesses think,
          operate, and grow. Built on integrity, driven by dedication, ready
          for the world.
        </p>
      </div>

      {/* scroll hint line */}
      <div className="phil-hero__hint" aria-hidden="true" />
    </header>
  );
}
