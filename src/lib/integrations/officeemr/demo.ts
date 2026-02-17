/**
 * Deterministic demo fixtures for OfficeEMR (iSalus).
 * All content lives here; no database. PHI is masked for UI display.
 */

import type {
  PatientSummary,
  AppointmentSummary,
  ClinicalSummary,
  LabResultSummary,
  BillingSummary,
} from "./types";

export const demoPatientSummary: PatientSummary = {
  name: "J*** D***",
  dob: "****-**-**",
  mrnMasked: "***-**-1234",
  emailMasked: "j***@***.com",
};

export const demoAppointments: AppointmentSummary[] = [
  {
    date: "2026-01-15",
    time: "10:00 AM",
    location: "7911 N. Michigan Rd., Indianapolis",
    provider: "Dr. James Pike",
    status: "Completed",
    reason: "Annual wellness visit",
  },
  {
    date: "2026-02-10",
    time: "2:30 PM",
    location: "7911 N. Michigan Rd., Indianapolis",
    provider: "Chase Keirn",
    status: "Completed",
    reason: "Follow-up",
  },
  {
    date: "2026-03-05",
    time: "9:00 AM",
    location: "7911 N. Michigan Rd., Indianapolis",
    provider: "Dr. James Pike",
    status: "Scheduled",
    reason: "Annual exam",
  },
  {
    date: "2026-04-12",
    time: "11:15 AM",
    location: "7911 N. Michigan Rd., Indianapolis",
    provider: "Karina White",
    status: "Scheduled",
    reason: "Chronic care check",
  },
];

export const demoClinicalSummary: ClinicalSummary = {
  visitDate: "2026-02-10",
  complaint: "Follow-up for blood pressure management.",
  dischargeInstructionsPlaceholder: "View full instructions in patient portal.",
};

export const demoLabResults: LabResultSummary[] = [
  {
    testName: "CBC",
    date: "2026-01-15",
    status: "Final",
    valueDisplay: "See report",
    referenceRange: "See reference ranges in report",
  },
  {
    testName: "Basic Metabolic Panel",
    date: "2026-01-15",
    status: "Final",
    valueDisplay: "See report",
    referenceRange: "See reference ranges in report",
  },
  {
    testName: "HbA1c",
    date: "2026-02-01",
    status: "Final",
    valueDisplay: "5.6%",
    referenceRange: "4.0–5.6%",
  },
];

export const demoBillingSummary: BillingSummary = {
  balance: 45.0,
  lastStatementDate: "2026-02-01",
  paymentLinkPlaceholder: "Pay in patient portal",
};
