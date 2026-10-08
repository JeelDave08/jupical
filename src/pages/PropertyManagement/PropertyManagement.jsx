import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ModuleShowcase from '../../components/ModuleShowcase';
import { PMS_CONTENT, PMS_MODULES } from '../../data/pms';
import PropertyScene from './PropertyScene';
import './PropertyManagement.css';

function CheckIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4.2 4.2L19 6.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function PropertyManagement() {
  return (
    <>
      <Navbar activePage="Odoo ERPs" />
      <main className="jp-cons jp-cons--pms">
        <header className="jp-cons__pms-hero">
          <div className="jp-cons__pms-wrap jp-cons__pms-hero-grid">
            <div className="jp-cons__pms-copy">
              <p className="jp-cons__pms-eyebrow"><span aria-hidden="true" /> PROPERTY MANAGEMENT ERP</p>
              <h1 className="jp-cons__pms-title">{PMS_CONTENT.heroTitle}</h1>
              <p>{PMS_CONTENT.heroParagraph}</p>
              <Link className="jp-cons__pms-button" to="/contact-us">Request Demo <span aria-hidden="true">→</span></Link>
            </div>
            <PropertyScene />
          </div>
        </header>

        <section className="jp-cons__pms-overview" aria-labelledby="jp-cons__pms-benefits-title">
          <div className="jp-cons__pms-wrap">
            <p className="jp-cons__pms-intro">{PMS_CONTENT.intro}</p>
            <h2 id="jp-cons__pms-benefits-title">Key Benefits</h2>
            <div className="jp-cons__pms-benefit-grid">
              {PMS_CONTENT.benefits.map((benefit) => (
                <article className="jp-cons__pms-benefit" key={benefit}><span><CheckIcon /></span><p>{benefit}</p></article>
              ))}
            </div>
            <p className="jp-cons__pms-summary">{PMS_CONTENT.benefitsSummary}</p>
          </div>
        </section>

        <ModuleShowcase
          id="pms-modules"
          title={PMS_CONTENT.showcaseTitle}
          subtitle={PMS_CONTENT.showcaseSubtitle}
          playerTitle={PMS_CONTENT.playerTitle}
          playerSubtitle={PMS_CONTENT.playerSubtitle}
          mainVideoId={PMS_CONTENT.mainVideoId}
          modules={PMS_MODULES}
          labelPrefix="Floor"
          warnOnVideoCheckError
        />

        <section className="jp-cons__pms-why" aria-labelledby="jp-cons__pms-why-title">
          <div className="jp-cons__pms-wrap">
            <h2 id="jp-cons__pms-why-title">{PMS_CONTENT.whyChooseTitle}</h2>
            <div className="jp-cons__pms-why-grid">
              {PMS_CONTENT.whyChoose.map((benefit, index) => (
                <article className="jp-cons__pms-why-card" key={benefit}>
                  <span className="jp-cons__pms-why-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="jp-cons__pms-why-check"><CheckIcon /></span>
                  <p>{benefit}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="jp-cons__pms-cta" aria-labelledby="jp-cons__pms-cta-title">
          <div className="jp-cons__pms-cta-inner">
            <span className="jp-cons__pms-cta-mark" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M3 11.5 12 4l9 7.5M5.5 10v10h13V10M9 20v-6h6v6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
            <h2 id="jp-cons__pms-cta-title">{PMS_CONTENT.closingTitle}</h2>
            <p>{PMS_CONTENT.closingText}</p>
            <Link className="jp-cons__pms-button jp-cons__pms-button--white" to="/contact-us">{PMS_CONTENT.closingButton}<span aria-hidden="true"> →</span></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
