import Link from "next/link";
import { CrossPromo } from "@/components/shared/CrossPromo";
import { Button } from "@/components/ui/button";
import { SITE_CONTENT } from "@/config/site-content";

const site = SITE_CONTENT.sites.urgentCare;

export const metadata = {
  title: `My Medical Locker | ${site.name}`,
  description: "Access your health information and intake forms. Secure patient portal.",
};

/**
 * Placeholder for My Medical Locker / Intelligent Intake.
 * Replace with OfficeEMR Intelligent Intake or patient portal when integrated.
 */
export default function UrgentCarePatientLockerPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background pb-20 pt-24">
      <section className="mx-auto max-w-2xl px-6 py-12">
        <h1 className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          {site.name}
        </h1>
        <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
          My Medical Locker
        </h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Your secure place for intake forms, visit history, and health information will be available here. We are connecting this to our patient portal for your convenience.
        </p>
        <p className="mb-10 text-sm text-muted-foreground">
          Need care today? Save your spot and we’ll get you on the list.
        </p>
        <Button asChild size="lg" className="rounded-none uppercase tracking-wider">
          <Link href="/urgent-care/save-spot">{site.cta}</Link>
        </Button>
      </section>
      <section className="border-t-2 border-border px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <CrossPromo currentTenant="urgent-care" />
        </div>
      </section>
    </main>
  );
}
