'use client'

import { useMemo, useState } from "react";
import {
  AlertTriangle,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Zap,
} from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  TRIAGE_CATEGORIES,
  getSymptomById,
  getSymptomsByCategory,
  type TriageCategory,
  type TriageRoute,
} from "@/config/triage-logic";
import {
  INSURANCE_PROVIDERS,
  SELF_PAY_PRICING,
  type InsuranceProvider,
} from "@/config/insurance-data";
import { SITE_CONTENT } from "@/config/site-content";

const steps = [
  "Category",
  "Symptom",
  "Routing",
  "Payment",
  "Quote",
] as const;

type PaymentType = "insurance" | "self-pay" | null;

type SymptomCheckerProps = {
  currentTenant: TriageRoute;
};

export default function SymptomChecker({
  currentTenant,
}: Readonly<SymptomCheckerProps>) {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState<TriageCategory | null>(null);
  const [symptomId, setSymptomId] = useState<string | null>(null);
  const [paymentType, setPaymentType] = useState<PaymentType>(null);
  const [provider, setProvider] = useState<InsuranceProvider | null>(null);
  const [coverageRequested, setCoverageRequested] = useState(false);

  const symptom = useMemo(() => getSymptomById(symptomId), [symptomId]);
  const isEmergency = symptom?.severity === "EMERGENCY";
  const route = symptom?.route ?? currentTenant;

  const pricing = SELF_PAY_PRICING.find((item) => item.level === symptom?.severity);
  const showMedicaidWarning =
    provider?.id === "medicaid" && route === "primary-care";

  const fontFamily =
    route === "primary-care"
      ? "Charter, Georgia, serif"
      : "Inter, system-ui, sans-serif";

  const resetFlow = () => {
    setStep(1);
    setCategory(null);
    setSymptomId(null);
    setPaymentType(null);
    setProvider(null);
    setCoverageRequested(false);
  };

  const goToStep = (next: number) => setStep(next);

  const handleCategory = (nextCategory: TriageCategory) => {
    setCategory(nextCategory);
    setSymptomId(null);
    goToStep(2);
  };

  const handleSymptom = (id: string) => {
    setSymptomId(id);
    goToStep(3);
  };

  const handlePayment = (nextPayment: PaymentType) => {
    setPaymentType(nextPayment);
    goToStep(5);
  };

  const bookingParams = new URLSearchParams({
    symptom: symptom?.label ?? "",
    level: symptom?.severity ? String(symptom.severity) : "",
    route,
    payment: paymentType ?? "",
    provider: provider?.name ?? "",
  });

  const bookingPath = `/${route}/book?${bookingParams.toString()}`;

  return (
    <section
      className="border-2 border-border bg-background px-6 py-8"
      style={{ fontFamily }}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground">
            Smart Triage Engine
          </p>
          <h2 className="text-2xl font-black uppercase tracking-tight text-foreground">
            Symptom Checker
          </h2>
        </div>
        <button
          type="button"
          className="border-2 border-border px-3 py-2 text-[10px] font-black uppercase tracking-[0.3em]"
          onClick={resetFlow}
        >
          Reset
        </button>
      </div>

      <div className="mt-6 grid gap-2 text-[10px] font-black uppercase tracking-[0.28em] text-muted-foreground md:grid-cols-5">
        {steps.map((label, index) => (
          <div
            key={label}
            className={`border-2 border-border px-3 py-2 text-center ${
              step === index + 1 ? "bg-primary text-primary-foreground" : "bg-background"
            }`}
          >
            {label}
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-6">
        {step === 1 && (
          <div className="grid gap-4 md:grid-cols-2">
            <button
              type="button"
              className="flex min-h-24 items-center gap-4 border-2 border-border bg-background px-4 text-left"
              onClick={() => handleCategory("illness")}
            >
              <Stethoscope className="h-10 w-10 text-primary" />
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-muted-foreground">
                  Step 1
                </p>
                <p className="text-lg font-black uppercase">{TRIAGE_CATEGORIES.illness}</p>
              </div>
            </button>
            <button
              type="button"
              className="flex min-h-24 items-center gap-4 border-2 border-border bg-background px-4 text-left"
              onClick={() => handleCategory("injury")}
            >
              <Zap className="h-10 w-10 text-primary" />
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-muted-foreground">
                  Step 1
                </p>
                <p className="text-lg font-black uppercase">{TRIAGE_CATEGORIES.injury}</p>
              </div>
            </button>
          </div>
        )}

        {step === 2 && category && (
          <div className="space-y-4">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-muted-foreground">
              Select a symptom
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              {getSymptomsByCategory(category).map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleSymptom(option.id)}
                  className="flex min-h-18 items-center justify-between border-2 border-border px-4 text-left"
                >
                  <span className="text-sm font-semibold text-foreground">
                    {option.label}
                  </span>
                  <span className="text-xs font-black uppercase tracking-[0.28em] text-muted-foreground">
                    Level {option.severity}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && symptom && (
          <div className="space-y-4">
            {isEmergency && (
              <div className="border-2 border-red-700 bg-red-600 px-6 py-6 text-white">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-10 w-10" />
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.28em]">
                      Emergency Alert
                    </p>
                    <h3 className="text-2xl font-black uppercase">Call 911 Now</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm font-semibold">
                  Emergency symptoms detected. Do not wait for online care.
                </p>
                <a
                  className="mt-6 inline-flex h-12 items-center border-2 border-white bg-white px-6 text-xs font-black uppercase tracking-[0.3em] text-red-700"
                  href="tel:911"
                >
                  Call 911
                </a>
              </div>
            )}

            {!isEmergency && (
              <div className="border-2 border-border bg-background px-6 py-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.28em] text-muted-foreground">
                      Clinical Routing
                    </p>
                    <h3 className="text-xl font-black uppercase text-foreground">
                      {route === "urgent-care" ? "Urgent Care" : "Primary Care"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {route === "urgent-care"
                        ? "Recommended for same-day evaluation."
                        : "Recommended for wellness or follow-up care."}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.28em] text-foreground">
                    {route === "urgent-care" ? "Save My Spot" : "Wellness Exam"}
                  </div>
                </div>
                <button
                  type="button"
                  className="mt-6 h-12 border-2 border-border px-6 text-xs font-black uppercase tracking-[0.3em]"
                  onClick={() => goToStep(4)}
                >
                  Continue to Payment
                </button>
              </div>
            )}
          </div>
        )}

        {step === 4 && (
          <div className="grid gap-4 md:grid-cols-2">
            <button
              type="button"
              className="flex min-h-24 items-center gap-4 border-2 border-border bg-background px-4 text-left"
              onClick={() => handlePayment("insurance")}
            >
              <ShieldCheck className="h-10 w-10 text-primary" />
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-muted-foreground">
                  Step 4
                </p>
                <p className="text-lg font-black uppercase">I have Insurance</p>
              </div>
            </button>
            <button
              type="button"
              className="flex min-h-24 items-center gap-4 border-2 border-border bg-background px-4 text-left"
              onClick={() => handlePayment("self-pay")}
            >
              <HeartPulse className="h-10 w-10 text-primary" />
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-muted-foreground">
                  Step 4
                </p>
                <p className="text-lg font-black uppercase">Self-Pay / No Insurance</p>
              </div>
            </button>
          </div>
        )}

        {step === 5 && paymentType === "insurance" && (
          <div className="space-y-4">
            <Command className="border-2 border-border bg-background">
              <CommandInput placeholder="Search insurance provider" />
              <CommandList>
                <CommandEmpty>No provider found.</CommandEmpty>
                <CommandGroup heading="Providers">
                  {INSURANCE_PROVIDERS.map((item) => (
                    <CommandItem
                      key={item.id}
                      onSelect={() => {
                        setProvider(item);
                        setCoverageRequested(false);
                      }}
                    >
                      {item.name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>

            {!coverageRequested && (
              <button
                type="button"
                className="border-2 border-border px-4 py-3 text-xs font-black uppercase tracking-[0.28em]"
                onClick={() => setCoverageRequested(true)}
              >
                Confirm My Coverage
              </button>
            )}

            {provider && (
              <div className="border-2 border-border bg-background px-4 py-4">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-muted-foreground">
                  Selected Provider
                </p>
                <p className="text-lg font-black uppercase text-foreground">
                  {provider.name}
                </p>
              </div>
            )}

            {showMedicaidWarning && (
              <div className="border-2 border-red-700 bg-red-600 px-6 py-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="h-10 w-10" strokeWidth={2.5} />
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.28em]">
                      Coverage Information
                    </p>
                    <h3 className="text-xl font-black uppercase">
                      Medicaid Not Accepted
                    </h3>
                  </div>
                </div>
                <p className="text-sm font-semibold mb-4">
                  We cannot accept Medicaid for Primary Care services. However,{' '}
                  <strong>Urgent Care Indy</strong> (our partner clinic) may accept your plan for acute needs.
                </p>
                <a
                  href="/urgent-care"
                  className="inline-flex h-12 items-center border-2 border-white bg-white px-6 text-xs font-black uppercase tracking-[0.3em] text-red-700 hover:bg-gray-100 transition-all"
                >
                  Go to Urgent Care Indy
                </a>
              </div>
            )}

            {coverageRequested && (
              <form className="border-2 border-border bg-background px-4 py-4">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-muted-foreground">
                  Coverage Request
                </p>
                <div className="mt-3 flex flex-col gap-3">
                  <input
                    className="h-12 px-3 text-sm"
                    placeholder="Full name"
                    required
                  />
                  <input
                    className="h-12 px-3 text-sm"
                    placeholder="Email"
                    type="email"
                    required
                  />
                  <input
                    className="h-12 px-3 text-sm"
                    placeholder="Provider name"
                    required
                  />
                  <button
                    type="submit"
                    className="h-12 border-2 border-border text-xs font-black uppercase tracking-[0.28em]"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            )}

            <a
              className="inline-flex h-12 items-center border-2 border-border px-6 text-xs font-black uppercase tracking-[0.3em]"
              href={bookingPath}
            >
              Continue to Booking
            </a>
          </div>
        )}

        {step === 5 && paymentType === "self-pay" && (
          <div className="space-y-4">
            <div className="border-2 border-border bg-background px-6 py-6">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-muted-foreground">
                Self-Pay Quote
              </p>
              <div className="mt-2 text-3xl font-black uppercase text-foreground">
                {pricing ? `$${pricing.price} Level ${pricing.level}` : "Quote"}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Transparent pricing for your selected symptom severity.
              </p>
            </div>
            <a
              className="inline-flex h-12 items-center border-2 border-border px-6 text-xs font-black uppercase tracking-[0.3em]"
              href={bookingPath}
            >
              Continue to Booking
            </a>
          </div>
        )}

        <footer className="border-t-2 border-border pt-4 text-xs text-muted-foreground">
          {SITE_CONTENT.triageDisclaimer}
        </footer>
      </div>
    </section>
  );
}
