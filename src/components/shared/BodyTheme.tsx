"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { SITE_CONTENT } from "@/config/site-content";

/**
 * Sets body theme class based on current path so /primary-care/* gets theme-primary
 * and /urgent-care/* gets theme-urgent. Run once in root layout.
 */
export function BodyTheme() {
  const pathname = usePathname();

  useEffect(() => {
    const primaryClass = SITE_CONTENT.sites.primaryCare.themeClass;
    const urgentClass = SITE_CONTENT.sites.urgentCare.themeClass;

    if (pathname?.startsWith("/primary-care")) {
      document.body.classList.remove(urgentClass);
      document.body.classList.add(primaryClass);
    } else if (pathname?.startsWith("/urgent-care") || pathname === "/") {
      document.body.classList.remove(primaryClass);
      document.body.classList.add(urgentClass);
    }
  }, [pathname]);

  return null;
}
