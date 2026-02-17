"use client";

import { useState } from "react";
import { SITE_CONTENT } from "@/config/site-content";

/**
 * No-Surprise calculator: self-pay patients see cost for tiers (Level 1–4) before booking.
 * Report: "Price Estimator" for trust and conversion.
 */
export function PriceEstimator() {
  const [level, setLevel] = useState<1 | 2 | 3 | 4>(2);
  const tier = SITE_CONTENT.selfPayLevels.find((t) => t.level === level);

  return (
    <section
      className="border-2 border-border bg-card p-6"
      aria-labelledby="estimator-heading"
    >
      <h2 id="estimator-heading" className="text-lg font-bold uppercase tracking-wide text-foreground">
        Estimate your visit cost
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Select the level that best matches your need. No surprises.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-4">
        {SITE_CONTENT.selfPayLevels.map((t) => (
          <button
            key={t.level}
            type="button"
            onClick={() => setLevel(t.level as 1 | 2 | 3 | 4)}
            className={`min-h-[44px] border-2 px-3 py-2 text-left text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
              level === t.level
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-foreground hover:border-primary/50"
            }`}
          >
            Level {t.level}
          </button>
        ))}
      </div>
      {tier && (
        <div className="mt-4 border-t-2 border-border pt-4">
          <p className="text-2xl font-bold text-foreground">${tier.price}</p>
          <p className="mt-1 text-sm font-semibold text-foreground">{tier.label}</p>
          <p className="text-sm text-muted-foreground">{tier.description}</p>
        </div>
      )}
    </section>
  );
}
