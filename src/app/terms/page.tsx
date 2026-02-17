import Link from "next/link";
import { SITE_CONTENT } from "@/config/site-content";

export const metadata = {
  title: "Terms of Use | Pike Medical Consultants",
  description: "Terms of use for the Pike Medical Consultants website.",
};

export default function TermsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold uppercase tracking-tight text-foreground">
          Terms of Use
        </h1>
        <p className="mt-4 text-muted-foreground">
          Use of this website is subject to our terms of use. This page will be updated with full terms. For questions, contact us at{" "}
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
