import Image from "next/image";
import Link from "next/link";
import { CrossPromo } from "@/components/shared/CrossPromo";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/config/images";
import { SITE_CONTENT } from "@/config/site-content";

const site = SITE_CONTENT.sites.primaryCare;

export const metadata = {
  title: `Services | ${site.name}`,
  description: "Wellness exams, chronic care, consultations. Your partner in long-term health.",
};

export default function PrimaryCareServicesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background pb-20 pt-24">
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          {site.name}
        </h1>
        <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
          Our Services
        </h2>
        <p className="mb-10 max-w-2xl text-lg text-muted-foreground">
          Annual exams, chronic care management, and coordinated care for every stage of life.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden border-2 border-border bg-card transition-all hover:border-primary">
            <div className="relative aspect-[4/3]">
              <Image
                src={IMAGES.primaryCare.services.wellnessExam}
                alt="Wellness exams"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold uppercase tracking-wide text-foreground">
                Wellness & Annual Exams
              </h3>
              <p className="text-sm text-muted-foreground">
                Preventive care and health maintenance.
              </p>
            </div>
          </div>
          <div className="overflow-hidden border-2 border-border bg-card transition-all hover:border-primary">
            <div className="relative aspect-[4/3]">
              <Image
                src={IMAGES.primaryCare.services.doctorConsultation}
                alt="Doctor consultation"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold uppercase tracking-wide text-foreground">
                Chronic Care & Consultations
              </h3>
              <p className="text-sm text-muted-foreground">
                Ongoing management and specialist coordination.
              </p>
            </div>
          </div>
          <div className="overflow-hidden border-2 border-border bg-card transition-all hover:border-primary">
            <div className="relative aspect-[4/3]">
              <Image
                src={IMAGES.primaryCare.services.bloodPressure}
                alt="Blood pressure and vitals"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold uppercase tracking-wide text-foreground">
                Vitals & Screening
              </h3>
              <p className="text-sm text-muted-foreground">
                Blood pressure, labs, and health screenings.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button asChild size="lg" className="rounded-none uppercase tracking-wider">
            <Link href="/primary-care/book">{site.cta}</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-none uppercase tracking-wider">
            <Link href="/primary-care/team">Meet the Team</Link>
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
