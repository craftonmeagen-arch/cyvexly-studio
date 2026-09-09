// Data for the Project Planner (`/start`), sourced from
// `CYVEXLY_VISION_PLAN.md` §6.9 (experience) and §9 (complete field plan).

// Shared between the client form (src/components/planner/planner-form.tsx)
// and the server-side submission route (src/app/api/planner/route.ts) —
// kept here (not "use client") so the API route can import it directly.
export type PlannerData = {
  fullName: string;
  workEmail: string;
  contactMethod: string;
  roleTitle: string;
  companyName: string;
  country: string;
  otherApprovers: string;
  businessDescription: string;
  productsServices: string;
  currentWebsite: string;
  businessStage: string;
  geographicMarket: string;
  customerGroups: string;
  competitors: string;
  differentiation: string;
  primaryGoal: string;
  primaryGoalOther: string;
  secondaryGoals: string;
  importantAction: string;
  currentProblems: string;
  successMeasure: string;
  trafficAnalytics: string;
  websiteType: string;
  pages: string[];
  pagesOther: string;
  pageCount: string;
  essentialPages: string;
  needsMigration: string;
  multipleLanguages: string;
  notSureSitemap: boolean;
  features: string[];
  notSureFeatures: boolean;
  featureDetails: string;
  assetStatus: Record<string, string>;
  assetLink: string;
  personalityAdjectives: string;
  spectrum: Record<string, number>;
  colorsToUse: string;
  colorsToAvoid: string;
  sitesAdmired: string;
  competitorsToAvoid: string;
  accessibilityNotes: string;
  openNotes: string;
  budgetRange: string;
  launchDate: string;
  launchDateReason: string;
  timingFlexibility: string;
  contentReadiness: string;
  careInterest: string;
  acknowledgeNotQuote: boolean;
  consent: boolean;
  followUpEmails: boolean;
  honeypot: string;
};

export const plannerSteps = [
  { id: "about-you", number: 1, label: "About you" },
  { id: "business", number: 2, label: "The business" },
  { id: "goals", number: 3, label: "Goals" },
  { id: "pages", number: 4, label: "Website & pages" },
  { id: "features", number: 5, label: "Features" },
  { id: "brand", number: 6, label: "Brand & content" },
  { id: "visual", number: 7, label: "Visual direction" },
  { id: "budget", number: 8, label: "Budget & timing" },
  { id: "review", number: 9, label: "Review & submit" },
] as const;

export type PlannerStepId = (typeof plannerSteps)[number]["id"];

export const businessStages = [
  "Launching",
  "Growing",
  "Established",
  "Rebranding",
];

export const geographicMarkets = ["Local", "Regional", "National", "Worldwide"];

export const primaryGoals = [
  { id: "inquiries", label: "Generate qualified inquiries" },
  { id: "sell", label: "Sell products" },
  { id: "book", label: "Book appointments or reservations" },
  { id: "credibility", label: "Explain services and build credibility" },
  { id: "launch", label: "Launch a product or campaign" },
  { id: "applications", label: "Attract applications or members" },
  { id: "content", label: "Publish content or resources" },
  { id: "replace", label: "Replace an outdated website" },
  { id: "other", label: "Other" },
];

export const websiteTypes = [
  { id: "landing-page", label: "Landing page", description: "A focused page for one goal or campaign." },
  { id: "business-site", label: "Business site", description: "A complete site for your business." },
  { id: "portfolio", label: "Portfolio", description: "Showcase your work and case studies." },
  { id: "blog-publication", label: "Blog / publication", description: "Content-first, regularly updated." },
  {
    id: "ecommerce",
    label: "Store or booking website",
    description: "Sell products, accept appointments, or take reservations online.",
  },
  { id: "nonprofit-community", label: "Nonprofit / community", description: "Mission, programs, and support." },
  { id: "event", label: "Event", description: "A single event or recurring series." },
  { id: "membership", label: "Membership", description: "Gated content or member accounts." },
  { id: "redesign", label: "Redesign", description: "Refresh and improve an existing site." },
  { id: "not-sure", label: "Not sure", description: "We'll help you figure out the right fit." },
];

export const possiblePages = [
  "Home",
  "About",
  "Services",
  "Individual service pages",
  "Work / Portfolio",
  "Case studies",
  "Products / Shop",
  "Blog / Insights",
  "Resources",
  "Team",
  "Careers",
  "Pricing",
  "FAQ",
  "Booking",
  "Contact",
  "Policies",
  "Account / member pages",
  "Other",
];

export const plannerFeatures = [
  { id: "contact-forms", label: "Inquiry / contact forms", detail: "Capture leads with structured questions." },
  { id: "newsletter", label: "Newsletter signup", detail: "Grow an email list over time." },
  { id: "booking", label: "Appointment or reservation booking", detail: "Let visitors schedule time directly." },
  { id: "ecommerce-payment", label: "E-commerce and online payment", detail: "Sell products with checkout." },
  { id: "subscriptions", label: "Subscriptions or memberships", detail: "Recurring access or billing." },
  { id: "blog-news", label: "Blog / news / resources", detail: "Regularly published content." },
  { id: "search-filter", label: "Searchable / filterable content", detail: "Help visitors find things fast." },
  { id: "portfolio-gallery", label: "Portfolio / case-study gallery", detail: "Showcase past work visually." },
  { id: "reviews", label: "Reviews / testimonials", detail: "Display social proof." },
  { id: "map-location", label: "Map / location information", detail: "Help people find you." },
  { id: "live-chat", label: "Live chat", detail: "Real-time visitor conversations." },
  { id: "social-feeds", label: "Social feeds or sharing", detail: "Connect to your social presence." },
  { id: "downloads", label: "Downloadable files", detail: "PDFs, guides, or resources." },
  { id: "events-calendar", label: "Events / calendar", detail: "List and promote upcoming events." },
  { id: "user-login", label: "User login", detail: "Accounts and gated access." },
  { id: "crm", label: "CRM connection", detail: "Sync leads to your CRM." },
  { id: "email-marketing", label: "Email-marketing connection", detail: "Sync contacts to your email tool." },
  { id: "analytics", label: "Analytics / tag manager", detail: "Measure traffic and conversions." },
  { id: "accessibility-compliance", label: "Accessibility or compliance requirement", detail: "A specific standard to meet." },
  { id: "third-party-api", label: "Third-party API / tool", detail: "Connect an existing tool or service." },
  { id: "calculator", label: "Custom calculator or interactive experience", detail: "A bespoke interactive feature." },
];

export const featuresNeedingDetail = new Set([
  "booking",
  "ecommerce-payment",
  "subscriptions",
  "crm",
  "email-marketing",
  "third-party-api",
  "calculator",
]);

export const assetCategories = [
  { id: "logo", label: "Logo" },
  { id: "brand-guidelines", label: "Brand colors / type / guidelines" },
  { id: "page-copy", label: "Page copy" },
  { id: "product-descriptions", label: "Product / service descriptions" },
  { id: "photography", label: "Photography" },
  { id: "video", label: "Video" },
  { id: "testimonials", label: "Testimonials / reviews" },
  { id: "team-info", label: "Team information" },
  { id: "legal-policies", label: "Legal policies" },
  { id: "product-data", label: "Product data" },
  { id: "downloadable-resources", label: "Downloadable resources" },
];

export const assetStatusOptions = [
  { id: "ready", label: "Ready" },
  { id: "in-progress", label: "In progress" },
  { id: "need-help", label: "Need help" },
  { id: "not-sure", label: "Not sure" },
];

export const visualSpectrums = [
  { id: "minimal-expressive", left: "Minimal", right: "Expressive" },
  { id: "classic-futuristic", left: "Classic", right: "Futuristic" },
  { id: "quiet-energetic", left: "Quiet", right: "Energetic" },
  { id: "editorial-product", left: "Editorial", right: "Product-like" },
];

export const budgetRanges = [
  "$1,800–$3,000",
  "$3,000–$5,000",
  "$5,000–$8,000",
  "$8,000–$15,000",
  "$15,000+",
  "Not sure — recommend a scope",
];

export const timingOptions = [
  "Flexible",
  "2–4 weeks",
  "1–2 months",
  "2–3 months",
  "3+ months",
];

export const contentReadinessOptions = [
  "Yes, we can meet that timing",
  "Mostly, with some support",
  "Not yet — we'll need help staying on track",
];

export const servicePlannerSelections = {
  "business-websites": {
    serviceName: "Business websites",
    websiteType: "business-site",
    primaryGoal: "credibility",
    primaryGoalOther: "",
    careInterest: "",
    openNotes: "",
  },
  "website-redesigns": {
    serviceName: "Website redesigns",
    websiteType: "redesign",
    primaryGoal: "replace",
    primaryGoalOther: "",
    careInterest: "",
    openNotes: "",
  },
  "landing-pages": {
    serviceName: "Landing pages",
    websiteType: "landing-page",
    primaryGoal: "launch",
    primaryGoalOther: "",
    careInterest: "",
    openNotes: "",
  },
  "ecommerce-websites": {
    serviceName: "Commerce or booking website",
    websiteType: "ecommerce",
    primaryGoal: "",
    primaryGoalOther: "",
    careInterest: "",
    openNotes: "",
  },
  "booking-websites": {
    serviceName: "Booking-led website",
    websiteType: "ecommerce",
    primaryGoal: "book",
    primaryGoalOther: "",
    careInterest: "",
    openNotes: "",
  },
  "custom-web-applications": {
    serviceName: "Custom web applications",
    websiteType: "not-sure",
    primaryGoal: "other",
    primaryGoalOther: "Build a custom web application or operational workflow",
    careInterest: "",
    openNotes:
      "I'm interested in a custom web application. I can describe the users, current workflow, and what needs to work better.",
  },
  "website-care": {
    serviceName: "Website care",
    websiteType: "not-sure",
    primaryGoal: "credibility",
    primaryGoalOther: "",
    careInterest: "Yes",
    openNotes: "I'm interested in ongoing website care for an existing site.",
  },
} as const;

export type ServicePlannerKey = keyof typeof servicePlannerSelections;

export type ServicePlannerSelection =
  (typeof servicePlannerSelections)[ServicePlannerKey];

export function getServicePlannerSelection(value: string | undefined) {
  if (!value || !(value in servicePlannerSelections)) return undefined;
  return servicePlannerSelections[value as keyof typeof servicePlannerSelections];
}
