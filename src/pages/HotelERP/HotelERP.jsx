import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BedDouble, CalendarCheck, ChartNoAxesCombined, ContactRound, CreditCard,
  Download, FileText, HeartHandshake, Utensils,
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ModuleShowcase from '../../components/ModuleShowcase';
import HotelHeroScene from './HotelHeroScene';
import {
  hotelBenefits, hotelClosing, hotelDocumentation, hotelFeatures,
  hotelMainVideoId, hotelModules,
} from '../../data/hotel';
import './HotelERP.css';

const featureIcons = {
  CalendarCheck, BedDouble, ContactRound, Utensils, CreditCard, HeartHandshake,
};
const benefitIcons = [BedDouble, ContactRound, HeartHandshake, ChartNoAxesCombined, CreditCard];

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
            <HotelHeroScene />
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
