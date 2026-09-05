import { siteConfig } from "./site-config";

// Organization structured data (schema.org / JSON-LD) so search engines can
// identify Cyvexly Studio as a real business entity with correct contact
// details — part of vision §17's "searchable" launch requirement. Uses only
// Owner-confirmed facts (name, domain, email, phone, Indiana/United States
// location); no street address, social profiles, or other facts are invented.
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: "https://cyvexly.com",
  logo: "https://cyvexly.com/icon.svg",
  description:
    "Independent, remote web design and development studio serving businesses across the United States.",
  areaServed: "US",
  address: {
    "@type": "PostalAddress",
    addressRegion: "IN",
    addressCountry: "US",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneHref.replace("tel:", ""),
      email: siteConfig.email,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
    },
  ],
} as const;
