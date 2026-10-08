import { HEALTH_VIDEOS, healthModules } from '../../../data/healthcare';

export const VIDEOS = {
  main: '',
  modules: healthModules.map((module) => `https://www.youtube.com/watch?v=${HEALTH_VIDEOS[module.number] || ''}`),
};

export function ytId(url) {
  if (typeof url !== 'string' || !url.trim()) return '';
  try {
    const parsed = new URL(url);
    const segments = parsed.pathname.split('/').filter(Boolean);
    const id = parsed.hostname === 'youtu.be'
      ? segments[0]
      : parsed.pathname === '/watch'
        ? parsed.searchParams.get('v')
        : ['embed', 'shorts'].includes(segments[0]) ? segments[1] : '';
    return /^[A-Za-z0-9_-]{11}$/.test(id || '') ? id : '';
  } catch {
    return '';
  }
}
