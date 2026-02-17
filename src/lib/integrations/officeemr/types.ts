/**
 * Minimal UI-safe types for OfficeEMR (iSalus) integration.
 * All PHI-bearing fields are masked in demo/live responses.
 */

export interface PatientSummary {
  name: string;
  dob: string;
  mrnMasked: string;
  emailMasked: string;
}

export interface AppointmentSummary {
  date: string;
  time: string;
  location: string;
  provider: string;
  status: string;
  reason: string;
}

export interface ClinicalSummary {
  visitDate: string;
  complaint: string;
  dischargeInstructionsPlaceholder: string;
}

export interface LabResultSummary {
  testName: string;
  date: string;
  status: string;
  valueDisplay: string;
  referenceRange?: string;
}

export interface BillingSummary {
  balance: number;
  lastStatementDate: string;
  paymentLinkPlaceholder: string;
}
