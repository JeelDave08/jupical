export const LMS_VIDEOS = {
  '1': 'hevu7x_5Ars',
  '2': 'FyZF-UrnUw4',
  '3': 'koC48i9muxM',
  '4': 'pyOGBqYR6-Q',
  '5': 'd8cTeM-lWb0',
  '6': 'BiOqUpHB31c',
  '7': 'rxFYRi1KI90',
  '8': 'nR0dUOVF0gg',
  '9': 'tj1TwfLxv8Q',
  '10': 'gQV3NhO233c',
  '11': 'LCKr6z8XKlM',
  '12': 'i37A06-5rE4',
  '13': 'oz2gsuD_l0c',
  '14': 'hYBRTDjaiHo',
};

export const LMS_CONTENT = {
  heroTitle: 'LoanSuite for Odoo',
  heroParagraph: 'One platform. Every loan. Zero gaps. Brings your entire loan operation under one roof, from borrower application to final repayment entry, with native Odoo accounting at its core.',
  introTitle: 'Loan Suite',
  introParagraphs: [
    'LoanSuite is a fully integrated loan management solution built natively on Odoo, supporting both Community and Enterprise editions. Manage every stage of the lending process, from online loan applications and KYC verification to multi-level approvals and disbursement, all within a single, unified platform.',
    "Seamlessly connected with Odoo's standard accounting engine, LoanSuite automates journal entries, tracks repayments, and delivers real-time financial reports without any third-party dependency. Whether you're a microfinance firm, cooperative, NBFC, or bank, LoanSuite gives you the transparency and control you need to scale your lending operations confidently.",
  ],
  buyLabel: 'Buy Now',
  requestDemoLabel: 'Request Demo',
  buyHref: '/contact-us',
  showcaseTitle: 'LMS: From Application to Closure, Everything Connected',
  showcaseSubtitle: 'Explore the complete loan lifecycle, from application and approvals through repayment and reporting.',
  ctaTitle: "Let's Transform Your Lending Experience",
  ctaSubtitle: 'Streamline your loan operations, ensure compliance, and deliver a seamless borrower experience with our all-in-one Loan Management ERP.',
  ctaButton: 'Get in touch with us today to schedule a demo or consultation',
};

export const LMS_FEATURES = [
  { title: 'Online loan application', desc: 'Customer-facing portal with form submission and document upload.', icon: 'application' },
  { title: 'KYC verification', desc: 'Built-in identity and document verification workflow.', icon: 'kyc' },
  { title: 'Multi-stage approvals', desc: 'Configurable approval levels with role-based access.', icon: 'approval' },
  { title: 'Disbursement & repayment', desc: 'Automated payment scheduling and tracking.', icon: 'payment' },
  { title: 'Integrated accounting & reports', desc: 'Standard Odoo GL, journals, and financial analytics.', icon: 'accounting' },
  { title: 'Interest and Penalty on Due', desc: 'Separate invoices calculate penalties using fixed or variable rates.', icon: 'penalty' },
];

const rawModules = [
  { title: 'System Overview & Configuration', icon: 'loan-system', desc: 'Set up users, companies, Loan App access rights, and the Loans app dashboard before starting lending operations.' },
  { title: 'Loan Dashboard', icon: 'loan-dashboard', desc: 'Monitor Draft, Running, and Cancelled loans, total loan amounts, invoices, interest paid, and portfolio performance.' },
  { title: 'Loan Products & Properties Setup', icon: 'loan-products', desc: 'Configure loan accounts and products, including write-off, invoice, down payment, income, journal, and disbursement settings.' },
  { title: 'Create Loan & Installment Schedule', icon: 'loan-create', desc: 'Create a loan from its customer, amount, interest rate, term, and payment mode, then calculate the installment schedule.' },
  { title: 'Loan Validation & Invoice Generation', icon: 'loan-validation', desc: 'Validate a loan, generate installment invoices, and follow principal, interest, and fees from Draft onward.' },
  { title: 'Principal, Interest & Transaction Track', icon: 'loan-interest', desc: 'Track invoices, principal and interest due, transactions, penalties, and installment details for a validated loan.' },
  { title: 'Payments, Postponement & Penalty', icon: 'loan-payments', desc: 'Register payments, postpone installments, apply penalties, and review every change in the loan history.' },
  { title: 'Loan Summary & Automate Schedule', icon: 'loan-summary', desc: 'Review customer and loan terms alongside the complete repayment schedule and the automated actions that maintain it.' },
  { title: 'Cancel & Close Loan', icon: 'loan-close', desc: 'Cancel a validated loan, handle related invoices and write-offs, and follow its status through closure.' },
  { title: 'Accounting Effects & Reporting', icon: 'loan-accounting', desc: 'Review journal entries from loan invoices, payments, and disbursements, plus the financial reports they support.' },
  { title: 'Customer Portal & Loan Application', icon: 'loan-portal', desc: 'Let customers apply through the website, upload documents, and track their loan application in the portal.' },
  { title: 'Approval Workflow & Attestation', icon: 'loan-approval', desc: 'Follow KYC, attestation, and multi-stage approval steps until an application is approved or terminated.' },
  { title: 'Agreement, Disbursement & Loan Activation', icon: 'loan-agreement', desc: 'Verify and stamp agreements, complete disbursement, activate the loan, and show its repayment schedule in the portal.' },
  { title: 'Mobile Loan Management', icon: 'loan-mobile', desc: 'View active loans, monitor installments, and manage loan details on the go with the LMS mobile app.' },
];

export const lmsModules = rawModules.map((module, index) => {
  const number = index + 1;
  return { ...module, number, videoId: LMS_VIDEOS[number] || '' };
});

export const LMS_MODULES = lmsModules;
export const LMS_PAGE = {
  ...LMS_CONTENT,
  mainVideoId: '',
  modules: lmsModules,
};
