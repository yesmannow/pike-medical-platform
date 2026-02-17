'use client'

import { usePathname, useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { PIKE_SITES } from "@/lib/constants";

type BrandToggleProps = {
  currentTenant: "urgent-care" | "primary-care";
};

const tenantPattern = /^\/(urgent-care|primary-care)(\/|$)/;

export function BrandToggle({
  currentTenant,
}: Readonly<BrandToggleProps>) {
  const router = useRouter();
  const pathname = usePathname();

  const toggleBrand = (checked: boolean) => {
    const newTenant = checked ? PIKE_SITES.primary.id : PIKE_SITES.urgent.id;
    const newThemeClass = checked
      ? PIKE_SITES.primary.themeClass
      : PIKE_SITES.urgent.themeClass;

    const pathnameSuffix = pathname === "/" ? "" : pathname;
    const nextPath = tenantPattern.test(pathname)
      ? pathname.replace(tenantPattern, `/${newTenant}$2`)
      : `/${newTenant}${pathnameSuffix}`;

    const win = globalThis.window;
    if (win?.document?.body) {
      win.document.body.classList.remove(
        PIKE_SITES.urgent.themeClass,
        PIKE_SITES.primary.themeClass
      );
      win.document.body.classList.add(newThemeClass);

      const host = win.location.host;
      const hostSwap = checked
        ? host.replace("urgent", "primary")
        : host.replace("primary", "urgent");

      if (hostSwap !== host) {
        win.location.assign(`${win.location.protocol}//${hostSwap}${nextPath}`);
        return;
      }
    }

    router.push(nextPath);
    router.refresh();
  };

  return (
    <div className="flex items-center space-x-4 border-2 border-secondary bg-background px-4 py-2">
      <Label
        htmlFor="brand-mode"
        className={`text-[10px] font-black uppercase tracking-tighter ${
          currentTenant === "urgent-care" ? "text-primary" : "text-muted-foreground"
        }`}
      >
        Urgent Care
      </Label>
      <Switch
        id="brand-mode"
        checked={currentTenant === "primary-care"}
        onCheckedChange={toggleBrand}
        className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary"
      />
      <Label
        htmlFor="brand-mode"
        className={`text-[10px] font-black uppercase tracking-tighter ${
          currentTenant === "primary-care" ? "text-primary" : "text-muted-foreground"
        }`}
      >
        Primary Care
      </Label>
    </div>
  );
}
