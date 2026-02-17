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
    },
    primaryCare: {
      id: "primary-care",
      name: "PrimaryCare Indy",
      themeClass: "theme-primary",
      primaryColor: "#000000",
      accentColor: "#D97070",
      tagline: "Your partner in long-term health.",
      cta: "Book Appointment",
    },
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
} as const;
