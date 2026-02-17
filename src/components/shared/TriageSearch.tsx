"use client";

import { useState, useTransition } from "react";
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

  return (
    <section className="border-2 border-border bg-card px-6 py-8">
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
        <textarea
          className="min-h-24 bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground"
          value={details}
          onChange={(event) => setDetails(event.target.value)}
          placeholder="Any additional details?"
        />
        <button
          className="h-12 bg-primary text-sm font-bold uppercase tracking-[0.22em] text-primary-foreground"
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Processing" : "Check In"}
        </button>
        {result && (
          <p className="text-sm font-semibold text-foreground">
            {result.message}
          </p>
        )}
        <p className="text-xs text-muted-foreground">
          {SITE_CONTENT.triageDisclaimer}
        </p>
      </form>

      {isEmergency && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-red-700 px-6 text-white">
          <div className="flex max-w-md flex-col gap-6 border-2 border-white bg-red-600 p-6 text-center">
            <h2 className="text-2xl font-bold uppercase tracking-[0.18em]">
              Emergency Alert
            </h2>
            <p className="text-base font-semibold">
              Call 911 immediately. Do not wait for online triage.
            </p>
            <a
              className="border-2 border-white bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-red-700"
              href="tel:911"
            >
              Call 911
            </a>
            <button
              className="text-xs font-bold uppercase tracking-[0.22em]"
              type="button"
              onClick={() => setResult(null)}
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
