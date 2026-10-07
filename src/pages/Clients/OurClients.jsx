import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './OurClients.css';
import { CLIENTS } from './clientsData';

const CASE_STUDIES_PATH = '/case-studies';
const CONTACT_PATH = '/contact-us';

const FEATURED = ['procom','powerpace','heben','rotoriko','srp','luxuria','travenza','millennium','antra','ifsb','mitmut','brixton','42gears'];
const norm = s => s.toLowerCase().replace(/[^a-z0-9]/g, '');
const rank = c => { const n = norm(c.name); const i = FEATURED.findIndex(f => n.includes(f)); return i < 0 ? 99 : i; };
const initials = n => n.split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();

function Logo({ name, src }) {
  const [bad, setBad] = useState(!src);
  return bad
    ? <div className="cp-mono"><i>{initials(name)}</i>{name}</div>
    : <img src={src} alt={name} loading="lazy" onError={() => setBad(true)} />;
}

function Ring({ items, k, d, rev, w, off }) {
  return (
    <div className={'cp-spin' + (rev ? ' cp-rev' : '')} style={{ '--k': k, '--d': d }}>
      {items.map((c, i) => (
        <div className="cp-c" key={c.name} style={{ '--a': (i * 360) / items.length, '--w': w, '--i': off + i }}>
          <div className="cp-u"><div className="cp-v"><div className="cp-t"><Logo name={c.name} src={c.logo} /></div></div></div>
        </div>
      ))}
    </div>
  );
}

export default function OurClients() {
  const wallRef = useRef(null);
  const [count, setCount] = useState(0);
  const total = CLIENTS.length;
  const ordered = [...CLIENTS].sort((a, b) => rank(a) - rank(b));
  const inner = ordered.slice(0, 5);
  const outer = ordered.slice(5, 13);

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { setCount(total); return; }
    let raf, start = null;
    const step = t => {
      if (start === null) start = t;
      const p = Math.min((t - start) / 1400, 1);
      setCount(Math.round(total * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [total]);

  useEffect(() => {
    const wall = wallRef.current;
    if (!wall) return;
    const tiles = [...wall.children];
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      tiles.forEach(t => t.classList.add('cp-in'));
      return;
    }
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) {
        const t = e.target;
        setTimeout(() => t.classList.add('cp-in'), (Number(t.dataset.d) || 0) * 45);
        io.unobserve(t);
      }
    }), { threshold: 0.15 });
    tiles.forEach(t => io.observe(t));
    return () => io.disconnect();
  }, [total]);

  const onMove = e => {
    if (!matchMedia('(hover: hover)').matches) return;
    for (const t of wallRef.current.children) {
      const r = t.getBoundingClientRect();
      t.style.setProperty('--x', e.clientX - r.left + 'px');
      t.style.setProperty('--y', e.clientY - r.top + 'px');
    }
  };

  return (
    <>
      <Navbar />
      <div className="cp-page">
        <div className="cp-wrap">
          <section className="cp-hero">
            <div className="cp-copy">
              <span className="cp-tag"><i></i>Our Clients</span>
              <h1 className="cp-h1">Happy<br /><span>Clients.</span></h1>
              <p className="cp-lead">Behind every great product is a great team. We're honoured to support these businesses on their journey delivering solutions that make a real difference.</p>
              <Link className="cp-btn" to={CASE_STUDIES_PATH}>See our case studies <b>→</b></Link>
              <div className="cp-count"><strong>{count}{count === total ? '+' : ''}</strong><span>businesses trust Jupical</span></div>
            </div>

            <div className="cp-orbit" aria-hidden="true">
              <div className="cp-ring" style={{ '--k': 0.55 }} />
              <div className="cp-ring" style={{ '--k': 0.92 }} />
              <div className="cp-core">
                <img
                  src="/jupical-logo.png"
                  alt="Jupical - Cares and Craft for client's success"
                  loading="eager"
                  width="570"
                  height="143"
                />
              </div>
              <Ring items={inner} k={0.55} d="70s"  w="min(5.4rem,15.5vw)" off={0} />
              <Ring items={outer} k={0.92} d="110s" rev w="min(4.6rem,13.5vw)" off={5} />
            </div>
          </section>

          <section className="cp-sec">
            <h2 className="cp-h2">The whole family, on one wall</h2>
            <p className="cp-sub">Manufacturing, trade, education, finance and more. Move your cursor across the wall.</p>
            <div className="cp-wall" ref={wallRef} onMouseMove={onMove}>
              {CLIENTS.map((c, i) => (
                <div className="cp-tile" key={c.name + i} data-d={i % 6}>
                  <div className="cp-t"><Logo name={c.name} src={c.logo} /></div>
                  {!c.hideName && <em>{c.name}</em>}
                </div>
              ))}
            </div>
          </section>

          <section className="cp-cta">
            <h3 className="cp-h3">Want to be our next success story?</h3>
            <div>
              <Link to={CONTACT_PATH}>Contact Us</Link>
              <Link to={CASE_STUDIES_PATH}>See our case studies</Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
