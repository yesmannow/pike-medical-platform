"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { HeartPulse, Zap } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PIKE_SITES } from "@/lib/constants";

export function TriageGateway() {
  const [open, setOpen] = useState(() => {
    const win = globalThis.window;
    if (!win) return false;
    return !win.sessionStorage.getItem("pike-path-selected");
  });
  const router = useRouter();

  const selectPath = (tenant: "urgent-care" | "primary-care") => {
    sessionStorage.setItem("pike-path-selected", "true");
    setOpen(false);
    router.push(tenant === "urgent-care" ? "/urgent-care" : "/primary-care");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl gap-0 overflow-hidden rounded-none border-4 border-secondary p-0">
        <DialogHeader className="bg-secondary p-6 text-secondary-foreground">
          <DialogTitle className="text-center text-2xl font-black uppercase tracking-tighter">
            How can Pike Medical help you today?
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <button
            onClick={() => selectPath("urgent-care")}
            className="group border-b-2 border-secondary p-8 text-left transition-colors hover:bg-primary md:border-b-0 md:border-r-2"
            type="button"
          >
            <Zap
              className="mb-4 h-10 w-10"
              style={{ color: PIKE_SITES.urgent.primaryColor }}
            />
            <h3 className="mb-2 text-xl font-black uppercase group-hover:text-primary-foreground">
              Urgent Care
            </h3>
            <p className="text-sm font-medium group-hover:text-primary-foreground/90">
              I have an immediate illness or injury and need to see a provider
              right now.
            </p>
            <div className="mt-4 inline-block border-2 border-secondary px-4 py-1 text-[10px] font-black uppercase group-hover:border-primary-foreground group-hover:text-primary-foreground">
              Save My Spot
            </div>
          </button>

          <button
            onClick={() => selectPath("primary-care")}
            className="group p-8 text-left transition-colors hover:bg-primary"
            type="button"
          >
            <HeartPulse
              className="mb-4 h-10 w-10"
              style={{ color: PIKE_SITES.primary.primaryColor }}
            />
            <h3 className="mb-2 text-xl font-black uppercase group-hover:text-primary-foreground">
              Primary Care
            </h3>
            <p className="text-sm font-medium group-hover:text-primary-foreground/90">
              I want to establish long-term care, manage chronic health, or book
              a physical.
            </p>
            <div className="mt-4 inline-block border-2 border-secondary px-4 py-1 text-[10px] font-black uppercase group-hover:border-primary-foreground group-hover:text-primary-foreground">
              Book Appointment
            </div>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
