const idealFor = ["Hospitals", "Clinics", "Diagnostic centers", "Multi-specialty health centers", "Nursing homes"];

export default function Ending() {
  return (
    <>
      <section className="hp-ideal" aria-labelledby="hp-ideal-title">
        <div className="hp-wrap hp-ideal-inner">
          <h2 id="hp-ideal-title">Ideal for</h2>
          <div className="hp-ideal-chips">{idealFor.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </section>
      <section className="hp-cta" aria-labelledby="hp-cta-title">
        <div className="hp-wrap hp-cta-inner">
          <div><h2 id="hp-cta-title">Ready to Transform Your Health Center?</h2><p>HealthPlus by Jupical Technologies is built for hospitals and clinics that want to run smarter, serve patients better, and manage everything from one digital platform.</p></div>
          <a className="hp-button hp-button-light" href="/contact-us">Request Demo <span aria-hidden="true">→</span></a>
        </div>
      </section>
    </>
  );
}
