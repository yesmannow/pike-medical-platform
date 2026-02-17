import Image from "next/image";
import Link from "next/link";
import { CrossPromo } from "@/components/shared/CrossPromo";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/config/images";
import { SITE_CONTENT } from "@/config/site-content";

const site = SITE_CONTENT.sites.urgentCare;
const { urgentCareServicePrices } = SITE_CONTENT;

export const metadata = {
  title: `What We Treat | Minor Illness, Injury, Labs & Physicals | ${site.name}`,
  description:
    "Urgent care for adults and children (ages 2+): minor illnesses & injuries, vaccines, EKG, on-site labs, sports physicals $35, DOT physicals $95. Northwest Indianapolis.",
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
          Affordable, convenient urgent care for your everyday needs. We treat many of the same conditions as a hospital ER and can save you time and money. <strong className="text-foreground">Adults and children (ages 2 and up).</strong>
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

        {/* Fixed-price services (from urgentcareindy.com) */}
        <div className="mt-10 border-2 border-border bg-card p-6">
          <h3 className="mb-4 text-lg font-bold uppercase tracking-wide text-foreground">
            Quick & Easy Physicals
          </h3>
          <ul className="grid gap-2 sm:grid-cols-3">
            {urgentCareServicePrices.map((item) => (
              <li key={item.label} className="flex justify-between border-b border-border pb-2 last:border-0 sm:flex-col sm:gap-1">
                <span className="font-semibold text-foreground">{item.label}</span>
                <span className="text-primary">${item.price}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            On-site lab work and EKGs available; results typically in 3–5 business days. We accept most insurance, health-share plans, and self-pay.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button asChild size="lg" className="rounded-none uppercase tracking-wider">
            <Link href="/urgent-care/save-spot">{site.cta}</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-none uppercase tracking-wider">
            <Link href="/urgent-care/pricing">Self-Pay Pricing</Link>
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
