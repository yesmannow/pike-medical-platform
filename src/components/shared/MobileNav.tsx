"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clock, MapPin, Phone, Plus } from "lucide-react";
import { SITE_CONTENT } from "@/config/site-content";

const phoneNumber = SITE_CONTENT.contact.phone;

const navItems = [
  {
    label: "Call",
    icon: Phone,
    href: `tel:${phoneNumber.replace(/\D/g, "")}`,
    external: true,
  },
  {
    label: "Find",
    icon: MapPin,
    href: "#visit",
    external: false,
  },
  {
    label: "Wait",
    icon: Clock,
    href: "", // tenant home
    external: false,
  },
] as const;

export default function MobileNav() {
  const pathname = usePathname();
  const basePath = pathname?.startsWith("/primary-care") ? "/primary-care" : pathname?.startsWith("/urgent-care") ? "/urgent-care" : "/urgent-care";

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-border bg-background"
      aria-label="Mobile actions"
    >
      <div className="mx-auto grid h-16 max-w-4xl grid-cols-4 divide-x-2 divide-border">
        {navItems.map((item) => {
          const Icon = item.icon;
          const href = item.external ? item.href : item.href.startsWith("#") ? item.href : item.href ? `${basePath}${item.href}` : basePath;
          return item.external ? (
            <a
              key={item.label}
              href={href}
              className="flex h-full flex-col items-center justify-center gap-1 bg-background text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
              aria-label={`${item.label} clinic`}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em]">
                {item.label}
              </span>
            </a>
          ) : (
            <Link
              key={`${item.label}-${item.href}`}
              href={href}
              className="flex h-full flex-col items-center justify-center gap-1 bg-background text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
              aria-label={`${item.label} - address and directions`}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em]">
                {item.label}
              </span>
            </Link>
          );
        })}
        <Link
          href={pathname?.startsWith("/primary-care") ? "/primary-care/book" : "/urgent-care/save-spot"}
          className="flex h-full flex-col items-center justify-center gap-1 bg-primary text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
          aria-label="Check in or book"
        >
          <Plus className="h-5 w-5" aria-hidden="true" />
          <span className="text-[10px] font-bold uppercase tracking-[0.22em]">
            + In
          </span>
        </Link>
      </div>
    </nav>
  );
}
