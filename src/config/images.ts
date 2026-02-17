/**
 * Central image paths for the site. Place files under public/images as indicated.
 * Use URL-encoded paths for filenames with spaces (e.g. "wellness exam.jpg").
 */
export const IMAGES = {
  corporate: {
    branding: {
      pmcFullSuite: "/images/corporate/branding/pmc-fullsuite-large-469x127.jpg",
    },
  },
  primaryCare: {
    branding: {
      pciLogo: "/images/primary-care/branding/pci-logo-retina.png",
    },
    hero: {
      cdc: "/images/primary-care/hero-images/cdc-ioZc-2TpcjY-unsplash.jpg",
      cancerInstitute: "/images/primary-care/hero-images/national-cancer-institute-NSBxHRFCvzc-unsplash.jpg",
      stethoscope: "/images/primary-care/hero-images/parentingupstream-stethoscope-840125_1280.jpg",
      doctor: "/images/primary-care/hero-images/tamimt9b-doctor-9964865_1280.jpg",
      consultation: "/images/primary-care/hero-images/towfiqu-barbhuiya-UXAPylyDWlw-unsplash.jpg",
      wellnessExam: "/images/primary-care/hero-images/wellness%20exam.jpg",
    },
    providers: {
      chaseKeirn: "/images/primary-care/providers/chase-keirn.webp",
      jamesPike: "/images/primary-care/providers/james-pike.jpg",
      karinaWhite: "/images/primary-care/providers/karina-white.webp",
      maddieKlinger: "/images/primary-care/providers/maddie-klinger.webp",
    },
    services: {
      bloodPressure: "/images/primary-care/services/blood%20pressure.jpg",
      doctorConsultation: "/images/primary-care/services/doctor-consultation.jpg",
      pulmonaryClinic: "/images/primary-care/services/pulmonary-clinic.jpg",
      wellnessExam: "/images/primary-care/services/wellness%20exam.jpg",
      wellnessExam2: "/images/primary-care/services/wellness%20exam2.jpg",
    },
  },
  urgentCare: {
    branding: {
      uciLogo: "/images/urgent-care/branding/uci-logo-transparent-300x67.png",
    },
    hero: {
      adobeStock: "/images/urgent-care/hero-images/AdobeStock_183626290-scaled.jpg",
      faqBg: "/images/urgent-care/hero-images/faq-bg-2-min-300x137.jpg",
      drPikeXray: "/images/urgent-care/hero-images/PMC-Dr.-Pike-Xray-1024x683-1.jpg",
      whatWeTreat: "/images/urgent-care/hero-images/uci-whatwetreat-Slider.png",
    },
    occHealth: {
      dotTruck: "/images/urgent-care/occ-health/dot-truck.jpg",
      drugTestingKit: "/images/urgent-care/occ-health/drug%20testing%20kit.jpg",
      occupationalHealth: "/images/urgent-care/occ-health/occupational%20health.jpg",
    },
    services: {
      stethoscope: "/images/urgent-care/services/parentingupstream-stethoscope-840125_1280.jpg",
      rapidLabTest: "/images/urgent-care/services/rapid%20lab%20test.jpg",
      doctor: "/images/urgent-care/services/tamimt9b-doctor-9964865_1280.jpg",
      xray: "/images/urgent-care/services/xray.jpg",
    },
    triage: {
      cdc: "/images/urgent-care/triage/cdc-ioZc-2TpcjY-unsplash.jpg",
      cancerInstitute: "/images/urgent-care/triage/national-cancer-institute-NSBxHRFCvzc-unsplash.jpg",
      thermometer1: "/images/urgent-care/triage/thermometer1.jpg",
      thermometer2: "/images/urgent-care/triage/thermometer2.jpg",
      consultation: "/images/urgent-care/triage/towfiqu-barbhuiya-UXAPylyDWlw-unsplash.jpg",
    },
  },
} as const;
