import { Link } from 'react-router-dom';
import HeroVisual from './HeroVisual';
import Clients from './Clients';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="hero" id="hero" aria-label="Hero section">
      {/* Soft ambient backdrop glows */}
      <div className="hero__backdrop" aria-hidden="true">
        <div className="hero__glow hero__glow--blue" />
        <div className="hero__glow hero__glow--cyan" />
        <div className="hero__grid-pattern" />
      </div>

      <div className="container hero__container">
        <div className="hero__grid">
          {/* LEFT SIDE CONTENT */}
          <div className="hero__left">
            {/* Certification Badge */}
            <div className="hero__eyebrow">
              <svg className="hero__shield-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1L2 3.5V7.5C2 11.2 4.6 14.6 8 15.5C11.4 14.6 14 11.2 14 7.5V3.5L8 1Z" stroke="#0878F9" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M5.5 7.5L7 9L10.5 5.5" stroke="#0878F9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{t('CERTIFIED ODOO ERP PARTNER')}</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero__title">
              {t('Building Smarter')}
              <br />
              {t('Operations.')}
              <br />
              {t('Driving')}
              <br />
              <span className="hero__title-highlight">{t('Real Growth.')}</span>
            </h1>

            {/* Subtitle Description */}
            <p className="hero__description">
              {t('Jupical helps manufacturers, construction, and finance businesses automate, integrate, and scale with expert Odoo ERP implementation and custom development.')}
            </p>

            {/* Action Buttons */}
            <div className="hero__actions">
              <a href="#solutions" className="hero__btn hero__btn--primary" id="hero-btn-explore">
                <span>{t('Explore Solutions')}</span>
                <span className="hero__btn-arrow">→</span>
              </a>

              <Link to="/contact-us" className="hero__btn hero__btn--secondary" id="hero-btn-contact">
                <span>{t('Contact Us')}</span>
                <span className="hero__btn-arrow">→</span>
              </Link>
            </div>

            {/* Country Badges & Social Proof */}
            <div className="hero__trust-wrapper">
              <div className="hero__country-chips">
                <span className="hero__country-chip">
                  <strong className="chip-code">US</strong> USA
                </span>
                <span className="hero__country-chip">
                  <strong className="chip-code">IN</strong> INDIA
                </span>
                <span className="hero__country-chip">
                  <strong className="chip-code">GB</strong> UK
                </span>
                <span className="hero__country-chip">
                  <strong className="chip-code">AE</strong> UAE
                </span>
                <span className="hero__country-chip">
                  <strong className="chip-code">CA</strong> CANADA
                </span>
              </div>
              <div className="hero__trust-sub">
                {t('Trusted by')} <strong className="hero__trust-highlight">{t('5000+ Businesses')}</strong> {t('across')} <strong className="hero__trust-highlight">{t('32+ Countries.')}</strong>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — INTERACTIVE 3D ODOO ERP ECOSYSTEM */}
          <div className="hero__right">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* OUR CLIENTS SHOWCASE */}
      <Clients />
    </section>
  );
}

