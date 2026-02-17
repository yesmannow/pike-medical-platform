import { SITE_CONTENT } from "@/config/site-content";

const PRICE_BY_LEVEL: Record<number, number> = {
  1: 100,
  2: 200,
  3: 300,
  4: 400,
};

export default function PricingGrid() {
  return (
    <section className="border-2 border-border bg-card px-6 py-8 shadow-sm" aria-labelledby="pricing-heading">
      <div className="mb-6 flex items-center justify-between">
        <h2 id="pricing-heading" className="text-2xl font-bold uppercase tracking-[0.22em]">
          Self-Pay Pricing
        </h2>
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
          Transparent Levels
        </span>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {SITE_CONTENT.selfPayLevels.map((level) => (
          <div
            key={level.level}
            className="flex flex-col gap-3 border-2 border-border bg-card p-6"
          >
            <span className="text-xs font-bold uppercase tracking-[0.32em] text-muted-foreground">
              Level {level.level}
            </span>
            <div
              className="text-3xl font-semibold"
              style={{
                fontFamily:
                  '"Inter", "Charter", "Georgia", "Times New Roman", serif',
              }}
            >
              ${PRICE_BY_LEVEL[level.level]}
            </div>
            <div className="text-lg font-semibold text-foreground">
              {level.label}
            </div>
            <p className="text-sm text-muted-foreground">
              {level.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
