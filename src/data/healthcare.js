export const HEALTH_VIDEOS = {
  '1': 'ettQDXqdlHA',
  '2': 'iYTE3yvYblw',
  '3': 'PvggM2YIA4Y',
  '4': 'mKgw_RadXvw',
  '5': '9AmhXGspk84',
  '6': 'v1obNJxBoL0',
  '7': 'pFL1X8uLdL4',
  '8': '1brMiY8iFMg',
  '9': '15RB3vmExug',
  '10': 'iPppFi_Rk7I',
  '11': 'uE_oEjIJNFM',
  '12': 'KOs1DULLhK8',
};

const rawModules = [
  {
    title: 'System Overview & Configuration', icon: 'settings',
    desc: 'HealthPlus is built on Odoo and designed to adapt to your health center from day one. The configuration module lets you define your company profile, set up user roles and permissions, activate the modules you need, and fine tune system parameters all before your first patient walks through the door.',
    bullets: ['Set up company profile, logo, and health center details', 'Define user roles and control staff access levels', 'Activate modules based on your health center requirements', 'Configure system-wide parameters for smooth daily operations'],
  },
  {
    title: 'Health Center & Building Setup', icon: 'building',
    desc: 'Map your physical facility into HealthPlus with buildings, wings, and department codes. This structured setup powers everything from patient bed allocation to department routing, making sure every part of your health center is digitally organized and easy to navigate.',
    bullets: ['Create and manage multiple buildings and wings', 'Assign unique codes to each area for identification', 'Link departments and rooms to specific buildings', 'Foundation for patient assignments and department routing'],
  },
  {
    title: 'Doctors & Specializations', icon: 'doctor',
    desc: 'Maintain complete profiles for every doctor in your facility from specializations and consultation types to availability and schedules. HealthPlus makes it easy to connect the right specialist to the right patient at the right time.',
    bullets: ['Create detailed doctor profiles with contact and specialty info', 'Define medical specializations and consultation types', 'Set and manage doctor availability and working hours', 'Link doctors to departments, buildings, and patient cases'],
  },
  {
    title: 'Patient Records & Evaluations', icon: 'records',
    desc: 'From first registration to ongoing care, HealthPlus keeps every patient detail in one place. Staff can register patients, access their full medical history, conduct structured evaluations using structured forms, and track the complete care journey without switching between systems.',
    bullets: ['Register patients with full demographic and contact details', 'Maintain complete medical history, diagnoses, and prescriptions', 'Conduct and document evaluations using structured forms', 'Track patient journey from admission to discharge'],
  },
  {
    title: 'Surgeries & Procedure Scheduling', icon: 'surgery',
    desc: 'Manage the complete surgery lifecycle in one place from request and team assignment to scheduling and status tracking. HealthPlus keeps every surgical operation organized so every team member knows exactly what is happening and when.',
    bullets: ['Create surgery requests linked to patient records', 'Assign surgical teams: surgeons, anaesthetists, and nurses', 'Schedule procedures with operating room and time slot booking', 'Track surgery status from request through to completion'],
  },
  {
    title: 'Imaging & Diagnostics', icon: 'imaging',
    desc: 'Handle every medical imaging request from start to finish within HealthPlus. Whether it is a CT scan, X-ray, MRI, or ultrasound, every test is tracked, results are recorded, and reports are linked directly to the complete patient record.',
    bullets: ['Raise imaging requests from doctor or reception', 'Support for CT, X-Ray, MRI, Ultrasound, and more', 'Record analysis results and upload diagnostic reports', 'Link completed imaging tests to patient medical history'],
  },
  {
    title: 'Nursing & Patient Roundings', icon: 'nursing',
    desc: 'Give your nursing team a dedicated space to manage patient roundings, care evaluations, and inpatient checklists. HealthPlus ensures nursing workflows are structured, documented, and fully connected to the broader patient care system.',
    bullets: ['Create patient rounding records with structured checklists', "Track the Seven P's assessment for every inpatient", 'Record vital signs, pain levels, and nursing observations', 'Link rounding records to patient files for complete documentation'],
  },
  {
    title: 'Insurance, Pre-Auth & Claims', icon: 'insurance',
    desc: 'Take the stress out of insurance with a dedicated workflow for policy capture, pre-authorization, and claims processing. HealthPlus keeps every insurance interaction documented and integrated with patient billing so nothing falls through the cracks.',
    bullets: ['Record and manage patient insurance policies and coverage', 'Submit and track pre-authorization requests before procedures', 'Process and follow up on insurance claims efficiently', 'Integrate insurance data with patient billing and invoicing'],
  },
  {
    title: 'Doctor Portal & Online Appointments', icon: 'portal',
    desc: 'Doctors get their own web portal where patients can find them and book appointments directly online. Integrated with the HealthPlus scheduling system, the portal keeps both doctors and reception staff in sync with real-time appointment visibility.',
    bullets: ['Dedicated web portal for doctors to manage their public profile', 'Patients can browse available doctors and book online', 'Real-time appointment visibility for doctors and reception', 'Integrated with HealthPlus calendar and scheduling system'],
  },
  {
    title: 'Patient Portal & Online Appointments', icon: 'patient',
    desc: 'Patients can take control of their own healthcare through a secure self-service web portal. Book and manage appointments, view invoices, and update account details all without calling the clinic.',
    bullets: ['Book, reschedule, or cancel appointments online', 'View and download invoices and billing history', 'Manage personal account and contact information', 'Secure individual login for every patient'],
  },
  {
    title: 'Mobile App for Doctors', icon: 'mobile',
    desc: 'Doctors can stay connected to their practice from anywhere with the HealthPlus mobile app. Check appointments, update patient records, track inpatient cases, and manage surgeries all from a smartphone.',
    bullets: ["View today's appointments and upcoming schedule instantly", 'Access and update patient records and evaluations on the go', 'Track inpatient records and patients currently under care', 'Manage assigned surgeries from the mobile interface'],
  },
  {
    title: 'Mobile App for Patients', icon: 'mobile',
    desc: "Put healthcare in every patient's pocket. The HealthPlus patient mobile app makes it easy to book appointments, track health records, and stay connected with the health center all from a smartphone.",
    bullets: ['Secure login with individual patient credentials', 'Book and manage appointments from mobile', 'Access personal health records and visit history', 'Stay connected and informed with the health center'],
  },
];

export const healthModules = rawModules.map((module, index) => {
  const number = index + 1;
  return { ...module, number, videoId: HEALTH_VIDEOS[number] || '' };
});
