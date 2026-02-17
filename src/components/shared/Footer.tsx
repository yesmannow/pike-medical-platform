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
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-8 text-center">
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
        <div className="text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">One location for both clinics</p>
          <p className="mt-1">
            {address.line1}
            <br />
            {address.city}, {address.state} {address.zip}
          </p>
          <a
            href={address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block font-semibold text-primary underline underline-offset-4 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Get directions
          </a>
          <p className="mt-2">
            <a
              href={`tel:${contact.phone.replace(/\D/g, "")}`}
              className="font-semibold text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {contact.phoneLabel}
            </a>
          </p>
        </div>
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
      </div>
    </footer>
  );
}
