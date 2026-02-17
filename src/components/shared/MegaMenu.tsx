"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { SITE_CONTENT } from "@/config/site-content";
import type { TenantId } from "@/config/site-content";

const MEGA_MENU_SECTIONS = [
  { key: "urgentSolutions", label: "Urgent solutions" },
  { key: "wellness", label: "Wellness" },
  { key: "employers", label: "Employers" },
  { key: "patientTools", label: "Patient tools" },
] as const;

type MegaMenuProps = {
  currentTenant: TenantId | null;
};

/**
 * Cross-promo mega menu from site-content. Cross-sells services across
 * urgent and primary care; hrefs are prefixed with tenant when inside a tenant.
 */
export function MegaMenu({ currentTenant }: MegaMenuProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const basePath = currentTenant ? `/${currentTenant}` : "/urgent-care";
  const prefix = (href: string) => {
    if (!href.startsWith("/")) return href;
    // Don't double-prefix tenant paths (e.g. cross-tenant occupational health)
    if (href.startsWith("/urgent-care") || href.startsWith("/primary-care")) return href;
    return `${basePath}${href}`;
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex min-h-[44px] min-w-[44px] items-center gap-1 border-2 border-border bg-background px-3 py-2 text-xs font-bold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-expanded={open}
        aria-haspopup="true"
        aria-label="Services and tools menu"
      >
        Services & tools
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
      </button>
      {open && (
        <div
          className="absolute left-0 top-full z-50 mt-1 min-w-[280px] border-2 border-border bg-card p-4 shadow-lg"
          role="menu"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            {MEGA_MENU_SECTIONS.map(({ key, label }) => {
              const links = SITE_CONTENT.megaMenu[key];
              return (
                <div key={key}>
                  <p className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                    {label}
                  </p>
                  <ul className="space-y-1">
                    {links.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={prefix(item.href)}
                          className="block py-1.5 text-sm font-semibold text-foreground underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          role="menuitem"
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
