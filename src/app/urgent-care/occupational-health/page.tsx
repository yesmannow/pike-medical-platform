import Image from "next/image";
import Link from "next/link";
import { CrossPromo } from "@/components/shared/CrossPromo";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/config/images";
import { SITE_CONTENT } from "@/config/site-content";

const site = SITE_CONTENT.sites.urgentCare;

export const metadata = {
  title: `Occupational Health & DOT Physicals | ${site.name}`,
  description:
    "Employee DOT physicals $95, drug testing, workplace injury care. Employer and commercial driver services. Northwest Indianapolis.",
};

export default function UrgentCareOccHealthPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background pb-20 pt-24">
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          {site.name}
        </h1>
        <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
          Occupational Health
        </h2>
        <p className="mb-10 max-w-2xl text-lg text-muted-foreground">
          DOT physicals, drug testing, and workplace injury care for employers and commercial drivers.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="overflow-hidden border-2 border-border bg-card">
            <div className="relative aspect-video">
              <Image
                src={IMAGES.urgentCare.occHealth.dotTruck}
                alt="DOT physicals and commercial driver services"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold uppercase tracking-wide text-foreground">DOT Physicals</h3>
              <p className="text-sm text-muted-foreground">
                Commercial driver certification and compliance. Fast, certified exams.
              </p>
            </div>
          </div>
          <div className="overflow-hidden border-2 border-border bg-card">
            <div className="relative aspect-video">
              <Image
                src={IMAGES.urgentCare.occHealth.drugTestingKit}
                alt="Drug testing services"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold uppercase tracking-wide text-foreground">Drug Testing</h3>
              <p className="text-sm text-muted-foreground">
                Workplace and DOT-compliant testing. Quick results.
              </p>
            </div>
          </div>
          <div className="overflow-hidden border-2 border-border bg-card">
            <div className="relative aspect-video">
              <Image
                src={IMAGES.urgentCare.occHealth.occupationalHealth}
                alt="Occupational health and wellness"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold uppercase tracking-wide text-foreground">Workplace Injury</h3>
              <p className="text-sm text-muted-foreground">
                Injury care and workers’ comp support. Same-day evaluation.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Button asChild size="lg" className="rounded-none uppercase tracking-wider">
            <Link href="/urgent-care/save-spot">Save My Spot</Link>
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
