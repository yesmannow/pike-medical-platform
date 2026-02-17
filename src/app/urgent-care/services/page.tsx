import Image from "next/image";
import Link from "next/link";
import { CrossPromo } from "@/components/shared/CrossPromo";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/config/images";
import { SITE_CONTENT } from "@/config/site-content";

const site = SITE_CONTENT.sites.urgentCare;

export const metadata = {
  title: `Services | ${site.name}`,
  description: "Walk-in care, imaging, rapid labs, minor illness and injury. See a provider today.",
};

export default function UrgentCareServicesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background pb-20 pt-24">
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          {site.name}
        </h1>
        <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
          What We Treat
        </h2>
        <p className="mb-10 max-w-2xl text-lg text-muted-foreground">
          Walk in or reserve a time. We handle minor illness, injury, imaging, and rapid lab tests.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative aspect-[4/3] overflow-hidden border-2 border-border bg-card">
            <Image
              src={IMAGES.urgentCare.services.xray}
              alt="X-ray and imaging services"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-foreground/80 p-3 text-primary-foreground">
              <span className="text-sm font-bold uppercase">Imaging & X-Ray</span>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border-2 border-border bg-card">
            <Image
              src={IMAGES.urgentCare.services.rapidLabTest}
              alt="Rapid lab testing"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-foreground/80 p-3 text-primary-foreground">
              <span className="text-sm font-bold uppercase">Rapid Lab Tests</span>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border-2 border-border bg-card">
            <Image
              src={IMAGES.urgentCare.services.doctor}
              alt="Provider consultation"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-foreground/80 p-3 text-primary-foreground">
              <span className="text-sm font-bold uppercase">Walk-In Care</span>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border-2 border-border bg-card">
            <Image
              src={IMAGES.urgentCare.services.stethoscope}
              alt="Clinical evaluation"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-foreground/80 p-3 text-primary-foreground">
              <span className="text-sm font-bold uppercase">Minor Illness & Injury</span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button asChild size="lg" className="rounded-none uppercase tracking-wider">
            <Link href="/urgent-care/save-spot">{site.cta}</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-none uppercase tracking-wider">
            <Link href="/urgent-care/pricing">View Pricing</Link>
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
