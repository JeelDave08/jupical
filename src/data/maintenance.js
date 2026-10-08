export const MAINT_VIDEOS = {
  '1': 'RRsmanHLvkU',
  '2': '0A7X2I_Pr9o',
  '3': 'ahhWen_2-N0',
  '4': 'FzQTS_mI54g',
  '5': 'NbA8u3lt35s',
  '6': '3xCloPtrJAQ',
  '7': 'NPof9e5ahRw',
};

const rawModules = [
  { title: 'Access Rights & Configuration Setup', icon: 'service-access', desc: 'Set up access rights, product brands, locations, action types, categories, and service centers before creating your first service ticket.' },
  { title: 'Tickets Creation & Warranty Setup', icon: 'service-warranty', desc: 'Create a service ticket, attach spare parts, and configure vendor warranty so customer and supplier warranty periods apply automatically.' },
  { title: 'Diagnosis & Repair Workflow', icon: 'service-repair', desc: 'Diagnose a ticket as Repairable, Unrepairable, or Approval Required, then follow each path through quotation, collection, and reporting.' },
  { title: 'Purchase Orders & Sale Orders', icon: 'service-orders', desc: 'Connect service tickets to Purchase and Sale, from requesting spare parts via RFQ to confirming a sales order for the repair.' },
  { title: 'Part Picking List & Inventory Transfer', icon: 'service-picking', desc: 'Move spare parts from stock to the service center with storage locations and internal transfers, tracked from the service ticket.' },
  { title: 'Product Inventory & Delivery Reports', icon: 'service-inventory', desc: 'Track current inventory, spot spare parts shortages, auto-generate purchase orders, and print delivery receipts for the service center.' },
  { title: 'Schedule Actions', icon: 'service-actions', desc: 'Automate reminders, ticket notifications, spare parts reordering, and warranty updates to keep the service module running.' },
];

export const maintModules = rawModules.map((module, index) => {
  const number = index + 1;
  return { ...module, number, videoId: MAINT_VIDEOS[number] || '' };
});

export const maintenanceFeatures = [
  { icon: 'clipboard', title: 'Job Order Creation & Assignment', desc: 'Create service job orders with clear descriptions and images, and assign them to technicians based on availability.' },
  { icon: 'calendar', title: 'Work Scheduling & Calendar Integration', desc: 'Plan field visits or in-house service jobs with an intuitive calendar and scheduling tools.' },
  { icon: 'people', title: 'Customer & Contract Management', desc: 'Maintain customer profiles, service history, and recurring contract renewals with reminders.' },
  { icon: 'location', title: 'Field Service Tracking', desc: 'Monitor task status, technician location, and customer feedback in real time.' },
  { icon: 'boxes', title: 'Inventory & Spare Part Management', desc: 'Track parts and consumables per job order, and automate reorders when needed.' },
  { icon: 'report', title: 'Invoicing & Service Reports', desc: 'Generate service reports, bills, and timesheets based on work completed.' },
];

export const maintenanceBenefits = [
  'Perfect for IT services, home repair, maintenance, cleaning, or installation-based businesses',
  'Ensures timely service delivery and reduced operational delays',
  'Enhances communication between field staff and back-office teams',
  'Offers detailed analytics on service performance and workforce utilization',
  'Fully integrates with CRM, Inventory, and Accounting modules',
];

export const maintenanceMainVideoId = '';
export const maintenanceDocumentationUrl = '/service-management.pdf';
