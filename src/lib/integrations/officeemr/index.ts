/**
 * OfficeEMR integration — single entry for UI.
 * Import from here: use client functions and types only.
 */

export {
  getPatientSummary,
  getAppointments,
  getClinicalSummary,
  getLabs,
  getBilling,
} from "./client";

export type {
  PatientSummary,
  AppointmentSummary,
  ClinicalSummary,
  LabResultSummary,
  BillingSummary,
} from "./types";
