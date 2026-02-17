'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

interface InsuranceLogo {
  id: string;
  name: string;
  filename: string;
}

// Insurance providers - logos to be placed in public/images/shared/insurance/
const INSURANCE_LOGOS: InsuranceLogo[] = [
  { id: 'anthem', name: 'Anthem', filename: 'anthem-logo.png' },
  { id: 'united', name: 'UnitedHealthcare', filename: 'united-logo.png' },
  { id: 'aetna', name: 'Aetna', filename: 'aetna-logo.png' },
  { id: 'cigna', name: 'Cigna', filename: 'cigna-logo.png' },
  { id: 'humana', name: 'Humana', filename: 'humana-logo.png' },
  { id: 'bcbs', name: 'Blue Cross Blue Shield', filename: 'bcbs-logo.png' },
];

interface BillingTrustProps {
  readonly tenant?: 'primary-care' | 'urgent-care';
  readonly showBadge?: boolean;
}

/**
 * Billing Trust Strip (Global Component)
 *
 * Swiss Utility Design:
 * - Grayscale logo strip of major insurers
 * - Resolves identity friction before booking
 * - Clear billing entity disclosure
 * - Builds trust through transparency
 */
export function BillingTrust({
  tenant = 'primary-care',
  showBadge = true,
}: BillingTrustProps) {
  const billingEntity = tenant === 'primary-care'
    ? 'Pike Medical Consultants (PMC)'
    : 'Urgent Care Indy (UCI)';

  return (
    <div className="w-full border-2 border-border bg-gray-50 p-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-sm font-black uppercase tracking-wide text-foreground mb-2">
          Insurance Partners
        </h3>
        <p className="text-xs text-muted-foreground font-mono">
          We accept most major insurance plans
        </p>
      </div>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-6 items-center justify-items-center">
        {INSURANCE_LOGOS.map((logo) => (
          <div
            key={logo.id}
            className="relative w-24 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
            title={logo.name}
          >
            <Image
              src={`/images/shared/insurance/${logo.filename}`}
              alt={`${logo.name} accepted`}
              width={96}
              height={64}
              className="object-contain"
              onError={(e) => {
                // Fallback: Show text if image doesn't exist
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `<span class="text-[10px] font-bold text-gray-400 text-center">${logo.name}</span>`;
                }
              }}
            />
          </div>
        ))}
      </div>

      {/* Billing Disclosure Badge */}
      {showBadge && (
        <div className="border-t-2 border-border pt-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-center">
            <Badge variant="outline" className="text-[10px] px-3 py-1">
              Affiliate of Pike Medical Consultants
            </Badge>
            <p className="text-xs font-mono text-muted-foreground">
              We bill as <strong className="text-foreground">{billingEntity}</strong> for
              {tenant === 'primary-care' ? ' Primary Care' : ' Urgent Care'} services
            </p>
          </div>
        </div>
      )}

      {/* Additional Trust Indicators */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
        <div className="border-2 border-border bg-white px-3 py-2">
          <p className="text-xs font-black uppercase tracking-wide text-foreground">
            No Surprise Billing
          </p>
          <p className="text-[10px] text-muted-foreground mt-1">
            Transparent pricing
          </p>
        </div>
        <div className="border-2 border-border bg-white px-3 py-2">
          <p className="text-xs font-black uppercase tracking-wide text-foreground">
            Verify Coverage
          </p>
          <p className="text-[10px] text-muted-foreground mt-1">
            Before your visit
          </p>
        </div>
        <div className="border-2 border-border bg-white px-3 py-2">
          <p className="text-xs font-black uppercase tracking-wide text-foreground">
            Flexible Payment
          </p>
          <p className="text-[10px] text-muted-foreground mt-1">
            Self-pay options
          </p>
        </div>
      </div>
    </div>
  );
}
