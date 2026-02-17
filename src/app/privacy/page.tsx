import Link from "next/link";
import { SITE_CONTENT } from "@/config/site-content";

export const metadata = {
  title: "Privacy Policy | Pike Medical Consultants",
  description: "Privacy policy for Pike Medical Consultants, UrgentCare Indy, and PrimaryCare Indy.",
};

export default function PrivacyPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold uppercase tracking-tight text-foreground">
          Privacy Policy
        </h1>
        <p className="mt-4 text-muted-foreground">
          {SITE_CONTENT.parentBrand.name} and its divisions (UrgentCare Indy, PrimaryCare Indy) are committed to protecting your privacy. This page will be updated with our full privacy policy. For questions, please contact us at{" "}
          <a href={`tel:${SITE_CONTENT.contact.phone.replace(/\D/g, "")}`} className="font-semibold text-foreground underline-offset-4 hover:underline">
            {SITE_CONTENT.contact.phoneLabel}
          </a>
          .
        </p>
        <p className="mt-6">
          <Link href="/" className="font-semibold text-primary underline-offset-4 hover:underline">
            ← Back to home
          </Link>
        </p>
      </div>
    </main>
  );
}
