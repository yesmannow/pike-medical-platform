import Image from "next/image";
import Link from "next/link";
import { CrossPromo } from "@/components/shared/CrossPromo";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/config/images";
import { SITE_CONTENT } from "@/config/site-content";

const site = SITE_CONTENT.sites.urgentCare;

export const metadata = {
  title: site.name,
  description:
    "Walk in or reserve a time online. Fast visits, transparent pricing, extended evening hours.",
};

export default function UrgentCareHomePage() {
  return (
    <main id="main-content" className="min-h-screen bg-background pb-20 pt-24">
      {/* Hero */}
      <section className="relative border-b-2 border-border">
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
            Walk in or reserve a time online. Fast visits, transparent pricing, and extended evening hours.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-none uppercase tracking-wider">
              <Link href="/urgent-care/save-spot">{site.cta}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-none uppercase tracking-wider">
              <Link href="#visit">Address & directions</Link>
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

      {/* Wait times teaser */}
      <section className="border-t-2 border-border bg-muted/30 px-6 py-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-2 text-lg font-bold uppercase tracking-wide text-foreground">
            Current Wait Times
          </h2>
          <p className="text-muted-foreground">
            Live wait times are displayed at each location. Save your spot online for a faster visit.
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
