"use client";

import Link from "next/link";
import { MapPin, Clock } from "lucide-react";
import { SITE_CONTENT } from "@/config/site-content";

/** Placeholder until OfficeEMR scheduling API is connected. */
const DEMO_WAIT_MINUTES = "~15";
const DEMO_OPEN_LABEL = "Open";

/**
 * Urgent Status Bar — high-contrast ticker for urgent-care pages.
 * Shows: open/closed, current wait time, truncated address, Get Directions.
 * Tie "Current Wait" to real-time queue API when available.
 */
export function UrgentStatusBar() {
  const { address } = SITE_CONTENT.contact;
  const truncatedAddress = `${address.line1}, ${address.city}`;
  const mapsUrl = address.mapsUrl;

  return (
    <div
      className="border-b-2 border-border bg-primary px-4 py-3 text-primary-foreground"
      role="region"
      aria-label="Clinic status and location"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold">
        <span className="inline-flex items-center gap-1.5">
          <span
            className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse"
            aria-hidden
          />
          {DEMO_OPEN_LABEL}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-4 w-4" aria-hidden />
          Current wait: {DEMO_WAIT_MINUTES} min
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="h-4 w-4 shrink-0" aria-hidden />
          <span className="truncate max-w-[200px] sm:max-w-none">
            {truncatedAddress}
          </span>
        </span>
        <Link
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center border-2 border-primary-foreground px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-primary-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
        >
          Get Directions
        </Link>
      </div>
    </div>
  );
}
