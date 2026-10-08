import { healthModules } from '../../data/healthcare';

export const healthcareSections = healthModules.map((module) => ({
  number: String(module.number).padStart(2, '0'),
  title: module.title,
  description: module.desc,
  bullets: module.bullets,
  youtubeId: module.videoId,
  image: `/healthcare/section-${String(module.number).padStart(2, '0')}.webp`,
  icon: module.icon,
}));

export const healthcareVideoUrl = (youtubeId) => `https://www.youtube.com/embed/${youtubeId}?rel=0&autoplay=0`;
