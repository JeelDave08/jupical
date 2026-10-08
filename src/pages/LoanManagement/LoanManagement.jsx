import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ModuleShowcase from '../../components/ModuleShowcase';
import { LMS_CONTENT, LMS_FEATURES, LMS_PAGE } from '../../data/lms';
import LendingScene from './LendingScene';
import './LoanManagement.css';

function FeatureIcon({ kind }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const icons = {
    application: <><rect x="4" y="3" width="16" height="18" rx="3"/><path d="M8 8h8M8 12h8M8 16h5"/><path d="M16 16l2 2 4-5"/></>,
    approval: <><circle cx="12" cy="12" r="9"/><path d="M7.5 12l3 3 6-6"/><path d="M12 3v3m0 12v3M3 12h3m12 0h3"/></>,
    accounting: <><path d="M4 20V8l8-5 8 5v12"/><path d="M8 20v-7h8v7M8 9h.01M12 9h.01M16 9h.01"/><path d="M3 20h18"/></>,
    kyc: <><rect x="4" y="3" width="16" height="18" rx="3"/><circle cx="12" cy="9" r="2.5"/><path d="M8 16c.8-2 2.1-3 4-3s3.2 1 4 3"/><path d="M17 7h1"/></>,
    payment: <><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 10h18M7 15h4"/><path d="M16 14v4m-2-2h4"/></>,
    penalty: <><circle cx="12" cy="12" r="9"/><path d="M8 16l8-8M8.5 8.5h.01M15.5 15.5h.01"/><path d="M12 3v2m0 14v2"/></>,
  };
  return <svg className="jp-cons__feature-icon" viewBox="0 0 24 24" aria-hidden="true" {...common}>{icons[kind]}</svg>;
}

export default function LoanManagement() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'LoanSuite for Odoo — Jupical Technologies';
    window.scrollTo({ top: 0, behavior: 'instant' });
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <>
      <Navbar activePage="Odoo ERPs" />
      <main className="jp-cons jp-cons--loan">
        <section className="jp-cons__loan-hero">
          <div className="jp-cons__loan-wrap jp-cons__loan-hero-grid">
            <div className="jp-cons__loan-copy">
              <h1 className="jp-cons__loans-title">{LMS_CONTENT.heroTitle}</h1>
              <p>{LMS_CONTENT.heroParagraph}</p>
              <div className="jp-cons__loan-actions">
                <Link className="jp-cons__loan-btn" to={LMS_CONTENT.buyHref}>{LMS_CONTENT.buyLabel}</Link>
                <Link className="jp-cons__loan-btn jp-cons__loan-btn--outline" to="/contact-us">{LMS_CONTENT.requestDemoLabel}<span aria-hidden="true"> →</span></Link>
              </div>
            </div>
            <LendingScene />
          </div>
        </section>

        <section className="jp-cons__loan-overview jp-cons__loan-wrap">
          <div className="jp-cons__loan-intro">
            <h2>{LMS_CONTENT.introTitle}</h2>
            {LMS_CONTENT.introParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <h2 className="jp-cons__loan-section-title">Key Features</h2>
          <div className="jp-cons__loan-features">
            {LMS_FEATURES.map((feature) => (
              <article className="jp-cons__loan-feature" key={feature.title}>
                <span className="jp-cons__loan-feature-icon"><FeatureIcon kind={feature.icon} /></span>
                <div><h3>{feature.title}</h3><p>{feature.desc}</p></div>
              </article>
            ))}
          </div>
        </section>

        <ModuleShowcase
          className="jp-cons__loan-showcase"
          title={LMS_PAGE.showcaseTitle}
          subtitle={LMS_PAGE.showcaseSubtitle}
          playerTitle="See LoanSuite in Action"
          playerSubtitle="Explore the LoanSuite lending workflow from application to repayment."
          mainVideoId={LMS_PAGE.mainVideoId}
          modules={LMS_PAGE.modules}
          labelPrefix="Floor"
          warnOnVideoCheckError
          playerAfterHeading
        />

        <section className="jp-cons__loan-cta">
          <div className="jp-cons__loan-cta-inner">
            <span className="jp-cons__loan-cta-mark" aria-hidden="true">＋</span>
            <h2>{LMS_CONTENT.ctaTitle}</h2>
            <p>{LMS_CONTENT.ctaSubtitle}</p>
            <Link className="jp-cons__loan-btn jp-cons__loan-btn--white" to="/contact-us">{LMS_CONTENT.ctaButton}<span aria-hidden="true"> →</span></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
