"use client";

import { useState, useTransition, useEffect, useCallback } from "react";
import { processTriage } from "@/app/actions/triage";
import { SITE_CONTENT } from "@/config/site-content";

type TriageResult = {
  status: "emergency" | "success";
  message: string;
};

export default function TriageSearch() {
  const [symptoms, setSymptoms] = useState("");
  const [details, setDetails] = useState("");
  const [result, setResult] = useState<TriageResult | null>(null);
  const [isPending, startTransition] = useTransition();

  const submitTriage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    startTransition(async () => {
      const response = await processTriage({ symptoms, details });
      setResult(response);
    });
  };

  const isEmergency = result?.status === "emergency";

  const dismissEmergency = useCallback(() => setResult(null), []);

  useEffect(() => {
    if (!isEmergency) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismissEmergency();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isEmergency, dismissEmergency]);

  return (
    <section className="border-2 border-border bg-card px-6 py-8 shadow-sm" aria-labelledby="triage-heading">
      <h2 id="triage-heading" className="sr-only">
        Symptom check-in
      </h2>
      <form onSubmit={submitTriage} className="flex flex-col gap-4">
        <label
          className="text-sm font-bold uppercase tracking-[0.22em]"
          htmlFor="triage-symptoms"
        >
          Describe your symptoms
        </label>
        <input
          id="triage-symptoms"
          className="h-14 bg-background px-4 text-lg font-semibold text-foreground placeholder:text-muted-foreground"
          value={symptoms}
          onChange={(event) => setSymptoms(event.target.value)}
          placeholder="E.g. fever, sore throat, sprained ankle"
          required
        />
        <label
          className="text-sm font-bold uppercase tracking-[0.22em] text-foreground"
          htmlFor="triage-details"
        >
          Additional details (optional)
        </label>
        <textarea
          id="triage-details"
          className="min-h-24 bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground"
          value={details}
          onChange={(event) => setDetails(event.target.value)}
          placeholder="Any additional details?"
          aria-describedby="triage-disclaimer"
        />
        <button
          className="h-12 bg-primary text-sm font-bold uppercase tracking-[0.22em] text-primary-foreground"
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Processing" : "Check In"}
        </button>
        {result && (
          <p
            role="status"
            className={`text-sm font-semibold ${result.status === "emergency" ? "text-destructive" : "text-foreground"}`}
          >
            {result.message}
          </p>
        )}
        <p id="triage-disclaimer" className="text-xs text-muted-foreground">
          {SITE_CONTENT.triageDisclaimer}
        </p>
      </form>

      {isEmergency && (
        <div
          role="alertdialog"
          aria-labelledby="emergency-title"
          aria-describedby="emergency-desc"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-red-700/95 px-6 text-white"
        >
          <div className="flex max-w-md flex-col gap-6 border-2 border-white bg-red-600 p-6 text-center shadow-2xl">
            <h2 id="emergency-title" className="text-2xl font-bold uppercase tracking-[0.18em]">
              Emergency Alert
            </h2>
            <p id="emergency-desc" className="text-base font-semibold">
              Call 911 immediately. Do not wait for online triage.
            </p>
            <a
              className="inline-block border-2 border-white bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-red-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600"
              href="tel:911"
            >
              Call 911
            </a>
            <button
              className="text-xs font-bold uppercase tracking-[0.22em] underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600"
              type="button"
              onClick={dismissEmergency}
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
