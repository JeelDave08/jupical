import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import CompanySection from './components/CompanySection';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import JupicalJourney from './components/JupicalJourney';
import OdooBricks from './components/OdooBricks';
import Footer from './components/Footer';
import OurPhilosophyPage from './pages/OurPhilosophy/OurPhilosophyPage';
import About from './pages/About/About';
import CaseStudies from './pages/CaseStudies/CaseStudies';
import Contact from './pages/Contact/Contact';
import WhyJupicalPage from './pages/WhyJupical/WhyJupicalPage';
import OurClients from './pages/Clients/OurClients';
import ConstructionERP from './pages/ConstructionERP/ConstructionERP';
import HealthPlus from './pages/Healthcare/HealthPlus';

const CaseStudyDetail = lazy(() => import('./pages/CaseStudies/CaseStudyDetail'));

function ScrollToHashManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}

/** Home page — all original sections */
function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Stats />
        <Services />
        <CompanySection />
        <BeforeAfter />
        <JupicalJourney />
        <OdooBricks />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <BrowserRouter>
          <ScrollToHashManager />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/our-philosophy" element={<OurPhilosophyPage />} />
            <Route path="/why-jupical" element={<WhyJupicalPage />} />
            <Route path="/why" element={<WhyJupicalPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:slug" element={<Suspense fallback={<div role="status">Loading case study…</div>}><CaseStudyDetail /></Suspense>} />
            <Route path="/cases" element={<CaseStudies />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/our-clients" element={<OurClients />} />
            <Route path="/clients" element={<OurClients />} />
            <Route path="/construction-erp-odoo" element={<ConstructionERP />} />
            <Route path="/odoo-healthcare-erp" element={<HealthPlus />} />
            <Route path="/healthcare-erp" element={<HealthPlus />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
