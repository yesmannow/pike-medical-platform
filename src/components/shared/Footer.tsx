import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/config/images";
import { SITE_CONTENT } from "@/config/site-content";

const { contact, parentBrand, sites } = SITE_CONTENT;
const address = contact.address;

export default function Footer() {
  return (
    <footer
      id="visit"
      className="border-t-2 border-border bg-background"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-8 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.28em] text-muted-foreground">
          {parentBrand.tagline}
        </span>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold">
          <Link
            href="/urgent-care"
            className="text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {sites.urgentCare.name}
          </Link>
          <span className="text-muted-foreground" aria-hidden>|</span>
          <Link
            href="/primary-care"
            className="text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {sites.primaryCare.name}
          </Link>
        </div>

        {/* Patient quick links (from urgentcareindy.com) */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
          <Link
            href={`tel:${contact.phone.replace(/\D/g, "")}`}
            className="font-semibold text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Have a Billing Question?
          </Link>
          <span className="text-muted-foreground" aria-hidden>·</span>
          <Link
            href={SITE_CONTENT.payBillUrl}
            className="font-semibold text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Pay Your Bill Online
          </Link>
        </div>

        <div className="text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">
            {sites.urgentCare.name} Walk-in Clinic
          </p>
          <p className="mt-1">
            {address.line1}
            <br />
            {address.city}, {address.state} {address.zip}
          </p>
          <p className="mt-2">
            General questions & billing:{" "}
            <a
              href={`tel:${contact.phone.replace(/\D/g, "")}`}
              className="font-semibold text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {contact.phoneLabel}
            </a>
          </p>
          <p className="mt-1">
            Primary care appointments: {contact.phoneLabel}
          </p>
          <a
            href={address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block font-semibold text-primary underline underline-offset-4 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Get directions
          </a>
        </div>

        <p className="max-w-xl text-xs text-muted-foreground italic">
          {SITE_CONTENT.emergencyDisclaimer}
        </p>

        <Link
          href="/"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label="Pike Medical Consultants home"
        >
          <Image
            src={IMAGES.corporate.branding.pmcFullSuite}
            alt={parentBrand.name}
            width={469}
            height={127}
            className="h-auto w-[300px] max-w-full"
          />
        </Link>

        <p className="text-xs text-muted-foreground">
          Copyright © {new Date().getFullYear()} UrgentCare Indy. A division of {parentBrand.name}.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
          <Link
            href="/privacy"
            className="text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}
