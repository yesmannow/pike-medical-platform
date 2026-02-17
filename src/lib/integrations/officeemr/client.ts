/**
 * OfficeEMR (iSalus) client. Single entry for UI components.
 * In DEMO_MODE returns fixtures from demo.ts; later wire to SMART on FHIR.
 */

import { DEMO_MODE } from "@/config/runtime";
import type {
  PatientSummary,
  AppointmentSummary,
  ClinicalSummary,
  LabResultSummary,
  BillingSummary,
} from "./types";
import {
  demoPatientSummary,
  demoAppointments,
  demoClinicalSummary,
  demoLabResults,
  demoBillingSummary,
} from "./demo";

// TODO: SMART on FHIR — replace with FHIR client when DEMO_MODE is false.
// TODO: Accept tenant/patient context (e.g. patientId) for live API calls.

export function getPatientSummary(): PatientSummary {
  if (DEMO_MODE) {
    return demoPatientSummary;
  }
  // TODO: SMART on FHIR — GET Patient, mask PHI before returning.
  return demoPatientSummary;
}

export function getAppointments(): AppointmentSummary[] {
  if (DEMO_MODE) {
    return demoAppointments;
  }
  // TODO: SMART on FHIR — GET Appointment for patient.
  return demoAppointments;
}

export function getClinicalSummary(): ClinicalSummary {
  if (DEMO_MODE) {
    return demoClinicalSummary;
  }
  // TODO: SMART on FHIR — GET Encounter/Clinical summary.
  return demoClinicalSummary;
}

export function getLabs(): LabResultSummary[] {
  if (DEMO_MODE) {
    return demoLabResults;
  }
  // TODO: SMART on FHIR — GET DiagnosticReport/Observation for labs.
  return demoLabResults;
}

export function getBilling(): BillingSummary {
  if (DEMO_MODE) {
    return demoBillingSummary;
  }
  // TODO: SMART on FHIR or billing API — GET account balance and statement.
  return demoBillingSummary;
}
