"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Phone, Stethoscope, CalendarCheck } from "lucide-react";
import { SITE_CONTENT } from "@/config/site-content";

const phoneNumber = SITE_CONTENT.contact.phone;

const navItems = [
  { label: "Home", icon: Home, href: "", external: false },
  { label: "Call", icon: Phone, href: `tel:${phoneNumber.replace(/\D/g, "")}`, external: true },
  { label: "My Health", icon: Stethoscope, href: "/patient/locker", external: false },
] as const;

export default function MobileNav() {
  const pathname = usePathname();
  const basePath = pathname?.startsWith("/primary-care") ? "/primary-care" : pathname?.startsWith("/urgent-care") ? "/urgent-care" : "/urgent-care";

  const bookHref = pathname?.startsWith("/primary-care") ? "/primary-care/book" : "/urgent-care/save-spot";
  const bookLabel = pathname?.startsWith("/primary-care") ? "Book" : "Save My Spot";

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-border bg-background"
      aria-label="Mobile navigation"
    >
      <div className="mx-auto grid h-16 max-w-4xl grid-cols-4 divide-x-2 divide-border">
        {navItems.map((item) => {
          const Icon = item.icon;
          const href = item.external ? item.href : item.href ? `${basePath}${item.href}` : basePath;
          const className = "flex h-full min-h-[44px] flex-col items-center justify-center gap-1 bg-background text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset";
          return item.external ? (
            <a key={item.label} href={href} className={className} aria-label={`${item.label}`}>
              <Icon className="h-5 w-5" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em]">{item.label}</span>
            </a>
          ) : (
            <Link key={item.label} href={href} className={className} aria-label={item.label}>
              <Icon className="h-5 w-5" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em]">{item.label}</span>
            </Link>
          );
        })}
        <Link
          href={bookHref}
          className="flex h-full min-h-[44px] flex-col items-center justify-center gap-1 bg-primary text-primary-foreground shadow-[0_-2px_8px_rgba(0,0,0,0.08)] transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
          aria-label={bookLabel}
        >
          <CalendarCheck className="h-5 w-5" aria-hidden="true" />
          <span className="text-[10px] font-bold uppercase tracking-[0.22em]">Book</span>
        </Link>
      </div>
    </nav>
  );
}
