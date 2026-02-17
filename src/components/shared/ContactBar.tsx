import Link from "next/link";
import { SITE_CONTENT } from "@/config/site-content";

const { contact } = SITE_CONTENT;
const phoneHref = `tel:${contact.phone.replace(/\D/g, "")}`;

/**
 * Slim bar with phone and hours above the header — 2026 best practice:
 * contact info visible without scrolling (urgent care / primary care).
 */
export function ContactBar() {
  return (
    <div
      className="border-b border-border bg-muted/50 px-4 py-2 text-center text-sm text-muted-foreground"
      role="complementary"
      aria-label="Clinic contact and hours"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-1">
        <span className="font-medium text-foreground">Hours:</span>
        <span>{contact.hours}</span>
        <span aria-hidden className="hidden sm:inline">
          ·
        </span>
        <Link
          href={phoneHref}
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center font-semibold text-foreground underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
        >
          {contact.phoneLabel}
        </Link>
      </div>
    </div>
  );
}
