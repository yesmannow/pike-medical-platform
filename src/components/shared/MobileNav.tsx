import { Clock, MapPin, Phone, Plus } from "lucide-react";

const navItems = [
  {
    label: "Call",
    icon: Phone,
  },
  {
    label: "Find",
    icon: MapPin,
  },
  {
    label: "Wait",
    icon: Clock,
  },
] as const;

export default function MobileNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-border bg-background">
      <div className="mx-auto grid h-16 max-w-4xl grid-cols-4 divide-x-2 divide-border">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className="flex h-full flex-col items-center justify-center gap-1 bg-background text-foreground"
              type="button"
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em]">
                {item.label}
              </span>
            </button>
          );
        })}
        <button
          className="flex h-full flex-col items-center justify-center gap-1 bg-primary text-primary-foreground"
          type="button"
        >
          <Plus className="h-5 w-5" aria-hidden="true" />
          <span className="text-[10px] font-bold uppercase tracking-[0.22em]">
            + In
          </span>
        </button>
      </div>
    </nav>
  );
}
