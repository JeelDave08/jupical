import { useMemo } from 'react';
import './HeroVisual.css';

// Each path follows the existing glowing connection visible in the reference artwork.
// The artwork itself supplies the line; this SVG layer only supplies the moving energy bubbles.
const MODULES = [
  {
    id: 'manufacturing',
    label: 'Manufacturing',
    path: 'M 24 34 C 29 37, 35 41, 43 47 C 46 49, 49 50, 52 51',
    delay: '0s',
    duration: 4.8,
  },
  {
    id: 'education',
    label: 'Education',
    path: 'M 52 18 C 51 25, 50 31, 50 37 C 50 43, 51 47, 52 51',
    delay: '-1.1s',
    duration: 4.5,
  },
  {
    id: 'construction',
    label: 'Construction',
    path: 'M 80 34 C 74 37, 69 41, 62 46 C 58 49, 55 50, 52 51',
    delay: '-2.0s',
    duration: 4.9,
  },
  {
    id: 'inventory',
    label: 'Inventory',
    path: 'M 80 68 C 73 66, 68 62, 62 58 C 58 55, 55 53, 52 51',
    delay: '-2.9s',
    duration: 5.1,
  },
  {
    id: 'finance',
    label: 'Finance',
    path: 'M 52 84 C 52 77, 52 70, 52 64 C 52 58, 52 54, 52 51',
    delay: '-3.8s',
    duration: 4.7,
  },
  {
    id: 'integration',
    label: 'Integration',
    path: 'M 23 68 C 30 65, 36 62, 42 58 C 46 55, 49 53, 52 51',
    delay: '-4.7s',
    duration: 5.0,
  },
];

function DataPath({ path, delay, duration }) {
  return (
    <g className="hv-ecosystem__connection">
      <circle r="0.58" className="hv-ecosystem__particle">
        <animateMotion
          path={path}
          dur={`${duration}s`}
          begin={delay}
          calcMode="paced"
          repeatCount="indefinite"
        />
      </circle>
      <circle r="0.24" className="hv-ecosystem__particle-core">
        <animateMotion
          path={path}
          dur={`${duration}s`}
          begin={delay}
          calcMode="paced"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  );
}

export default function HeroVisual() {
  const paths = useMemo(() => MODULES, []);

  return (
    <div className="hero-visual" aria-label="Jupical ERP ecosystem across six industries">
      <div className="hv-ecosystem">
        <div className="hv-ecosystem__art" aria-hidden="true">
          <img
            className="hv-ecosystem__image"
            src="/jupical_hero_right_exact.png"
            alt=""
            draggable="false"
          />
        </div>

        {/* Transparent motion layer: only the moving bubbles are rendered here. */}
        <svg
          className="hv-ecosystem__svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {paths.map((module) => (
            <DataPath
              key={module.id}
              path={module.path}
              duration={module.duration}
              delay={module.delay}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
