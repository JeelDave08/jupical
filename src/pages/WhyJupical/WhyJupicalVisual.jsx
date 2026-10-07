import React from 'react';
import './WhyJupical.css';

export default function WhyJupicalVisual() {
  return (
    <div className="why-visual-stage" aria-label="3D Business Growth & Target Ecosystem">
      {/* Soft atmospheric cyan and blue radial glow in background */}
      <div className="why-visual-glow why-visual-glow--center" />
      <div className="why-visual-glow why-visual-glow--bottom" />

      <svg
        className="why-visual-svg"
        viewBox="0 0 640 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <radialGradient id="platformBaseGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0075FF" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#00D2FF" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="platformRingGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#70B4FF" />
            <stop offset="50%" stopColor="#D4EAFF" />
            <stop offset="100%" stopColor="#70B4FF" />
          </linearGradient>

          <linearGradient id="platformRingGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0075FF" />
            <stop offset="50%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0075FF" />
          </linearGradient>

          {/* 3D Target Gradients */}
          <linearGradient id="targetRing1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0057E0" />
            <stop offset="50%" stopColor="#0075FF" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>

          <linearGradient id="targetRingWhite" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#F4F8FD" />
            <stop offset="100%" stopColor="#DDEBFA" />
          </linearGradient>

          <linearGradient id="targetRing2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#004CBD" />
            <stop offset="100%" stopColor="#0080FF" />
          </linearGradient>

          <linearGradient id="targetBullseye" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0057E0" />
            <stop offset="100%" stopColor="#0075FF" />
          </linearGradient>

          {/* Gold Dart Gradients */}
          <linearGradient id="dartGoldBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE57F" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>

          <linearGradient id="dartFins" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>

          {/* 3D Floating Tiles */}
          <linearGradient id="tileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E75FF" />
            <stop offset="100%" stopColor="#0052CC" />
          </linearGradient>

          <linearGradient id="tileBevelSheen" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.05" />
          </linearGradient>

          {/* Character Legs / Shoes Gradients */}
          <linearGradient id="pantsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id="shoeBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>

          {/* Shadow filters */}
          <filter id="shadowTarget3D" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="18" stdDeviation="16" floodColor="#0075FF" floodOpacity="0.28" />
            <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#0F172A" floodOpacity="0.1" />
          </filter>

          <filter id="shadowTile3D" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#0052CC" floodOpacity="0.32" />
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.08" />
          </filter>

          <filter id="shadowCharacter3D" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#003580" floodOpacity="0.25" />
          </filter>

          <filter id="glowCyanPoint" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ============================================================
            1. BASE PLATFORM (CONCENTRIC CYAN & BLUE GLOWING RINGS)
            ============================================================ */}
        <g className="why-visual__platform" transform="translate(320, 445)">
          {/* Base outer soft shadow & glow */}
          <ellipse cx="0" cy="0" rx="230" ry="58" fill="url(#platformBaseGlow)" />
          <ellipse cx="0" cy="0" rx="230" ry="58" stroke="url(#platformRingGrad1)" strokeWidth="2.5" fill="none" opacity="0.85" />
          
          {/* Tier 2 Middle Disc */}
          <ellipse cx="0" cy="-6" rx="180" ry="44" fill="#E2F0FF" opacity="0.75" />
          <ellipse cx="0" cy="-6" rx="180" ry="44" stroke="url(#platformRingGrad2)" strokeWidth="2" fill="none" />
          
          {/* Tier 3 Inner Disc */}
          <ellipse cx="0" cy="-12" rx="130" ry="32" fill="#CCE5FF" opacity="0.85" />
          <ellipse cx="0" cy="-12" rx="130" ry="32" stroke="#0075FF" strokeWidth="2.5" fill="none" />

          {/* Glowing Center Ring */}
          <ellipse cx="0" cy="-16" rx="75" ry="18" fill="#E8F4FF" />
          <ellipse cx="0" cy="-16" rx="75" ry="18" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="6 4" />
        </g>

        {/* ============================================================
            2. ROTATING ORBIT RINGS
            ============================================================ */}
        <g className="why-visual__orbit-ring why-visual__orbit-ring--1" transform="translate(320, 255)">
          <ellipse cx="0" cy="0" rx="245" ry="155" stroke="rgba(0, 117, 255, 0.2)" strokeWidth="1.6" strokeDasharray="8 6" fill="none" />
          <circle cx="230" cy="-52" r="4.5" fill="#00D2FF" filter="url(#glowCyanPoint)" />
          <circle cx="-230" cy="52" r="3.5" fill="#0075FF" />
        </g>

        <g className="why-visual__orbit-ring why-visual__orbit-ring--2" transform="translate(320, 255)">
          <ellipse cx="0" cy="0" rx="195" ry="205" stroke="rgba(56, 189, 248, 0.22)" strokeWidth="1.4" strokeDasharray="5 5" fill="none" />
          <circle cx="-135" cy="-145" r="4" fill="#7C3AED" filter="url(#glowCyanPoint)" />
          <circle cx="135" cy="145" r="4.5" fill="#38BDF8" />
        </g>

        {/* ============================================================
            3. AMBIENT PARTICLES
            ============================================================ */}
        <g className="why-visual__sparkles">
          <circle cx="130" cy="120" r="2.5" fill="#38BDF8" opacity="0.7" className="sparkle-1" />
          <circle cx="510" cy="115" r="3" fill="#0075FF" opacity="0.8" className="sparkle-2" />
          <circle cx="120" cy="380" r="2" fill="#38BDF8" opacity="0.6" className="sparkle-3" />
          <circle cx="525" cy="370" r="2.5" fill="#0075FF" opacity="0.5" className="sparkle-1" />
        </g>

        {/* ============================================================
            4. CHARACTER LEGS / SHOES (STANDING BELOW/BEHIND TARGET)
            ============================================================ */}
        <g className="why-visual__character-legs" transform="translate(320, 310)" filter="url(#shadowCharacter3D)">
          {/* Left Leg */}
          <path d="M -45 25 L -52 105 L -32 105 L -25 25 Z" fill="url(#pantsGrad)" />
          {/* Left Modern Blue Sneaker */}
          <g transform="translate(-62, 102)">
            <path d="M 2 8 C 2 4, 6 0, 14 0 L 32 3 C 38 4, 40 9, 38 15 L 4 15 C 2 15, 2 12, 2 8 Z" fill="url(#shoeBodyGrad)" />
            <rect x="2" y="14" width="40" height="6" rx="3" fill="#FFFFFF" />
            <line x1="12" y1="7" x2="28" y2="9" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
          </g>

          {/* Right Leg */}
          <path d="M 25 25 L 32 105 L 52 105 L 45 25 Z" fill="url(#pantsGrad)" />
          {/* Right Modern Blue Sneaker */}
          <g transform="translate(24, 102)">
            <path d="M 2 8 C 2 4, 6 0, 14 0 L 32 3 C 38 4, 40 9, 38 15 L 4 15 C 2 15, 2 12, 2 8 Z" fill="url(#shoeBodyGrad)" />
            <rect x="2" y="14" width="40" height="6" rx="3" fill="#FFFFFF" />
            <line x1="12" y1="7" x2="28" y2="9" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
          </g>
        </g>

        {/* ============================================================
            5. CENTRAL 3D BLUE TARGET WITH CONCENTRIC RINGS & GOLD DART
            ============================================================ */}
        <g className="why-visual__target-group" transform="translate(320, 245)" filter="url(#shadowTarget3D)">
          {/* 3D Depth / Bezel Extrusion */}
          <ellipse cx="0" cy="14" rx="106" ry="106" fill="#003580" />
          <ellipse cx="0" cy="7" rx="106" ry="106" fill="#004FB8" />

          {/* Outer Royal Blue Ring */}
          <circle cx="0" cy="0" r="104" fill="url(#targetRing1)" stroke="#003EA3" strokeWidth="2" />
          
          {/* Glossy Reflection Highlight */}
          <path d="M -90 -35 A 102 102 0 0 1 70 -72" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" opacity="0.45" />

          {/* Ring 2: White */}
          <circle cx="0" cy="0" r="84" fill="url(#targetRingWhite)" stroke="#C5DCF8" strokeWidth="1.5" />

          {/* Ring 3: Blue */}
          <circle cx="0" cy="0" r="64" fill="url(#targetRing2)" stroke="#004FB8" strokeWidth="1.5" />

          {/* Ring 4: White */}
          <circle cx="0" cy="0" r="44" fill="url(#targetRingWhite)" stroke="#C5DCF8" strokeWidth="1.2" />

          {/* Center Blue Bullseye */}
          <circle cx="0" cy="0" r="24" fill="url(#targetBullseye)" />
          <circle cx="-3" cy="-3" r="5" fill="#FFFFFF" opacity="0.4" />

          {/* 3D Gold Dart in Target Bullseye */}
          <g className="why-visual__dart" transform="translate(0, 0)">
            {/* Dart Shadow */}
            <path d="M -2 2 L -34 -30 L -28 -36 L 2 -2 Z" fill="rgba(0, 20, 60, 0.35)" />
            
            {/* Metallic Gold Dart Shaft */}
            <path d="M 0 0 L -40 -40 L -36 -44 L 4 -4 Z" fill="url(#dartGoldBody)" stroke="#78350F" strokeWidth="0.8" />
            <line x1="-16" y1="-12" x2="-12" y2="-16" stroke="#FEF3C7" strokeWidth="1.8" />
            <line x1="-22" y1="-18" x2="-18" y2="-22" stroke="#FEF3C7" strokeWidth="1.8" />
            <line x1="-28" y1="-24" x2="-24" y2="-28" stroke="#FEF3C7" strokeWidth="1.8" />

            {/* Dart Yellow Wings / Flights */}
            <polygon points="-40,-40 -62,-54 -50,-36" fill="url(#dartFins)" stroke="#B45309" strokeWidth="1" />
            <polygon points="-40,-40 -54,-62 -36,-50" fill="url(#dartFins)" stroke="#B45309" strokeWidth="1" />
            <polygon points="-40,-40 -66,-66 -46,-46" fill="#FDE68A" stroke="#B45309" strokeWidth="1" />
          </g>
        </g>

        {/* ============================================================
            6. 4 FLOATING 3D SQUIRCLE TECH ICONS
            ============================================================ */}

        {/* 1. Analytics / Bar Chart (Top-Left) */}
        <g className="why-visual__tech-icon why-visual__tech-icon--chart" transform="translate(105, 125)" filter="url(#shadowTile3D)">
          <rect x="0" y="0" width="68" height="68" rx="18" fill="url(#tileGrad)" />
          <rect x="0" y="0" width="68" height="68" rx="18" fill="url(#tileBevelSheen)" />
          <rect x="0" y="0" width="68" height="68" rx="18" stroke="#80B3FF" strokeWidth="1.6" fill="none" />

          {/* Bar Chart Bars */}
          <g transform="translate(16, 17)">
            <rect x="2" y="20" width="7" height="14" rx="2.5" fill="#93C5FD" />
            <rect x="13" y="12" width="7" height="22" rx="2.5" fill="#60A5FA" />
            <rect x="24" y="4" width="7" height="30" rx="2.5" fill="#FFFFFF" />
            <path d="M 4 18 L 15 10 L 28 2" stroke="#FEF08A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="28" cy="2" r="2.5" fill="#FEF08A" />
          </g>
        </g>

        {/* 2. Cloud (Bottom-Left) */}
        <g className="why-visual__tech-icon why-visual__tech-icon--cloud" transform="translate(85, 305)" filter="url(#shadowTile3D)">
          <rect x="0" y="0" width="66" height="66" rx="18" fill="url(#tileGrad)" />
          <rect x="0" y="0" width="66" height="66" rx="18" fill="url(#tileBevelSheen)" />
          <rect x="0" y="0" width="66" height="66" rx="18" stroke="#80B3FF" strokeWidth="1.6" fill="none" />

          {/* Cloud Icon */}
          <g transform="translate(15, 19)">
            <path
              d="M 10 24 C 6 24, 3 21, 3 17 C 3 13.5, 5.5 11, 8.8 10.2 C 9.8 5.5, 14 2, 19 2 C 24.5 2, 29 6, 29.8 11.5 C 33 12, 35 14.5, 35 18 C 35 21.5, 32 24, 28 24 Z"
              fill="#FFFFFF"
            />
          </g>
        </g>

        {/* 3. Settings / Gear (Top-Right) */}
        <g className="why-visual__tech-icon why-visual__tech-icon--gear" transform="translate(485, 125)" filter="url(#shadowTile3D)">
          <rect x="0" y="0" width="68" height="68" rx="18" fill="url(#tileGrad)" />
          <rect x="0" y="0" width="68" height="68" rx="18" fill="url(#tileBevelSheen)" />
          <rect x="0" y="0" width="68" height="68" rx="18" stroke="#80B3FF" strokeWidth="1.6" fill="none" />

          {/* Precision Gear */}
          <g transform="translate(18, 18)">
            <path
              d="M 16 4 L 16 7 M 16 25 L 16 28 M 4 16 L 7 16 M 25 16 L 28 16 M 7.5 7.5 L 9.5 9.5 M 22.5 22.5 L 24.5 24.5 M 7.5 24.5 L 9.5 22.5 M 22.5 9.5 L 24.5 7.5"
              stroke="#FFFFFF"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            <circle cx="16" cy="16" r="8" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
            <circle cx="16" cy="16" r="3.5" fill="#FFFFFF" />
          </g>
        </g>

        {/* 4. Code </> (Bottom-Right) */}
        <g className="why-visual__tech-icon why-visual__tech-icon--code" transform="translate(485, 305)" filter="url(#shadowTile3D)">
          <rect x="0" y="0" width="68" height="68" rx="18" fill="url(#tileGrad)" />
          <rect x="0" y="0" width="68" height="68" rx="18" fill="url(#tileBevelSheen)" />
          <rect x="0" y="0" width="68" height="68" rx="18" stroke="#80B3FF" strokeWidth="1.6" fill="none" />

          {/* Code Syntax </> */}
          <g transform="translate(18, 21)">
            <path d="M 9 6 L 2 13 L 9 20" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 23 6 L 30 13 L 23 20" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="19" y1="4" x2="13" y2="22" stroke="#67E8F9" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}
