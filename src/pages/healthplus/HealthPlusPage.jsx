import { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import Hero from "./components/Hero";
import ModuleCard from "./components/ModuleCard";
import ModuleTower from "./components/ModuleTower";
import Ending from "./components/Ending";
import Footer from "../../components/Footer";
import { MODULES } from "./data/modules";
import { VIDEOS } from "./data/videos";
import "./HealthPlusPage.css";

// Route example: <Route path="/odoo-healthcare-erp" element={<HealthPlusPage />} />.
export default function HealthPlusPage() {
  const [active, setActive] = useState(0);
  const moduleSection = useRef(null);
  const cards = useRef([]);
  const label = useMemo(() => active ? `Floor ${String(active).padStart(2, "0")} of ${MODULES.length}: ${MODULES[active - 1]?.title || ""}` : "Foundation", [active]);

  const scrollToModules = () => moduleSection.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  useEffect(() => {
    let frame = 0;
    const update = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        let count = 0;
        const threshold = window.innerHeight * 0.6;
        cards.current.forEach((card, index) => {
          if (card && card.getBoundingClientRect().top < threshold) count = index + 1;
        });
        setActive((current) => current === count ? current : count);
      });
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <Navbar activePage="Odoo ERPs" />
      <div className="hp">
        <Hero onSeeModules={scrollToModules} />
        <section className="hp-wrap hp-seq" id="seq" ref={moduleSection} aria-labelledby="hp-seq-title">
          <div className="hp-seq-heading"><h2 id="hp-seq-title">Build your health center, one floor at a time</h2><p>Twelve modules, in the order a real health center runs. Scroll and watch the tower go up.</p></div>
          <div className="hp-seq-layout">
            <ModuleTower active={active} label={label} />
            <div className="hp-module-grid">
              {MODULES.map((module, index) => (
                <ModuleCard key={module.n} module={module} url={VIDEOS.modules[index]} cardRef={(node) => { cards.current[index] = node; }} />
              ))}
            </div>
          </div>
        </section>
        <Ending />
      </div>
      <Footer />
    </>
  );
}
