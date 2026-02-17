'use client';

import { useState } from 'react';
import { Icons } from '@/components/shared/ClinicalIcons';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { CheckCircle2, Circle } from 'lucide-react';

interface ChecklistItem {
  id: string;
  question: string;
  icon: 'Eye' | 'Pill' | 'Document';
  required: boolean;
}

const DOT_CHECKLIST: ChecklistItem[] = [
  {
    id: 'vision',
    question: 'Do you wear glasses or contact lenses?',
    icon: 'Eye',
    required: true,
  },
  {
    id: 'medications',
    question: 'Do you take any daily medications?',
    icon: 'Pill',
    required: true,
  },
  {
    id: 'diabetes',
    question: 'Do you have your diabetes log? (if applicable)',
    icon: 'Document',
    required: false,
  },
];

// Icon mapper for DOT checklist items
const IconComponent = (iconName: 'Eye' | 'Pill' | 'Document') => {
  const iconMap = {
    Eye: Icons.Eye,
    Pill: Icons.Pill,
    Document: Icons.Document,
  };
  const Icon = iconMap[iconName];
  return <Icon className="w-8 h-8" />;
};

interface DOTWizardProps {
  readonly onBookNow?: () => void;
  readonly price?: number;
}

/**
 * DOT Physical "Flight Check" Wizard (Urgent Care)
 *
 * Swiss Utility Design:
 * - Graphical checklist to prevent wasted visits
 * - Visual feedback with icons for each requirement
 * - Success state with clear "Book Now" CTA
 * - Displays price ($95) at conversion point
 */
export function DOTWizard({
  onBookNow,
  price = 95,
}: DOTWizardProps) {
  const [checked, setChecked] = useState<Record<string, boolean>>({
    vision: false,
    medications: false,
    diabetes: false,
  });

  const toggleCheck = (id: string) => {
    setChecked(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const allRequiredChecked = DOT_CHECKLIST
    .filter(item => item.required)
    .every(item => checked[item.id]);

  return (
    <div className="w-full border-2 border-border bg-background p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Icons.Checkup className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-black uppercase tracking-tight">
            DOT Physical Flight Check
          </h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Make sure you&apos;re prepared before your appointment to avoid delays or rescheduling.
        </p>
      </div>

      {/* Checklist */}
      <div className="space-y-3 mb-6">
        {DOT_CHECKLIST.map((item) => {
          const isChecked = checked[item.id];

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => toggleCheck(item.id)}
              className={cn(
                "w-full flex items-center gap-4 border-2 border-border p-4 text-left transition-all hover:bg-accent",
                isChecked && "bg-green-50 border-green-700"
              )}
            >
              {/* Checkbox Icon */}
              <div className="shrink-0">
                {isChecked ? (
                  <CheckCircle2
                    className="w-6 h-6 text-green-700"
                    strokeWidth={2.5}
                  />
                ) : (
                  <Circle
                    className="w-6 h-6 text-muted-foreground"
                    strokeWidth={2.5}
                  />
                )}
              </div>

              {/* Item Icon */}
              <div className={cn(
                "shrink-0 text-muted-foreground",
                isChecked && "text-green-700"
              )}>
                {IconComponent(item.icon)}
              </div>

              {/* Question */}
              <div className="flex-1">
                <p className={cn(
                  "font-semibold text-foreground",
                  isChecked && "text-green-900"
                )}>
                  {item.question}
                </p>
                {!item.required && (
                  <Badge variant="outline" className="mt-1 text-[9px] px-2 py-0">
                    Optional
                  </Badge>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Success State */}
      {allRequiredChecked ? (
        <div className="border-2 border-green-700 bg-green-600 p-6 text-white">
          <div className="flex items-center gap-3 mb-3">
            <CheckCircle2 className="w-10 h-10" strokeWidth={2.5} />
            <div>
              <p className="text-xs font-black uppercase tracking-wide">
                You&apos;re Ready!
              </p>
              <h3 className="text-2xl font-black uppercase">
                All Requirements Met
              </h3>
            </div>
          </div>
          <p className="text-sm mb-4">
            You have everything needed for your DOT physical. Book now to secure your spot.
          </p>
          <Button
            onClick={onBookNow}
            size="lg"
            className="w-full bg-white text-green-700 hover:bg-gray-100 border-2 border-white rounded-none h-14 text-lg font-black uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]"
          >
            <Icons.Add className="mr-2" />
            Book Now - ${price}
          </Button>
        </div>
      ) : (
        <div className="border-2 border-border bg-muted p-4 text-center">
          <p className="text-sm font-mono text-muted-foreground">
            Complete all required items above to proceed
          </p>
        </div>
      )}

      {/* Info Footer */}
      <div className="mt-4 pt-4 border-t-2 border-border">
        <p className="text-xs font-mono text-muted-foreground">
          <strong>What to Bring:</strong> Valid driver&apos;s license, glasses/contacts (if applicable),
          list of medications, and any medical records related to ongoing conditions.
        </p>
      </div>
    </div>
  );
}
