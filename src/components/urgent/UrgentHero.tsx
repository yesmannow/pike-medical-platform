'use client';

import Image from 'next/image';
import { Icons } from '@/components/shared/ClinicalIcons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Clock, MapPin } from 'lucide-react';

interface UrgentHeroProps {
  readonly currentWait?: number; // minutes
  readonly closingTime?: string;
  readonly onSearch?: (query: string) => void;
  readonly onSaveSpot?: () => void;
}

/**
 * Urgent Care Hero Component
 *
 * Swiss Medical Aesthetic:
 * - High-contrast split-screen layout
 * - Bold typography with sharp borders
 * - Live status indicators (wait time, hours)
 * - Massive condition search utility
 * - Emerald/Coral primary CTA
 * - No gradients, solid surfaces only
 */
export function UrgentHero({
  currentWait = 12,
  closingTime = '8:00 PM',
  onSearch,
  onSaveSpot,
}: UrgentHeroProps) {
  return (
    <div className="relative w-full">
      {/* Live Status Bar - High Utility */}
      <div className="bg-black text-white py-3 px-4 flex items-center justify-between border-b-2 border-primary">
        <div className="flex items-center gap-6 text-sm font-mono">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" strokeWidth={2.5} />
            <span className="font-bold">CURRENT WAIT: {currentWait} MINS</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" strokeWidth={2.5} />
            <span>OPEN UNTIL {closingTime}</span>
          </div>
        </div>
      </div>

      {/* Split-Screen Hero Container */}
      <div className="relative grid lg:grid-cols-2 min-h-[600px] border-2 border-secondary">
        {/* Left: High-Contrast Image Overlay */}
        <div className="relative bg-black">
          <Image
            src="/images/urgent-care/services/xray.jpg"
            alt="Urgent Care X-Ray Services"
            fill
            className="object-cover opacity-60"
            priority
          />

          {/* Logo Overlay */}
          <div className="absolute top-8 left-8 z-10">
            <Image
              src="/images/urgent-care/branding/uci-logo-transparent-300x67.png"
              alt="Urgent Care Institute"
              width={300}
              height={67}
              className="drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Right: High-Utility Interface */}
        <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
          {/* Sharp Typography */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Icons.Triage className="w-10 h-10 text-primary" />
              <h1 className="text-5xl lg:text-6xl font-black tracking-tight text-black">
                WALK IN.<br />GET CARE.
              </h1>
            </div>
            <p className="text-xl text-gray-700 font-medium">
              No appointment needed. Expert treatment in minutes.
            </p>
          </div>

          {/* Massive Condition Search Bar */}
          <div className="mb-8">
            <label htmlFor="symptom-search" className="block text-sm font-bold uppercase tracking-wide mb-3">
              Search Your Symptom
            </label>
            <div className="relative border-2 border-black">
              <Input
                id="symptom-search"
                type="text"
                placeholder="e.g., Fever, Sprain, Cough..."
                className="h-16 text-lg px-4 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none"
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                  if (e.key === 'Enter' && onSearch) {
                    onSearch(e.currentTarget.value);
                  }
                }}
              />
              <Icons.Next className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Primary CTA - Emerald/Coral */}
          <Button
            size="lg"
            onClick={onSaveSpot}
            className="w-full h-16 text-xl font-black tracking-wide bg-primary hover:bg-primary/90 text-white border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            <Icons.Triage className="mr-2" />
            SAVE MY SPOT
          </Button>

          {/* Key Services */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[
              { id: 'injuries', icon: <Icons.Injury />, label: 'Minor Injuries' },
              { id: 'labs', icon: <Icons.Lab />, label: 'Lab Tests' },
              { id: 'vaccinations', icon: <Icons.Vaccination />, label: 'Vaccinations' },
            ].map((service) => (
              <div key={service.id} className="border-2 border-secondary p-3">
                <div className="flex justify-center mb-2 text-primary">
                  {service.icon}
                </div>
                <p className="text-xs font-bold uppercase">{service.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Corporate Anchor Badge */}
      <div className="bg-gray-100 border-2 border-t-0 border-secondary p-4 flex items-center justify-center gap-3">
        <span className="text-xs font-mono uppercase text-gray-600">Verified Clinic of</span>
        <Image
          src="/images/corporate/branding/pmc-fullsuite-large-469x127.jpg"
          alt="Pike Medical Consultants"
          width={150}
          height={41}
          className="opacity-60"
        />
      </div>
    </div>
  );
}
