import HeroScene from "./HeroScene";

export default function Hero({ onSeeModules }) {
  return (
    <section className="hp-hero-section" aria-labelledby="hp-hero-title">
      <div className="hp-wrap hp-hero-grid">
        <div className="hp-hero-copy">
          <p className="hp-eyebrow"><span /> HEALTHCARE, CONNECTED</p>
          <h1 id="hp-hero-title">Complete <span className="hp-blue">Healthcare</span> Management Solution Built on Odoo</h1>
          <p className="hp-hero-description">From patient registration and OPD to pharmacy, lab, billing and HR, everything your hospital or clinic needs, in one unified system.</p>
          <div className="hp-hero-actions">
            <a className="hp-button" href="/contact-us">Request Demo <span aria-hidden="true">→</span></a>
            <button className="hp-button hp-button-outline" type="button" onClick={onSeeModules}>See the 12 modules</button>
          </div>
        </div>
        <HeroScene />
      </div>
    </section>
  );
}
