import React from 'react';
import { Link } from 'react-router-dom';
import WhyJupicalJourney from './WhyJupicalJourney';
import './WhyJupical.css';

export default function WhyJupicalSections() {
  return (
    <div className="why-sections">
      {/* ============================================================
          SECTION 1: OUR JOURNEY / OUT GROWTH STORY
          ============================================================ */}
      <WhyJupicalJourney />

      {/* ============================================================
          SECTION 2: OUR GROWTH IN NUMBERS (MATCHING REFERENCE IMAGE 1)
          ============================================================ */}
      <section className="why-section why-section--growth-numbers" id="growth-numbers">
        <div className="container">
          <div className="why-numbers-container">
            {/* Left Header */}
            <div className="why-numbers-left">
              <h2 className="why-numbers-title">
                Our Growth <br />
                <span className="why-numbers-title-blue">in Numbers</span>
              </h2>
              <p className="why-numbers-desc">
                From ideas to impact — <br />
                our numbers tell the story.
              </p>
              <div className="why-numbers-bar" />
            </div>

            {/* Right 4 Stat Cards */}
            <div className="why-numbers-cards">
              {/* Card 1: 7+ Tech Partners */}
              <div className="why-number-card">
                <div className="why-number-card__icon-circle">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="#0075FF">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                </div>
                <div className="why-number-card__val">7+</div>
                <div className="why-number-card__lbl">
                  Technology Partners <br />
                  and growing
                </div>
              </div>

              {/* Card 2: 45+ Countries */}
              <div className="why-number-card">
                <div className="why-number-card__icon-circle">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0075FF" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div className="why-number-card__val">45+</div>
                <div className="why-number-card__lbl">
                  Countries Served
                </div>
              </div>

              {/* Card 3: 12+ Years */}
              <div className="why-number-card">
                <div className="why-number-card__icon-circle">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0075FF" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div className="why-number-card__val">12+</div>
                <div className="why-number-card__lbl">
                  Years of Industry <br />
                  Experience
                </div>
              </div>

              {/* Card 4: 125+ Projects */}
              <div className="why-number-card">
                <div className="why-number-card__icon-circle">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0075FF" strokeWidth="2">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div className="why-number-card__val">125+</div>
                <div className="why-number-card__lbl">
                  Successful Projects <br />
                  Delivered
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: MISSION & VISION (MATCHING REFERENCE IMAGE 1)
          ============================================================ */}
      <section className="why-section why-section--vision">
        <div className="container">
          <div className="why-vision-grid">
            {/* Our Mission Card */}
            <div className="why-vision-card why-vision-card--mission">
              <div className="why-vision-card__icon-bubble why-vision-card__icon-bubble--blue">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" fill="#FFFFFF" />
                  <line x1="12" y1="2" x2="12" y2="4" />
                  <line x1="12" y1="20" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="4" y2="12" />
                  <line x1="20" y1="12" x2="22" y2="12" />
                </svg>
              </div>
              <div className="why-vision-card__content">
                <h3 className="why-vision-card__title">Our Mission</h3>
                <p className="why-vision-card__tagline why-vision-card__tagline--blue">
                  Technology should empower, not overwhelm.
                </p>
                <p className="why-vision-card__body">
                  To be the first choice for any customer who wants to implement a ERP System for their business.
                </p>
                <div className="why-vision-card__bar why-vision-card__bar--blue" />
              </div>
            </div>

            {/* Our Vision Card */}
            <div className="why-vision-card why-vision-card--vision">
              <div className="why-vision-card__icon-bubble why-vision-card__icon-bubble--purple">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" fill="#FFFFFF" />
                </svg>
              </div>
              <div className="why-vision-card__content">
                <h3 className="why-vision-card__title">Our Vision</h3>
                <p className="why-vision-card__tagline why-vision-card__tagline--purple">
                  Transforming Complexity into Opportunity.
                </p>
                <p className="why-vision-card__body">
                  To deliver accurate, reliable, and transparent ERP and IT solutions that help businesses run better, build on integrity, teamwork, and an unwavering commitment to quality.
                </p>
                <div className="why-vision-card__bar why-vision-card__bar--purple" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: LET'S BUILD SOMETHING GREAT! (CTA BANNER)
          ============================================================ */}
      <section className="why-cta-banner-section">
        <div className="container">
          <div className="why-cta-banner">
            {/* Left Column: Script Text + Flight Sketch */}
            <div className="why-cta-banner__left">
              <div className="why-cta-banner__script">
                Let's Build <br />
                Something Great!
              </div>
              <div className="why-cta-banner__plane-sketch">
                <svg width="40" height="28" viewBox="0 0 40 28" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 2 20 Q 15 5 36 2 L 28 24 L 20 18 L 14 26 L 12 18 Z" />
                </svg>
              </div>
            </div>

            {/* Center Column: Paragraph */}
            <div className="why-cta-banner__mid">
              <p>
                Whether you have a question, feedback, or need help — just reach out! Our friendly team is here to support you and will reply as soon as possible.
              </p>
            </div>

            {/* Right Column: Arrow & Button */}
            <div className="why-cta-banner__right">
              <div className="why-cta-banner__plane-right">
                <svg width="34" height="24" viewBox="0 0 34 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 2 16 Q 12 2 30 2 L 22 20 L 16 14 L 10 20 L 8 14 Z" />
                </svg>
              </div>
              <Link to="/contact-us" className="why-cta-banner__btn" id="why-cta-connect-btn">
                <span>Connect with Us!</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
