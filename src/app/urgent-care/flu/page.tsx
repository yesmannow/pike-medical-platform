import Link from "next/link";
import { CrossPromo } from "@/components/shared/CrossPromo";
import { Button } from "@/components/ui/button";
import { SITE_CONTENT } from "@/config/site-content";

const site = SITE_CONTENT.sites.urgentCare;
const { contact } = SITE_CONTENT;

export const metadata = {
  title: `Flu Shots & 2025-26 Flu FAQ | ${site.name}`,
  description:
    "Seasonal flu shots at UrgentCare Indy. Walk in during clinic hours or save your spot. Northwest Indianapolis.",
};

/**
 * Flu shots and seasonal flu FAQ. Content from urgentcareindy.com.
 */
export default function UrgentCareFluPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background pb-20 pt-24">
      <section className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          {site.name}
        </h1>
        <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
          Flu Shots — 2025-26 Season
        </h2>
        <p className="mb-6 text-lg text-muted-foreground">
          Our clinic is now offering updated flu vaccines for the fall and winter season. We recommend getting your shot as soon as possible for maximum preventive benefits this year.
        </p>
        <p className="mb-6 text-muted-foreground">
          Walk in during regular clinic hours ({contact.hours}) or save your spot online for a faster visit. If you already have an appointment scheduled with PrimaryCare Indy, you can ask about adding a flu shot when you come in.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="rounded-none uppercase tracking-wider">
            <Link href="/urgent-care/save-spot">{site.cta}</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-none uppercase tracking-wider">
            <Link href={`tel:${contact.phone.replace(/\D/g, "")}`}>
              Call {contact.phoneLabel}
            </Link>
          </Button>
        </div>
      </section>
      <section className="border-t-2 border-border px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <CrossPromo currentTenant="urgent-care" />
        </div>
      </section>
    </main>
  );
}
