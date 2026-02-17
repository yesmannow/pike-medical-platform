export const PIKE_SITES = {
  urgent: {
    id: "urgent-care",
    name: "UrgentCare Indy",
    themeClass: "theme-urgent",
    primaryColor: "#E15252", // Coral Red
    accentColor: "#99D1E1", // Sky Blue
    tagline: "See a provider today.",
    cta: "Save My Spot",
  },
  primary: {
    id: "primary-care",
    name: "PrimaryCare Indy",
    themeClass: "theme-primary",
    primaryColor: "#000000", // Ebony Black
    accentColor: "#D97070", // Dusty Rose
    tagline: "Your partner in long-term health.",
    cta: "Book Appointment",
  },
} as const;
