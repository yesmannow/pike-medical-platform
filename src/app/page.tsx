import Image from "next/image";
import { TriageGateway } from "@/components/shared/TriageGateway";

export default function Home() {
  return (
    <main className="min-h-screen bg-background pb-20 pt-24">
      <TriageGateway />
      <section className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-12">
        <div className="flex flex-col gap-6">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground">
            Pike Medical Consultants
          </p>
          <h1 className="text-4xl font-black uppercase tracking-tight text-foreground md:text-5xl">
            Choose the care path built for your moment.
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Immediate injury care and long-term primary care live side-by-side.
            Pike Medical keeps every visit consistent, fast, and transparent.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="border-2 border-border bg-background p-6">
            <div className="flex items-center justify-between">
              <Image
                src="/images/urgent-care/branding/uci-logo-transparent-300x67.png"
                alt="UrgentCare Indy"
                width={300}
                height={67}
              />
            </div>
            <div className="mt-6 flex flex-col gap-4">
              <h2 className="text-2xl font-black uppercase tracking-tight text-foreground">
                Urgent Care
              </h2>
              <p className="text-sm text-muted-foreground">
                Live wait times, rapid injury care, and walk-in access.
              </p>
              <ul className="flex flex-col gap-2 text-sm font-semibold text-foreground">
                <li>Live Wait Times</li>
                <li>Immediate Care</li>
                <li>After-Hours Clinics</li>
              </ul>
              <a
                className="inline-flex border-2 border-border px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-foreground"
                href="/urgent-care"
              >
                Enter Urgent Care
              </a>
            </div>
          </article>
          <article className="border-2 border-border bg-background p-6">
            <div className="flex items-center justify-between">
              <Image
                src="/images/primary-care/branding/pci-logo-retina.png"
                alt="PrimaryCare Indy"
                width={350}
                height={98}
              />
            </div>
            <div className="mt-6 flex flex-col gap-4">
              <h2 className="text-2xl font-black uppercase tracking-tight text-foreground">
                Primary Care
              </h2>
              <p className="text-sm text-muted-foreground">
                Long-term wellness, trusted providers, and preventive care.
              </p>
              <ul className="flex flex-col gap-2 text-sm font-semibold text-foreground">
                <li>Long-term Wellness</li>
                <li>Provider Selection</li>
                <li>Annual Exams</li>
              </ul>
              <a
                className="inline-flex border-2 border-border px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-foreground"
                href="/primary-care"
              >
                Enter Primary Care
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
