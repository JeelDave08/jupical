import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ModuleShowcase from '../../components/ModuleShowcase';
import { educationCoreModules, educationMainVideoId, educationModules } from '../../data/education';
import './EducationERP.css';

function CampusScene() {
  const sceneRef = useRef(null);
  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncMotion = () => {
      if (motionPreference.matches) sceneRef.current?.pauseAnimations();
      else sceneRef.current?.unpauseAnimations();
    };
    syncMotion();
    motionPreference.addEventListener('change', syncMotion);
    return () => motionPreference.removeEventListener('change', syncMotion);
  }, []);
  return (
    <svg ref={sceneRef} className="jp-cons__edu-scene" viewBox="0 0 560 420" role="img" aria-label="Animated school campus with a bus, students and a teacher">
      <defs>
        <linearGradient id="edu-sky" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#dbeafe" /><stop offset="1" stopColor="#f8fbff" /></linearGradient>
        <g id="edu-student"><circle cx="0" cy="-30" r="7" fill="#f7c9a8" /><path d="M-8-36q8-10 16 0" fill="#1d4ed8" /><path d="M-9-21h18l4 21h-26z" fill="#2563eb" /><path d="M-5 0l-3 18m14-18 3 18" stroke="#173b77" strokeWidth="5" strokeLinecap="round" /><path d="M-9-16l-9 12m27-12 9 9" stroke="#f7c9a8" strokeWidth="4" strokeLinecap="round" /></g>
      </defs>
      <rect width="560" height="420" rx="22" fill="url(#edu-sky)" />
      <circle cx="476" cy="65" r="28" fill="#fde68a" opacity=".8" />
      <g className="jp-cons__edu-cloud" fill="#fff" opacity=".9"><ellipse cx="72" cy="76" rx="37" ry="12"/><ellipse cx="96" cy="67" rx="25" ry="13"/></g>
      <g className="jp-cons__edu-cloud" fill="#fff" opacity=".78" style={{ animationDelay: '-12s' }}><ellipse cx="378" cy="108" rx="33" ry="11"/><ellipse cx="399" cy="100" rx="23" ry="12"/></g>
      <g fill="#c7dbf7"><rect x="20" y="267" width="48" height="103"/><rect x="75" y="290" width="35" height="80"/><rect x="454" y="264" width="48" height="106"/><rect x="508" y="297" width="32" height="73"/></g>
      <rect y="370" width="560" height="50" fill="#93b4e6"/><rect y="370" width="560" height="5" fill="#1d4ed8"/>
      <g>
        <rect x="164" y="176" width="228" height="194" fill="#fff" stroke="#1d4ed8" strokeWidth="3"/><path d="M148 178l130-90 130 90z" fill="#bfdbfe" stroke="#1d4ed8" strokeWidth="3"/>
        <rect x="254" y="116" width="48" height="46" fill="#fff" stroke="#1d4ed8" strokeWidth="2"/><path d="M278 116V93" stroke="#1d4ed8" strokeWidth="3"/><path d="M279 94l34 9-34 9z" fill="#38bdf8"/>
        <rect x="250" y="282" width="56" height="88" rx="25" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="3"/><circle cx="291" cy="327" r="3" fill="#1d4ed8"/>
        {[186, 235, 318, 367].map((x) => <g key={x}><rect x={x} y="206" width="30" height="32" rx="3" fill="#e0f2fe" stroke="#2563eb" strokeWidth="2"/><path d={`M${x+15} 206v32m-15-16h30`} stroke="#2563eb" strokeWidth="1.5"/></g>)}
        <rect x="182" y="254" width="196" height="5" fill="#1d4ed8"/>
      </g>
      <g className="jp-cons__edu-teacher" transform="translate(424 292)">
        <rect x="-42" y="-82" width="78" height="56" rx="4" fill="#fff" stroke="#1d4ed8" strokeWidth="3"/><path d="M-28-40v-14m18 14v-26M8-40v-34" stroke="#38bdf8" strokeWidth="9" strokeLinecap="round"><animate attributeName="stroke-width" values="5;12;5" dur="3s" repeatCount="indefinite"/></path>
        <circle cy="-10" r="8" fill="#f7c9a8"/><path d="M-10 0h20v46h-20z" fill="#1d4ed8"/><path d="M-6 46l-5 26m17-26 5 26" stroke="#173b77" strokeWidth="6" strokeLinecap="round"/><path d="M8 8l20-16" stroke="#f7c9a8" strokeWidth="4"/>
      </g>
      <g transform="translate(130 338)"><use href="#edu-student"/><animateTransform attributeName="transform" type="translate" values="130 338;148 338;130 338" dur="3.4s" repeatCount="indefinite"/></g>
      <g transform="translate(118 338)"><use href="#edu-student"/><animateTransform attributeName="transform" type="translate" values="118 338;136 338;118 338" begin="-.9s" dur="3.4s" repeatCount="indefinite"/></g>
      <g transform="translate(106 338)"><use href="#edu-student"/><animateTransform attributeName="transform" type="translate" values="106 338;124 338;106 338" begin="-1.8s" dur="3.4s" repeatCount="indefinite"/></g>
      <g className="jp-cons__edu-bus"><rect x="-88" y="-34" width="84" height="35" rx="8" fill="#38bdf8" stroke="#1d4ed8" strokeWidth="3"/><rect x="-74" y="-27" width="22" height="14" rx="3" fill="#fff"/><rect x="-45" y="-27" width="22" height="14" rx="3" fill="#fff"/><circle cx="-68" cy="2" r="8" fill="#173b77"/><circle cx="-18" cy="2" r="8" fill="#173b77"/><animateTransform attributeName="transform" type="translate" values="-96 346;680 346;-96 346" dur="20s" repeatCount="indefinite"/></g>
      <g className="jp-cons__edu-float jp-cons__edu-book" transform="translate(95 184)"><path d="M0 2q15-9 30 0v28q-15-9-30 0zM30 2q15-9 30 0v28q-15-9-30 0z" fill="#fff" stroke="#1d4ed8" strokeWidth="2"/></g>
      <g className="jp-cons__edu-float jp-cons__edu-pencil" transform="translate(450 176) rotate(28)"><rect x="0" y="0" width="10" height="58" rx="4" fill="#38bdf8" stroke="#1d4ed8"/><path d="M0 0l5-12 5 12" fill="#fde68a" stroke="#1d4ed8"/></g>
      <g className="jp-cons__edu-float jp-cons__edu-cap" transform="translate(80 282)"><path d="M-30 0L0-14 30 0 0 14z" fill="#1d4ed8"/><path d="M-18 8v12q18 12 36 0V8" fill="#38bdf8" stroke="#1d4ed8"/><path d="M30 0v18" stroke="#1d4ed8" strokeWidth="2"/></g>
      <g className="jp-cons__edu-float jp-cons__edu-atom" transform="translate(490 234)" fill="none" stroke="#2563eb" strokeWidth="2"><ellipse rx="24" ry="9"/><ellipse rx="24" ry="9" transform="rotate(60)"/><ellipse rx="24" ry="9" transform="rotate(120)"/><circle r="4" fill="#38bdf8"/></g>
    </svg>
  );
}

export default function EducationERP() {
  return <>
    <Navbar activePage="Odoo ERPs" />
    <main className="jp-cons jp-cons__education">
      <header className="jp-cons__hero jp-cons__education-hero"><div className="jp-cons__wrap"><div className="jp-cons__hero-grid">
        <div><h1 className="jp-hero-title">Complete Education ERP in Odoo with Web &amp; Mobile Solutions</h1>
          <p>A comprehensive, cloud based ERP that brings your entire institution, whether a school, college, university, or training center, onto a single platform. Manage academics, admissions, finance, and campus operations from one integrated system, with dedicated web and mobile applications for students, parents, faculty, and administrators.</p>
          <div className="jp-cons__education-actions"><a className="jp-cons__btn" href="/contact-us">Buy</a><Link className="jp-cons__btn jp-cons__btn--outline" to="/contact-us">Request Demo</Link></div>
        </div><CampusScene />
      </div></div></header>

      <ModuleShowcase title="Explore every Education ERP module" subtitle="Discover the connected tools that support every stage of your institution's daily work." playerTitle="See the Education ERP in Action" playerSubtitle="A complete education management system for your school or campus." mainVideoId={educationMainVideoId} modules={educationModules} validateVideoTitles />

      <section className="jp-cons__education-ending"><div className="jp-cons__wrap">
        <div className="jp-cons__education-intro"><h2>Complete Education ERP Built on Odoo</h2><p>A comprehensive, cloud based ERP that brings your entire institution, whether a school, college, university, or training center, onto a single platform. Manage academics, admissions, finance, and campus operations from one integrated system, with dedicated web and mobile applications for students, parents, faculty, and administrators.</p></div>
        <section className="jp-cons__education-core"><h2>Core Modules</h2><div className="jp-cons__education-chips">{educationCoreModules.map((item) => <span key={item}>{item}</span>)}</div></section>
        <div className="jp-cons__education-cards">
          <article><h3>Parent and Student Portals</h3><p>Provide real time access to attendance, examination results, fee details, timetables, announcements, events, and other academic information through a unified dashboard available on both the web and mobile applications for Android and iOS.</p></article>
          <article><h3>Smart Campus Operations</h3><p><b>Hostel Management:</b> Manage room allocation, occupancy, hostel fees, and resident records.</p><p><b>Transportation Management:</b> Organize routes, vehicles, drivers, pickup points, and transport fee tracking with complete visibility for parents and administrators.</p><p><b>Library Management:</b> Maintain book catalogs, issue and return records, reservations, and fine management.</p><p><b>Event Management and Student Counselling:</b> Organize institutional events, manage student activities, and maintain structured counselling records to support student development and well being.</p></article>
          <article><h3>Insightful Dashboards</h3><p>Gain valuable insights through real time, customizable dashboards and reports covering admissions, attendance, examinations, fees, finance, and institutional KPIs, enabling informed and data driven decision making at every level.</p></article>
          <article><h3>Native Odoo Integration</h3><p>Built natively on Odoo, our Education ERP seamlessly integrates with Accounting, CRM, HR, Payroll, Documents, Invoicing, and other Odoo applications, providing a single source of truth while eliminating duplicate data entry.</p><h3 className="jp-cons__education-card-subtitle">Built to Scale</h3><p>Designed for institutions of every size with multi campus, multi institution, and multilingual support across more than 15 languages. The solution offers role based access control, extensive customization, and full compatibility with Odoo versions 15 through 19, supporting both Community and Enterprise editions.</p></article>
        </div>
      </div></section>
      <section className="jp-cons__education-cta"><div className="jp-cons__wrap"><div><h2>Let's Simplify School &amp; Campus Operations</h2><p>See the full Education ERP in action and find out how it fits your school.</p></div><Link className="jp-cons__btn" to="/contact-us">Get in touch with us today</Link></div></section>
    </main>
    <Footer />
  </>;
}
