import React from 'react';
import WhyJupicalVisual from './WhyJupicalVisual';
import './WhyJupical.css';

export default function WhyJupicalHero() {
  return (
    <section className="why-hero" aria-label="Why Jupical Hero">
      {/* Background radial ambient lighting */}
      <div className="why-hero__bg-mesh" aria-hidden="true" />

      <div className="container why-hero__container">
        {/* LEFT COLUMN: Hero Narrative */}
        <div className="why-hero__content">
          {/* Eyebrow Pill Badge */}
          <div className="why-hero__eyebrow-wrap">
            <span className="why-hero__eyebrow-pill">
              WHY JUPICAL
            </span>
          </div>

          {/* Headline matching Reference Image 1 */}
          <h1 className="why-hero__heading">
            Rajkot rooted. <br />
            <span className="why-hero__heading-blue">World trusted.</span> <br />
            Odoo perfected.
          </h1>

          {/* Supporting Narrative */}
          <div className="why-hero__paragraphs">
            <p className="why-hero__lead">
              We at Jupical don't just implement Odoo — we build smart, scalable and future-ready ERP solutions for businesses across the globe. With <strong>30+ industries</strong> served across <strong>32+ countries</strong>, our team combines accuracy, honesty, and unity into every project we touch.
            </p>
            <p className="why-hero__sublead">
              See how it plays out in practice, explore our case studies, or hear it directly from our happy clients.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: 3D Target & Orbit Ecosystem Illustration */}
        <div className="why-hero__visual-col">
          <WhyJupicalVisual />
        </div>
      </div>
    </section>
  );
}
