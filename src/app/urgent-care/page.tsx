import Image from "next/image";
import Link from "next/link";
import { CrossPromo } from "@/components/shared/CrossPromo";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/config/images";
import { SITE_CONTENT } from "@/config/site-content";

const site = SITE_CONTENT.sites.urgentCare;
const { contact } = SITE_CONTENT;

export const metadata = {
  title: `Urgent Care Indianapolis | Walk-In & Save My Spot | ${site.name}`,
  description:
    "Walk-in urgent care in Northwest Indianapolis. No appointment needed. Mon–Fri 8am–6:30pm, Sat 8am–2:30pm. Minor illness & injury, labs, EKG, sports & DOT physicals. Save your spot online.",
};

export default function UrgentCareHomePage() {
  return (
    <main id="main-content" className="min-h-screen bg-background pb-20 pt-24">
      {/* Hero — min-height reserves space for LCP image (avoids CLS) */}
      <section className="relative min-h-[320px] border-b-2 border-border md:min-h-[380px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.urgentCare.hero.drPikeXray}
            alt="Provider reviewing imaging with team"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-background/85" aria-hidden />
        </div>
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col gap-6 px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            {site.name}
          </p>
          <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">
            {site.tagline}
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            No appointment needed. Walk in or save your spot online. Fast visits, transparent pricing, and extended hours.
          </p>
          <p className="text-sm font-medium text-foreground">
            {contact.hours} · {contact.address.line1}, {contact.address.city} ·{" "}
            <a href={`tel:${contact.phone.replace(/\D/g, "")}`} className="underline-offset-2 hover:underline">
              {contact.phoneLabel}
            </a>
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-none uppercase tracking-wider min-h-[44px]">
              <Link href="/urgent-care/save-spot">{site.cta}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-none uppercase tracking-wider min-h-[44px]">
              <Link href={contact.address.mapsUrl} target="_blank" rel="noopener noreferrer">
                Get directions
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Flu shots CTA (seasonal — from urgentcareindy.com) */}
      <section className="border-t-2 border-border bg-primary/10 px-6 py-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-2 text-lg font-bold uppercase tracking-wide text-foreground">
            Flu Shots — 2025–26 Season
          </h2>
          <p className="mb-4 text-muted-foreground">
            We are now offering updated flu vaccines for the fall and winter season. Walk in during clinic hours or save your spot online.
          </p>
          <Link
            href="/urgent-care/flu"
            className="inline-block border-2 border-primary bg-primary px-4 py-2 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Learn more & get your flu shot
          </Link>
        </div>
      </section>

      {/* Clinic hours — no appointment needed */}
      <section className="border-t-2 border-border bg-muted/30 px-6 py-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-2 text-lg font-bold uppercase tracking-wide text-foreground">
            Clinic Hours — No Appointment Needed
          </h2>
          <p className="text-muted-foreground">
            {contact.hours}. General questions & billing:{" "}
            <a href={`tel:${contact.phone.replace(/\D/g, "")}`} className="font-semibold text-foreground underline-offset-4 hover:underline">
              {contact.phoneLabel}
            </a>
            . Primary care appointments: same number.
          </p>
        </div>
      </section>

      {/* Why choose UrgentCare Indy (value props from urgentcareindy.com) */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="mb-6 text-xl font-bold uppercase tracking-wide text-foreground">
          Why Choose {site.name}
        </h2>
        <ul className="grid gap-6 sm:grid-cols-2">
          <li className="border-2 border-border bg-card p-6">
            <h3 className="font-bold uppercase tracking-wide text-foreground">Avoid Long Wait Times</h3>
            <p className="mt-2 text-muted-foreground">
              For most minor injuries or illnesses, we can save you from the long waits and high costs of the emergency room.
            </p>
          </li>
          <li className="border-2 border-border bg-card p-6">
            <h3 className="font-bold uppercase tracking-wide text-foreground">Pay Your Way & Save</h3>
            <p className="mt-2 text-muted-foreground">
              We accept most insurance, health-share plans (e.g. Medishare, Liberty HealthShare), and convenient self-pay rates.
            </p>
          </li>
          <li className="border-2 border-border bg-card p-6">
            <h3 className="font-bold uppercase tracking-wide text-foreground">See a Provider Today</h3>
            <p className="mt-2 text-muted-foreground">
              Our providers are on site through the week. Walk in to our Northwest Indianapolis clinic and get care now.
            </p>
          </li>
          <li className="border-2 border-border bg-card p-6">
            <h3 className="font-bold uppercase tracking-wide text-foreground">Primary Care Too</h3>
            <p className="mt-2 text-muted-foreground">
              PrimaryCare Indy shares our space. We can help with urgent needs and connect you to long-term care.
            </p>
          </li>
        </ul>
      </section>

      {/* Quick links */}
      <section className="border-t-2 border-border px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-xl font-bold uppercase tracking-wide text-foreground">
            Quick Links
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <li>
              <Link
                href="/urgent-care/services"
                className="block border-2 border-border bg-card p-4 font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary/5"
              >
                What We Treat
              </Link>
            </li>
            <li>
              <Link
                href="/urgent-care/occupational-health"
                className="block border-2 border-border bg-card p-4 font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary/5"
              >
                Occupational Health
              </Link>
            </li>
            <li>
              <Link
                href="/urgent-care/pricing"
                className="block border-2 border-border bg-card p-4 font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary/5"
              >
                Self-Pay Pricing
              </Link>
            </li>
            <li>
              <Link
                href="#visit"
                className="block border-2 border-border bg-card p-4 font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary/5"
              >
                Get Directions
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Wait times */}
      <section className="border-t-2 border-border bg-muted/30 px-6 py-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-2 text-lg font-bold uppercase tracking-wide text-foreground">
            Current Wait Times
          </h2>
          <p className="text-muted-foreground">
            Live wait times are displayed at the clinic. Save your spot online for a faster visit.
          </p>
        </div>
      </section>

      {/* Cross-promo */}
      <section className="border-t-2 border-border px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <CrossPromo currentTenant="urgent-care" />
        </div>
      </section>
    </main>
  );
}
