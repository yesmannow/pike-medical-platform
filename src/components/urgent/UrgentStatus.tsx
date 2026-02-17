'use client';

import { MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/shared/ClinicalIcons';

interface UrgentStatusProps {
  readonly isOpen?: boolean;
  readonly waitTime?: number; // in minutes
  readonly address?: string;
  readonly closingTime?: string;
}

/**
 * Command Center Status Bar (Urgent Care)
 *
 * Swiss Utility Design:
 * - High-contrast ticker bar (Forest Black bg, White text)
 * - Live availability data surfaced instantly
 * - Direct conversion: "Get Directions" CTA
 * - Meets 2026 "Direct Conversion" benchmark
 */
export function UrgentStatus({
  isOpen = true,
  waitTime = 15,
  address = '7911 N Michigan Rd, Indianapolis, IN 46268',
  closingTime = '8:00 PM',
}: UrgentStatusProps) {
  const handleDirections = () => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <div className="w-full bg-black border-b-2 border-primary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-3 gap-3">
          {/* Status Indicators */}
          <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-white text-sm font-mono">
            {/* Clinic Status */}
            <div className="flex items-center gap-2">
              <span className="text-lg" aria-label={isOpen ? 'Open' : 'Closed'}>
                {isOpen ? '🟢' : '🔴'}
              </span>
              <span className="font-bold uppercase tracking-wide">
                {isOpen ? `Clinic Open - Until ${closingTime}` : 'Clinic Closed'}
              </span>
            </div>

            {/* Wait Time */}
            {isOpen && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" strokeWidth={2.5} />
                <span className="font-bold">
                  Current Wait: <span className="text-primary">~{waitTime} Mins</span>
                </span>
              </div>
            )}

            {/* Location */}
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" strokeWidth={2.5} />
              <span className="hidden md:inline">{address}</span>
              <span className="md:hidden">7911 N Michigan Rd</span>
            </div>
          </div>

          {/* Direct Action CTA */}
          <Button
            onClick={handleDirections}
            variant="outline"
            size="sm"
            className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-black rounded-none font-bold uppercase tracking-wide transition-all h-9 px-4"
          >
            <Icons.Location className="mr-2 w-4 h-4" />
            Get Directions
          </Button>
        </div>
      </div>
    </div>
  );
}
