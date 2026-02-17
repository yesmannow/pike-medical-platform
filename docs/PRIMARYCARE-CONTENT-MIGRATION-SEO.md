# PrimaryCare Indy — Content Migration & SEO Strategy

Migrate and improve content from [primarycareindy.com](https://primarycareindy.com/) into the new Pike Medical platform with SEO focus.

---

## 1. Source Content Summary (primarycareindy.com)

| Area | Current live site content |
|------|----------------------------|
| **Phone** | 317-956-6288 — General, appointments |
| **Hours** | Mon.–Fri. 8am–6:30pm, Sat. 8am–2:30pm |
| **Address** | Indy Care Center, 7911 Michigan Rd., Indianapolis IN 46268 |
| **Tagline** | “Experience The Best Care, The Best Way, Each Day.” (Pike Medical) |
| **Nav** | Our Clinic (Why Primary Care?, Location & Hours, Medical Staff, Other Services), Services (Acute, Preventive, BP/Cholesterol, Diabetes, On-Site Labs, Mental Health, Immunizations), Patient Resources (Telehealth, My Medical Locker, Patient Forms, Privacy Notice, Leave a Review), Insurance & Payments (Insurance, Online Bill Pay, Self-Pay, Health Share), Contact (Directions, Billing & Questions) |
| **Headline** | “Who is looking out for **your health?**” — primary care for overall health, not just when something is wrong |
| **Flu** | 2025-26 flu shots; can add to existing appointment or walk in to urgent care during hours; link to Flu FAQ |
| **Missed appointment** | $50 fee for missed appointments |
| **Location** | Northwest Indianapolis, near I-465 and I-65, Pike Township (N. Michigan Rd & 79th St) |
| **Appointments** | Monday–Friday; call to find a time |
| **Insurance** | Majority of insurance, health share (e.g. MediShare), self-pay |
| **Services** | Blood pressure & cholesterol, Diabetes management, Radiology & on-site labs, Mental health, Immunizations & vaccinations, Acute & preventive care |
| **When to use** | Primary vs urgent vs ER explainer (primary = routine/annual; urgent = when PCP not available; ER = life-threatening) |
| **Footer** | Call Mon–Fri 8am–6:30pm Sat 8am–2:30pm, Appointment requests (non-emergency): email, Main Office Indy Care Center 7911 Michigan Rd Indianapolis IN 46268, Patient quick links (My Medical Locker, Patient Forms, Privacy Notice, Leave a Review), © Pike Medical Consultants, Terms of Use |

---

## 2. Content Mapping: Old → New

| Old (primarycareindy.com) | New (this repo) | Action |
|---------------------------|-----------------|--------|
| Home | `/primary-care` | Add “Who is looking out for your health?”, location/hours, flu CTA, services list, when to use primary/urgent/ER |
| Why Primary Care? | `/primary-care` section or /primary-care#why | Section on home |
| Location & Hours | `/primary-care` + footer | Hours block, address, “near 465 & I-65” |
| Medical Staff | `/primary-care/team` | Already exists; align copy |
| Services | `/primary-care/services` | Acute, preventive, BP/cholesterol, diabetes, labs, mental health, immunizations |
| Telehealth / My Medical Locker / Forms / Privacy | `/primary-care/patient/locker`, /privacy | Link from footer or patient resources |
| Insurance & Payments | `/primary-care/insurance` or shared | New insurance page; self-pay → pricing |
| Online Bill Pay | Footer payBillUrl | Same as urgent (config) |
| Contact / Billing & Questions | Footer | Same footer |
| Flu 2025-26 | Section on home + link to flu (urgent) | Flu CTA block |

---

## 3. SEO Strategy

| Priority | Action |
|----------|--------|
| **Titles & descriptions** | Unique per page: “Primary Care Indianapolis | Annual Exams & Chronic Care | PrimaryCare Indy”; include “Northwest Indianapolis,” “annual physical,” “chronic care,” “diabetes,” “blood pressure.” |
| **Headings** | One H1 per page; H2 for “Who is looking out for your health?”, “Our services,” “When to use primary care.” |
| **Internal links** | Book Appointment, Services, Team, Pricing, Insurance, Urgent Care cross-promo, My Medical Locker. |
| **Structured data** | MedicalSchema already covers organization; same location/hours. |

---

## 4. Implementation

- Add **primaryCareServices** (and optionally **missedAppointmentFee**: 50) to site-content.
- **Primary-care home:** “Who is looking out for your health?”, clinic hours/location, flu CTA, “Why Primary Care” / “When to use primary vs urgent vs ER,” quick links (Services, Team, Pricing, Insurance, Get Directions).
- **Primary-care services:** List acute care, preventive care, BP & cholesterol, diabetes management, on-site labs, mental health, immunizations; link to Book and Pricing.
- **Primary-care team:** Ensure metadata and copy align with “Medical Staff.”
- **New:** `/primary-care/insurance` (insurance, health share, self-pay; BillingTrust).
- **Footer:** Already site-wide; ensure “Pay Your Bill” uses payBillUrl. Primary-specific “Patient Forms,” “Leave a Review” can be linked when pages/URLs exist.
- **Metadata:** Improve title/description for `/primary-care`, `/primary-care/services`, `/primary-care/team`, `/primary-care/pricing`, `/primary-care/book`.
