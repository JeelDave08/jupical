export const educationMainVideoId = 'C0BnWt5nPzQ';

export const EDU_VIDEOS = {
  '1': 'G-bYg6GMOMc',
  '2': 'wex7EMlXarI',
  '3': 'H6vAfe87Af8',
  '4': 'NRQwWI_winQ',
  '5': 'eLAf8oAqnyQ',
  '6': 'rQ-7L8_OIPQ',
  '7': 'OYbAZEPx_Ek',
  '8': 'VU7fWnPb1mk',
  '9': 'Cxe32Asfl58',
  '10': 'kl3pZwHqFK8',
  '11': 'Drn8dAHdA74',
  '12': 'cYkR1R0qIL8',
  '13': 'NI6HDOYR00U',
  '14': 'HBo35MkrTPY',
  '15': 'm_Kq4XbaG5k',
  '16': '09i6PLqyudY',
  '17': '46BvKDVJkuQ',
  '18': 'XYby44BctRs',
};

const rawModules = [
  { title: 'System Overview & Configuration', icon: 'settings', desc: 'Get a complete walkthrough of the Education ERP setup on Odoo. We cover the overall system layout, how user access rights are configured for admins, teachers, and parents, and the initial configuration steps needed before the system goes live at your school.' },
  { title: 'Online Admission & Website Inquiry', icon: 'school', desc: "See how prospective students and parents submit admission inquiries directly from your school's website. We walk through the inquiry form, how submissions land in the backend, and how the admissions team reviews and follows up on each inquiry." },
  { title: 'Student Records', icon: 'users', desc: 'Explore how complete student records are maintained in one place, including personal details, academic history, standard and division, and linked documents, giving your admin team a single source of truth for every student.' },
  { title: 'Faculty Profiles', icon: 'user', desc: 'Learn how faculty profiles are created and maintained, including subjects taught, assigned standards and divisions, and contact details, so the right teacher information is always available across the system.' },
  { title: 'Timetable Scheduling', icon: 'calendar', desc: 'See how class timetables are built and organized by standard, division and subject, helping schools avoid clashes and keep every teacher and student on the same schedule.' },
  { title: 'Attendance Tracking', icon: 'clipboard', desc: 'Walk through daily attendance capture for students, session-wise tracking by faculty, and how attendance reports are generated for a class, division, or individual student over a date range.' },
  { title: 'Examination & Results', icon: 'award', desc: 'See how exams are scheduled, marks are entered per subject, and results are generated and published giving students, faculty and parents a clear view of academic performance.' },
  { title: 'Library System', icon: 'library', desc: 'Explore the school library module book catalog management, issuing and returning books, and tracking overdue fines, all built natively into the Education ERP.' },
  { title: 'Fees & Payments', icon: 'wallet', desc: 'Learn how student fee structures are configured, invoices are generated, and payments are tracked giving your accounts team a clear picture of paid, pending and overdue fees.' },
  { title: 'Hostel Operations', icon: 'school', desc: 'See how hostel buildings and rooms are set up, how student registration into rooms is handled, and how day-to-day housekeeping requests and complaints are logged and resolved.' },
  { title: 'Assignments', icon: 'book', desc: 'In this video, we manage student assignments end-to-end. We start at the Assignments Menu & List View, then open the Assignment Form to set subject, faculty, standard, division, and assignment type. Under Basic Information, we set the issue date and submission deadline, and under Allocation Information, we see the exact list of students the assignment has been allocated to.' },
  { title: 'Transportation', icon: 'bus', desc: 'In this video, we set up student transportation. We start at the Transportation Menu & List View, which shows all routes with their assigned vehicle and driver, then open the Transportation Form to configure the source, destination, students, vehicle, driver, distance, which shows all routes with their assigned vehicle and driver, then open the Transportation Form to configure the source, destination, students, vehicle, driver, distance, and rate per km. We then manage driver and conductor contacts in Kanban and list view, and finally set up vehicles with brand, model, and year of manufacture.' },
  { title: 'Student Counseling', icon: 'counseling', desc: 'In this video, we schedule and run student counselling. We start at the Counselling Menu & List View, open the Counselling Form to attach a survey link and track session time, and follow a student through the Survey Start and End pages. We then show how the counsellor reviews survey answers in a pop-up and how the underlying survey questions are managed and shared.' },
  { title: 'Parent Records', icon: 'users', desc: 'In this video, we schedule and run student counselling. We start at the Counselling Menu & List View, open the Counselling Form to attach a survey link and track session time, and follow a student through the Survey Start and End pages. We then show how the counsellor reviews survey answers in a pop-up and how the underlying survey questions are managed and shared.' },
  { title: 'Evaluation Profiles', icon: 'activity', desc: 'In this video, we raise and track student evaluations. We start at the Evaluation Profile Menu & List View, open the Evaluation Profile Form, where students, teachers, and parents can raise points for discussion, and generate both the Evaluation Receipt Report and the consolidated Evaluation Summary Report.' },
  { title: 'School Events', icon: 'calendar', desc: 'In this video, we plan and run a full school event. We start at the Events Menu in Kanban view, build out the Event Form with tickets, communication, and notes, and browse events by calendar, list, pivot, and activity view.' },
  { title: 'Reports & Analytics', icon: 'activity', desc: 'In this video, we go through the Reports Menu Score Static Summary, Attendance, Attendance Summary, Attendance Reporting, Result Report, and Evaluation Summary, giving school administrators a complete picture of academic and operational performance.' },
  { title: 'Parent & Student Mobile App', icon: 'smartphone', desc: 'Experience the Education ERP on the go. The mobile app lets parents and students log in securely, request and join meetings, and check session details and attendance for their child anytime, anywhere.' },
];

export const eduModules = rawModules.map((module, index) => {
  const number = index + 1;
  return { ...module, number, videoId: EDU_VIDEOS[number] || '' };
});

export const educationModules = eduModules;

export const educationCoreModules = ['Admissions and Enrollment', 'Academics and Timetabling', 'Examinations and Results', 'Attendance Management', 'Fee Management and Online Payments', 'Faculty and Staff Management', 'Hostel Management', 'Transportation Management', 'Library Management', 'Event Management', 'Student Counselling', 'Dashboards and Analytics'];
