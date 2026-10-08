export const HOTEL_VIDEOS = {
  '1': 'Wb1ApkEMKNY',
  '2': 'gtgvFAsxKRA',
  '3': 'x8wA2TbWEZ0',
  '4': '558h7WLFUcQ',
  '5': 'MNLGNGP0a-k',
  '6': 'UP9wELvPCM0',
};

const rawModules = [
  { title: 'Configuration and Setup', icon: 'hotel-configuration', desc: 'Pre-configure rooms, amenities, services, food items, tables, floors and more.' },
  { title: 'Website & Online Booking Experience', icon: 'hotel-booking', desc: 'A full, editable multi-page website where guests browse, book, and pay without any hassle.' },
  { title: 'Reservation', icon: 'hotel-reservation', desc: 'Check room availability, reserve on behalf of a guest, and log inquiries.' },
  { title: 'Housekeeping Services', icon: 'hotel-housekeeping', desc: 'Assign cleaning duties and track room status at check-in, check-out, or daily.' },
  { title: 'Restaurant', icon: 'hotel-restaurant', desc: 'Book tables, take orders, and send tickets straight to the kitchen.' },
  { title: 'Reports & Reporting', icon: 'hotel-reports', desc: 'Pivot views, graphs, and printable reports across reservations and the restaurant.' },
];

export const hotelModules = rawModules.map((module, index) => {
  const number = index + 1;
  return { ...module, number, videoId: HOTEL_VIDEOS[number] || '' };
});

export const hotelMainVideoId = '';

export const hotelFeatures = [
  { title: 'Reservation & Booking Management', desc: 'Handle walk-ins, online bookings, and group reservations with real-time room availability tracking.', icon: 'CalendarCheck' },
  { title: 'Room Allocation & Housekeeping', desc: 'Automatically assign rooms and track housekeeping status for faster check-ins and clean transitions.', icon: 'BedDouble' },
  { title: 'Front Desk & Check-In/Check-Out', desc: 'Speed up guest registrations, ID verification, and billing during check-out.', icon: 'ContactRound' },
  { title: 'POS Integration (Restaurant/Bar)', desc: 'Manage F&B operations, link with guest rooms, and generate consolidated bills with ease.', icon: 'Utensils' },
  { title: 'Invoicing & Payments', desc: 'Generate invoices, apply discounts, handle multi-payment modes, and manage financial reports.', icon: 'CreditCard' },
  { title: 'Customer Feedback & Loyalty', desc: 'Collect guest feedback, monitor reviews, and offer loyalty programs to retain customers.', icon: 'HeartHandshake' },
];

export const hotelBenefits = [
  'Supports single-property or chain hotel setups',
  'Improves team coordination across departments',
  'Enhances guest satisfaction with quicker responses',
  'Real-time reporting and occupancy analytics',
  'Integrated with accounting, CRM, and inventory modules',
];

// Add verified documentation URLs when available. No Hotel PDF links were present in the repo.
export const hotelDocumentation = [
  { title: 'Enterprise', url: '/hotel-management-enterprise.pdf' },
  { title: 'Community', url: '/hotel-management-community.pdf' },
];

export const hotelClosing = {
  title: 'Deliver Hotel that Guests Remember',
  subtitle: 'From booking to billing, elevate every aspect of hotel management with a flexible, future-ready ERP solution.',
  button: 'Schedule a free demo and see how we can transform your hotel operations.',
};
