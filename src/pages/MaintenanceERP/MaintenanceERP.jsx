import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Boxes, CalendarDays, ChartNoAxesCombined, ClipboardList, Download,
  FileText, MapPin, MessageCircle, PackageCheck, ReceiptText, ShieldCheck,
  Timer, UsersRound, Wrench,
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ModuleShowcase from '../../components/ModuleShowcase';
import {
  maintModules, maintenanceBenefits, maintenanceDocumentationUrl,
  maintenanceFeatures, maintenanceMainVideoId,
} from '../../data/maintenance';
import './MaintenanceERP.css';

const featureIcons = {
  clipboard: ClipboardList,
  calendar: CalendarDays,
  people: UsersRound,
  location: MapPin,
  boxes: Boxes,
  report: ReceiptText,
};

const benefitIcons = [Wrench, Timer, MessageCircle, ChartNoAxesCombined, PackageCheck];

function MaintenanceScene() {
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncMotion = () => {
      if (motionPreference.matches) scene?.pauseAnimations();
      else scene?.unpauseAnimations();
    };
    syncMotion();
    motionPreference.addEventListener('change', syncMotion);
    return () => motionPreference.removeEventListener('change', syncMotion);
  }, []);

  return (
    <svg ref={sceneRef} className="jp-cons__maintenance-scene" viewBox="0 0 650 420" role="img" aria-label="Animated maintenance workshop with service van, technician, repair board, gears and spare parts">
      <defs>
        <pattern id="maint-grid" width="16" height="16" patternUnits="userSpaceOnUse"><path d="M0 16L16 0M0 0l16 16" stroke="#93c5fd" strokeWidth="1" /></pattern>
        <g id="maint-tech">
          <circle cy="-42" r="8" fill="#f7c9a8" /><path d="M-13-48q13-14 26 0h-26z" fill="#fbbf24" /><path d="M-15-49h30" stroke="#d97706" strokeWidth="3" strokeLinecap="round" />
          <path d="M-11-32h22v36h-22z" fill="#2563eb" /><path d="M-7 4l-4 23m18-23 4 23" stroke="#173b77" strokeWidth="6" strokeLinecap="round" /><path d="M-10-24l-13 14m34-14 12 9" stroke="#f7c9a8" strokeWidth="5" strokeLinecap="round" />
          <rect x="13" y="-14" width="16" height="13" rx="2" fill="#38bdf8" stroke="#1d4ed8" strokeWidth="2" />
        </g>
      </defs>
      <rect width="650" height="420" rx="22" fill="var(--scene-bg)" />
      <circle cx="566" cy="62" r="27" fill="var(--scene-sun)" opacity=".85" />
      <g className="jp-cons__maint-cloud" fill="var(--scene-cloud)" opacity=".9"><ellipse cx="93" cy="70" rx="36" ry="11" /><ellipse cx="117" cy="62" rx="23" ry="10" /></g>
      <g fill="var(--scene-skyline)"><rect x="18" y="266" width="42" height="94" /><rect x="65" y="291" width="32" height="69" /><rect x="584" y="273" width="40" height="87" /></g>
      <rect y="360" width="650" height="60" fill="var(--scene-ground)" /><rect y="360" width="650" height="5" fill="#1d4ed8" />

      <g>
        <path d="M116 172l180-100 180 100v188H116z" fill="#fff" stroke="#1d4ed8" strokeWidth="3" />
        <path d="M96 174L296 58l200 116z" fill="url(#maint-grid)" stroke="#1d4ed8" strokeWidth="4" />
        <rect x="147" y="197" width="170" height="126" rx="4" fill="#f8fbff" stroke="#93b4e6" strokeWidth="3" />
        <path d="M147 225h170M147 252h170" stroke="#d3e3fb" strokeWidth="2" />
        <text x="163" y="217" fill="#0a1f44" fontFamily="DM Sans, sans-serif" fontSize="13" fontWeight="700">SERVICE CENTER</text>
        <rect x="344" y="190" width="108" height="170" rx="4" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="3" />
        <path d="M360 360v-63a38 38 0 0 1 76 0v63" fill="#fff" stroke="#1d4ed8" strokeWidth="3" />
        <rect x="124" y="344" width="340" height="13" fill="#1d4ed8" />
      </g>

      <g className="jp-cons__maint-board">
        <rect x="354" y="196" width="182" height="118" rx="8" fill="#fff" stroke="#1d4ed8" strokeWidth="3" />
        <rect x="354" y="196" width="182" height="24" rx="7" fill="#1d4ed8" />
        <text x="367" y="213" fill="#fff" fontFamily="DM Sans, sans-serif" fontSize="11" fontWeight="700">SERVICE TICKETS</text>
        {[0, 1, 2].map((col) => <g key={col}>
          <rect x={364 + col * 56} y="230" width="48" height="69" rx="4" fill="#eef5ff" stroke="#d3e3fb" />
          <text x={388 + col * 56} y="242" textAnchor="middle" fill="#4a5f82" fontFamily="DM Sans, sans-serif" fontSize="6.5" fontWeight="700">{['To do', 'In progress', 'Done'][col]}</text>
        </g>)}
        <g className="jp-cons__maint-ticket">
          <animateTransform attributeName="transform" type="translate" values="0 0;0 0;56 0;56 0;112 0;112 0" keyTimes="0;.18;.38;.56;.76;1" dur="10s" repeatCount="indefinite" />
          <rect x="370" y="250" width="36" height="39" rx="4" fill="#fff" stroke="#38bdf8" strokeWidth="2" />
          <path d="M376 259h23m-23 6h19m-19 6h15" stroke="#93b4e6" strokeWidth="2" strokeLinecap="round" />
          <path d="m379 280 4 4 9-10" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <animate attributeName="opacity" values="0;0;0;0;1;1" keyTimes="0;.18;.38;.56;.76;1" dur="10s" repeatCount="indefinite" />
          </path>
        </g>
      </g>

      <g className="jp-cons__maint-gear jp-cons__maint-gear-large" transform="translate(548 152)" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="3">
        <path d="M-8-39h16l4 11 10-5 11 11-5 10 11 4v16l-11 4 5 10-11 11-10-5-4 11H-8l-4-11-10 5-11-11 5-10-11-4v-16l11-4-5-10 11-11 10 5z" />
        <circle r="13" fill="#fff" />
        <animateTransform attributeName="transform" type="rotate" values="0 548 152;360 548 152" dur="18s" repeatCount="indefinite" />
      </g>
      <g className="jp-cons__maint-gear jp-cons__maint-gear-small" transform="translate(600 210)" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2.5">
        <path d="M-6-27h12l3 8 7-4 9 9-4 7 8 3v12l-8 3 4 7-9 9-7-4-3 8H-6l-3-8-7 4-9-9 4-7-8-3v-12l8-3-4-7 9-9 7 4z" />
        <circle r="9" fill="#fff" />
        <animateTransform attributeName="transform" type="rotate" values="360 600 210;0 600 210" dur="12s" repeatCount="indefinite" />
      </g>
      <g className="jp-cons__maint-wrench" transform="translate(512 95) rotate(-18)">
        <path d="M0 5a19 19 0 0 0 24 24l28 28a8 8 0 0 0 11-11L35 18A19 19 0 0 0 11-6l12 12-12 12z" fill="#38bdf8" stroke="#1d4ed8" strokeWidth="3" strokeLinejoin="round" />
        <animateTransform attributeName="transform" type="rotate" values="-18 512 95;18 512 95;-18 512 95" dur="3.2s" repeatCount="indefinite" />
      </g>

      <g transform="translate(0 0)">
        <rect x="500" y="302" width="86" height="42" rx="5" fill="#fff" stroke="#1d4ed8" strokeWidth="2" />
        <path d="M510 334h66m-62-22h18m-18 8h32" stroke="#93b4e6" strokeWidth="3" strokeLinecap="round" />
        <g className="jp-cons__maint-pin" transform="translate(552 292)">
          <circle cy="4" r="22" fill="#38bdf8" opacity=".18"><animate attributeName="r" values="15;27;15" dur="2s" repeatCount="indefinite" /></circle>
          <path d="M0-17a11 11 0 0 0-11 11c0 8 11 21 11 21S11 2 11-6A11 11 0 0 0 0-17zm0 15a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" fill="#1d4ed8" />
        </g>
      </g>

      <g className="jp-cons__maint-conveyor">
        <rect x="64" y="350" width="410" height="13" rx="6" fill="#173b77" />
        <path d="M82 356h370" stroke="#93c5fd" strokeWidth="2" strokeDasharray="10 10"><animate attributeName="stroke-dashoffset" values="0;-40" dur="1s" repeatCount="indefinite" /></path>
        {[0, 1, 2].map((box) => <g key={box} transform={`translate(${118 + box * 85} 0)`}>
          <animateTransform attributeName="transform" type="translate" values={`${118 + box * 85} 0;${178 + box * 85} 0`} dur="5s" begin={`${box * -1.5}s`} repeatCount="indefinite" />
          <rect x="0" y="322" width="35" height="27" rx="3" fill={box === 1 ? '#38bdf8' : '#bfdbfe'} stroke="#1d4ed8" strokeWidth="2" />
          <path d="M17 323v25M1 335h33" stroke="#1d4ed8" strokeWidth="1.5" />
        </g>)}
      </g>

      <g className="jp-cons__maint-van">
        <animateTransform attributeName="transform" type="translate" values="-150 334;18 334;18 334;-150 334" keyTimes="0;.38;.72;1" dur="14s" repeatCount="indefinite" />
        <path d="M0 0h70l19 18v28H0z" fill="#38bdf8" stroke="#1d4ed8" strokeWidth="3" />
        <path d="M70 5v15h15" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="2" />
        <rect x="10" y="9" width="24" height="16" rx="2" fill="#fff" /><rect x="39" y="9" width="23" height="16" rx="2" fill="#fff" />
        <text x="8" y="39" fill="#0a1f44" fontFamily="DM Sans, sans-serif" fontSize="7" fontWeight="700">SERVICE</text>
        <circle cx="20" cy="47" r="8" fill="#173b77" /><circle cx="70" cy="47" r="8" fill="#173b77" />
      </g>
      <g className="jp-cons__maint-technician">
        <animateTransform attributeName="transform" type="translate" values="174 328;265 328;265 328;174 328" keyTimes="0;.4;.72;1" dur="12s" repeatCount="indefinite" />
        <use href="#maint-tech" />
        <path d="M-6 0h12v18H-6z" fill="#f59e0b" stroke="#92400e" strokeWidth="2" />
      </g>
    </svg>
  );
}

function FeatureCard({ feature }) {
  const Icon = featureIcons[feature.icon];
  return <article className="jp-cons__maintenance-feature">
    <span className="jp-cons__maintenance-feature-icon" aria-hidden="true"><Icon size={23} strokeWidth={1.9} /></span>
    <h3>{feature.title}</h3>
    <p>{feature.desc}</p>
  </article>;
}

export default function MaintenanceERP() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Maintenance ERP System — Jupical Technologies';
    window.scrollTo({ top: 0, behavior: 'instant' });
    return () => { document.title = previousTitle; };
  }, []);

  return <>
    <Navbar activePage="Odoo ERPs" />
    <main className="jp-cons jp-cons__maintenance">
      <header className="jp-cons__maintenance-hero">
        <div className="jp-cons__wrap">
          <div className="jp-cons__maintenance-hero-grid">
            <div className="jp-cons__maintenance-copy">
              <h1 className="jp-cons__maintenance-title">Maintenance ERP System</h1>
              <p>Service-based businesses thrive on timely execution, client satisfaction, and efficient resource management. Our Service Management ERP is tailored to help you manage job orders, track service progress, allocate tasks, and ensure seamless coordination between teams and customers.</p>
              <Link className="jp-cons__maintenance-cta" to="/contact-us">Request a Demo</Link>
            </div>
            <MaintenanceScene />
          </div>
        </div>
      </header>

      <section className="jp-cons__maintenance-features" aria-labelledby="maintenance-features-title">
        <div className="jp-cons__wrap">
          <div className="jp-cons__maintenance-section-heading">
            <h2 id="maintenance-features-title">Key Features</h2>
            <p>Coordinate every service request, field visit, and part from one connected workspace.</p>
          </div>
          <div className="jp-cons__maintenance-feature-grid">
            {maintenanceFeatures.map((feature) => <FeatureCard key={feature.title} feature={feature} />)}
          </div>
        </div>
      </section>

      <ModuleShowcase
        id="service-modules"
        title="See Service Management ERP in Action"
        subtitle="Watch how setup and every module work, step by step."
        playerTitle="Service Management ERP"
        playerSubtitle="Watch how setup and every module work, step by step."
        mainVideoId={maintenanceMainVideoId}
        modules={maintModules}
        warnOnVideoCheckError
        playerAfterHeading
      />

      <section className="jp-cons__maintenance-ending">
        <div className="jp-cons__wrap">
          <div className="jp-cons__maintenance-section-heading">
            <h2>Why Choose Our Service ERP?</h2>
          </div>
          <div className="jp-cons__maintenance-benefits">
            {maintenanceBenefits.map((benefit, index) => {
              const Icon = benefitIcons[index];
              return <article className="jp-cons__maintenance-benefit" key={benefit}>
                <span aria-hidden="true"><Icon size={22} strokeWidth={1.9} /></span>
                <p>{benefit}</p>
              </article>;
            })}
          </div>

          <section className="jp-cons__maintenance-documentation" aria-labelledby="maintenance-doc-title">
            <div className="jp-cons__maintenance-doc-copy">
              <span className="jp-cons__maintenance-doc-icon" aria-hidden="true"><FileText size={25} /></span>
              <div><h2 id="maintenance-doc-title">Download Documentation</h2><p>Enterprise (PDF)</p></div>
            </div>
            {maintenanceDocumentationUrl ? <a className="jp-cons__maintenance-download" href={maintenanceDocumentationUrl} download><Download size={17} />Download PDF</a> : <button className="jp-cons__maintenance-download" type="button" disabled aria-disabled="true"><Download size={17} />PDF link needed</button>}
          </section>
        </div>
      </section>

      <section className="jp-cons__maintenance-closing">
        <div className="jp-cons__wrap">
          <div><h2>Empower Your Service Teams to Do More, Faster</h2><p>Whether you manage a few jobs or hundreds in a week, our ERP keeps everything organized and efficient, so your customers stay happy and your operations stay smooth.</p></div>
          <Link className="jp-cons__maintenance-cta" to="/contact-us">Let's work together to elevate your service delivery. Contact us today!</Link>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
