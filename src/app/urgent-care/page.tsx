import PricingGrid from "@/components/shared/PricingGrid";
import TriageSearch from "@/components/shared/TriageSearch";
import { SITE_CONTENT } from "@/config/site-content";

const site = SITE_CONTENT.sites.urgentCare;

export default function UrgentCarePage() {
  return (
    <main className="min-h-screen bg-background pb-20 pt-24">
      <section className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
          {site.name}
        </p>
        <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
          {site.tagline}
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Walk in or reserve a time online. Fast visits, transparent pricing, and
          extended evening hours.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            className="bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            type="button"
          >
            {site.cta}
          </button>
          <button
            className="border-2 border-border px-6 py-3 text-sm font-semibold text-foreground"
            type="button"
          >
            Find a Clinic
          </button>
        </div>
      </section>
      <section className="mx-auto flex max-w-4xl flex-col gap-6 px-6 pb-12">
        <TriageSearch />
        <PricingGrid />
      </section>
    </main>
  );
}
