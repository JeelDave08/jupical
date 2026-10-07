import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { caseStudies } from '../../data/caseStudies';
import CaseStudyMedia from './CaseStudyMedia';
import './CaseStudies.css';

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState('All');

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
    ? caseStudies
    : caseStudies.filter(item => item.category === activeCategory);

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
              <Link className="cs-btn" to="/contact-us">Connect</Link>
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
              <Link
                key={item.id}
                className="cs-card"
                to={`/case-studies/${item.slug}`}
                aria-label={`Read case study: ${item.title}`}
              >
                <div className="cs-im">
                  <CaseStudyMedia study={item} />
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
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
