import { SITE_CONTENT } from "@/config/site-content";

/**
 * MedicalClinic + Organization JSON-LD for SEO (Phase 3 improvement plan).
 * Helps search engines understand the business and location.
 */
export function MedicalSchema() {
  const { parentBrand, contact } = SITE_CONTENT;
  const { address } = contact;

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: parentBrand.name,
    description: parentBrand.tagline,
    url: "https://pikemedical.com",
    telephone: contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.line1,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zip,
    },
  };

  const openingHoursSpecification = SITE_CONTENT.openingHoursSchema.map((spec) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: spec.dayOfWeek,
    opens: spec.opens,
    closes: spec.closes,
  }));

  const medicalClinic = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: parentBrand.name,
    description: parentBrand.tagline,
    url: "https://pikemedical.com",
    telephone: contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.line1,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zip,
    },
    medicalSpecialty: ["Urgent Care", "Primary Care", "Family Medicine"],
    openingHoursSpecification,
  };

  const sanitize = (obj: object) =>
    JSON.stringify(obj).replace(/</g, "\\u003c");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitize(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitize(medicalClinic) }}
      />
    </>
  );
}
