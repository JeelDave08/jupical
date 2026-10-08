export const PMS_VIDEOS = {
  "1": "PR3pJeRb2QE",
  "2": "hnTXBGqjwLo",
  "3": "dcOBaFf1O48",
  "4": "zWZhp97anBs",
  "5": "OOHRWyqODmg",
  "6": "EbNZ2H9Ba1I",
  "7": "LUaGmeUOiLA",
  "8": "RxcYaCljPZ4",
};

export const PMS_CONTENT = {
  heroTitle: "Odoo Property Management System for Sales & Rental Management",
  heroParagraph: "Manage property sales, rentals, tenants, owners, and real estate operations with our Odoo-based Property Management System. Compatible with Odoo Community and Enterprise editions and includes mobile-ready web and Android/iOS solutions for managing your business anytime, anywhere.",
  intro: "Designed for property developers, real estate agencies, property management companies, landlords, and rental businesses, our solution helps you efficiently manage property sales, rentals, customer relationships, contracts, payments, and day-to-day operations from a single, centralized platform. Compatible with both Odoo Community and Enterprise editions, the system seamlessly integrates with Odoo's CRM, Sales, Accounting, Documents, Website, and other business applications. The solution is also mobile-ready, enabling your sales teams, property managers, maintenance staff, and business owners to access critical information, manage tasks, and stay connected anytime, anywhere through web and mobile applications.",
  benefits: [
    "Manage property sales and rental operations from a single platform.",
    "Support for residential, commercial, industrial, and mixed-use properties.",
    "Compatible with both Odoo Community and Enterprise editions.",
    "Integrated with Odoo CRM, Sales, Accounting, Documents, and Website.",
    "Automate property bookings, contracts, invoicing, and payment tracking.",
    "Efficiently manage property owners, tenants, brokers, and customers.",
    "Track maintenance requests and property service activities.",
    "Generate real-time dashboards, reports, and business analytics.",
    "Role-based security with configurable approval workflows.",
    "Mobile-ready solution for managing your business anytime, anywhere.",
    "Fully customizable to meet your organization's unique business requirements.",
    "Scalable architecture designed for startups, SMEs, and large enterprises.",
  ],
  benefitsSummary: "Our Property Management System empowers real estate businesses to reduce manual work, improve operational efficiency, increase visibility across property portfolios, and deliver exceptional service to customers, all while leveraging the reliability and flexibility of the Odoo ecosystem.",
  showcaseTitle: "Explore every Property Management module",
  showcaseSubtitle: "Watch how setup and every module work, step by step.",
  mainVideoId: "",
  playerTitle: "See Property Management ERP in Action",
  playerSubtitle: "Watch how setup and every module work, step by step.",
  whyChooseTitle: "Why Choose Our Property ERP?",
  whyChoose: [
    "Suitable for real estate firms, landlords, and property managers",
    "Simplifies tenant communication and rent workflows",
    "Provides real-time occupancy and financial insights",
    "Fully integrated with accounting, CRM, and helpdesk modules",
    "Reduces manual paperwork and improves response times",
  ],
  closingTitle: "Simplify Property Operations with Confidence",
  closingText: "From lease agreements to maintenance requests, manage every aspect of your properties with ease and accuracy.",
  closingButton: "Connect with us now to explore a smarter way to manage real estate",
};

const rawModules = [
  {
    number: 1,
    title: "Dashboard Overview",
    desc: "Get started with the Property Management app launched right from the Odoo home screen alongside your other business apps.",
    icon: "pms-dashboard",
  },
  {
    number: 2,
    title: "Property Portfolio",
    desc: "Manage your entire property portfolio from one screen: buildings, landlords, and addresses at a glance.",
    icon: "pms-portfolio",
  },
  {
    number: 3,
    title: "Lead to Sale: CRM Pipeline",
    desc: "Track every opportunity from first contact to closed deal using Odoo's built-in CRM pipeline, tailored for property sales.",
    icon: "pms-crm-pipeline",
  },
  {
    number: 4,
    title: "Sales Order, Payment Schedule & Invoicing",
    desc: "See how a property sale flows from quotation to sales order to invoicing, with built-in payment schedules.",
    icon: "pms-sales-invoice",
  },
  {
    number: 5,
    title: "Rental Contracts & Recurring Invoicing",
    desc: "Manage rental units and automate recurring tenant invoicing, all from within Odoo.",
    icon: "pms-rental-contract",
  },
  {
    number: 6,
    title: "Finance: Cash Flow & Revenue Reports",
    desc: "Get a clear financial picture of your property business with built-in cash flow and revenue reporting.",
    icon: "pms-cashflow",
  },
  {
    number: 7,
    title: "Advanced Features: EMI Calculator & Recommendations",
    desc: "Explore the advanced tools built into the Property Management app, from financing calculators to AI-powered suggestions.",
    icon: "pms-emi-calculator",
  },
  {
    number: 8,
    title: "Reports & Dashboards",
    desc: "The final video in the series shows how occupancy, revenue, customer, and sales data come together in one reporting dashboard.",
    icon: "pms-reports",
  },
];

export const PMS_MODULES = rawModules.map((module) => ({
  ...module,
  videoId: PMS_VIDEOS[String(module.number)] || "",
}));

export const pmsModules = PMS_MODULES;
