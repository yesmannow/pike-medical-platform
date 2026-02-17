import Link from "next/link";
import { BillingTrust } from "@/components/shared/BillingTrust";
import { CrossPromo } from "@/components/shared/CrossPromo";
import { Button } from "@/components/ui/button";
import { SITE_CONTENT } from "@/config/site-content";

const site = SITE_CONTENT.sites.primaryCare;
const { contact, healthSharePlans } = SITE_CONTENT;

export const metadata = {
  title: `Insurance & Payments | ${site.name}`,
  description:
    "We accept most insurance, health-share plans (MediShare), and self-pay. Northwest Indianapolis primary care.",
};

/**
 * Insurance and payment options. Content from primarycareindy.com.
 */
export default function PrimaryCareInsurancePage() {
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
          We accept a majority of insurance providers, health-share companies such as MediShare, and offer self-pay pricing. Call us with questions at {contact.phoneLabel}.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="mb-2 text-lg font-bold uppercase tracking-wide text-foreground">
              Insurance We Accept
            </h3>
            <p className="text-muted-foreground">
              We are in network with most major insurance plans. Many plans include a free annual primary care visit. Verify with your insurer or call us to see if you qualify.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-bold uppercase tracking-wide text-foreground">
              Health Share Plans
            </h3>
            <p className="text-muted-foreground">
              We accept health-share plans including {healthSharePlans.join(" and ")}. Call to confirm your plan.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-bold uppercase tracking-wide text-foreground">
              Self-Pay
            </h3>
            <p className="text-muted-foreground">
              Self-pay pricing is available. See our Self-Pay Pricing page for details.
            </p>
            <Button asChild variant="outline" size="lg" className="mt-2 rounded-none uppercase tracking-wider">
              <Link href="/primary-care/pricing">View Self-Pay Pricing</Link>
            </Button>
          </div>
        </div>

        <div className="mt-10">
          <BillingTrust tenant="primary-care" />
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button asChild size="lg" className="rounded-none uppercase tracking-wider">
            <Link href="/primary-care/book">{site.cta}</Link>
          </Button>
        </div>
      </section>
      <section className="border-t-2 border-border px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <CrossPromo currentTenant="primary-care" />
        </div>
      </section>
    </main>
  );
}
