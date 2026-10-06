import {
  GraduationCap,
  Factory,
  HardHat,
  Boxes,
  Link as LinkIcon,
  DollarSign,
} from 'lucide-react';
import './HeroVisual.css';

/**
 * HeroVisual Component
 * 
 * Interactive and animated right-side visual for Jupical Hero section:
 * - 6 floating isometric industry islands (transparent PNG assets)
 * - Rounded HTML/CSS label chips with Lucide icons
 * - Central glowing base platform with subtle pulse
 * - Real 3D CSS cube with Jupical logo on top and rotating labels (Certified, Expert, Manufacturing, ERP)
 * - 6 glowing animated dotted SVG connection lines ending precisely at the outer edge of the base
 */
export default function HeroVisual() {
  return (
    <div className="heroVisual" aria-label="Jupical ERP Ecosystem across key industries">
      {/* 1. SVG CONNECTION LINES (DOTTED & ANIMATED GLOW) */}
      <svg
        className="heroConnections"
        viewBox="0 0 1000 750"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <filter id="hvGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Six single straight connection paths from each island edge to base outer ring */}
        {/* 1. Education -> Top outer ring */}
        <path className="heroConnectionLine" d="M 500 230 L 500 305" filter="url(#hvGlow)" />
        <circle cx="500" cy="305" r="4.5" className="heroConnectionEnd" />

        {/* 2. Manufacturing -> Top-Left outer ring */}
        <path className="heroConnectionLine" d="M 285 285 L 380 342" filter="url(#hvGlow)" />
        <circle cx="380" cy="342" r="4.5" className="heroConnectionEnd" />

        {/* 3. Construction -> Top-Right outer ring */}
        <path className="heroConnectionLine" d="M 715 285 L 620 342" filter="url(#hvGlow)" />
        <circle cx="620" cy="342" r="4.5" className="heroConnectionEnd" />

        {/* 4. Integration -> Bottom-Left outer ring */}
        <path className="heroConnectionLine" d="M 285 515 L 380 448" filter="url(#hvGlow)" />
        <circle cx="380" cy="448" r="4.5" className="heroConnectionEnd" />

        {/* 5. Inventory -> Bottom-Right outer ring */}
        <path className="heroConnectionLine" d="M 715 515 L 620 448" filter="url(#hvGlow)" />
        <circle cx="620" cy="448" r="4.5" className="heroConnectionEnd" />

        {/* 6. Finance -> Bottom outer ring */}
        <path className="heroConnectionLine" d="M 500 565 L 500 488" filter="url(#hvGlow)" />
        <circle cx="500" cy="488" r="4.5" className="heroConnectionEnd" />
      </svg>

      {/* 2. SIX ISOMETRIC INDUSTRY ISLANDS */}
      <img
        className="heroIsland heroIslandEducation"
        src="/hero/island-education.png"
        alt="Education industry illustration"
        draggable="false"
      />
      <img
        className="heroIsland heroIslandManufacturing"
        src="/hero/island-manufacturing.png"
        alt="Manufacturing industry illustration"
        draggable="false"
      />
      <img
        className="heroIsland heroIslandConstruction"
        src="/hero/island-construction.png"
        alt="Construction industry illustration"
        draggable="false"
      />
      <img
        className="heroIsland heroIslandIntegration"
        src="/hero/island-integration.png"
        alt="Integration industry illustration"
        draggable="false"
      />
      <img
        className="heroIsland heroIslandInventory"
        src="/hero/island-inventory.png"
        alt="Inventory industry illustration"
        draggable="false"
      />
      <img
        className="heroIsland heroIslandFinance"
        src="/hero/island-finance.png"
        alt="Finance industry illustration"
        draggable="false"
      />

      {/* 3. SIX RESPONSIVE HTML/CSS LABEL CHIPS */}
      <div className="heroLabel heroLabelEducation">
        <span className="heroLabelIcon">
          <GraduationCap size={13} strokeWidth={2.4} />
        </span>
        <span className="heroLabelText">Education</span>
      </div>

      <div className="heroLabel heroLabelManufacturing">
        <span className="heroLabelIcon">
          <Factory size={13} strokeWidth={2.4} />
        </span>
        <span className="heroLabelText">Manufacturing</span>
      </div>

      <div className="heroLabel heroLabelConstruction">
        <span className="heroLabelIcon">
          <HardHat size={13} strokeWidth={2.4} />
        </span>
        <span className="heroLabelText">Construction</span>
      </div>

      <div className="heroLabel heroLabelIntegration">
        <span className="heroLabelIcon">
          <LinkIcon size={13} strokeWidth={2.4} />
        </span>
        <span className="heroLabelText">Integration</span>
      </div>

      <div className="heroLabel heroLabelInventory">
        <span className="heroLabelIcon">
          <Boxes size={13} strokeWidth={2.4} />
        </span>
        <span className="heroLabelText">Inventory</span>
      </div>

      <div className="heroLabel heroLabelFinance">
        <span className="heroLabelIcon">
          <DollarSign size={13} strokeWidth={2.6} />
        </span>
        <span className="heroLabelText">Finance</span>
      </div>

      {/* 4. CENTRAL GLOWING BASE PLATFORM */}
      <img
        className="heroBase"
        src="/hero/base.png"
        alt="Glowing ERP platform"
        draggable="false"
      />

      {/* 5. CENTRAL CSS 3D ROTATING CUBE */}
      <div className="heroCubeScene" aria-hidden="true">
        <div className="heroCube">
          {/* Top Face: Glossy light-blue/white with Jupical Logo */}
          <div className="cubeFace cubeTop">
            <img
              src="/hero/logo.png"
              alt="Jupical logo"
              className="cubeLogo"
              draggable="false"
            />
          </div>

          {/* 4 Vertical Side Faces: One word per face */}
          <div className="cubeFace cubeFront">
            <span>Certified</span>
          </div>
          <div className="cubeFace cubeRight">
            <span>Expert</span>
          </div>
          <div className="cubeFace cubeBack">
            <span className="cubeWordLong">Manufacturing</span>
          </div>
          <div className="cubeFace cubeLeft">
            <span>ERP</span>
          </div>

          {/* Bottom Face */}
          <div className="cubeFace cubeBottom" />
        </div>
      </div>
    </div>
  );
}
