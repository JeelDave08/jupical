import { useCallback, useRef, useState } from 'react';
import { CTA, FEATURES, HERO } from './data';
import {
  BuildingIllustration, ClipboardIllustration, DoctorHero, DoctorIllustration,
  DoctorPhoneIllustration, GearIllustration, HeartbeatIllustration,
  MriIllustration, MonitorIllustration, PatientPhoneIllustration,
  PatientPortalIllustration, ShieldIllustration, SurgeryIllustration,
} from './Illustrations';
import ShareSheet from './ShareSheet';
import VideoPlayer from './VideoPlayer';
import HealthPlusFooter from './HealthPlusFooter';
import './HealthPlus.css';

const illustrations = [
  GearIllustration, BuildingIllustration, DoctorIllustration, ClipboardIllustration,
  SurgeryIllustration, MriIllustration, HeartbeatIllustration, ShieldIllustration,
  MonitorIllustration, PatientPortalIllustration, DoctorPhoneIllustration, PatientPhoneIllustration,
];

export default function HealthPlus() {
  const [shareFeature, setShareFeature] = useState(null);
  const shareTrigger = useRef(null);
  const closeShare = useCallback(() => {
    setShareFeature(null);
    requestAnimationFrame(() => shareTrigger.current?.focus());
  }, []);

  return (
    <div className="hp">
      <main className="hp-main">
      <section className="hp-hero hp-wrap" aria-labelledby="hp-hero-title">
        <div className="hp-hero-copy">
          <h1 id="hp-hero-title">Complete <span>Healthcare</span> Management Solution Built on Odoo</h1>
          <p>{HERO.description}</p>
          <a className="hp-hero-button" href="/contact-us">{HERO.button}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></svg></a>
        </div>
        <DoctorHero />
      </section>

      <section className="hp-wrap hp-features" aria-label="Healthcare ERP features">
        <div className="hp-grid">
          {FEATURES.map((feature, index) => {
            const Illustration = illustrations[index];
            return (
              <article className="hp-card" key={feature.id}>
                <VideoPlayer videoUrl={feature.videoUrl} illustration={<Illustration />} number={feature.id} title={feature.title} />
                <div className="hp-card-body">
                  <h2>{feature.title}</h2>
                  <p>{feature.desc}</p>
                  <ul className="hp-bullets">
                    {feature.bullets.map((bullet) => <li key={bullet}><span className="hp-check" aria-hidden="true">✓</span><span>{bullet}</span></li>)}
                  </ul>
                  <div className="hp-card-actions">
                    <button className="hp-share-button" type="button" aria-label={`Share ${feature.title}`} onClick={(event) => { shareTrigger.current = event.currentTarget; setShareFeature(feature); }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.7 10.7 6.6-4.4m-6.6 7 6.6 4.4" /></svg>Share
                    </button>
                    <a className="hp-youtube-link" href={feature.videoUrl} target="_blank" rel="noopener noreferrer">Open on YouTube</a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="hp-cta hp-wrap" aria-labelledby="hp-cta-title">
        <h2 id="hp-cta-title">{CTA.title}</h2>
        <p>{CTA.description}</p>
      </section>
      <ShareSheet feature={shareFeature} onClose={closeShare} />
      </main>
      <HealthPlusFooter />
    </div>
  );
}
