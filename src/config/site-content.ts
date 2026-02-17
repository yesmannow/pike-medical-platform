export type TenantId = "urgent-care" | "primary-care";

export const SITE_CONTENT = {
  sites: {
    urgentCare: {
      id: "urgent-care",
      name: "UrgentCare Indy",
      themeClass: "theme-urgent",
      primaryColor: "#E15252",
      accentColor: "#99D1E1",
      tagline: "See a provider today.",
      cta: "Save My Spot",
      /** Main nav for the urgent care "site" - href is relative to /urgent-care */
      nav: [
        { label: "Home", href: "" },
        { label: "Services", href: "/services" },
        { label: "Occupational Health", href: "/occupational-health" },
        { label: "Pricing", href: "/pricing" },
        { label: "Save My Spot", href: "/save-spot" },
      ],
      crossPromo: {
        title: "Need a primary care provider?",
        body: "PrimaryCare Indy offers annual exams, chronic care, and a team you can trust.",
        cta: "Explore Primary Care",
        href: "/primary-care",
      },
    },
    primaryCare: {
      id: "primary-care",
      name: "PrimaryCare Indy",
      themeClass: "theme-primary",
      primaryColor: "#000000",
      accentColor: "#D97070",
      tagline: "Your partner in long-term health.",
      cta: "Book Appointment",
      /** Main nav for the primary care "site" - href is relative to /primary-care */
      nav: [
        { label: "Home", href: "" },
        { label: "Services", href: "/services" },
        { label: "Team", href: "/team" },
        { label: "Pricing", href: "/pricing" },
        { label: "Insurance", href: "/insurance" },
        { label: "Book", href: "/book" },
      ],
      crossPromo: {
        title: "Need care today?",
        body: "UrgentCare Indy offers walk-in care, same-day visits, and transparent pricing.",
        cta: "Go to Urgent Care",
        href: "/urgent-care",
      },
    },
  },
  parentBrand: {
    name: "Pike Medical Consultants",
    tagline: "Urgent care and primary care under one roof.",
  },
  megaMenu: {
    urgentSolutions: [
      { label: "Minor Illness", href: "/services/minor-illness" },
      { label: "Injury Care", href: "/services/injury" },
      { label: "Triage Tool", href: "/triage" },
    ],
    wellness: [
      { label: "Sports Physicals", href: "/services/sports-physical" },
      { label: "DOT Physicals", href: "/services/dot-physical" },
      { label: "Annual Exams", href: "/services/annual-exams" },
    ],
    employers: [
      { label: "Occupational Health", href: "/employers/occupational-health" },
      { label: "Workplace Injury", href: "/employers/workplace-injury" },
      { label: "B2B Portal", href: "/employers/portal" },
    ],
    patientTools: [
      { label: "Self-Pay Price List", href: "/pricing" },
      { label: "My Medical Locker", href: "/patient/locker" },
    ],
  },
  /** Single source for self-pay tiers; used by PricingGrid and triage quote step. */
  selfPayLevels: [
    {
      level: 1,
      label: "Quick consult",
      description: "Minor symptoms, brief visit, no diagnostics.",
      price: 100,
    },
    {
      level: 2,
      label: "Standard visit",
      description: "Typical walk-in care with basic evaluation.",
      price: 150,
    },
    {
      level: 3,
      label: "Extended visit",
      description: "Longer evaluation or multiple concerns.",
      price: 200,
    },
    {
      level: 4,
      label: "Advanced care",
      description: "Complex evaluation or imaging/labs likely needed.",
      price: 300,
    },
  ],
  triageDisclaimer: "For informational purposes only. Consult a professional.",
  contact: {
    phone: "317-956-6288",
    phoneLabel: "(317) 956-6288",
    /** Display copy for clinic hours (urgentcareindy.com) */
    hours: "Mon–Fri 8am–6:30pm / Sat 8am–2:30pm",
    noAppointmentNeeded: true,
    address: {
      line1: "7911 N. Michigan Rd.",
      city: "Indianapolis",
      state: "IN",
      zip: "46268",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=7911+N+Michigan+Rd+Indianapolis+IN+46268",
    },
  },
  /** Fixed-price services for urgent care (from urgentcareindy.com) */
  urgentCareServicePrices: [
    { label: "Sports Physicals", price: 35 },
    { label: "DOT Physicals", price: 95 },
    { label: "Pre-employment / College Physicals", price: 50 },
  ],
  /** Health share plans accepted (for copy) */
  healthSharePlans: ["Medishare", "Liberty HealthShare"],
  /** Emergency disclaimer for footer/contact */
  emergencyDisclaimer: "If you believe you are experiencing a medical emergency, do not call our office. Call 911 immediately.",
  /** When portal is available, set to full URL; until then Pay Your Bill links to #visit or placeholder */
  payBillUrl: "#visit" as const,
  /** Structured hours for Schema.org (from contact.hours) */
  openingHoursSchema: [
    { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:30" },
    { dayOfWeek: ["Saturday"], opens: "08:00", closes: "14:30" },
  ] as const,
  /** Primary care services (from primarycareindy.com) */
  primaryCareServices: [
    "Blood pressure and cholesterol",
    "Diabetes management",
    "Radiology and on-site labs",
    "Mental health",
    "Immunizations and vaccinations",
    "Acute and preventive care",
  ],
  /** Missed appointment fee in dollars (primarycareindy.com) */
  missedAppointmentFee: 50,
  primaryCareProviders: [
    { name: "Dr. James Pike", role: "Medical Director", imageKey: "jamesPike" as const },
    { name: "Chase Keirn", role: "Family Medicine", imageKey: "chaseKeirn" as const },
    { name: "Karina White", role: "Primary Care", imageKey: "karinaWhite" as const },
    { name: "Maddie Klinger", role: "Primary Care", imageKey: "maddieKlinger" as const },
  ],
} as const;
