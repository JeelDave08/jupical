import { useEffect, useRef, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './About.css';

const sections = [
  { id: 's0', label: 'About Us' },
  { id: 's1', label: 'Certified Experts' },
  { id: 's2', label: 'Our Impact' },
  { id: 's3', label: 'Our Approach' },
  { id: 's4', label: 'What Sets Us Apart' },
  { id: 's5', label: 'Why Jupical?' },
];

export default function About() {
  const [activeSection, setActiveSection] = useState(0);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const tlRef = useRef(null);
  const flRef = useRef(null);

  /* Scroll to top & set document title */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const prevTitle = document.title;
    document.title = 'About Us — Jupical Technologies';
    return () => {
      document.title = prevTitle;
    };
  }, []);

  /* Interactive Canvas Particle Net */
  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const cx = cv.getContext('2d');
    if (!cx) return;

    let animId;
    let W = 0;
    let H = 0;
    let N = [];
    const m = { x: -999, y: -999 };
    let col = '#0075FA';
    const rm = window.matchMedia('(prefers-reduced-motion:reduce)').matches;

    function size() {
      if (!cv || !cv.parentNode) return;
      const r = cv.parentNode.getBoundingClientRect();
      W = cv.width = r.width;
      H = cv.height = r.height;
      col = getComputedStyle(document.documentElement).getPropertyValue('--blue').trim() || '#0075FA';
      const n = Math.round((W * H) / 16000);
      N = [];
      for (let i = 0; i < n; i++) {
        N.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }
    }

    size();
    window.addEventListener('resize', size);

    const parentNode = cv.parentNode;
    const handlePointerMove = (e) => {
      const r = cv.getBoundingClientRect();
      m.x = e.clientX - r.left;
      m.y = e.clientY - r.top;
    };
    const handlePointerLeave = () => {
      m.x = -999;
      m.y = -999;
    };

    parentNode.addEventListener('pointermove', handlePointerMove);
    parentNode.addEventListener('pointerleave', handlePointerLeave);

    function draw() {
      cx.clearRect(0, 0, W, H);
      cx.fillStyle = col;
      cx.strokeStyle = col;

      for (let i = 0; i < N.length; i++) {
        const a = N[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > W) a.vx *= -1;
        if (a.y < 0 || a.y > H) a.vy *= -1;

        const dx = m.x - a.x;
        const dy = m.y - a.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 160) {
          a.x += dx * 0.012;
          a.y += dy * 0.012;
        }

        cx.globalAlpha = 0.55;
        cx.beginPath();
        cx.arc(a.x, a.y, 2.4, 0, Math.PI * 2);
        cx.fill();

        for (let j = i + 1; j < N.length; j++) {
          const b = N[j];
          const ex = a.x - b.x;
          const ey = a.y - b.y;
          const e = ex * ex + ey * ey;
          if (e < 16000) {
            cx.globalAlpha = (1 - e / 16000) * 0.35;
            cx.lineWidth = 1.2;
            cx.beginPath();
            cx.moveTo(a.x, a.y);
            cx.lineTo(b.x, b.y);
            cx.stroke();
          }
        }

        if (d < 190) {
          cx.globalAlpha = (1 - d / 190) * 0.6;
          cx.lineWidth = 1.6;
          cx.beginPath();
          cx.moveTo(a.x, a.y);
          cx.lineTo(m.x, m.y);
          cx.stroke();
        }
      }

      if (!rm) {
        animId = requestAnimationFrame(draw);
      }
    }

    draw();

    return () => {
      window.removeEventListener('resize', size);
      if (parentNode) {
        parentNode.removeEventListener('pointermove', handlePointerMove);
        parentNode.removeEventListener('pointerleave', handlePointerLeave);
      }
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  /* Card Cursor Spotlight & Intersection Observer */
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    /* Spotlight effects */
    const gls = root.querySelectorAll('.gl');
    const glListeners = [];
    gls.forEach((el) => {
      const fn = (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--x', `${e.clientX - r.left}px`);
        el.style.setProperty('--y', `${e.clientY - r.top}px`);
      };
      el.addEventListener('pointermove', fn);
      glListeners.push({ el, fn });
    });

    /* Animated Counter for stats */
    function count(b) {
      const mt = b.textContent.match(/^(\d+)(.*)$/);
      if (!mt) return;
      const n = +mt[1];
      const s = mt[2];
      const ring = b.parentNode?.querySelector('.ring');
      const p = ring ? +(ring.getAttribute('data-p') || 0) : 0;
      let t0 = null;
      requestAnimationFrame(function f(t) {
        t0 = t0 || t;
        const k = Math.min((t - t0) / 1500, 1);
        const e = 1 - Math.pow(1 - k, 3);
        b.textContent = Math.round(n * e) + s;
        if (ring) ring.style.setProperty('--p', `${p * e}`);
        if (k < 1) requestAnimationFrame(f);
      });
    }

    /* Reveal on Scroll observer */
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            if (e.target.id === 'stats') {
              e.target.querySelectorAll('b').forEach(count);
            }
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const revs = root.querySelectorAll('.rev');
    revs.forEach((el) => io.observe(el));

    /* Scroll handler for timeline progress and rail dots */
    const sc = () => {
      const y = window.innerHeight * 0.5;
      const secEls = root.querySelectorAll('section[data-t]');
      let cur = 0;
      secEls.forEach((s, i) => {
        if (s.getBoundingClientRect().top < y) cur = i;
      });
      setActiveSection(cur);

      if (tlRef.current && flRef.current) {
        const r = tlRef.current.getBoundingClientRect();
        flRef.current.style.height = `${Math.max(0, Math.min(r.height, window.innerHeight * 0.6 - r.top))}px`;
      }
    };

    window.addEventListener('scroll', sc, { passive: true });
    sc();

    return () => {
      glListeners.forEach(({ el, fn }) => el.removeEventListener('pointermove', fn));
      io.disconnect();
      window.removeEventListener('scroll', sc);
    };
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="about-page" ref={containerRef}>
      {/* Primary Global Navbar */}
      <Navbar activePage="Company" />

      {/* Floating Side Rail Dock */}
      <nav className="about-rail" id="rail" aria-label="Sections">
        {sections.map((sec, i) => (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            className={activeSection === i ? 'on' : ''}
            aria-label={sec.label}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(sec.id);
            }}
          >
            <span>{sec.label}</span>
          </a>
        ))}
      </nav>

      {/* Hero Section */}
      <div className="about-heroW">
        <canvas id="about-net" ref={canvasRef} aria-hidden="true" />
        <section className="about-hero" data-t="About Us" id="s0">
          <div className="about-hero__top">
            <div className="about-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <span>SINCE 2016 · CERTIFIED ODOO ERP PARTNER</span>
            </div>
            <h1>About <em>Jupical</em></h1>
            <p className="about-lead">
              We help businesses transform operations through intelligent, scalable, and industry-focused ERP solutions.
            </p>
          </div>

          <div className="about-hero-pillars">
            <div className="about-hero-pillar">
              <p>Since 2016, Jupical has helped businesses transform their operations through intelligent, scalable, and industry-focused ERP solutions. Specializing in Odoo and open-source technologies, we go beyond software implementation to help organizations simplify complex processes, improve efficiency, and build future-ready operations.</p>
            </div>
            <div className="about-hero-pillar">
              <p>Backed by more than two decades of combined industry experience, our team of ERP consultants, developers, and functional specialists brings deep business insight and technical expertise to every project. From manufacturing and finance to healthcare, education, and hospitality, we help organizations integrate departments, automate workflows, improve visibility, and turn business data into confident decisions.</p>
            </div>
            <div className="about-hero-pillar">
              <p>Every solution we deliver is aligned with our client’s unique processes, challenges, and growth objectives because we believe technology should adapt to the business, not the other way around.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Odoo Certified Experts */}
      <section data-t="Certified Experts" id="s1">
        <div className="about-section-header rev">
          <div className="about-badge">PROVEN EXPERTISE</div>
          <h2>Odoo Certified Experts</h2>
          <p className="about-lead">Our team holds official Odoo certification, validating our hands-on expertise in deploying and managing Odoo ERP systems. We bring proven skills to every project, ensuring reliable, efficient, and tailored solutions for your business needs.</p>
        </div>

        <div className="about-cert-grid rev">
          <div className="about-cert-card gl">
            <div className="about-cert-badge">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div className="about-cert-content">
              <h4>Jupical odoo Certificate for 17</h4>
              <span>Official Odoo Version 17 Certified Implementation Partner</span>
            </div>
          </div>

          <div className="about-cert-card gl">
            <div className="about-cert-badge">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div className="about-cert-content">
              <h4>Jupical odoo Certificate for 19</h4>
              <span>Official Odoo Version 19 Ready & Certified Specialization</span>
            </div>
          </div>
        </div>

        <div className="about-partners-banner rev">
          <div>
            <h3>Our valued partners</h3>
            <p>We are proud to collaborate with industry-leading partners who share our vision of innovation and excellence. Together, we deliver powerful ERP solutions trusted by 7+ million users across the globe.</p>
          </div>
          <div className="about-partners-stat">
            <b>7M+</b>
            <span>Global Users on Platforms We Implement</span>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section data-t="Our Impact" id="s2">
        <div className="about-section-header rev">
          <div className="about-badge">RESULTS THAT MATTER</div>
          <h2>Our Impact</h2>
          <p className="about-lead">At Jupical, impact isn't measured in lines of code it's measured in businesses that run smarter, faster, and stronger than before.</p>
        </div>

        <div className="about-approach-box rev" style={{ marginTop: 0 }}>
          <p style={{ margin: 0, fontSize: '1.05rem', color: 'var(--ink-secondary)' }}>
            Since 2016, Jupical has helped manufacturers and growing enterprises replace disconnected systems and spreadsheets with integrated Odoo ERP solutions. As a Certified Odoo ERP Partner, we specialize in implementation, customization, migration, integration, and long-term support that improves operational efficiency and business visibility.
          </p>
        </div>

        <h3 className="s rev" style={{ textAlign: 'center', marginBottom: '24px' }}>The Numbers That Speak for Us</h3>
        <div className="about-stats-grid rev" id="stats">
          <div className="about-stat-card gl">
            <b>51+</b>
            <span>ERP systems deployed across diverse industries</span>
          </div>
          <div className="about-stat-card gl">
            <b>32+</b>
            <span>Countries served globally</span>
          </div>
          <div className="about-stat-card gl">
            <i className="ring" data-p="55" />
            <b>55%</b>
            <span>Average reduction in manual processes</span>
          </div>
          <div className="about-stat-card gl">
            <i className="ring" data-p="95" />
            <b>95%</b>
            <span>Client retention rate</span>
          </div>
          <div className="about-stat-card gl">
            <b>11+</b>
            <span>Years of company experience and 16+ years of combind experience on industries and ERP Implementation</span>
          </div>
          <div className="about-stat-card gl">
            <b>7M+</b>
            <span>Users worldwide on the platform we implement</span>
          </div>
        </div>

        <h3 className="s rev" style={{ textAlign: 'center', marginTop: '48px', marginBottom: '20px' }}>What Real Impact Look Like</h3>
        <div className="about-stories-grid">
          <div className="about-story-card rev">
            <p>For a manufacturer, it meant real-time visibility into production floors no more guesswork, no more delays.</p>
          </div>
          <div className="about-story-card rev">
            <p>For a finance team, it meant closing monthly books in days instead of weeks.</p>
          </div>
          <div className="about-story-card rev">
            <p>For a growing SME, it meant having enterprise-grade tools without enterprise-level complexity.</p>
          </div>
        </div>

        <div className="about-close-banner rev">
          Every number above represents a team that works less on spreadsheets and more on strategy.
        </div>
      </section>

      {/* Our Approach */}
      <section data-t="Our Approach" id="s3">
        <div className="about-section-header rev">
          <div className="about-badge">METHODOLOGY</div>
          <h2>Our Approach</h2>
          <p className="about-lead">Most ERP projects fail not because of bad software but because of poor understanding, rigid processes, and one-size-fits-all thinking. At Jupical, we do it differently.</p>
        </div>

        <div className="about-approach-box rev">
          <h3>We Start With You, Not the Software</h3>
          <p>Before we open a single module or write a line of code, we listen. We dig deep into your operations, your bottlenecks, your goals and sometimes, the problems you didn't even know you had.</p>
          <p style={{ margin: 0, fontWeight: 600, color: 'var(--blue)' }}>Because the right solution isn't built from a template. It's built from understanding.</p>
        </div>

        <h3 className="s rev" style={{ textAlign: 'center', fontSize: '1.9rem', marginTop: '44px' }}>Our 4-Step Delivery Framework</h3>
        <div className="about-timeline" id="tl" ref={tlRef}>
          <div className="fl" id="fl" ref={flRef} />
          <div className="about-step gl rev" data-n="01">
            <h3>Discover</h3>
            <p>We immerse ourselves in your business. Your workflows, your pain points, your industry nuances. No assumptions, just clarity.</p>
          </div>
          <div className="about-step gl rev" data-n="02">
            <h3>Design</h3>
            <p>We architect a solution tailored to you not the other way around. Every module, every workflow, every integration is intentional.</p>
          </div>
          <div className="about-step gl rev" data-n="03">
            <h3>Deploy</h3>
            <p>Agile execution with open communication at every step. No surprises. No delays you weren't warned about. Just clean, confident delivery.</p>
          </div>
          <div className="about-step gl rev" data-n="04">
            <h3>Drive</h3>
            <p>Go-live is not the finish line it's the starting point. We stay by your side to optimize, scale, and evolve your system as your business grows.</p>
          </div>
        </div>
      </section>

      {/* What Sets Our Approach Apart */}
      <section data-t="What Sets Us Apart" id="s4">
        <div className="about-section-header rev">
          <div className="about-badge">OUR DIFFERENTIATORS</div>
          <h2>What Sets Our Approach Apart</h2>
        </div>

        <div className="about-apart-grid">
          <div className="about-apart-card gl rev">
            <h3>Customization <i>over configuration</i></h3>
            <p>We don't force your business into a default setup. We shape the software around how you actually work.</p>
          </div>
          <div className="about-apart-card gl rev">
            <h3>Transparency <i>over jargon</i></h3>
            <p>You'll always know where your project stands in plain language, not technical fog.</p>
          </div>
          <div className="about-apart-card gl rev">
            <h3>Partnership <i>over transactions</i></h3>
            <p>We measure our success by your outcomes, not our invoices.</p>
          </div>
          <div className="about-apart-card gl rev">
            <h3>Future-ready <i>over short-term fixes</i></h3>
            <p>Every decision we make is built to scale so you don't outgrow the solution we build you.</p>
          </div>
        </div>

        <div className="about-close-banner rev" style={{ marginTop: '36px' }}>
          We don't just implement your ERP, we become your growth partner for life.
        </div>
      </section>

      {/* Why Jupical? (Balanced Full-Width 3-Column Bento Grid) */}
      <section data-t="Why Jupical?" id="s5">
        <div className="about-section-header rev">
          <div className="about-badge">VALUE PROPOSITION</div>
          <h2>Why Jupical?</h2>
        </div>

        <div className="about-bento">
          {/* Row 1: Featured 2 cols + 1 col */}
          <div className="about-why-card gl about-why-card--col2 about-why-card--featured rev">
            <span className="e">🏆</span>
            <div>
              <h3>11+ Years of Deep ERP Expertise</h3>
              <p>Not just experience battle-tested knowledge across Manufacturing, Finance, CRM, HR, Healthcare, and more. Our certified team has solved real problems for real businesses across 32+ countries.</p>
            </div>
          </div>
          <div className="about-why-card gl rev">
            <span className="e">🌍</span>
            <div>
              <h3>Truly Global, Genuinely Local</h3>
              <p>With offices in India, Philippines, Dubai, and Qatar and clients across 32+ countries we understand your market, timezone, and compliance needs. Global scale, local care.</p>
            </div>
          </div>

          {/* Row 2: 1 col + Featured 2 cols */}
          <div className="about-why-card gl rev">
            <span className="e">📈</span>
            <div>
              <h3>51+ Implementations. 100% Client Retention.</h3>
              <p>Our clients don't just go live they stay, grow, and refer. A 100% retention rate isn't a stat, it's a promise of what working with us feels like.</p>
            </div>
          </div>
          <div className="about-why-card gl about-why-card--col2 about-why-card--featured rev">
            <span className="e">🤝</span>
            <div>
              <h3>Certified Odoo Ready Partner with a Bold Vision</h3>
              <p>We're not just a vendor we're a growth partner. As a Certified Odoo Ready Partner with a vision to serve 1M+ users, we're betting our future on yours. And with Odoo already trusted by 7M+ users globally, you're in proven hands.</p>
            </div>
          </div>

          {/* Row 3: Balanced cards */}
          <div className="about-why-card gl rev" style={{ gridColumn: 'span 1.5' }}>
            <span className="e">⚡</span>
            <div>
              <h3>End-to-End Ownership From Day 1 to Scale</h3>
              <p>From scoping to go-live to ongoing support we own every step. No handoffs, no finger-pointing. One team, full accountability.</p>
            </div>
          </div>
          <div className="about-why-card gl rev" style={{ gridColumn: 'span 2' }}>
            <span className="e">🛠️</span>
            <div>
              <h3>Built for Your Industry, Not Just Your Software</h3>
              <p>We specialize in Manufacturing and Finance ERP meaning we speak your language before we write a single line of code.</p>
            </div>
          </div>
        </div>

        <div className="about-close-banner rev" style={{ marginTop: '36px' }}>
          Free Consultation, lower the barrier to entry
        </div>
      </section>

      {/* Website Official Footer */}
      <Footer />
    </div>
  );
}
