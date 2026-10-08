import { createElement as h } from 'react';

const svg = (props, ...children) => h('svg', {
  className: props.className,
  style: props.style,
  viewBox: '0 0 100 100',
  'aria-hidden': 'true',
}, ...children);

function PersonIcon(props) {
  return svg(props,
    h('circle', { key: 'head', cx: 50, cy: 34, r: 16, fill: '#fff' }),
    h('path', { key: 'body', d: 'M18 90c0-22 14-34 32-34s32 12 32 34z', fill: '#fff' }));
}

function TrophyIcon(props) {
  return svg(props,
    h('path', { key: 'trophy', d: 'M30 14h40v22c0 14-9 24-20 24S30 50 30 36z', fill: '#fff' }),
    h('path', { key: 'handles', d: 'M30 20H16c0 14 6 22 16 24M70 20h14c0 14-6 22-16 24', fill: 'none', stroke: '#fff', strokeWidth: 6 }),
    h('rect', { key: 'stem', x: 42, y: 60, width: 16, height: 14, fill: '#fff' }),
    h('rect', { key: 'base', x: 32, y: 74, width: 36, height: 9, rx: 3, fill: '#fff' }));
}

function ArrowIcon(props) {
  return svg(props, h('path', { d: 'M50 8 84 48H64v40H36V48H16z', fill: '#fff' }));
}

function BuildingIcon(props) {
  const windows = [[32, 24], [48, 24], [32, 42], [48, 42], [32, 60], [48, 60]];
  return svg(props,
    h('rect', { key: 'tower', x: 24, y: 14, width: 40, height: 76, rx: 4, fill: '#fff' }),
    h('rect', { key: 'wing', x: 64, y: 42, width: 18, height: 48, rx: 3, fill: '#fff', opacity: '.8' }),
    h('g', { key: 'windows', fill: 'currentColor', opacity: '.55' }, ...windows.map(([x, y], i) => h('rect', { key: i, x, y, width: 8, height: 8 }))));
}

function GraduationCapIcon(props) {
  return svg(props,
    h('path', { key: 'cap', d: 'M50 18 90 38 50 58 10 38z', fill: '#fff' }),
    h('path', { key: 'base', d: 'M26 50v18c0 8 48 8 48 0V50L50 62z', fill: '#fff', opacity: '.85' }),
    h('rect', { key: 'tassel', x: 86, y: 38, width: 4, height: 26, fill: '#fff' }));
}

function GearIcon(props) {
  const teeth = [
    { x: 44, y: 6, width: 12, height: 16 },
    { x: 44, y: 78, width: 12, height: 16 },
    { x: 6, y: 44, width: 16, height: 12 },
    { x: 78, y: 44, width: 16, height: 12 },
  ];
  return svg(props,
    h('circle', { key: 'ring', cx: 50, cy: 50, r: 22, fill: 'none', stroke: '#fff', strokeWidth: 12 }),
    h('g', { key: 'teeth', fill: '#fff' }, ...teeth.map((attrs, i) => h('rect', { ...attrs, key: i, rx: 3 }))));
}

export const VIDEO_ICONS = {
  person: PersonIcon,
  trophy: TrophyIcon,
  arrow: ArrowIcon,
  build: BuildingIcon,
  cap: GraduationCapIcon,
  gear: GearIcon,
};

export const VIDEOS = [
  { id: 'hLiJO-VPKfk', tag: 'Success story', k: 'story', title: 'Travenza is now fully automated by Jupical', by: 'Jupical Technologies', c: ['#0b5bff', '#38bdf8'], ic: 'person' },
  { id: 'UKD5m9s15QY', tag: 'Success story', k: 'story', title: 'SRP Crane Manufacturing goes live with ERP, CRM and HRMS', by: 'Jupical Technologies', c: ['#f59e0b', '#ef4444'], ic: 'trophy' },
  { id: 'KAdTWXsDcsM', tag: 'Industry ERP', k: 'erp', title: 'How Odoo Enterprise transformed payroll and workforce management', by: 'Jupical Technologies', c: ['#059669', '#34d399'], ic: 'arrow' },
  { id: 'gWbe-VODpQc', tag: 'Industry ERP', k: 'erp', title: 'Construction ERP in Odoo: end-to-end construction management', by: 'Jupical Technologies', c: ['#1e3a8a', '#3b82f6'], ic: 'build' },
  { id: 'muqarQC311E', tag: 'Industry ERP', k: 'erp', title: 'Transform your educational institution with our complete ERP', by: 'Jupical Technologies', c: ['#7c3aed', '#a78bfa'], ic: 'cap' },
  { id: 'UjgsXAq1b6w', tag: 'Success story', k: 'story', title: 'F&B success story: smart manufacturing ERP and distribution', by: 'Jupical Technologies', c: ['#0891b2', '#22d3ee'], ic: 'gear' },
];
