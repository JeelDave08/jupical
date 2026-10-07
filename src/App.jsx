import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import CompanySection from './components/CompanySection';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import JupicalJourney from './components/JupicalJourney';
import Footer from './components/Footer';
import OurPhilosophyPage from './pages/OurPhilosophy/OurPhilosophyPage';

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
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/our-philosophy" element={<OurPhilosophyPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
