import Image from "next/image";
import Link from "next/link";
import { CrossPromo } from "@/components/shared/CrossPromo";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/config/images";
import { SITE_CONTENT } from "@/config/site-content";

const site = SITE_CONTENT.sites.primaryCare;

export const metadata = {
  title: site.name,
  description:
    "Primary care built for long-term health: annual exams, chronic care, and coordinated specialist referrals.",
};

export default function PrimaryCareHomePage() {
  return (
    <main id="main-content" className="min-h-screen bg-background pb-20 pt-24">
      {/* Hero */}
      <section className="relative border-b-2 border-border">
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
            {site.tagline}
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Primary care built for long-term health: annual exams, chronic care, and coordinated specialist referrals.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-none uppercase tracking-wider">
              <Link href="/primary-care/book">{site.cta}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-none uppercase tracking-wider">
              <Link href="/primary-care/team">Meet the Team</Link>
            </Button>
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
            <Link
              href="/primary-care/services"
              className="block border-2 border-border bg-card p-4 font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary/5"
            >
              Our Services
            </Link>
          </li>
          <li>
            <Link
              href="/primary-care/team"
              className="block border-2 border-border bg-card p-4 font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary/5"
            >
              Meet the Team
            </Link>
          </li>
          <li>
            <Link
              href="/primary-care/pricing"
              className="block border-2 border-border bg-card p-4 font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary/5"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="#visit"
              className="block border-2 border-border bg-card p-4 font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary/5"
            >
              Address & directions
            </Link>
          </li>
        </ul>
      </section>

      {/* Cross-promo */}
      <section className="border-t-2 border-border px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <CrossPromo currentTenant="primary-care" />
        </div>
      </section>
    </main>
  );
}
