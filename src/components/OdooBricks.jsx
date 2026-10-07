import { Link } from 'react-router-dom';
import './OdooBricks.css';

export default function OdooBricks() {
  return (
    <section className="jb-section" aria-labelledby="jb-title">
      <div className="jb-wrap">
        {/* Intro Left Column with Robot Mascot */}
        <div className="jb-intro">
          <div className="jb-bot" aria-hidden="true">
            <div className="jb-head">
              <div className="jb-ear jb-l" />
              <div className="jb-ear jb-r" />
              <div className="jb-visor">
                <div className="jb-eye" />
                <div className="jb-eye" />
              </div>
            </div>
          </div>
          <h2 id="jb-title">Odoo, built piece by piece.</h2>
          <p className="jb-lead">
            We help your team set up, migrate and go live on Odoo, one module at a time.
          </p>
        </div>

        {/* Lego Brick Tiles Grid */}
        <div className="jb-grid">
          <Link className="jb-brick jb-a" to="/#clients">
            Our happy clients
            <small>See who we work with</small>
          </Link>
          <div className="jb-brick jb-b">
            Since 2016 delivering Odoo services
          </div>
          <div className="jb-brick jb-c">
            We help customers implement their ERP software.
            <small>From first workshop to go-live</small>
          </div>
          <Link className="jb-brick jb-d" to="/case-studies">
            Our case studies
            <small>Real projects, real results</small>
          </Link>
        </div>
      </div>
    </section>
  );
}
