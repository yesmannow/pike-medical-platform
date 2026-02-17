/**
 * Runtime flags. DEMO_MODE disables database/API usage for OfficeEMR.
 * Later: flip via env (e.g. process.env.NEXT_PUBLIC_DEMO_MODE !== "false").
 */

/** true by default; set NEXT_PUBLIC_DEMO_MODE=false to use live APIs. */
export const DEMO_MODE = process.env.NEXT_PUBLIC_DEMO_MODE !== "false";
