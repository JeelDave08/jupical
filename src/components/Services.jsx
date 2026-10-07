import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import { useLanguage } from '../context/LanguageContext';

const services = [
  {
    id: 1,
    index: '01 / 05',
    title: 'Web Development',
    desc: 'Modern, responsive and scalable websites built around your business goals.',
    tags: 'FRONTEND • BACKEND • RESPONSIVE',
    icon: '/services/web_dev.png',
  },
  {
    id: 2,
    index: '02 / 05',
    title: 'Mobile App Development',
    desc: 'High-performance mobile applications designed for seamless user experiences.',
    tags: 'IOS • ANDROID • CROSS-PLATFORM',
    icon: '/services/mobile_dev.png',
  },
  {
    id: 3,
    index: '03 / 05',
    title: 'ERP Solutions',
    desc: 'Powerful ERP solutions that streamline operations, workflows and business processes.',
    tags: 'ODOO • AUTOMATION • WORKFLOWS',
    icon: '/services/erp_solutions.png',
  },
  {
    id: 4,
    index: '04 / 05',
    title: 'AI Solutions',
    desc: 'AI-powered solutions that automate processes, improve efficiency and unlock smarter decisions.',
    tags: 'MACHINE LEARNING • AUTOMATION • ANALYTICS',
    icon: '/services/ai_solutions.png',
  },
  {
    id: 5,
    index: '05 / 05',
    title: 'Custom Software Development',
    desc: 'Tailor-made software solutions built to solve your unique business requirements.',
    tags: 'SAAS • APIS • TAILOR-MADE',
    icon: '/services/custom_software.png',
  },
];

export default function Services() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Preload all 5 service icons on mount for instant rendering
  useEffect(() => {
    services.forEach((svc) => {
      const img = new Image();
      img.src = svc.icon;
    });
  }, []);

  // Auto-slide every 2000ms (2 seconds) continuously from RIGHT to LEFT
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isPaused || prefersReducedMotion) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Touch Swipe handlers for Mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 40) {
      handleNext();
    } else if (distance < -40) {
      handlePrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const getCardClass = (index) => {
    const total = services.length;
    const diff = (index - currentIndex + total) % total;

    if (diff === 0) return 'service-card--active';
    if (diff === 1) return 'service-card--right';
    if (diff === total - 1) return 'service-card--left';
    return 'service-card--hidden';
  };

  return (
    <section className="services section-white" id="services" aria-label="Services">
      <div className="container services__container">
        
        {/* Header */}
        <div className="services__header">
          <div className="eyebrow-pill">{t('WHAT WE DO')}</div>
          <h2 className="services__title">
            {t('Our Services')}
          </h2>
          <p className="services__subtitle">
            {t('Innovative Web, Mobile, ERP, AI, and Custom Software Solutions built to scale your business.')}
          </p>
        </div>

        {/* Showcase Wrapper */}
        <div className="services__showcase-wrapper">
          
          {/* Ghost Background Heading */}
          <div className="services__ghost-heading" aria-hidden="true">
            5 Services. One Tech Partner.
          </div>

          {/* Card Stack Container */}
          <div 
            className="services__stack-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Prev Arrow */}
            <button 
              className="services__nav-btn services__nav-btn--prev"
              onClick={handlePrev}
              aria-label="Previous Service"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>

            {/* 5 Cards Stack */}
            <div className="services__cards-stage">
              {services.map((svc, i) => {
                const cardClass = getCardClass(i);
                return (
                  <div
                    key={svc.id}
                    className={`service-card ${cardClass}`}
                    onClick={() => {
                      if (cardClass.includes('service-card--left')) handlePrev();
                      if (cardClass.includes('service-card--right')) handleNext();
                    }}
                  >
                    <div className="service-card__top">
                      <span className="service-card__index">{svc.index}</span>
                    </div>

                    <div className="service-card__icon-wrap">
                      <img 
                        src={svc.icon} 
                        alt={t(svc.title)} 
                        className="service-card__icon"
                        loading="eager"
                        decoding="async"
                      />
                    </div>

                    <div className="service-card__body">
                      <h3 className="service-card__title">{t(svc.title)}</h3>
                      <p className="service-card__desc">{t(svc.desc)}</p>
                      <div className="service-card__tags">{svc.tags}</div>
                      <Link to="/contact-us" className="service-card__link">
                        {t('Explore Service')} <span className="arrow">→</span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Next Arrow */}
            <button 
              className="services__nav-btn services__nav-btn--next"
              onClick={handleNext}
              aria-label="Next Service"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          {/* Pagination Dots (Exactly 5) */}
          <div className="services__dots" role="tablist">
            {services.map((svc, i) => (
              <button
                key={svc.id}
                className={`services__dot ${i === currentIndex ? 'services__dot--active' : ''}`}
                onClick={() => handleDotClick(i)}
                aria-label={`Go to service ${svc.title}`}
                role="tab"
                aria-selected={i === currentIndex}
              />
            ))}
          </div>

          {/* Bottom Trust Badge Bar */}
          <div className="services__trust-bar">
            <div className="trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0075FA" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span>{t('Certified Tech Experts')}</span>
            </div>
            <span className="trust-divider">|</span>
            <div className="trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0075FA" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span>{t('Proven Methodologies')}</span>
            </div>
            <span className="trust-divider">|</span>
            <div className="trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0075FA" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>{t('On-Time Delivery')}</span>
            </div>
            <span className="trust-divider">|</span>
            <div className="trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0075FA" strokeWidth="2">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
              </svg>
              <span>{t('Long-Term Support')}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

