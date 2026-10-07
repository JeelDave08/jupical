import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './CaseStudies.css';

const caseStudiesData = [
  {
    id: 1,
    category: 'Manufacturing',
    title: 'Paints - Manufacturing in odoo',
    description: 'Jupical implemented a customized Odoo ERP solution for Paints Manufacturing, introducing dual units of measure and streamlining inventory and manufacturing operations. The solution improved material tracking, stock accuracy, production control and overall operational visibility.',
    tech: 'Odoo ERP',
    stats: '',
    image: ''
  },
  {
    id: 2,
    category: 'Services',
    title: 'Travel Solutions in odoo',
    description: 'Jupical successfully implemented a customized Odoo Community ERP for Travel Company, supporting 40+ users with CRM and travel business operations.',
    tech: 'Odoo Community',
    stats: '40+ users',
    image: ''
  },
  {
    id: 3,
    category: 'Manufacturing',
    title: 'Transforming Contract Manufacturing with an Integrated ERP',
    description: 'Discover how an integrated ERP solution streamlined production, inventory, procurement, quality, costing, and financial operations providing complete visibility across the contract manufacturing lifecycle.',
    tech: 'Integrated ERP',
    stats: '',
    image: ''
  },
  {
    id: 4,
    category: 'Manufacturing',
    title: 'Ladder Manufacturing ERP in Odoo',
    description: 'Jupical implemented a customized Odoo Community ERP with a distributor mobile app for All Ford, empowering 30+ users in ladder manufacturing.',
    tech: 'Odoo Community',
    stats: '30+ users',
    image: ''
  },
  {
    id: 5,
    category: 'Trade & Retail',
    title: 'Hardware Khazana - Hardware Store',
    description: 'Jupical implemented standard Odoo Enterprise CRM for Hardware Khazana, enabling efficient sales and customer management for 3 active users.',
    tech: 'Odoo Enterprise',
    stats: '3 users',
    image: ''
  },
  {
    id: 6,
    category: 'Manufacturing',
    title: 'FMCG Manufacturing ERP in Odoo',
    description: 'Jupical implemented a customized Odoo Community ERP and distributor mobile app for Rhoads Beverages, supporting 50+ ERP users and 200+ distributors.',
    tech: 'Odoo Community',
    stats: '50+ users',
    image: ''
  },
  {
    id: 7,
    category: 'Education',
    title: 'Education Academy',
    description: 'Jupical implemented an Odoo Community 19 ERP for Education Institute End to End Operations with Web and Mobile Application useful for schools and colleges.',
    tech: 'Odoo Community 19',
    stats: '',
    image: ''
  },
  {
    id: 8,
    category: 'Manufacturing',
    title: 'Brass Parts Manufacturer',
    description: 'Jupical implemented an Odoo Community 19 ERP for Brass manufacturing company in Jamnagar, automating manufacturing, multi-company operations, inventory, and reports for 45 users.',
    tech: 'Odoo Community 19',
    stats: '45 users',
    image: ''
  },
  {
    id: 9,
    category: 'Finance',
    title: 'Semi Public - Financial Services',
    description: 'Jupical implemented an Odoo Community 19 loan management system for Public company Malaysia, automating applications to disbursement for 100+ users.',
    tech: 'Odoo Community 19',
    stats: '100+ users',
    image: ''
  },
  {
    id: 10,
    category: 'Energy & Construction',
    title: 'Citaglobal - Energy Solution Provider',
    description: 'Jupical implemented an Odoo Community ERP for public sector in Malaysia, integrating CRM, Accounts, Purchase, and a customized website to match their operation workflow for 50+ users.',
    tech: 'Odoo Community',
    stats: '50+ users',
    image: ''
  },
  {
    id: 11,
    category: 'Trade & Retail',
    title: 'Rotoriko - Lifting Equipment Trader',
    description: 'Jupical implemented an Odoo Enterprise 18 ERP for Rotoriko, integrating operations for a lifting equipment manufacturer and trader for 14+ users.',
    tech: 'Odoo Enterprise 18',
    stats: '14+ users',
    image: ''
  },
  {
    id: 12,
    category: 'Manufacturing',
    title: 'Heben Crane - Manufacturing',
    description: 'Jupical implemented an Odoo Enterprise 19 CRM for Heben Crane, delivering streamlined sales and customer management for 10+ users.',
    tech: 'Odoo Enterprise 19',
    stats: '10+ users',
    image: ''
  },
  {
    id: 13,
    category: 'Services',
    title: 'One Green Arrow Manpower Corp.',
    description: 'To simplify HR and payroll operations, automate attendance, leave and payroll processing, ensure mandatory compliance, reduce manual work and errors, and centralize employee management in one integrated system.',
    tech: 'Odoo ERP',
    stats: '',
    image: ''
  },
  {
    id: 14,
    category: 'Manufacturing',
    title: 'Millennium - Defence and Auto Parts Manufacturer',
    description: 'Jupical implemented an Odoo Community ERP for Millennium Forging, integrating CRM, purchase, manufacturing, and inventory for 10+ active users.',
    tech: 'Odoo Community',
    stats: '10+ users',
    image: ''
  },
  {
    id: 15,
    category: 'Manufacturing',
    title: 'Powerpace - Battery Manufacturer',
    description: 'Jupical implemented a customized Odoo Community ERP for Powerpace Energy, automating CRM, sales, purchase, manufacturing, and inventory for 10 users.',
    tech: 'Odoo Community',
    stats: '10 users',
    image: ''
  },
  {
    id: 16,
    category: 'Trade & Retail',
    title: 'Indus Aushadhi - Export Business',
    description: 'Jupical implemented a customized Odoo Community ERP for Indus Aushadhi, with CRM, sales, procurement, and export operations for 30+ users.',
    tech: 'Odoo Community',
    stats: '30+ users',
    image: ''
  },
  {
    id: 17,
    category: 'Services',
    title: 'Procom - Entertainment Technology Solutions Provider',
    description: 'Jupical has partnered with Procom Middle East since 2016, delivering Odoo Community ERP from v9 to v18 for 120+ active users.',
    tech: 'Odoo Community',
    stats: '120+ users',
    image: ''
  },
  {
    id: 18,
    category: 'Finance',
    title: 'SRN Integrated - Financial Services',
    description: 'Jupical implemented an Odoo Enterprise 18 financial ERP for SRN Lending, streamlining lending and finance operations for 15 active users.',
    tech: 'Odoo Enterprise 18',
    stats: '15 users',
    image: ''
  },
  {
    id: 19,
    category: 'Manufacturing',
    title: 'Shivansh - Packaging Solutions',
    description: 'Jupical implemented a customized Odoo Community ERP and a custom website for Shivansh Industries, a silica gel manufacturer, supporting 10+ active users.',
    tech: 'Odoo Community',
    stats: '10+ users',
    image: ''
  },
  {
    id: 20,
    category: 'Manufacturing',
    title: 'SRP Crane Controls (India) manufacturer',
    description: 'Jupical implemented an Odoo Enterprise ERP for SRP Crane Controls (India), connecting CRM, HR and Payroll for 25+ users across a 5-city network.',
    tech: 'Odoo Enterprise',
    stats: '25+ users',
    image: ''
  },
  {
    id: 21,
    category: 'Energy & Construction',
    title: 'Al Emara Construction - Commercial Construction',
    description: 'Jupical implemented a custom Odoo 16 Community construction ERP for Al Emara Construction in Qatar, automating progressive billing, advance payments, retention, asset depreciation, and attendance-based labour costing.',
    tech: 'Odoo 16 Community',
    stats: '',
    image: ''
  }
];

function getClientName(title) {
  if (!title) return '';
  const parts = title.split(' - ');
  return parts[0].replace(/ manufacturer$/i, '').trim();
}

function CardMedia({ item }) {
  const [imgError, setImgError] = useState(false);

  if (item.image && !imgError) {
    return (
      <img
        src={item.image}
        alt={item.title}
        onError={() => setImgError(true)}
      />
    );
  }

  const clientName = getClientName(item.title);

  return (
    <div className="cs-ph">
      <strong>{clientName}</strong>
    </div>
  );
}

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCase, setSelectedCase] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const prevTitle = document.title;
    document.title = 'Case Studies — Customer Success Stories | Jupical';
    return () => {
      document.title = prevTitle;
    };
  }, []);

  const categories = ['All', 'Manufacturing', 'Services', 'Trade & Retail', 'Education', 'Finance', 'Energy & Construction'];

  const filteredItems = activeCategory === 'All'
    ? caseStudiesData
    : caseStudiesData.filter(item => item.category === activeCategory);

  return (
    <div className="cs-page">
      <Navbar />

      {/* PART A: Compact Hero */}
      <header className="cs-hero">
        <div className="cs-wrap">
          <div>
            <span className="cs-tag">
              <i></i>Customer Success Stories
            </span>
            <h1>
              Real Businesses. Real Challenges.
              <em>Real Business Transformation.</em>
            </h1>
            <p className="cs-lead">
              Discover how Jupical helps businesses streamline operations, automate workflows and build scalable digital systems through expertly implemented Odoo and Open Source ERP solutions.
            </p>
            <div className="cs-cta">
              <Link className="cs-btn" to="/#contact">Connect</Link>
            </div>
            <ul className="cs-flow" aria-label="Departments connected in one Odoo system">
              <li style={{ '--i': 0 }}>Sales</li>
              <li style={{ '--i': 1 }}>Purchase</li>
              <li style={{ '--i': 2 }}>Inventory</li>
              <li style={{ '--i': 3 }}>Manufacturing</li>
              <li style={{ '--i': 4 }}>Finance</li>
              <li style={{ '--i': 5 }}>HR</li>
            </ul>
          </div>

          <aside className="cs-side">
            <p className="cs-big">
              Every business operates differently. Standard software alone cannot always address industry-specific processes, reporting requirements and operational challenges.
            </p>
            <p>
              At Jupical, we begin by understanding how each organization works from sales, procurement and inventory to manufacturing, finance, human resources and customer service. We then configure and customize Odoo to create an integrated ERP environment aligned with the organization's processes and growth objectives.
            </p>
            <p>
              Our experience across Odoo Community and Enterprise, Flutter and MERN stack enables us to deliver solutions that reduce manual work, connect departments, improve decision-making and support long-term business growth.
            </p>
            <p>
              Explore our customer success stories to see how organizations across industries have transformed their operations with Jupical.
            </p>
          </aside>
        </div>
      </header>

      {/* PART B: Filter Bar */}
      <div className="cs-bar">
        <div className="cs-wrap" role="group" aria-label="Filter case studies">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cs-chip ${activeCategory === cat ? 'active' : ''}`}
              aria-pressed={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
          <span className="cs-count" aria-live="polite">
            {filteredItems.length} case studies
          </span>
        </div>
      </div>

      {/* PART B: Grid of Cards */}
      <main className="cs-main">
        <div className="cs-wrap">
          <div className="cs-grid">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                className="cs-card"
                onClick={() => setSelectedCase(item)}
              >
                <div className="cs-im">
                  <CardMedia item={item} />
                  <span className="cs-cat-pill">{item.category}</span>
                  <span className="cs-card-num">{String(item.id).padStart(2, '0')}</span>
                </div>
                <div className="cs-body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="cs-foot">
                    <span>
                      {item.tech}
                      {item.stats ? ` • ${item.stats}` : ''}
                    </span>
                    <b>View details</b>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* PART B: Detail Modal Popup */}
      {selectedCase && (
        <div
          className="cs-modal-backdrop"
          onClick={() => setSelectedCase(null)}
        >
          <div
            className="cs-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="cs-modal-close"
              onClick={() => setSelectedCase(null)}
              aria-label="Close dialog"
            >
              &times;
            </button>

            <div className="cs-im">
              <CardMedia item={selectedCase} />
              <span className="cs-cat-pill">{selectedCase.category}</span>
            </div>

            <div className="cs-db">
              <h3>{selectedCase.title}</h3>
              <p>{selectedCase.description}</p>
              <div className="cs-meta">
                <span>{selectedCase.tech}</span>
                {selectedCase.stats && <span>{selectedCase.stats}</span>}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
