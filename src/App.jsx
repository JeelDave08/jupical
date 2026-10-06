import './index.css';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import CompanySection from './components/CompanySection';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';

import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
    <ThemeProvider>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Stats />
        <Services />
        <CompanySection />
        <BeforeAfter />

      </main>
      <Footer />
    </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
