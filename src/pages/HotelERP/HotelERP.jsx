import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  BedDouble, CalendarCheck, ChartNoAxesCombined, ContactRound, CreditCard,
  Download, FileText, HeartHandshake, Utensils,
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ModuleShowcase from '../../components/ModuleShowcase';
import {
  hotelBenefits, hotelClosing, hotelDocumentation, hotelFeatures,
  hotelMainVideoId, hotelModules,
} from '../../data/hotel';
import './HotelERP.css';

const featureIcons = {
  CalendarCheck, BedDouble, ContactRound, Utensils, CreditCard, HeartHandshake,
};
const benefitIcons = [BedDouble, ContactRound, HeartHandshake, ChartNoAxesCombined, CreditCard];

function HotelScene() {
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncMotion = () => preference.matches ? scene?.pauseAnimations() : scene?.unpauseAnimations();
    syncMotion();
    preference.addEventListener('change', syncMotion);
    return () => preference.removeEventListener('change', syncMotion);
  }, []);

  return (
    <svg ref={sceneRef} className="jp-cons__hotel-scene" viewBox="0 0 650 420" role="img" aria-label="Animated hotel with glowing windows, a bellboy, reception, housekeeping cart and restaurant">
      <defs>
        <linearGradient id="hotel-sky" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#dbeafe" /><stop offset="1" stopColor="#f8fbff" /></linearGradient>
        <pattern id="hotel-grid" width="16" height="16" patternUnits="userSpaceOnUse"><path d="M0 16L16 0M0 0l16 16" stroke="#93c5fd" strokeWidth="1" /></pattern>
      </defs>
      <rect width="650" height="420" rx="22" fill="url(#hotel-sky)" />
      <circle cx="562" cy="58" r="28" fill="#fde68a" opacity=".82" />
      <g className="jp-cons__hotel-cloud" fill="#fff" opacity=".9"><ellipse cx="84" cy="74" rx="34" ry="11" /><ellipse cx="108" cy="66" rx="23" ry="10" /></g>
      <g fill="#c7dbf7"><rect x="18" y="280" width="42" height="84" /><rect x="65" y="302" width="30" height="62" /><rect x="586" y="275" width="42" height="89" /></g>
      <rect y="364" width="650" height="56" fill="#93b4e6" /><rect y="360" width="650" height="5" fill="#1d4ed8" />

      <g>
        <path d="M154 142 324 55l170 87v218H154z" fill="#fff" stroke="#1d4ed8" strokeWidth="3" />
        <path d="M142 144 324 48l182 96z" fill="url(#hotel-grid)" stroke="#1d4ed8" strokeWidth="4" />
        <rect x="252" y="67" width="145" height="34" rx="8" fill="#1d4ed8" />
        <text x="324" y="90" textAnchor="middle" fill="#fff" fontFamily="DM Sans, sans-serif" fontSize="18" fontWeight="700">HOTEL</text>
        {[0, 1, 2, 3, 4].map((star) => <path key={star} className="jp-cons__hotel-star" style={{ animationDelay: `${star * .24}s` }} d={`M${300 + star * 12} 39l2 5h5l-4 3 1.5 5-4.5-3-4.5 3 1.5-5-4-3h5z`} fill="#fbbf24" />)}
        {[0, 1, 2, 3].map((row) => [0, 1, 2, 3].map((col) => <rect key={`${row}-${col}`} className="jp-cons__hotel-window" style={{ animationDelay: `${(row * 4 + col) * .18}s` }} x={180 + col * 82} y={165 + row * 42} width="38" height="25" rx="3" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />))}
        <rect x="288" y="283" width="72" height="78" rx="34" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="3" />
        <g className="jp-cons__hotel-door"><path d="M324 283v78" stroke="#1d4ed8" strokeWidth="2" /><circle cx="350" cy="322" r="3" fill="#1d4ed8" /><animateTransform attributeName="transform" type="translate" values="0 0;15 0;15 0;0 0" keyTimes="0;.18;.72;1" dur="7s" repeatCount="indefinite" /></g>
        <path d="M154 360h340" stroke="#1d4ed8" strokeWidth="7" />
      </g>

      <g transform="translate(520 220)">
        <rect x="-2" y="22" width="68" height="52" rx="9" fill="#fff" stroke="#1d4ed8" strokeWidth="3" />
        <path d="M20 24q12-22 24 0" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="3" />
        <circle cx="32" cy="39" r="5" fill="#fbbf24" />
        <circle cx="32" cy="39" r="10" fill="none" stroke="#38bdf8" strokeWidth="2" className="jp-cons__hotel-ripple" />
      </g>
      <g className="jp-cons__hotel-key" transform="translate(430 255)">
        <rect width="45" height="24" rx="5" fill="#38bdf8" stroke="#1d4ed8" strokeWidth="2" /><circle cx="8" cy="12" r="3" fill="#fff" /><path d="M17 9h19m-19 6h13" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        <animateTransform attributeName="transform" type="translate" values="430 255;452 255;430 255" dur="4s" repeatCount="indefinite" />
      </g>

      <g className="jp-cons__hotel-bellboy">
        <animateTransform attributeName="transform" type="translate" values="65 355;135 355;135 355;65 355" keyTimes="0;.4;.65;1" dur="10s" repeatCount="indefinite" />
        <circle cx="0" cy="-45" r="8" fill="#f7c9a8" /><path d="M-12-49q12-14 24 0z" fill="#fbbf24" /><path d="M-11-34h22v31h-22z" fill="#2563eb" /><path d="M-6-3l-3 18m15-18 3 18" stroke="#173b77" strokeWidth="5" strokeLinecap="round" />
        <path d="M15-5h40v-28H15zM22-33v-10h17v10" fill="none" stroke="#1d4ed8" strokeWidth="3" /><circle cx="23" cy="-2" r="6" fill="#173b77" /><circle cx="49" cy="-2" r="6" fill="#173b77" /><rect x="24" y="-28" width="20" height="15" rx="2" fill="#bfdbfe" />
      </g>
      <g transform="translate(452 345)">
        <path d="M0 0h54v-27H0zM7-27l5-13h29l6 13" fill="#fff" stroke="#1d4ed8" strokeWidth="3" />
        <path d="M8-4l8-8 7 6 8-10 14 12" fill="none" stroke="#38bdf8" strokeWidth="3" />
        <path d="M17-42l3-5m8 5v-7m8 7 3-5" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" className="jp-cons__hotel-sparkle" />
      </g>
      <g transform="translate(88 350)">
        <path d="M0 0h55v-23H0zM5-23q22-40 45 0z" fill="#fff" stroke="#1d4ed8" strokeWidth="3" />
        <path className="jp-cons__hotel-steam" d="M17-38q-7-10 0-18m14 18q-7-10 0-18m13 18q-7-10 0-18" fill="none" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
        <animateTransform attributeName="transform" type="translate" values="88 350;88 345;88 350" dur="4s" repeatCount="indefinite" />
      </g>
    </svg>
  );
}

function DocumentationCard({ item }) {
  return <article className="jp-cons__hotel-doc-card">
    <span className="jp-cons__hotel-doc-icon" aria-hidden="true"><FileText size={23} /></span>
    <div><h3>{item.title}</h3><p>Hotel Management ERP documentation (PDF)</p></div>
    {item.url ? <a href={item.url} download aria-label={`Download ${item.title} PDF`}><Download size={17} /><span>Download PDF</span></a> : <button type="button" disabled aria-disabled="true"><Download size={17} /><span>PDF link needed</span></button>}
  </article>;
}

export default function HotelERP() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Hotel Management System — Jupical Technologies';
    window.scrollTo({ top: 0, behavior: 'instant' });
    return () => { document.title = previousTitle; };
  }, []);

  return <>
    <Navbar activePage="Odoo ERPs" />
    <main className="jp-cons jp-cons__hotel">
      <header className="jp-cons__hotel-hero">
        <div className="jp-cons__wrap">
          <div className="jp-cons__hotel-hero-grid">
            <div className="jp-cons__hotel-copy">
              <h1 className="jp-cons__hotel-title">Hotel Management System</h1>
              <p>Hospitality is all about delivering exceptional service, and to do that efficiently, hotels need seamless coordination between front-desk, housekeeping, reservations, and billing. Our Hotel Management ERP brings all hotel operations into one centralized, user-friendly system to streamline every guest interaction and backend process.</p>
              <Link className="jp-cons__hotel-cta" to="/contact-us">Schedule a Demo</Link>
            </div>
            <HotelScene />
          </div>
        </div>
      </header>

      <section className="jp-cons__hotel-features" aria-labelledby="hotel-features-title">
        <div className="jp-cons__wrap">
          <div className="jp-cons__hotel-heading"><h2 id="hotel-features-title">Key Features</h2></div>
          <div className="jp-cons__hotel-feature-grid">
            {hotelFeatures.map((feature) => {
              const Icon = featureIcons[feature.icon];
              return <article className="jp-cons__hotel-feature" key={feature.title}>
                <span aria-hidden="true"><Icon size={23} strokeWidth={1.9} /></span><div><h3>{feature.title}</h3><p>{feature.desc}</p></div>
              </article>;
            })}
          </div>
        </div>
      </section>

      <ModuleShowcase id="hotel-modules" title="See Hotel Management ERP in Action" subtitle="Watch how setup and every module work, step by step." playerTitle="Hotel Management ERP" playerSubtitle="Watch how setup and every module work, step by step." mainVideoId={hotelMainVideoId} modules={hotelModules} warnOnVideoCheckError playerAfterHeading />

      <section className="jp-cons__hotel-ending">
        <div className="jp-cons__wrap">
          <div className="jp-cons__hotel-heading"><h2>Why Choose Our Hotel ERP?</h2></div>
          <div className="jp-cons__hotel-benefits">
            {hotelBenefits.map((benefit, index) => {
              const Icon = benefitIcons[index];
              return <article className="jp-cons__hotel-benefit" key={benefit}><span aria-hidden="true"><Icon size={21} /></span><p>{benefit}</p></article>;
            })}
          </div>
          <section className="jp-cons__hotel-docs" aria-labelledby="hotel-doc-title">
            <div className="jp-cons__hotel-doc-heading"><h2 id="hotel-doc-title">Download Documentation</h2><p>Choose the edition documentation for your hotel solution.</p></div>
            <div className="jp-cons__hotel-doc-grid">{hotelDocumentation.map((item) => <DocumentationCard key={item.title} item={item} />)}</div>
          </section>
        </div>
      </section>

      <section className="jp-cons__hotel-closing">
        <div className="jp-cons__wrap"><div><h2>{hotelClosing.title}</h2><p>{hotelClosing.subtitle}</p></div><Link className="jp-cons__hotel-cta" to="/contact-us">{hotelClosing.button}</Link></div>
      </section>
    </main>
    <Footer />
  </>;
}
