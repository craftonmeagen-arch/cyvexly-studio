import type { ServicePlannerKey } from "@/lib/planner-config";

export const inquiryContexts = {
  "signal-package": "Signal package — focused starter website",
  "orbit-package": "Orbit package — small-business website",
  "nexus-package": "Nexus package — larger content site or redesign",
  "commerce-package": "Commerce package — online store or booking-led website",
  "custom-system": "Custom web application or unusual workflow",
  "custom-web-applications": "Custom web application or unusual workflow",
  "education-platform": "Education platform like EduAILenz",
  "party-game-platform": "Multi-device game platform like Mudoinkle",
  "hospitality-website": "Restaurant or hospitality website",
  "business-websites": "New business website",
  "website-redesigns": "Website improvement or redesign",
  "landing-pages": "Focused landing page",
  "ecommerce-websites": "Selling products or taking bookings online",
  "website-care": "Ongoing website care and updates",
  "care-plan": "Care plan — ongoing website support",
  "care-plus-plan": "Care+ plan — ongoing website support",
  "evolve-plan": "Evolve plan — ongoing website support",
} as const;

export type InquiryContextKey = keyof typeof inquiryContexts;

export const inquiryPlannerServices = {
  "signal-package": "landing-pages",
  "orbit-package": "business-websites",
  "nexus-package": "website-redesigns",
  "commerce-package": "ecommerce-websites",
  "custom-system": "custom-web-applications",
  "custom-web-applications": "custom-web-applications",
  "education-platform": "custom-web-applications",
  "party-game-platform": "custom-web-applications",
  "hospitality-website": "booking-websites",
  "business-websites": "business-websites",
  "website-redesigns": "website-redesigns",
  "landing-pages": "landing-pages",
  "ecommerce-websites": "ecommerce-websites",
  "website-care": "website-care",
  "care-plan": "website-care",
  "care-plus-plan": "website-care",
  "evolve-plan": "website-care",
} satisfies Record<InquiryContextKey, ServicePlannerKey>;

export function getInquiryContext(value: unknown): {
  id: InquiryContextKey;
  label: string;
  plannerService: ServicePlannerKey;
} | null {
  if (
    typeof value !== "string" ||
    !Object.prototype.hasOwnProperty.call(inquiryContexts, value)
  ) {
    return null;
  }

  const key = value as InquiryContextKey;
  return {
    id: key,
    label: inquiryContexts[key],
    plannerService: inquiryPlannerServices[key],
  };
}
