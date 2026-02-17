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
  selfPayLevels: [
    {
      level: 1,
      label: "Quick consult",
      description: "Minor symptoms, brief visit, no diagnostics.",
    },
    {
      level: 2,
      label: "Standard visit",
      description: "Typical walk-in care with basic evaluation.",
    },
    {
      level: 3,
      label: "Extended visit",
      description: "Longer evaluation or multiple concerns.",
    },
    {
      level: 4,
      label: "Advanced care",
      description: "Complex evaluation or imaging/labs likely needed.",
    },
  ],
  triageDisclaimer: "For informational purposes only. Consult a professional.",
  contact: {
    phone: "317-555-0100",
    phoneLabel: "(317) 555-0100",
    address: {
      line1: "7911 N. Michigan Rd.",
      city: "Indianapolis",
      state: "IN",
      zip: "46268",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=7911+N+Michigan+Rd+Indianapolis+IN+46268",
    },
  },
  primaryCareProviders: [
    { name: "Dr. James Pike", role: "Medical Director", imageKey: "jamesPike" as const },
    { name: "Chase Keirn", role: "Family Medicine", imageKey: "chaseKeirn" as const },
    { name: "Karina White", role: "Primary Care", imageKey: "karinaWhite" as const },
    { name: "Maddie Klinger", role: "Primary Care", imageKey: "maddieKlinger" as const },
  ],
} as const;
