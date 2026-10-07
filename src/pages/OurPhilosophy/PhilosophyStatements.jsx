/* ================================================================
   PhilosophyStatements — sticky left number/progress + statement
   list driven by IntersectionObserver.
   ================================================================ */
import { useState, useRef, useEffect } from 'react';
import { STATEMENTS } from './philosophyData';

export default function PhilosophyStatements() {
  const [active, setActive] = useState(1);
  const itemRefs = useRef([]);

  useEffect(() => {
    const items = itemRefs.current.filter(Boolean);
    if (!items.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.dataset.n));
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const progress = `${(active / STATEMENTS.length) * 100}%`;

  return (
    <section className="phil-statements" aria-label="Jupical Philosophy">
      <div className="phil-wrap">
        <h2 className="phil-section-h2">
          Jupical Philosophy, What We Know to Be True
        </h2>

        <div className="phil-pg">
          {/* ---- Sticky left column ---- */}
          <div className="phil-sticky" aria-hidden="true">
            <div className={`phil-big${active ? '' : ''}`}>{active}</div>
            <div className="phil-bar">
              <b style={{ width: progress }} />
            </div>
          </div>

          {/* ---- Statement list ---- */}
          <div className="phil-list">
            {STATEMENTS.map((s, i) => (
              <div
                key={s.n}
                ref={(el) => { itemRefs.current[i] = el; }}
                className={`phil-item${s.n === active ? ' phil-item--act' : ''}`}
                data-n={s.n}
              >
                <h3 className="phil-item__h3">{s.heading}</h3>
                <p className="phil-item__p">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
