import Link from "next/link";
import { BillingTrust } from "@/components/shared/BillingTrust";
import { CrossPromo } from "@/components/shared/CrossPromo";
import TriageSearch from "@/components/shared/TriageSearch";
import { Button } from "@/components/ui/button";
import { SITE_CONTENT } from "@/config/site-content";

const site = SITE_CONTENT.sites.primaryCare;

export const metadata = {
  title: `Book an Appointment | ${site.name}`,
  description:
    "Schedule your primary care visit. Annual exams, chronic care, follow-ups. Call 317-956-6288 or request online. Northwest Indianapolis.",
};

export default function PrimaryCareBookPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background pb-20 pt-24">
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          {site.name}
        </h1>
        <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
          {site.cta}
        </h2>
        <p className="mb-10 max-w-2xl text-lg text-muted-foreground">
          Tell us what you need—annual exam, follow-up, or new patient visit. We'll respond with available times.
        </p>

        <TriageSearch />

        <div className="mt-8">
          <BillingTrust tenant="primary-care" showBadge={true} />
        </div>

        <div className="mt-8">
          <Button asChild variant="outline" size="lg" className="rounded-none uppercase tracking-wider">
            <Link href="/primary-care">Back to {site.name}</Link>
          </Button>
        </div>
      </section>

      <section className="border-t-2 border-border bg-muted/30 px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <CrossPromo currentTenant="primary-care" />
        </div>
      </section>
    </main>
  );
}
