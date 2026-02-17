import Link from "next/link";
import { BillingTrust } from "@/components/shared/BillingTrust";
import { CrossPromo } from "@/components/shared/CrossPromo";
import { Button } from "@/components/ui/button";
import { SITE_CONTENT } from "@/config/site-content";

const site = SITE_CONTENT.sites.urgentCare;
const { healthSharePlans } = SITE_CONTENT;

export const metadata = {
  title: `Insurance We Accept & Self-Pay | ${site.name}`,
  description:
    "We accept most insurance providers, health-share plans (Medishare, Liberty HealthShare), and self-pay. Northwest Indianapolis urgent care.",
};

/**
 * Insurance and payment options. Content from urgentcareindy.com.
 */
export default function UrgentCareInsurancePage() {
  return (
    <main id="main-content" className="min-h-screen bg-background pb-20 pt-24">
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          {site.name}
        </h1>
        <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
          Insurance & Payments
        </h2>
        <p className="mb-10 max-w-2xl text-lg text-muted-foreground">
          We accept a majority of insurance providers, health-share plans, and offer convenient self-pay rates. Get the care you need with the resources you have.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="mb-2 text-lg font-bold uppercase tracking-wide text-foreground">
              Insurance We Accept
            </h3>
            <p className="text-muted-foreground">
              We are in network with most major insurance plans. Verify your coverage with your insurer or call us at {SITE_CONTENT.contact.phoneLabel} with questions.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-bold uppercase tracking-wide text-foreground">
              Health Share Plans
            </h3>
            <p className="text-muted-foreground">
              We accept health-share plans including {healthSharePlans.join(" and ")}. Call us to confirm your plan is accepted.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-bold uppercase tracking-wide text-foreground">
              Self-Pay
            </h3>
            <p className="text-muted-foreground">
              No insurance? We offer transparent self-pay pricing. See our Self-Pay Pricing page for levels and fixed-price physicals.
            </p>
            <Button asChild variant="outline" size="lg" className="mt-2 rounded-none uppercase tracking-wider">
              <Link href="/urgent-care/pricing">View Self-Pay Pricing</Link>
            </Button>
          </div>
        </div>

        <div className="mt-10">
          <BillingTrust tenant="urgent-care" />
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button asChild size="lg" className="rounded-none uppercase tracking-wider">
            <Link href="/urgent-care/save-spot">{site.cta}</Link>
          </Button>
        </div>
      </section>
      <section className="border-t-2 border-border px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <CrossPromo currentTenant="urgent-care" />
        </div>
      </section>
    </main>
  );
}
