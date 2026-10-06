import JourneyVisual from './JourneyVisual';
import './JupicalJourney.css';

export default function JupicalJourney() {
  return (
    <section className="jj-section" id="journey" aria-label="Jupical Journey">
      <div className="jj-wrap">
        {/* Left Column: Interactive Rocket Timeline Journey */}
        <div
          className="jj-card"
          role="region"
          aria-label="Interactive Journey Map"
        >
          <JourneyVisual />
        </div>

        {/* Right Column: Paragraphs & Button */}
        <div className="jj-text">
          <p className="jj-p">
            Founded in 2016 and officially registered as a Pvt. Ltd. in 2018, Jupical began with a vision to revolutionize business operations for industries worldwide. As a certified Odoo partner, our relentless pursuit of innovation has helped organizations across the globe achieve automation, efficiency, and measurable growth.
          </p>
          <p className="jj-p">
            Our dedicated resource model allows us to deliver Odoo ERP implementation and support services with consistent quality no matter where our clients are located.
          </p>
          <a href="#contact" className="jj-btn" id="jj-hire-btn">
            Hire Odoo Expert
          </a>
        </div>
      </div>
    </section>
  );
}
