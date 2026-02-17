# Pike Medical Platform — Improvement Plan 2026

Based on the **Strategic Digital Transformation Audit and Redesign Report**, this document maps report recommendations to actionable improvements to achieve a top-level, professional medical patient experience that drives business for both Primary Care Indy and Urgent Care Indy.

---

## 1. UI/UX & Visual Design ("Soft Medical")

| Report recommendation | Action | Status / notes |
|-----------------------|--------|----------------|
| **Soft Medical palette** — move away from "Emergency Red" and "Sterile White" | Use **Pike Teal** (#2d44a4), **Sage Growth** (#1d881d) for positive actions, **Warm Cream** (#eeeeee) background to reduce eye strain | Apply in `globals.css` and theme classes; keep urgent vs primary distinction |
| **Authentic photography** — Dr. Pike hero, service imagery | Use `public/images/urgent-care/hero-images/` and `services/` in heroes and cards; avoid stock | Already using Dr. Pike x-ray on root and urgent-care hero |
| **Trust through clarity** — no broken links, fast load, clear hierarchy | Audit internal links; ensure all images use `next/image`; consistent heading levels | Ongoing |

---

## 2. Animations & Micro-Interactions (Phase 3)

| Report recommendation | Action | Status / notes |
|-----------------------|--------|----------------|
| **Micro-interactions and haptic feedback patterns** | Add **framer-motion**: section fade-in on scroll, card hover lift, CTA subtle scale, staggered list items | Add `framer-motion`; animate hero, care-path cards, and key CTAs |
| **Wait time** pulse (UI Expert) | UrgentStatusBar already has pulse on "Open"; keep for wait time when live | Done |
| **Reduced cognitive load** | Use motion sparingly (entrance + hover), no auto-playing carousels | Policy: animate once on enter, subtle hover |

---

## 3. Mobile-First & Navigation

| Report recommendation | Action | Status / notes |
|-----------------------|--------|----------------|
| **Bottom Navigation Bar** mirroring native apps | Current: Call, Find, Wait, + In. Report: **Home**, **Book (FAB)**, **Call**, **My Health** | Done — Home, Book (FAB), Call, My Health; My Health links to `/patient/locker` placeholder |
| **FAB for "Save My Spot"** | Make the Book/In action visually prominent (primary color, optional lift/shadow) | Ensure mobile nav Book item is clearly the primary CTA |
| **Large tap targets (44px)** | All interactive elements min 44×44px; already applied on UrgentStatusBar and MegaMenu | Audit buttons and nav items |

---

## 4. Trust Engineering & Conversion

| Report recommendation | Action | Status / notes |
|-----------------------|--------|----------------|
| **Wait time visibility** | UrgentStatusBar shows placeholder "~15 min"; later connect OfficeEMR scheduling API | Placeholder in place |
| **Price Estimator ("No-Surprise")** | Self-pay tiers (Level 1–4) visible before booking | PricingGrid + quote in Symptom Checker; optional: dedicated calculator component on pricing page |
| **Billing Trust Strip** | Insurance logos, "No Surprise Billing," billing entity disclosure on booking/pricing | BillingTrust on all pricing and booking pages |
| **Progressive disclosure booking** | Intent → Triage → Booking (Zod-validated) | TriageGateway + SymptomChecker + TriageSearch flow in place |

---

## 5. Accessibility (WCAG 2.2)

| Report recommendation | Action | Status / notes |
|-----------------------|--------|----------------|
| **Focus states** | Visible focus ring on all interactive elements (buttons, links, inputs) | Use `focus-visible:ring-2` and consistent offset; audit keyboard nav |
| **Contrast ratios** | Text and UI meet AA (4.5:1 normal, 3:1 large); check muted text on Warm Cream | Validate primary, muted, and destructive against background |
| **Minimum font size 16px** (UI Expert) | Body and form labels at least 16px to reduce zoom need | Set base `text-base` (16px) where appropriate; avoid smaller body text |

---

## 6. Development & Performance

| Report recommendation | Action | Status / notes |
|-----------------------|--------|----------------|
| **next/image for all images** (WebP/AVIF) | Use `<Image>` with `sizes`; avoid raw `<img>` | Done — audit found only next/image in use |
| **Lighthouse 100/100** (Phase 1) | LCP, CLS, FID; semantic HTML; no layout shift from images | Hero sections use `min-h` to reserve space (CLS); run Lighthouse locally to verify scores |
| **SEO — MedicalClinic Schema.org** | Add JSON-LD for organization and local business | Done — `MedicalSchema` component in root layout (Organization + MedicalClinic) |

---

## 7. Content & Messaging (Drive Patients)

| Recommendation | Action |
|----------------|--------|
| **One Medical Home** | Messaging already: "Choose the care path built for your moment"; keep unified home with clear Urgent vs Primary paths |
| **Transparency** | Emphasize "transparent pricing," "live wait times," "no surprise billing" in hero and trust strips |
| **Cross-promotion** | Mega menu and CrossPromo already link Urgent ↔ Primary; ensure CTAs are visible above the fold on key pages |
| **Clear CTAs** | One primary CTA per section: "Save My Spot" / "Book Appointment" with sufficient size and contrast |

---

## Implementation Priority

1. **High impact, low effort:** Soft Medical palette, mobile nav labels/FAB prominence, base font and focus polish.
2. **High impact, medium effort:** framer-motion on hero and care-path cards, Price Estimator on pricing page.
3. **Done:** My Health placeholder pages (`/urgent-care/patient/locker`, `/primary-care/patient/locker`), hero min-height for CLS, MedicalClinic Schema.org. **Ongoing:** Lighthouse runs, OfficeEMR wait-time integration.

This plan keeps the existing architecture (no database, route groups, middleware) and focuses on UX, trust, and conversion to increase patients for both Primary Care Indy and Urgent Care Indy.
