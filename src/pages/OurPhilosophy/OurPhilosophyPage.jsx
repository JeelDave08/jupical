/* ================================================================
   OurPhilosophyPage — top-level page component
   ================================================================ */
import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PhilosophyHero from './PhilosophyHero';
import ValuesOrbit from './ValuesOrbit';
import PhilosophyStatements from './PhilosophyStatements';
import './OurPhilosophy.css';

export default function OurPhilosophyPage() {
  /* Scroll-to-top on mount */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  /* Page title */
  useEffect(() => {
    const prev = document.title;
    document.title = 'Our Philosophy — Jupical Technologies';
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <>
      <Navbar activePage="Company" />
      <main id="main-content">
        <PhilosophyHero />
        <ValuesOrbit />
        <PhilosophyStatements />
      </main>
      <Footer />
    </>
  );
}
