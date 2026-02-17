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

import { SITE_CONTENT } from "./site-content";

/** Derived from site-content.selfPayLevels for triage quote step; keep in sync. */
export const SELF_PAY_PRICING = SITE_CONTENT.selfPayLevels.map((tier) => ({
  level: tier.level,
  price: tier.price,
})) as ReadonlyArray<{ level: 1 | 2 | 3 | 4; price: number }>;
