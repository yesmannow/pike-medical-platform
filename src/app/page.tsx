import Image from "next/image";
import Link from "next/link";
import { AnimatedCard, AnimatedSection } from "@/components/shared/AnimatedSection";
import { TriageGateway } from "@/components/shared/TriageGateway";
import { IMAGES } from "@/config/images";

export default function Home() {
  return (
    <main id="main-content" className="relative min-h-screen bg-background pb-20 pt-24">
      <TriageGateway />
      {/* Hero — authentic Dr. Pike imagery with Soft Medical gradient overlay */}
      <AnimatedSection as="section" className="relative mx-auto flex max-w-5xl flex-col gap-10 px-6 py-14 md:py-20">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom_right,var(--muted)_0%,transparent_50%)] opacity-40" aria-hidden />
        <div className="absolute right-0 top-0 -z-10 hidden h-full w-1/2 overflow-hidden md:block" aria-hidden>
          <Image
            src={IMAGES.urgentCare.hero.drPikeXray}
            alt=""
            fill
            className="object-cover opacity-20"
            sizes="50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-transparent to-transparent" aria-hidden />
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground">
            Pike Medical Consultants
          </p>
          <h1 className="text-4xl font-black uppercase leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Choose the care path built for your moment.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Immediate injury care and long-term primary care live side-by-side.
            Pike Medical keeps every visit consistent, fast, and transparent.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <AnimatedCard delay={0.1} className="group border-2 border-border bg-card/50 p-6 transition-all duration-200 hover:border-primary hover:bg-primary/5 hover:shadow-md focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
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
              <Link
                href="/urgent-care"
                className="inline-flex w-fit border-2 border-border px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Enter Urgent Care
              </Link>
            </div>
          </AnimatedCard>
          <AnimatedCard delay={0.2} className="group border-2 border-border bg-card/50 p-6 transition-all duration-200 hover:border-primary hover:bg-primary/5 hover:shadow-md focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
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
              <Link
                href="/primary-care"
                className="inline-flex w-fit border-2 border-border px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Enter Primary Care
              </Link>
            </div>
          </AnimatedCard>
        </div>
      </AnimatedSection>
    </main>
  );
}
