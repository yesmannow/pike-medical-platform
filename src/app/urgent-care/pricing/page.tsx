import Link from "next/link";
import { CrossPromo } from "@/components/shared/CrossPromo";
import PricingGrid from "@/components/shared/PricingGrid";
import { Button } from "@/components/ui/button";
import { SITE_CONTENT } from "@/config/site-content";

const site = SITE_CONTENT.sites.urgentCare;

export const metadata = {
  title: `Pricing | ${site.name}`,
  description: "Transparent self-pay pricing. Know your cost before you visit.",
};

export default function UrgentCarePricingPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background pb-20 pt-24">
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          {site.name}
        </h1>
        <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
          Self-Pay Pricing
        </h2>
        <p className="mb-10 max-w-2xl text-lg text-muted-foreground">
          Transparent levels. No surprises. Pay at the time of visit.
        </p>

        <PricingGrid />

        <div className="mt-10">
          <Button asChild size="lg" className="rounded-none uppercase tracking-wider">
            <Link href="/urgent-care/save-spot">{site.cta}</Link>
          </Button>
        </div>
      </section>

      <section className="border-t-2 border-border bg-muted/30 px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <CrossPromo currentTenant="urgent-care" />
        </div>
      </section>
    </main>
  );
}
