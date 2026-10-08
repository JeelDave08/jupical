import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ModuleShowcase from '../../components/ModuleShowcase';
import './ConstructionERP.css';

const JP_VIDEOS = { main: "gWbe-VODpQc", modules: ["X6eys_I26uM","AVLGyHDSvjU","rO2JH9eyxz8","9hailXgLfgg","u6qiVwj0Eco","JLsHWVtYhKk","pz0Wvu6uX4U","vFKKFdCz7CA","8xg37GKnAnw","vZdRzyeHuB8","1-N1fKiw2o8","gG4GObM0zow","w9hskwXSjv4"] };

const modules = [
  ['Configuration and Setup', 'Set up your company, projects, users and workflows so everything is ready to start.'],
  ['Project Creation & Analytic Linking', 'Create projects and link analytic accounts to see cost and progress in real time.'],
  ['Project Scope & Property Setup', 'Define scope, property details, units and specifications.'],
  ['Proforma Invoice & Sale Order', 'Generate proforma invoices and turn them into sale orders.'],
  ['Progressive Invoicing from Project', 'Raise invoices as each project milestone is completed.'],
  ['Billing Info & Payment Registration', 'Keep billing details and record customer payments.'],
  ['Advance Payments & Retentions', 'Handle advances and retentions for steady cash flow.'],
  ['Invoice Omission', 'Adjust or omit invoice amounts with a clear audit trail.'],
  ['Recording Project Expenses', 'Track every project-related expense in one place.'],
  ['Purchase Orders, GRNs & Vendor Bills', 'Run procurement from purchase order to goods receipt and vendor bill.'],
  ['Asset Management & Depreciation', 'Track equipment and depreciate it against projects.'],
  ['Labour Management & Labour Expenses', 'Manage workforce, wages and labour costs.'],
  ['Project Reporting', 'See profitability and progress in reports built for decisions.'],
];

function ConstructionScene({ floorCount }) {
  const floors = Array.from({ length: 5 }, (_, index) => {
    const y = 380 - 36 * (index + 1);
    return (
      <g className={`jp-cons__floor${index >= floorCount ? ' off' : ''}`} key={index}>
        <rect x="250" y={y} width="140" height="36" fill="#fff" stroke="#1d4ed8" strokeWidth="2" />
        <rect x="246" y={y - 3} width="148" height="5" fill="#1d4ed8" />
        {[0, 1, 2, 3].map((window) => <rect key={window} x={258 + window * 32} y={y + 10} width="18" height="16" fill="#e0f2fe" stroke="#1d4ed8" strokeWidth="1" />)}
      </g>
    );
  });
  const workerTransform = `translate(262px,${380 - 36 * floorCount}px)`;
  const workerTwoTransform = `translate(355px,${380 - 36 * floorCount}px)`;
  return (
    <svg className="jp-cons__scene" viewBox="0 0 520 420" role="img" aria-label="Animated construction site: crane lifting material while workers build a tower">
      <defs>
        <linearGradient id="jp-cons-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#dbeafe" /><stop offset="1" stopColor="#f4f9ff" /></linearGradient>
        <pattern id="jp-cons-lattice" width="14" height="14" patternUnits="userSpaceOnUse"><path d="M0 14L14 0M0 0L14 14" stroke="#1d4ed8" strokeWidth="1.2" fill="none" /></pattern>
        <g id="jp-cons-worker"><rect x="-5" y="-16" width="4" height="16" fill="#1e3a8a" /><rect x="1" y="-16" width="4" height="16" fill="#1e3a8a" /><rect x="-6" y="-34" width="12" height="19" rx="3" fill="#2563eb" /><rect x="-6" y="-24" width="12" height="3" fill="#bae6fd" /><circle cy="-40" r="5" fill="#fcd5b0" /><path d="M-6.5-41a6.5 6.5 0 0 1 13 0z" fill="#fbbf24" /><rect x="-7.5" y="-42" width="15" height="2" rx="1" fill="#f59e0b" /></g>
      </defs>
      <rect width="520" height="420" rx="20" fill="url(#jp-cons-sky)" />
      <circle cx="440" cy="60" r="26" fill="#fde68a" opacity=".8" />
      <g className="jp-cons__cloud" fill="#fff" opacity=".9"><ellipse cx="90" cy="70" rx="34" ry="11" /><ellipse cx="112" cy="62" rx="22" ry="10" /></g>
      <g className="jp-cons__cloud" style={{ animationDelay: '-20s' }} fill="#fff" opacity=".8"><ellipse cx="60" cy="120" rx="28" ry="9" /><ellipse cx="80" cy="113" rx="18" ry="8" /></g>
      <g fill="#c7dbf7"><rect x="20" y="300" width="40" height="80" /><rect x="66" y="270" width="34" height="110" /><rect x="430" y="290" width="44" height="90" /><rect x="478" y="320" width="30" height="60" /></g>
      <rect y="380" width="520" height="40" fill="#93b4e6" /><rect y="380" width="520" height="5" fill="#1d4ed8" />
      <g><rect x="246" y="372" width="148" height="10" fill="#64748b" />{floors}</g>
      <g stroke="#64748b" strokeWidth="2" opacity=".7"><path d="M232 380V190M246 380V190M232 380h14M232 344h14M232 308h14M232 272h14M232 236h14M232 200h14" /></g>
      <g>
        <rect x="188" y="70" width="24" height="312" fill="url(#jp-cons-lattice)" /><rect x="188" y="70" width="3" height="312" fill="#1d4ed8" /><rect x="209" y="70" width="3" height="312" fill="#1d4ed8" />
        <rect x="170" y="376" width="60" height="8" fill="#1e3a8a" /><rect x="190" y="52" width="20" height="20" fill="#2563eb" /><rect x="194" y="56" width="12" height="9" fill="#bae6fd" />
        <rect x="60" y="62" width="360" height="9" fill="url(#jp-cons-lattice)" /><rect x="60" y="62" width="360" height="2.5" fill="#1d4ed8" /><rect x="60" y="69" width="360" height="2.5" fill="#1d4ed8" />
        <path d="M200 28l-130 34M200 28l210 34M200 28v26" stroke="#1d4ed8" strokeWidth="1.6" /><polygon points="200,18 192,32 208,32" fill="#1d4ed8" /><rect x="60" y="71" width="30" height="22" fill="#475569" />
        <g><animateTransform attributeName="transform" type="translate" values="0 0;70 0;0 0" keyTimes="0;.5;1" dur="9s" repeatCount="indefinite" calcMode="spline" keySplines=".5 0 .5 1;.5 0 .5 1" /><rect x="276" y="71" width="14" height="7" fill="#1e3a8a" /><line x1="283" y1="78" x2="283" y2="150" stroke="#0f1f3d" strokeWidth="1.5"><animate attributeName="y2" values="150;230;150" keyTimes="0;.5;1" dur="9s" repeatCount="indefinite" /></line><g><animateTransform attributeName="transform" type="translate" values="0 0;0 80;0 0" keyTimes="0;.5;1" dur="9s" repeatCount="indefinite" /><path d="M283 150v6" stroke="#0f1f3d" strokeWidth="2" /><path d="M270 160h26M270 160l13-10 13 10" stroke="#f59e0b" strokeWidth="1.6" fill="none" /><rect x="268" y="160" width="30" height="16" fill="#38bdf8" stroke="#1d4ed8" strokeWidth="1.5" /><path d="M268 168h30" stroke="#1d4ed8" /></g></g>
      </g>
      <g fill="#38bdf8" stroke="#1d4ed8" strokeWidth="1"><rect x="96" y="364" width="22" height="16" /><rect x="120" y="364" width="22" height="16" /><rect x="108" y="348" width="22" height="16" /></g>
      <g transform="translate(160 380)"><use href="#jp-cons-worker" /><g transform="translate(0 -30)"><g><animateTransform attributeName="transform" type="rotate" values="-70;20;-70" dur=".8s" repeatCount="indefinite" /><rect y="-2" width="16" height="4" rx="2" fill="#fcd5b0" /><rect x="14" y="-3" width="3" height="14" fill="#92400e" /><rect x="10" y="9" width="12" height="6" fill="#475569" /></g></g></g>
      <g><animateTransform attributeName="transform" type="translate" values="130 380;215 380;215 380;130 380;130 380" keyTimes="0;.4;.5;.9;1" dur="8s" repeatCount="indefinite" /><g><animateTransform attributeName="transform" type="scale" values="1 1;-1 1;1 1" keyTimes="0;.45;.95" calcMode="discrete" dur="8s" repeatCount="indefinite" /><g><animateTransform attributeName="transform" type="translate" values="0 0;0 -2;0 0" dur=".4s" repeatCount="indefinite" /><use href="#jp-cons-worker" /><rect x="4" y="-32" width="14" height="9" fill="#38bdf8" stroke="#1d4ed8" /><rect x="2" y="-30" width="9" height="3" rx="1.5" fill="#fcd5b0" /></g></g></g>
      <g style={{ transform: workerTransform, transition: 'transform .8s' }}><use href="#jp-cons-worker" /><g transform="translate(0 -30)"><g><animateTransform attributeName="transform" type="rotate" values="-60;30;-60" dur=".7s" repeatCount="indefinite" /><rect y="-2" width="16" height="4" rx="2" fill="#fcd5b0" /><rect x="14" y="-3" width="3" height="13" fill="#92400e" /><rect x="10" y="8" width="12" height="6" fill="#475569" /></g></g></g>
      <g style={{ transform: workerTwoTransform, transition: 'transform .8s' }}><use href="#jp-cons-worker" /><g transform="translate(0 -30)"><g><animateTransform attributeName="transform" type="rotate" values="-50;40;-50" dur="1.1s" repeatCount="indefinite" /><rect x="-16" y="-2" width="16" height="4" rx="2" fill="#fcd5b0" /><rect x="-18" y="-10" width="3" height="14" fill="#92400e" /><rect x="-24" y="-14" width="12" height="6" fill="#475569" /></g></g></g>
    </svg>
  );
}

export default function ConstructionERP() {
  const [floorCount, setFloorCount] = useState(0);
  const moduleData = modules.map(([title, desc], index) => ({ title, desc, videoId: JP_VIDEOS.modules[index] }));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const previousTitle = document.title;
    document.title = 'Construction ERP in Odoo — Jupical Technologies';
    return () => { document.title = previousTitle; };
  }, []);

  useEffect(() => {
    let count = 0;
    const timer = window.setInterval(() => {
      count = (count + 1) % 7;
      setFloorCount(Math.min(count, 5));
    }, 2200);
    setFloorCount(1);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar activePage="Odoo ERPs" />
      <main className="jp-cons">
        <header className="jp-cons__hero">
          <div className="jp-cons__wrap">
            <div className="jp-cons__hero-grid">
              <div>
                <h1
                  className="jp-hero-title"
                  style={{ fontSize: 'clamp(30px, 2.8vw, 40px)', lineHeight: 1.2, letterSpacing: 0, fontWeight: 700 }}
                >
                  Complete Construction ERP in Odoo for End&#8209;to&#8209;End Project Management
                </h1>
                <p>Manage projects, procurement, accounting, payroll, billing and profitability from a single integrated ERP built for construction businesses.</p>
                <Link className="jp-cons__btn" to="/contact-us">Book a Demo</Link>&nbsp;<a className="jp-cons__btn jp-cons__btn--outline" href="#seq">See the 13 modules</a>
              </div>
              <ConstructionScene floorCount={floorCount} />
            </div>
          </div>
        </header>

        <ModuleShowcase id="seq" title="Build your project, one floor at a time" subtitle="Thirteen modules, in the order a real project runs. Scroll and watch the tower go up." playerTitle="Construction ERP" playerSubtitle="Construction ERP in Odoo: an end-to-end construction management success story." mainVideoId={JP_VIDEOS.main} modules={moduleData} />

        <section className="jp-cons__features">
          <div className="jp-cons__wrap">
            <h2>Key features covered</h2>
            <div className="jp-cons__chips"><span>Project management</span><span>Project costing &amp; analytic accounts</span><span>Sales, proforma &amp; progressive invoicing</span><span>Purchase &amp; GRN management</span><span>Vendor bills &amp; payments</span><span>Advance payments &amp; retentions</span><span>Labour &amp; payroll</span><span>Asset depreciation</span><span>Real-time reports &amp; dashboards</span></div>
            <h2 className="jp-cons__subheading">Built on Odoo core modules</h2>
            <div className="jp-cons__columns"><div><b>Odoo Project</b><span>Plan scope, tasks and milestones.</span></div><div><b>Odoo Accounting</b><span>Invoices, bills, payments and analytics.</span></div><div><b>Odoo Payroll</b><span>Labour wages and site expenses.</span></div></div>
            <h2 className="jp-cons__subheading">Ideal for</h2>
            <div className="jp-cons__chips"><span>Construction companies</span><span>Contractors</span><span>Infrastructure companies</span><span>Real estate developers</span><span>EPC companies</span></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
