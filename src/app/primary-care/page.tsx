import Image from "next/image";
import Link from "next/link";
import { CrossPromo } from "@/components/shared/CrossPromo";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/config/images";
import { SITE_CONTENT } from "@/config/site-content";

const site = SITE_CONTENT.sites.primaryCare;
const { contact, primaryCareServices } = SITE_CONTENT;

export const metadata = {
  title: `Primary Care Indianapolis | Annual Exams & Chronic Care | ${site.name}`,
  description:
    "Primary care in Northwest Indianapolis. Annual physicals, chronic care, diabetes & blood pressure management, on-site labs, mental health. Call 317-956-6288 to schedule.",
};

export default function PrimaryCareHomePage() {
  return (
    <main id="main-content" className="min-h-screen bg-background pb-20 pt-24">
      {/* Hero */}
      <section className="relative min-h-[320px] border-b-2 border-border md:min-h-[380px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.primaryCare.hero.doctor}
            alt="Doctor and patient consultation"
            fill
            className="object-cover opacity-25"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-background/90" aria-hidden />
        </div>
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col gap-6 px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            {site.name}
          </p>
          <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Who is looking out for your health?
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Many people go to the doctor only when something is wrong. At {site.name}, our goal is to help you manage your health and stay healthy. If you don’t have a primary care provider, contact us today.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-none uppercase tracking-wider">
              <Link href="/primary-care/book">{site.cta}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-none uppercase tracking-wider">
              <a href={`tel:${contact.phone.replace(/\D/g, "")}`}>Call {contact.phoneLabel}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Flu CTA (from primarycareindy.com) */}
      <section className="border-t-2 border-border bg-primary/10 px-6 py-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-2 text-lg font-bold uppercase tracking-wide text-foreground">
            2025-26 Flu Shots
          </h2>
          <p className="mb-4 text-muted-foreground">
            We are offering seasonal flu shots. Have an appointment? Ask about adding a flu shot. You can also walk in to our urgent care clinic during regular hours.
          </p>
          <Link
            href="/urgent-care/flu"
            className="inline-block border-2 border-primary bg-primary px-4 py-2 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Flu shots at UrgentCare Indy
          </Link>
        </div>
      </section>

      {/* Location & hours */}
      <section className="border-t-2 border-border bg-muted/30 px-6 py-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-2 text-lg font-bold uppercase tracking-wide text-foreground">
            Visit Our Primary Care Clinic in Northwest Indianapolis
          </h2>
          <p className="mb-2 text-muted-foreground">
            Conveniently located near I-465 and I-65 in Pike Township (N. Michigan Rd and 79th St). We’re open {contact.hours}. Call to schedule a time that works for you.
          </p>
          <p className="text-muted-foreground">
            <strong className="text-foreground">${SITE_CONTENT.missedAppointmentFee} fee for missed appointments.</strong> When scheduling, please keep this in mind.
          </p>
        </div>
      </section>

      {/* Experience the best care + services list */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="mb-6 text-xl font-bold uppercase tracking-wide text-foreground">
          Experience the best care, the best way, each day
        </h2>
        <p className="mb-6 text-muted-foreground">
          As a division of {SITE_CONTENT.parentBrand.name}, {site.name} offers a medical team devoted to serving each patient with compassion, devotion, and respect. Our primary care clinic offers:
        </p>
        <ul className="mb-10 grid gap-2 sm:grid-cols-2">
          {primaryCareServices.map((service) => (
            <li key={service} className="border-2 border-border bg-card px-4 py-3 font-semibold text-foreground">
              {service}
            </li>
          ))}
        </ul>
        <p className="mb-6 text-muted-foreground">
          We also share our clinic space with UrgentCare Indy for when you need same-day care outside of office hours.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="rounded-none uppercase tracking-wider">
            <Link href="/primary-care/book">{site.cta}</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-none uppercase tracking-wider">
            <Link href="/primary-care/services">Our Services</Link>
          </Button>
        </div>
      </section>

      {/* When to use primary vs urgent vs ER */}
      <section className="border-t-2 border-border bg-muted/30 px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-xl font-bold uppercase tracking-wide text-foreground">
            When to use primary care, urgent care, or the ER
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="border-2 border-border bg-card p-6">
              <h3 className="font-bold uppercase tracking-wide text-foreground">Primary care</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Routine visits, annual physicals, and managing chronic conditions. Your PCP builds a complete picture of your health over time.
              </p>
            </div>
            <div className="border-2 border-border bg-card p-6">
              <h3 className="font-bold uppercase tracking-wide text-foreground">Urgent care</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Non-emergency issues when your PCP isn’t available: sore throat, minor infections, small cuts, UTIs. Visit UrgentCare Indy.
              </p>
              <Link href="/urgent-care" className="mt-2 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline">
                UrgentCare Indy →
              </Link>
            </div>
            <div className="border-2 border-border bg-card p-6">
              <h3 className="font-bold uppercase tracking-wide text-foreground">Emergency room</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Life-threatening conditions: chest pain, stroke, severe bleeding, difficulty breathing. Call 911 or go to the ER immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="mb-6 text-xl font-bold uppercase tracking-wide text-foreground">
          Quick Links
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <li>
            <Link href="/primary-care/services" className="block border-2 border-border bg-card p-4 font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary/5">
              Our Services
            </Link>
          </li>
          <li>
            <Link href="/primary-care/team" className="block border-2 border-border bg-card p-4 font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary/5">
              Medical Staff
            </Link>
          </li>
          <li>
            <Link href="/primary-care/insurance" className="block border-2 border-border bg-card p-4 font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary/5">
              Insurance & Payments
            </Link>
          </li>
          <li>
            <Link href="#visit" className="block border-2 border-border bg-card p-4 font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary/5">
              Get Directions
            </Link>
          </li>
        </ul>
      </section>

      <section className="border-t-2 border-border px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <CrossPromo currentTenant="primary-care" />
        </div>
      </section>
    </main>
  );
}
