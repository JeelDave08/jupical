import { healthModules } from '../../../data/healthcare';

export const MODULES = healthModules.map((module) => ({
  ...module,
  n: String(module.number).padStart(2, '0'),
  text: module.desc,
}));
