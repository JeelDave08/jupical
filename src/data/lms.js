export const LMS_VIDEOS = {
  '01': 'hevu7x_5Ars',
  '02': 'FyZF-UrnUw4',
  '03': 'pyOGBqYR6-Q',
  '04': 'koC48i9muxM',
  '05': 'BiOqUpHB31c',
  '06': 'd8cTeM-lWb0',
  '07': 'rxFYRi1KI90',
  '08': 'nR0dUOVF0gg',
  '09': 'tj1TwfLxv8Q',
  '10': 'gQV3NhO233c',
  '11': 'LCKr6z8XKlM',
  '12': 'i37A06-5rE4',
  '13': 'oz2gsuD_l0c',
  '14': 'hYBRTDjaiHo',
};

export const LMS_CONTENT = {
  heroTitle: 'LoanSuite for Odoo',
  heroParagraph: 'LoanSuite is a fully integrated loan management solution built natively on Odoo, supporting both Community and Enterprise editions. Manage every stage of the lending process from online loan applications and KYC verification to multi-level approvals and disbursement all within a single, unified platform.',
  introTitle: 'LoanSuite',
  introDescription: "Seamlessly connected with Odoo's standard accounting engine, LoanSuite automates journal entries, tracks repayments, and delivers real-time financial reports without any third-party dependency. Whether you're a microfinance firm, cooperative, NBFC, or bank, LoanSuite gives you the transparency and control you need to scale your lending operations confidently.",
  requestDemoLabel: 'Request Demo',
  buyLabel: 'Buy',
  showcaseTitle: 'LMS: From Application to Closure, Everything Connected',
  ctaTitle: "Let's Transform Your Lending Experience",
  ctaSubtitle: 'Streamline your loan operations, ensure compliance, and deliver a seamless borrower experience with our all-in-one Loan Management ERP.',
  ctaButton: 'Get in touch with us today to schedule a demo or consultation',
};

export const LMS_FEATURES = [
  { title: 'Online loan application', desc: 'Customer-facing portal with form submission and document upload', icon: 'application' },
  { title: 'Multi-stage approvals', desc: 'Configurable approval levels with role-based access', icon: 'approval' },
  { title: 'Integrated accounting & reports', desc: 'Standard Odoo GL, journals, and financial dashboards', icon: 'accounting' },
  { title: 'KYC verification', desc: 'Built-in identity and document collection workflow', icon: 'kyc' },
  { title: 'Disbursement & repayment', desc: 'Automated payment scheduling and tracking', icon: 'payment' },
  { title: 'Interest and Penalty on Due', desc: 'Separate invoice calculate penalty fixed or variant based config.', icon: 'penalty' },
];

const rawModules = [
  { number: '01', title: 'System Overview & Configuration', desc: 'In this video, we walk through the initial setup of the LMS (Loan Management System). We start by going to Settings → Users & Companies and opening a user record.' },
  { number: '02', title: 'Loan Dashboard', desc: 'In this video, we take a closer look at the Loan Dashboard. We open the Dashboard from the Loans module and walk through each section.' },
  { number: '03', title: 'Loan Products & Properties Setup', desc: 'In this video, we configure the loan accounts and set up loan products. We start by going to Configurations → Settings (Loans tab).' },
  { number: '04', title: 'Create Loan & Installment Schedule', desc: 'In this video, we create a new loan record and compute the installment schedule in LMS.' },
  { number: '05', title: 'Loan Validation & Invoice Generation', desc: 'In this video, we validate a loan and generate all installment invoices. We open a loan in Draft stage that already has installments computed.' },
  { number: '06', title: 'Principal,Interest &Transaction Track', desc: 'Open a validated loan to see smart buttons across the top: Invoices (total generated), Principal Pending, Principal Received, and Interest Pending.' },
  { number: '07', title: 'Payments, Postponement & Penalty', desc: 'On a validated loan with invoices generated, click Extra Payment.' },
  { number: '08', title: 'Loan Summary & Automate Schedule', desc: 'Open a validated loan → More → Loan Summary. The report shows customer details, loan terms, interest rate, release date, plus a full amortization table for every installment.' },
  { number: '09', title: 'Cancel & Close Loan', desc: 'In this video, we cancel and close loans. We open a validated loan that has invoices generated.' },
  { number: '10', title: 'Accounting Effects & Reporting', desc: 'Under Journal Entries, we see all loan activity: EMI invoices, bank payments, and disbursement entries.' },
  { number: '11', title: 'Customer Portal & Loan Application', desc: 'In Settings → Website, Customer Account is set to Free Sign Up. The Our Loans page lists all loan types: Business, Gold, Home, Personal, Property, and Vehicle.' },
  { number: '12', title: 'Approval Workflow & Attestation', desc: 'The Loan Process project board tracks stages: EKYC, Submit Docs, To Approve Loan, Schedule Attestation, Esignature, Loan Disbursement, and Terminated each with application cards.' },
  { number: '13', title: 'Agreement, Disbursement&Loan Active', desc: 'Backend verifies it, sends the stamped copy, moves to Disbursement, clicks Disbursement Done. Loan goes Validated with full details and an Installments tab.' },
  { number: '14', title: 'Mobile Loan Management', desc: 'Experience the power of lending on the go. The LMS Mobile App enables customers to view active loans, monitor installments, access repayment details, and manage their loan journey anytime, anywhere through an intuitive mobile interface.' },
];

export const LMS_MODULES = rawModules.map((module) => ({
  ...module,
  videoId: LMS_VIDEOS[module.number] || '',
}));

export const LMS_PAGE = {
  ...LMS_CONTENT,
  mainVideoId: '',
  modules: LMS_MODULES,
};
