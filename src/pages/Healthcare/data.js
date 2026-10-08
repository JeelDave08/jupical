import { healthModules } from '../../data/healthcare';

export const HERO = {
  heading: 'Complete Healthcare Management Solution Built on Odoo',
  description: 'From patient registration and OPD to pharmacy, lab, billing, and HR, everything you need for a smooth, modern, and efficient healthcare system.',
  button: 'Request Demo',
};

export const CTA = {
  title: 'Ready to Transform Your Health Center?',
  description: 'HealthPlus by Jupical Technologies is built for hospitals and clinics that want to run smarter, serve patients better, and manage everything from one platform.',
};

export const FEATURES = healthModules.map((module) => ({
  id: String(module.number).padStart(2, '0'),
  title: module.title,
  desc: module.desc,
  bullets: module.bullets,
  videoId: module.videoId,
  videoUrl: `https://youtu.be/${module.videoId}`,
}));
