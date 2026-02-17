import {
  Zap,
  HeartPulse,
  Thermometer,
  Bandage,
  Stethoscope,
  Syringe,
  FlaskConical,
  Phone,
  MapPin,
  Clock,
  Plus,
  ChevronRight,
  type LucideProps,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Swiss Medical Aesthetic: Heavy stroke weight for brutalist feel
const STROKE_WIDTH = 2.5;

interface IconProps extends Omit<LucideProps, 'strokeWidth'> {
  className?: string;
}

/**
 * Clinical Icons Component
 *
 * Enforces Swiss Medical Aesthetic with:
 * - Heavy strokeWidth (2.5) for industrial, brutalist feel
 * - High-contrast solid SVGs
 * - Semantic naming for medical contexts
 * - Default sizing (w-6 h-6)
 *
 * Usage:
 * <Icons.Triage className="text-primary" />
 * <Icons.Wait className="text-secondary w-8 h-8" />
 */

const createIcon = (LucideIcon: React.ComponentType<LucideProps>) => {
  const IconComponent = ({ className, ...props }: IconProps) => (
    <LucideIcon
      strokeWidth={STROKE_WIDTH}
      className={cn('w-6 h-6', className)}
      {...props}
    />
  );

  IconComponent.displayName = `ClinicalIcon(${LucideIcon.displayName ?? LucideIcon.name ?? 'Icon'})`;

  return IconComponent;
};

export const Icons = {
  // Emergency & Triage
  Triage: createIcon(Zap),
  Emergency: createIcon(Zap),

  // Vital Signs & Symptoms
  HeartPulse: createIcon(HeartPulse),
  Vitals: createIcon(HeartPulse),
  Temperature: createIcon(Thermometer),
  Fever: createIcon(Thermometer),

  // Injuries & Treatment
  Injury: createIcon(Bandage),
  Wound: createIcon(Bandage),
  Bandage: createIcon(Bandage),

  // Medical Equipment
  Exam: createIcon(Stethoscope),
  Checkup: createIcon(Stethoscope),
  Stethoscope: createIcon(Stethoscope),

  // Procedures
  Vaccination: createIcon(Syringe),
  Injection: createIcon(Syringe),
  Syringe: createIcon(Syringe),

  // Lab & Testing
  Lab: createIcon(FlaskConical),
  Test: createIcon(FlaskConical),
  Labs: createIcon(FlaskConical),

  // Contact & Location
  Contact: createIcon(Phone),
  Call: createIcon(Phone),
  Phone: createIcon(Phone),
  Location: createIcon(MapPin),
  MapPin: createIcon(MapPin),

  // Time & Navigation
  Wait: createIcon(Clock),
  Hours: createIcon(Clock),
  Clock: createIcon(Clock),
  Add: createIcon(Plus),
  New: createIcon(Plus),
  Plus: createIcon(Plus),
  Next: createIcon(ChevronRight),
  Forward: createIcon(ChevronRight),
  ChevronRight: createIcon(ChevronRight),
} as const;

export default Icons;
