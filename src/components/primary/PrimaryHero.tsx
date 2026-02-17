'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Icons } from '@/components/shared/ClinicalIcons';
import { Button } from '@/components/ui/button';

interface PrimaryHeroProps {
  readonly onBookExam?: () => void;
  readonly onAccessPortal?: () => void;
}

/**
 * Primary Care Hero Component
 *
 * Swiss Medical Aesthetic:
 * - Clean, serene layout with Oxford Navy/Dusty Rose palette
 * - Transitional serif typography (Charter)
 * - High-contrast borders (2px solid)
 * - Dual CTA hierarchy (wellness + portal)
 * - No gradients, solid surfaces only
 * - Corporate anchor branding
 */
export function PrimaryHero({
  onBookExam,
  onAccessPortal,
}: PrimaryHeroProps) {
  return (
    <div className="relative w-full">
      {/* Hero Container - Oxford Navy Border */}
      <div className="relative border-2 border-secondary bg-white">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left: Branding & Messaging */}
          <div className="p-12 lg:p-16 flex flex-col justify-center bg-white">
            {/* Logo */}
            <div className="mb-8">
              <Image
                src="/images/primary-care/branding/pci-logo-retina-3-300x84.png"
                alt="Primary Care Institute"
                width={300}
                height={84}
                priority
              />
            </div>

            {/* Serif Typography - Charter Feel */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Icons.Checkup className="w-8 h-8 text-secondary" />
                <h1 className="text-4xl lg:text-5xl font-serif font-bold text-black leading-tight">
                  Life-long Wellness.<br />
                  <span className="text-secondary">Family-first Care.</span>
                </h1>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed font-serif">
                Comprehensive primary care for every stage of life.
                Preventive medicine, chronic disease management, and
                personalized wellness planning—all under one roof.
              </p>
            </div>

            {/* CTA Hierarchy */}
            <div className="space-y-4">
              {/* Primary CTA - Book Wellness Exam */}
              <Button
                size="lg"
                onClick={onBookExam}
                className="w-full h-14 text-lg font-bold bg-secondary hover:bg-secondary/90 text-white border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <Icons.Checkup className="mr-2" />
                Book Wellness Exam
              </Button>

              {/* Secondary CTA - Portal Access */}
              <Button
                variant="outline"
                size="lg"
                onClick={onAccessPortal}
                className="w-full h-14 text-lg font-bold border-2 border-secondary text-secondary hover:bg-secondary hover:text-white rounded-none transition-all"
              >
                <Icons.Plus className="mr-2" />
                My Medical Locker
              </Button>
            </div>

            {/* Value Proposition Grid */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { id: 'chronic', icon: <Icons.HeartPulse />, label: 'Chronic Care', color: 'text-secondary' },
                { id: 'preventive', icon: <Icons.Checkup />, label: 'Preventive', color: 'text-secondary' },
                { id: 'wellness', icon: <Icons.Vitals />, label: 'Wellness Plans', color: 'text-secondary' },
              ].map((service) => (
                <div key={service.id} className="text-center">
                  <div className={`flex justify-center mb-2 ${service.color}`}>
                    {service.icon}
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wide text-gray-600">
                    {service.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Facility Imagery Placeholder */}
          <div className="relative min-h-125 lg:min-h-150 bg-gray-100 border-l-2 border-secondary">
            {/* High-contrast container for future facility images */}
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="border-2 border-secondary p-8 bg-white max-w-sm text-center">
                <Icons.Location className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <h3 className="text-xl font-serif font-bold text-black mb-2">
                  Modern Family Medicine
                </h3>
                <p className="text-sm text-gray-600 font-serif">
                  State-of-the-art facility designed for comfort,
                  privacy, and comprehensive care delivery.
                </p>
                <div className="mt-6 p-4 border-t-2 border-secondary">
                  <p className="text-xs font-mono uppercase text-gray-500 mb-2">
                    Accepting New Patients
                  </p>
                  <Link
                    href="/primary-care#contact"
                    className="text-secondary font-bold hover:underline flex items-center justify-center gap-1"
                  >
                    Join the Practice
                    <Icons.Next className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Anchor Badge */}
      <div className="bg-gray-50 border-2 border-t-0 border-secondary p-4 flex items-center justify-center gap-3">
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
