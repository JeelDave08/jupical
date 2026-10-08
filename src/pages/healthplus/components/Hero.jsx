import HealthcareHeroScene from "../../../components/HealthcareHeroScene";

export default function Hero() {
  return (
    <section className="hp-hero-section" aria-labelledby="hp-hero-title">
      {/* Soft healthcare-tech background decorations */}
      <div className="hp-hero-bg" aria-hidden="true">
        <div className="hp-hero-glow-radial" />
        <div className="hp-hero-curve-shape" />
        <div className="hp-hero-wave-bottom" />
        <span className="hp-decor-plus hp-decor-plus-1">+</span>
        <span className="hp-decor-plus hp-decor-plus-2">+</span>
        <span className="hp-decor-plus hp-decor-plus-3">+</span>
      </div>

      <div className="hp-wrap hp-hero-grid">
        <div className="hp-hero-copy">
          <h1 id="hp-hero-title" className="hp-healthcare-title">
            Complete <span className="hp-hero-title-blue">Healthcare</span> Management Solution Built on Odoo
          </h1>
          <p className="hp-hero-description">
            From patient registration and OPD to pharmacy, lab, billing, and HR, everything you need for a smooth, modern, and efficient healthcare system.
          </p>
          <div className="hp-hero-actions">
            <a className="hp-hero-btn" href="/contact-us">
              Request Demo <span className="hp-hero-btn-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <HealthcareHeroScene />
      </div>
    </section>
  );
}
