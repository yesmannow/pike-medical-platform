"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandToggle } from "@/components/shared/BrandToggle";
import { MegaMenu } from "@/components/shared/MegaMenu";
import { SITE_CONTENT } from "@/config/site-content";
import type { TenantId } from "@/config/site-content";

type HeaderProps = {
  currentTenant: TenantId | null;
};

export function Header({ currentTenant }: Readonly<HeaderProps>) {
  const pathname = usePathname();
  const tenantFromPath: TenantId | null = pathname?.startsWith("/primary-care")
    ? "primary-care"
    : pathname?.startsWith("/urgent-care")
      ? "urgent-care"
      : null;

  const tenant = currentTenant ?? tenantFromPath ?? "urgent-care";
  const isPrimary = tenant === "primary-care";
  const site =
    tenant === "primary-care"
      ? SITE_CONTENT.sites.primaryCare
      : SITE_CONTENT.sites.urgentCare;

  const logoSrc = isPrimary
    ? "/images/primary-care/branding/pci-logo-retina.png"
    : "/images/urgent-care/branding/uci-logo-transparent-300x67.png";
  const logoAlt = site.name;
  const logoWidth = isPrimary ? 350 : 300;
  const logoHeight = isPrimary ? 98 : 67;

  const basePath = `/${tenant}`;

  return (
    <header className="border-b-2 border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Link
              href={basePath}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label={`${logoAlt} home`}
            >
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={logoWidth}
                height={logoHeight}
                priority
              />
            </Link>
          </div>
          <div className="flex w-full flex-col gap-3 md:w-auto md:items-end">
            <BrandToggle currentTenant={tenant} />
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-muted-foreground md:text-right">
              A {SITE_CONTENT.parentBrand.name} practice
            </p>
          </div>
        </div>

        {/* Tenant-specific main nav + cross-promo mega menu */}
        {(tenantFromPath || currentTenant) && (
          <div className="flex flex-wrap items-center gap-2 border-t-2 border-border pt-4">
            <nav
              className="flex flex-wrap items-center gap-1 md:gap-2"
              aria-label={`${site.name} site navigation`}
            >
              {site.nav.map((item) => {
              const href = item.href ? `${basePath}${item.href}` : basePath;
              const isActive =
                (item.href === "" && pathname === basePath) ||
                (item.href !== "" && pathname === `${basePath}${item.href}`);

              return (
                <Link
                  key={item.href || "home"}
                  href={href}
                  className={`inline-block border-2 px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                    isActive
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-foreground hover:border-primary hover:bg-primary/10"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            </nav>
            <MegaMenu currentTenant={tenant} />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
