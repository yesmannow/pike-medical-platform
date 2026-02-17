'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Icons } from '@/components/shared/ClinicalIcons';
import { cn } from '@/lib/utils';

interface SmartSlotPickerProps {
  readonly onSlotSelect?: (time: string) => void;
  readonly intervalMinutes?: number;
}

/**
 * Smart Slot Picker (Shared UI)
 *
 * Swiss Utility Design:
 * - Zero-DB solution: generates next 3 available slots dynamically
 * - "Slot-First" psychology increases conversion
 * - Square corners, 2px borders (Swiss Medical styling)
 * - Triggers "Save My Spot" intake with selected time as URL param
 */
export function SmartSlotPicker({
  onSlotSelect,
  intervalMinutes = 15,
}: SmartSlotPickerProps) {
  const router = useRouter();
  const [slots, setSlots] = useState<string[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const generateNextSlots = useCallback(() => {
    const now = new Date();
    const nextSlots: string[] = [];

    // Round to next interval
    const minutes = now.getMinutes();
    const remainder = minutes % intervalMinutes;
    const minutesToAdd = remainder === 0 ? intervalMinutes : intervalMinutes - remainder;

    now.setMinutes(minutes + minutesToAdd);
    now.setSeconds(0);
    now.setMilliseconds(0);

    // Generate 3 slots
    for (let i = 0; i < 3; i++) {
      const slotTime = new Date(now.getTime() + (i * intervalMinutes * 60000));
      const hours = slotTime.getHours();
      const mins = slotTime.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const displayHours = hours % 12 || 12;
      const displayMins = mins.toString().padStart(2, '0');

      nextSlots.push(`${displayHours}:${displayMins} ${ampm}`);
    }

    setSlots(nextSlots);
  }, [intervalMinutes]);

  useEffect(() => {
    const id = setTimeout(() => generateNextSlots(), 0);
    return () => clearTimeout(id);
  }, [generateNextSlots]);

  const handleSlotClick = (time: string) => {
    setSelectedSlot(time);
    if (onSlotSelect) {
      onSlotSelect(time);
    }

    // Trigger Save My Spot with URL parameter
    const encodedTime = encodeURIComponent(time);
    router.push(`/urgent-care?slot=${encodedTime}&action=save-spot`);
  };

  return (
    <div className="w-full">
      <div className="mb-4 flex items-center gap-2">
        <Icons.Clock className="w-5 h-5 text-primary" />
        <h3 className="text-sm font-black uppercase tracking-wide text-foreground">
          Next Available Slots
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {slots.map((time, index) => (
          <button
            key={time}
            type="button"
            onClick={() => handleSlotClick(time)}
            className={cn(
              "border-2 border-border bg-background px-6 py-4 transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary",
              selectedSlot === time && "bg-primary text-primary-foreground border-primary"
            )}
          >
            <div className="flex flex-col items-center gap-2">
              <Icons.Clock className="w-6 h-6" />
              <span className="text-lg font-black uppercase tracking-wide">
                {time}
              </span>
              {index === 0 && (
                <Badge variant="success" className="text-[10px] px-2 py-0.5">
                  Soonest
                </Badge>
              )}
            </div>
          </button>
        ))}
      </div>

      <p className="mt-3 text-xs font-mono text-muted-foreground text-center">
        Click a slot to reserve your spot instantly
      </p>
    </div>
  );
}
