import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { BrandToggle } from "@/components/shared/BrandToggle";
import { SITE_CONTENT } from "@/config/site-content";

type HeaderProps = {
  currentTenant: "urgent-care" | "primary-care";
};

export default function Header({
  currentTenant,
}: Readonly<HeaderProps>) {
  const isPrimary = currentTenant === "primary-care";
  const logoSrc = isPrimary
    ? "/images/primary-care/branding/pci-logo-retina.png"
    : "/images/urgent-care/branding/uci-logo-transparent-300x67.png";
  const logoAlt = isPrimary ? "PrimaryCare Indy" : "UrgentCare Indy";
  const logoWidth = isPrimary ? 350 : 300;
  const logoHeight = isPrimary ? 98 : 67;

  const basePath = `/${currentTenant}`;
  const getLink = (href: string) => `${basePath}${href}`;

  return (
    <header className="border-b-2 border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={logoWidth}
              height={logoHeight}
              priority
            />
          </div>
          <div className="flex w-full flex-col gap-3 md:w-auto md:items-end">
            <BrandToggle currentTenant={currentTenant} />
            <div className="text-xs font-bold uppercase tracking-[0.28em] text-foreground md:text-right">
              Heritage Medical
            </div>
          </div>
        </div>
        <div className="hidden items-center justify-between border-t-2 border-border pt-4 md:flex">
          <NavigationMenu className="max-w-none">
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="border-2 border-border bg-background text-xs font-black uppercase tracking-[0.26em]">
                  Explore Care
                </NavigationMenuTrigger>
                <NavigationMenuContent className="border-2 border-border bg-background p-0 shadow-none">
                  <div className="grid w-225 grid-cols-4 divide-x-2 divide-border">
                    <div className="flex flex-col gap-3 p-6">
                      <span
                        className="text-xs font-black uppercase tracking-[0.28em] text-foreground"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        Urgent Solutions
                      </span>
                      {SITE_CONTENT.megaMenu.urgentSolutions.map((item) => (
                        <NavigationMenuLink
                          key={item.label}
                          href={getLink(item.href)}
                          className="border-2 border-border px-3 py-2 text-sm font-semibold text-foreground"
                        >
                          {item.label}
                        </NavigationMenuLink>
                      ))}
                    </div>
                    <div className="flex flex-col gap-3 p-6">
                      <span
                        className="text-xs font-black uppercase tracking-[0.28em] text-foreground"
                        style={{ fontFamily: "Charter, Georgia, serif" }}
                      >
                        Wellness & Physicals
                      </span>
                      {SITE_CONTENT.megaMenu.wellness.map((item) => (
                        <NavigationMenuLink
                          key={item.label}
                          href={getLink(item.href)}
                          className="border-2 border-border px-3 py-2 text-sm font-semibold text-foreground"
                        >
                          {item.label}
                        </NavigationMenuLink>
                      ))}
                    </div>
                    <div className="flex flex-col gap-3 p-6">
                      <span className="text-xs font-black uppercase tracking-[0.28em] text-foreground">
                        For Employers
                      </span>
                      {SITE_CONTENT.megaMenu.employers.map((item) => (
                        <NavigationMenuLink
                          key={item.label}
                          href={getLink(item.href)}
                          className="border-2 border-border px-3 py-2 text-sm font-semibold text-foreground"
                        >
                          {item.label}
                        </NavigationMenuLink>
                      ))}
                    </div>
                    <div className="flex flex-col gap-3 p-6">
                      <span className="text-xs font-black uppercase tracking-[0.28em] text-foreground">
                        Patient Tools
                      </span>
                      {SITE_CONTENT.megaMenu.patientTools.map((item) => (
                        <NavigationMenuLink
                          key={item.label}
                          href={getLink(item.href)}
                          className="border-2 border-border px-3 py-2 text-sm font-semibold text-foreground"
                        >
                          {item.label}
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="text-xs font-bold uppercase tracking-[0.28em] text-muted-foreground">
            Swiss Medical Navigation
          </div>
        </div>
      </div>
    </header>
  );
}
