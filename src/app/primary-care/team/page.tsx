import Link from "next/link";
import { CrossPromo } from "@/components/shared/CrossPromo";
import { ProviderCard } from "@/components/primary/ProviderCard";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/config/images";
import { SITE_CONTENT } from "@/config/site-content";

const site = SITE_CONTENT.sites.primaryCare;
const providers = SITE_CONTENT.primaryCareProviders;

export const metadata = {
  title: `Medical Staff & Providers | ${site.name}`,
  description:
    "Meet our primary care team. Dr. James Pike, Chase Keirn, Karina White, Maddie Klinger. Northwest Indianapolis.",
};

export default function PrimaryCareTeamPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background pb-20 pt-24">
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          {site.name}
        </h1>
        <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
          Medical Staff
        </h2>
        <p className="mb-10 max-w-2xl text-lg text-muted-foreground">
          Trusted providers for annual exams, chronic care, and preventive medicine.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {providers.map((provider, index) => (
            <ProviderCard
              key={provider.name}
              name={provider.name}
              role={provider.role}
              imageSrc={IMAGES.primaryCare.providers[provider.imageKey]}
              imageAlt={`${provider.name}, ${provider.role}`}
              priority={index < 2}
            />
          ))}
        </div>

        <div className="mt-10">
          <Button asChild size="lg" className="rounded-none uppercase tracking-wider">
            <Link href="/primary-care/book">{site.cta}</Link>
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
