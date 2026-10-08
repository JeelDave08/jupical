const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/jupical-technologies/',
    icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></>,
  },
  {
    label: 'X (Twitter)',
    href: 'https://twitter.com/jupical',
    icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@jupicaltechnologies',
    icon: <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.8 5 12 5 12 5s-4.8 0-7 .1c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.3.8C6.8 19 12 19 12 19s4.8 0 7-.2c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM9.7 14.5V9l5.4 2.8-5.4 2.7z" />,
  },
];

export default function HealthPlusFooter() {
  return (
    <footer className="hp-footer" aria-label="Site footer">
      <div className="hp-footer-main">
        <img className="hp-footer-logo" src="/footer-logo.png" alt="Jupical Technologies" />
        <p className="hp-footer-description">
          Jupical is a Certified Odoo ERP Partner specializing in manufacturing, finance, and enterprise digital transformation. Through expert ERP implementation and offshore development services, we deliver precision-built solutions that streamline operations, eliminate inefficiencies, and position businesses for long term growth across 32+ countries and counting.
        </p>
        <div className="hp-footer-contact-row">
          <div className="hp-footer-socials">
            {socialLinks.map(({ label, href, icon }) => (
              <a className="hp-footer-social" href={href} key={label} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">{icon}</svg>
              </a>
            ))}
          </div>
          <a className="hp-footer-email" href="mailto:info@jupical.io">info@jupical.io</a>
        </div>
      </div>
      <div className="hp-footer-bottom">
        <div className="hp-footer-bottom-inner">
          <span>© 2026 Jupical Technologies Pvt. Ltd. All rights reserved.</span>
          <span className="hp-footer-odoo"><i aria-hidden="true" />Powered by Odoo</span>
        </div>
      </div>
    </footer>
  );
}
