import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhyJupicalHero from './WhyJupicalHero';
import WhyJupicalSections from './WhyJupicalSections';
import './WhyJupical.css';

export default function WhyJupicalPage() {
  /* Scroll to top & set document title */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const prevTitle = document.title;
    document.title = 'Why Jupical? — Your Growth, Our Mission | Jupical Technologies';
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <div className="why-page">
      {/* Global Navbar with active 'Company' state */}
      <Navbar activePage="Company" />

      {/* Main Page Content */}
      <main id="main-content" className="why-main">
        <WhyJupicalHero />
        <WhyJupicalSections />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
