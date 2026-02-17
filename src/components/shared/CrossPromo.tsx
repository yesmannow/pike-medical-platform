import Link from "next/link";
import type { TenantId } from "@/config/site-content";
import { SITE_CONTENT } from "@/config/site-content";
import { Button } from "@/components/ui/button";

type CrossPromoProps = {
  currentTenant: TenantId;
  className?: string;
};

export function CrossPromo({ currentTenant, className = "" }: CrossPromoProps) {
  const site =
    currentTenant === "urgent-care"
      ? SITE_CONTENT.sites.urgentCare
      : SITE_CONTENT.sites.primaryCare;
  const promo = site.crossPromo;

  return (
    <aside
      className={`border-2 border-border bg-muted/50 p-6 ${className}`}
      aria-labelledby="cross-promo-heading"
    >
      <h2 id="cross-promo-heading" className="mb-2 text-sm font-bold uppercase tracking-widest text-muted-foreground">
        Also from {SITE_CONTENT.parentBrand.name}
      </h2>
      <h3 className="mb-2 text-lg font-bold text-foreground">{promo.title}</h3>
      <p className="mb-4 text-sm text-muted-foreground">{promo.body}</p>
      <Button asChild variant="outline" size="sm" className="rounded-none uppercase tracking-wider">
        <Link href={promo.href}>{promo.cta}</Link>
      </Button>
    </aside>
  );
}
