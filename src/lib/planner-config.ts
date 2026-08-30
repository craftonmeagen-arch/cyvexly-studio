// Data for the Project Planner (`/start`), sourced from
// `CYVEXLY_VISION_PLAN.md` §6.9 (experience) and §9 (complete field plan).

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
  { id: "ecommerce", label: "E-commerce", description: "Sell products or services online." },
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
