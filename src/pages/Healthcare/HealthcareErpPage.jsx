import {
  Building2,
  CalendarCheck,
  CalendarClock,
  ClipboardList,
  HeartPulse,
  ScanLine,
  Settings,
  ShieldCheck,
  Smartphone,
  Stethoscope,
  UserRound,
  UserRoundCheck,
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { healthcareSections, healthcareVideoUrl } from './healthcareData';
import './HealthcareErpPage.css';

const sectionIcons = {
  settings: Settings,
  building: Building2,
  doctor: Stethoscope,
  records: ClipboardList,
  surgery: CalendarClock,
  imaging: ScanLine,
  nursing: HeartPulse,
  insurance: ShieldCheck,
  portal: CalendarCheck,
  patient: UserRoundCheck,
  mobile: Smartphone,
  user: UserRound,
};

function HealthcareSectionCard({ section }) {
  const Icon = sectionIcons[section.icon] || UserRound;

  return (
    <a
      className="healthcare-card"
      href={healthcareVideoUrl(section.youtubeId)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Watch ${section.title} video on YouTube`}
    >
      <div className="healthcare-card__heading">
        <span className="healthcare-card__number">{section.number}</span>
        <span className="healthcare-card__icon" aria-hidden="true"><Icon size={22} strokeWidth={2.2} /></span>
        <h2>{section.title}</h2>
      </div>
      <p className="healthcare-card__description">{section.description}</p>
      <ul className="healthcare-card__features">
        {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
      </ul>
      <div className="healthcare-card__preview">
        <img src={section.image} alt="" loading="lazy" />
        <span className="healthcare-card__play" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h13" /><path d="m13 6 6 6-6 6" />
          </svg>
        </span>
      </div>
    </a>
  );
}

export default function HealthcareErpPage() {
  return (
    <div className="healthcare-page">
      <Navbar activePage="Odoo ERPs" />
      <main className="healthcare-main">
        <div className="healthcare-shell">
          <section className="healthcare-hero" aria-labelledby="healthcare-title">
            <div className="healthcare-hero__copy">
              <h1 id="healthcare-title">
                Complete <span>Healthcare</span> Management Solution Built on Odoo
              </h1>
              <p>From patient registration and OPD to pharmacy, lab, billing, and HR, everything you need for a smooth, modern, and efficient healthcare system.</p>
              <a className="healthcare-hero__cta" href="/contact-us">
                Request Demo
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h13" /><path d="m13 6 6 6-6 6" />
                </svg>
              </a>
            </div>
            <div className="healthcare-hero__art">
              <img src="/healthcare/hero-art.webp" alt="Healthcare professional using the HealthPlus system" />
            </div>
          </section>

          <section className="healthcare-sections" aria-label="Healthcare ERP features and video guides">
            {healthcareSections.map((section) => <HealthcareSectionCard key={section.number} section={section} />)}
          </section>

          <section className="healthcare-cta" aria-labelledby="healthcare-cta-title">
            <div>
              <h2 id="healthcare-cta-title">Ready to Transform Your Health Center?</h2>
              <p>HealthPlus by Jupical Technologies is built for hospitals and clinics that want to run smarter, serve patients better, and manage everything from one platform.</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
