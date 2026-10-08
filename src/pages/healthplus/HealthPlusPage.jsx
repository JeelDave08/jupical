import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ModuleShowcase from '../../components/ModuleShowcase';
import Ending from './components/Ending';
import Hero from './components/Hero';
import { healthModules } from '../../data/healthcare';
import './HealthPlusPage.css';
import './HealthcareOverrides.css';

export default function HealthPlusPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Healthcare Management Solution Built on Odoo — Jupical Technologies';
    window.scrollTo({ top: 0, behavior: 'instant' });
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <>
      <Navbar activePage="Odoo ERPs" />
      <div className="jp-cons">
        <main className="hp">
          <Hero />
          <ModuleShowcase
            id="seq"
            className="hp-healthcare-showcase"
            title="Build your health center, one floor at a time"
            subtitle="Twelve modules, in the order a real health center runs. Scroll and watch the tower go up."
            modules={healthModules}
            labelPrefix="Floor"
            warnOnVideoCheckError
          />
          <Ending />
        </main>
      </div>
      <Footer />
    </>
  );
}
