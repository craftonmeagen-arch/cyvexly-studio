import { siteConfig, faqLibrary } from "./site-config";
import type { ServiceDetail } from "./service-details";

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

// FAQPage structured data for the /faq route — flattens the already-published
// faqLibrary copy into schema.org Question/Answer entities so search engines
// can surface FAQ rich results. No new facts: reuses the exact copy shown on
// the page.
export const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqLibrary.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  ),
} as const;

// BreadcrumbList structured data for service-detail and case-study routes —
// both sit one level under a listing page (/services, /work). Google's
// documented pattern for hierarchical pages; reuses only the route's own
// existing name/URL, no new facts.
// Extracts the leading dollar figure from a package price string (e.g.
// "From $3,500" -> 3500, "From $99/mo" -> 99) so it can be published as a
// real starting figure rather than restated by hand. Returns null when no
// figure is present rather than guessing.
function extractStartingPrice(price: string): number | null {
  const match = price.match(/\$([\d,]+)/);
  if (!match) return null;
  const value = Number(match[1].replace(/,/g, ""));
  return Number.isFinite(value) ? value : null;
}

// Service structured data for each /services/[slug] detail page — schema.org's
// documented type for a professional service listing, matching vision §17's
// "searchable" requirement now that these five routes are the site's core
// commercial pages and previously carried only BreadcrumbList. Reuses only
// each service's own already-published name/summary/price; the price is
// published as a real "starting from" figure via AggregateOffer.lowPrice
// (not a fixed Offer.price), since the site's own copy already frames every
// package as a starting point confirmed in writing, not a fixed rate.
export function buildServiceJsonLd(service: ServiceDetail) {
  const lowPrice = extractStartingPrice(service.package.price);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: `${service.name} — Cyvexly Studio`,
    description: service.summary,
    url: `https://cyvexly.com/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: "https://cyvexly.com",
    },
    areaServed: "US",
    ...(lowPrice
      ? {
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "USD",
            lowPrice,
            offerCount: 1,
          },
        }
      : {}),
  } as const;
}

export function buildBreadcrumbJsonLd(
  trail: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://cyvexly.com${item.path}`,
    })),
  } as const;
}
