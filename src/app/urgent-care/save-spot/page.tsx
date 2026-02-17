import Link from "next/link";
import { BillingTrust } from "@/components/shared/BillingTrust";
import { CrossPromo } from "@/components/shared/CrossPromo";
import TriageSearch from "@/components/shared/TriageSearch";
import { Button } from "@/components/ui/button";
import { SITE_CONTENT } from "@/config/site-content";

const site = SITE_CONTENT.sites.urgentCare;

export const metadata = {
  title: `Save My Spot | ${site.name}`,
  description: "Check in online. Describe your symptoms and reserve your visit.",
};

export default function UrgentCareSaveSpotPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background pb-20 pt-24">
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          {site.name}
        </h1>
        <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
          Save My Spot
        </h2>
        <p className="mb-10 max-w-2xl text-lg text-muted-foreground">
          Describe your symptoms below. We’ll get you on the list. Walk in or reserve a time.
        </p>

        <TriageSearch />

        <div className="mt-8">
          <BillingTrust tenant="urgent-care" showBadge={true} />
        </div>

        <div className="mt-8">
          <Button asChild variant="outline" size="lg" className="rounded-none uppercase tracking-wider">
            <Link href="/urgent-care">Back to {site.name}</Link>
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
