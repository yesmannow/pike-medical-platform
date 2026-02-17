# UrgentCare Indy — Content Migration & SEO Strategy

Migrate and improve content from [urgentcareindy.com](https://urgentcareindy.com/) into the new Pike Medical platform with SEO focus.

---

## 1. Source Content Summary (urgentcareindy.com)

| Area | Current live site content |
|------|----------------------------|
| **Phone** | (317) 956-6288 — General, Billing, Primary Care Appointments |
| **Hours** | Mon–Fri 8am–6:30pm, Sat 8am–2:30pm. **No appointment needed.** |
| **Address** | 7911 N. Michigan Rd., Indianapolis, IN 46268 |
| **Tagline** | “The best care, the best way, each day.” (Pike Medical) |
| **Nav** | Our Clinic (What We Treat, My Medical Locker, Our Medical Team), Patient Services (Minor Injuries, Minor Illnesses, Vaccines/Flu FAQ, EKG, On-Site Labs, Sports Physicals, Reproductive Health/STI), Employer Services (DOT, Occupational Health), Payments & Insurance (Pay Bill, Insurance, Self-Pay, Health Share), Contact (Directions, Billing Question, Call) |
| **Service pricing** | Sports Physicals $35, DOT $95, Pre-employment/College $50 |
| **Value props** | Avoid long ER wait times; Pay your way (insurance + health share + self-pay); See a provider today; Primary Care connection |
| **Flu** | Promo: “Annual flu shots” + 2025-26 Flu FAQ |
| **Footer** | Billing question, Pay Your Bill Online, Contact, Privacy Policy, Terms of Use |

---

## 2. Content Mapping: Old → New

| Old (urgentcareindy.com) | New (this repo) | Action |
|--------------------------|-----------------|--------|
| Home | `/urgent-care` | Add hours, “no appointment needed,” value props, flu CTA; keep hero + Save My Spot |
| What We Treat | `/urgent-care/services` | Expand with Minor Illnesses & Injuries, Vaccines, EKG, Labs, Sports/DOT/Pre-employment pricing, ages 2+ |
| My Medical Locker | `/urgent-care/patient/locker` | Already placeholder; add “Call to learn more” if no portal yet |
| Our Medical Team | `/primary-care/team` or new `/urgent-care/team` | Cross-link to Primary Care team or add minimal “Our providers” on services |
| Minor Injuries / Illnesses | Part of `/urgent-care/services` | Add sections + internal anchors |
| Vaccines / Flu FAQ | `/urgent-care/services` section or `/urgent-care/flu` | Add flu shots + link to Flu FAQ section/page |
| EKG / On-Site Labs | `/urgent-care/services` | Add “Quick & Easy Labs” block (in-house labs, EKG, 3–5 day results) |
| Sports Physicals $35, DOT $95, etc. | `/urgent-care/pricing` + services | Add fixed-price list to config + display on pricing and services |
| Pay Your Bill Online | Footer + optional `/urgent-care/pay` | Footer link; later deep-link to portal |
| Insurance We Accept | BillingTrust + optional `/urgent-care/insurance` | Already BillingTrust; add “Insurance we accept” copy |
| Health Share Plans | site-content + pricing | Add Medishare, Liberty HealthShare to copy |
| Get Directions / Billing Question / Call | Footer + contact | Footer: address, phone, “Billing question?”, “Pay bill online” |
| Occupational Health / DOT | `/urgent-care/occupational-health` | Already exists; align copy with old site |
| Privacy / Terms | Footer | Add Privacy Policy, Terms of Use links (placeholders or real URLs) |

---

## 3. SEO Strategy

| Priority | Action |
|----------|--------|
| **Canonical & branding** | One site under Pike Medical; urgent-care as path. Keep “UrgentCare Indy” as H1/title on urgent-care pages. |
| **Titles & descriptions** | Unique `<title>` and `<meta name="description">` per page (e.g. “Urgent Care Indianapolis \| Walk-In & Save My Spot \| UrgentCare Indy”). Include location “Indianapolis,” “Northwest Indianapolis,” and key phrases “walk-in,” “no appointment,” “self-pay,” “DOT physical,” “sports physical.” |
| **Headings** | One H1 per page (e.g. “See a provider today” or “What We Treat”). H2s for main sections; H3 for subsections. Use phrases patients search for. |
| **Structured data** | MedicalSchema already has Organization + MedicalClinic. Add `openingHours` from config; optional LocalBusiness `priceRange` if desired. |
| **Internal linking** | Link “What We Treat” → services; “Self-Pay Pricing” → pricing; “Save My Spot” on every page; “Pay Your Bill” and “Billing” in footer; cross-link Primary Care. |
| **Content improvements** | Use exact phrases from old site where they perform well (“No appointment needed,” “adults and children ages 2 and up,” “avoid long ER wait times”). Add short FAQ or bullet lists for scannability. |
| **URLs** | Keep clean: `/urgent-care`, `/urgent-care/services`, `/urgent-care/pricing`, `/urgent-care/occupational-health`, `/urgent-care/patient/locker`. Add `/urgent-care/flu` only if we add a dedicated flu page. |

---

## 4. Implementation Phases

### Phase 1 — Config & core content (this PR)
- Add **contact.phone** = 317-956-6288 (and phoneLabel) to match live site.
- Add **contact.hours** (e.g. “Mon–Fri 8am–6:30pm, Sat 8am–2:30pm”) and “No appointment needed” to site-content.
- Add **urgentCare.serviceHighlights** (Sports $35, DOT $95, Pre-employment $50) and short copy for labs/EKG, flu, health share.
- Update **urgent-care home** hero/subtext and add “Clinic Hours” and “Why choose us” (value props) block.
- Update **urgent-care services** page with expanded “What We Treat” and fixed-price highlights.
- **Footer**: Add “Pay Your Bill Online,” “Billing question?,” “Privacy Policy,” “Terms of Use” (placeholders if needed).
- **Metadata**: Improve titles/descriptions for `/urgent-care`, `/urgent-care/services`, `/urgent-care/pricing`, `/urgent-care/occupational-health`.

### Phase 2 — New pages & deeper content
- Optional **Flu** page or prominent flu section on services.
- Optional **Insurance** page (or expand BillingTrust section).
- “Pay Your Bill” placeholder page or external link in footer.
- Privacy Policy and Terms of Use pages (or external URLs).

### Phase 3 — Schema & polish
- Add `openingHours` to MedicalSchema from config. **Done** — `openingHoursSchema` in site-content; MedicalSchema outputs multiple `OpeningHoursSpecification` (Mon–Fri 08:00–18:30, Sat 08:00–14:30).
- Review all urgent-care pages for H1/H2 and internal links.
- **Run Lighthouse:** After `npm run build` and `npm run start`, run:  
  `npx lighthouse http://localhost:3000/urgent-care --output=html --output-path=./lighthouse-report.html --chrome-flags="--headless"`  
  Then fix any SEO/accessibility issues reported.

---

## 5. Content to Port (verbatim or lightly edited)

- **Headline**: “It’s time for annual flu shots!” (seasonal — can be toggled or removed off-season.)
- **Value props**: “Avoid long wait times” (vs ER), “Pay your way & save money,” “See a provider *today*,” “And there’s more…” (Primary Care).
- **Services**: “Minor illnesses & injuries — adults and children (ages 2 and up)”; “Sports Physicals $35, DOT $95, Pre-employment/College $50”; “On-site lab tests & EKGs, results in 3–5 business days”; “Insurance + Health Share (Medishare, Liberty HealthShare) + self-pay.”
- **Footer**: “Have a Billing Question?”; “Pay Your Bill Online”; “UrgentCare Indy Walk-in Clinic” + address; “General Questions & Billing: 317-956-6288”; “Primary Care Appointments: 317-956-6288”; “Copyright © 2025 UrgentCare Indy. A division of Pike Medical Consultants.”
- **Disclaimer**: “If you believe you are experiencing a medical emergency, do NOT call our office. Call 911 immediately.”

This doc is the single reference for migrating and improving UrgentCare Indy content and SEO on the new site.
