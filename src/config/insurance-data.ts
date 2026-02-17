export type InsuranceProvider = {
  id: string;
  name: string;
  acceptedPrimary: boolean;
};

export const INSURANCE_PROVIDERS: InsuranceProvider[] = [
  { id: "anthem", name: "Anthem", acceptedPrimary: true },
  { id: "aarp", name: "AARP", acceptedPrimary: true },
  { id: "aetna", name: "Aetna", acceptedPrimary: true },
  { id: "blue-cross", name: "Blue Cross Blue Shield", acceptedPrimary: true },
  { id: "cigna", name: "Cigna", acceptedPrimary: true },
  { id: "humana", name: "Humana", acceptedPrimary: true },
  { id: "medicare", name: "Medicare", acceptedPrimary: true },
  { id: "tricare", name: "Tricare", acceptedPrimary: true },
  { id: "united", name: "UnitedHealthcare", acceptedPrimary: true },
  { id: "medicaid", name: "Medicaid", acceptedPrimary: false },
];

export const SELF_PAY_PRICING = [
  { level: 1, price: 100 },
  { level: 2, price: 150 },
  { level: 3, price: 200 },
  { level: 4, price: 300 },
] as const;
