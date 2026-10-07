/**
 * clientsData.js
 * Single source of truth for the Our Clients page.
 * All logos live in /public/clients/ (originals, 169×69, white-bg sprites).
 * hideName: true  → client name label is hidden in the wall tile.
 */

export const CLIENTS = [
  // ── Named clients (real names provided) ──────────────────────────────
  { name: 'Luxuria',                              logo: '/clients/luxuria.png' },
  { name: 'Procom Middle East',                   logo: '/clients/procom.png' },
  { name: 'Powerpace',                            logo: '/clients/powerpace.png' },
  { name: 'Millennium Forging',                   logo: '/clients/millennium.png' },
  { name: 'Travenza',                             logo: '/clients/travenza.png' },
  { name: 'SRN Integrated Lending Corp',          logo: '/clients/srn_integrated.png' },
  { name: 'Heben Cranes',                         logo: '/clients/heben.png' },
  { name: 'Roto Riko Lifting Equipment',          logo: '/clients/rotoriko.png' },
  { name: 'SRP Crane Controls',                   logo: '/clients/srp.png' },
  { name: 'Allfold',                              logo: '/clients/allfold.png' },
  { name: 'Antra',                                logo: '/clients/antra.png' },
  { name: 'Shiksha Guru',                         logo: '/clients/shiksha_guru.png' },
  { name: 'Brixton',                              logo: '/clients/brixton.png' },
  { name: 'Indus Aushadhi',                       logo: '/clients/indus.png' },
  { name: 'CitaGlobal',                           logo: '/clients/citaglobal.png' },
  { name: 'Islamic Financial Services Board (IFSB)', logo: '/clients/ifsb.png' },
  { name: 'IndiaFinds',                           logo: '/clients/indiafinds.png' },
  { name: 'Shivansh',                             logo: '/clients/shivansh.png' },
  { name: 'Baldertech',                           logo: '/clients/baldertech.png' },
  { name: 'Ehsaas Beverages',                     logo: '/clients/ehsaas.png' },
  { name: 'MIT-MUT',                              logo: '/clients/mit_mut.png' },
  { name: '42Gears',                              logo: '/clients/gears42.png' },
  { name: 'eTeki',                                logo: '/clients/eteki.png' },

  // ── Unknown real names — TODO: replace "Client N" with actual name ───
  // TODO real name
  { name: 'Client 1', logo: '/clients/green_hexagon.png', hideName: true },
  // TODO real name
  { name: 'Client 2', logo: '/clients/h_logo.png',        hideName: true },
  // TODO real name
  { name: 'Client 3', logo: '/clients/crest.png',         hideName: true },
  // TODO real name
  { name: 'Client 4', logo: '/clients/emblem.png',        hideName: true },
];
