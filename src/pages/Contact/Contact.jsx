import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './Contact.css';

const QUICK_CHIPS = [
  'Odoo Implementation',
  'Customization',
  'Support',
  'Careers',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    subject: '',
    q: '',
  });

  const [activeChip, setActiveChip] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const prevTitle = document.title;
    document.title = "Contact Us — Jupical Technologies";
    return () => {
      document.title = prevTitle;
    };
  }, []);

  const handleChipClick = (chip) => {
    if (activeChip === chip) {
      setActiveChip('');
      setFormData((prev) => ({ ...prev, subject: '' }));
    } else {
      setActiveChip(chip);
      setFormData((prev) => ({ ...prev, subject: chip }));
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    if (id === 'subject') {
      if (QUICK_CHIPS.includes(value)) {
        setActiveChip(value);
      } else {
        setActiveChip('');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.q) {
      return;
    }

    setIsSubmitting(true);
    // Simulate short network dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  return (
    <>
      <Navbar />
      <div className="contact-page">
        <main className="wrap">
          {/* Left Column: Info */}
          <section aria-label="Contact information">
            <span className="tag">
              <i />Contact Us
            </span>
            <h1>
              Let's get<br />in <span>touch.</span>
            </h1>
            <p className="lead">
              Tell us about your business and we'll shape the right Odoo solution together.
            </p>

            <ul className="list">
              <li>
                <span className="n">01</span>
                <div>
                  <small>Email</small>
                  <a href="mailto:hello@jupical.com">hello@jupical.com</a>
                </div>
              </li>
              <li>
                <span className="n">02</span>
                <div>
                  <small>Phone</small>
                  <div className="two">
                    <span>
                      Sales: <a href="tel:+919129400912">+91 9129400912</a>
                    </span>
                    <span>
                      HR: <a href="tel:+919375920903">+91 9375920903</a>
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <span className="n">03</span>
                <div>
                  <small>Head Office</small>
                  <address>
                    808, RK World Tower, Nr.Shital Park, 150 Ft. Ring Road, Rajkot - 360006 Gujarat India.
                  </address>
                  <a
                    className="maps"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/maps/search/?api=1&query=808%2C%20RK%20World%20Tower%2C%20Nr.Shital%20Park%2C%20150%20Ft.%20Ring%20Road%2C%20Rajkot%20360006"
                  >
                    Open in Maps ↗
                  </a>
                </div>
              </li>
              <li>
                <span className="n">04</span>
                <div>
                  <small>Branch Office</small>
                  <address>
                    617 RK Prime, Besides Silver Heights, Nr. Nana Mava Circle, 150 Ft. Ring Road, Rajkot - 360006 Gujarat India.
                  </address>
                  <a
                    className="maps"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/maps/search/?api=1&query=617%20RK%20Prime%2C%20Nana%20Mava%20Circle%2C%20150%20Ft.%20Ring%20Road%2C%20Rajkot%20360006"
                  >
                    Open in Maps ↗
                  </a>
                </div>
              </li>
            </ul>
          </section>

          {/* Right Column: Form Card */}
          <section className={`card${isSubmitted ? ' done' : ''}`}>
            {/* Rotating Circular Badge */}
            <div className="badge" aria-label="We respond within 24 hours">
              <svg className="ring" viewBox="0 0 100 100" aria-hidden="true">
                <defs>
                  <path
                    id="cuCircle"
                    d="M50 50m-39 0a39 39 0 1 1 78 0a39 39 0 1 1-78 0"
                  />
                </defs>
                <text>
                  <textPath href="#cuCircle" textLength="240" lengthAdjust="spacing">
                    WE RESPOND WITHIN 24 HOURS •
                  </textPath>
                </text>
              </svg>
              <div className="mid">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>
            </div>

            <h2>Send us a message</h2>
            <p>Pick a topic or write your own. Fields marked * are required.</p>

            {/* Quick-select topic chips */}
            <div className="chips">
              {QUICK_CHIPS.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  className={activeChip === chip ? 'on' : ''}
                  onClick={() => handleChipClick(chip)}
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate>
              <div className="g">
                <div className="f">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder=" "
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="name">
                    Your Name <b>*</b>
                  </label>
                </div>

                <div className="f ph">
                  <span>+91</span>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder=" "
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="phone">Phone Number</label>
                </div>

                <div className="f">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder=" "
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="email">
                    Your Email <b>*</b>
                  </label>
                </div>

                <div className="f">
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder=" "
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="company">Your Company</label>
                </div>

                <div className="f full">
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder=" "
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="subject">
                    Subject <b>*</b>
                  </label>
                </div>

                <div className="f full">
                  <textarea
                    id="q"
                    name="question"
                    required
                    placeholder=" "
                    value={formData.q}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="q">
                    Your Question <b>*</b>
                  </label>
                </div>
              </div>

              <div className="send">
                <button type="submit" disabled={isSubmitting}>
                  Submit{' '}
                  <span>
                    <svg viewBox="0 0 24 24">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </button>
                <small>We'll reply within 24 hours.</small>
              </div>
            </form>

            {/* Success confirmation */}
            <div className="ok" role="status">
              <div className="tick">
                <svg viewBox="0 0 24 24">
                  <path d="m5 12.5 4.5 4.5L19 7.5" />
                </svg>
              </div>
              <h3>Thank you!</h3>
              <p>
                Your message is in. Our team will get back to you within 24 hours.
              </p>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
