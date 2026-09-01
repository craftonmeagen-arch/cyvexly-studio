export const siteConfig = {
  name: "Cyvexly Studio",
  tagline: "Websites built to make your business unmistakable.",
  email: "hello@cyvexly.com",
};

export const primaryNav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "Process", href: "/process" },
];

export const footerNav = {
  studio: [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Pricing", href: "/pricing" },
    { label: "Process", href: "/process" },
  ],
  services: [
    { label: "Business websites", href: "/services/business-websites" },
    { label: "Website redesigns", href: "/services/website-redesigns" },
    { label: "Landing pages", href: "/services/landing-pages" },
    { label: "E-commerce websites", href: "/services/ecommerce-websites" },
    { label: "Website care", href: "/services/website-care" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Accessibility", href: "/accessibility" },
  ],
};

export const credibilityPoints = [
  { id: "owner-led", label: "Independent & owner-led" },
  { id: "custom-strategy", label: "Custom strategy, no templates" },
  { id: "clean-code", label: "Clean code, fast performance" },
  { id: "secure", label: "Secure, reliable & future-ready" },
  { id: "communication", label: "Clear communication at every step" },
];

export const selectedWork = [
  {
    slug: "aurora-spaces",
    name: "Aurora Spaces",
    kind: "Concept project",
    category: "Business Site",
    summary: "Immersive website concept for a luxury architecture studio.",
    tags: ["Business site", "Design-led"],
    href: "/work/aurora-spaces",
    gradient: "from-[#1478FF] via-[#36C7FF] to-[#EEF4FA]",
  },
  {
    slug: "nexora-systems",
    name: "Nexora Systems",
    kind: "Concept project",
    category: "Business Site",
    summary: "SaaS platform concept for an AI analytics company.",
    tags: ["Product site", "Complex UI"],
    href: "/work/nexora-systems",
    gradient: "from-[#10213D] via-[#1478FF] to-[#36C7FF]",
  },
  {
    slug: "vellora-care",
    name: "Vellora Care",
    kind: "Concept project",
    category: "Commerce",
    summary: "E-commerce concept for a premium skincare brand.",
    tags: ["Commerce", "Brand-led"],
    href: "/work/vellora-care",
    gradient: "from-[#36C7FF] via-[#EEF4FA] to-[#D8E1EA]",
  },
];

export const workFilters = ["All", "Business Site", "Redesign", "Landing Page", "Commerce", "Concept"];

export const caseStudies = {
  "aurora-spaces": {
    name: "Aurora Spaces",
    status: "Concept project",
    businessType: "Luxury architecture studio",
    audience: "Prospective residential and commercial clients evaluating high-end architecture firms.",
    challenge:
      "Architecture studios often default to dense portfolio grids that undersell the experience of a space. Aurora Spaces needed a site that felt as considered and immersive as the buildings it designs.",
    goals: [
      "Communicate design authority within the first scroll",
      "Let large-format project photography lead, with minimal competing chrome",
      "Make it effortless to request a consultation",
    ],
    scope: [
      "Home, Studio, Projects index, and project detail template",
      "Custom visual system built around generous negative space",
      "Consultation request form",
    ],
    decisions: [
      "Full-bleed hero imagery with a single-line project caption, so the work speaks first",
      "A restrained monochrome palette with one accent used only for the CTA, borrowed from the cyber-arctic system's cyber-blue",
      "Slow, deliberate motion on scroll rather than snappy transitions, to match the pace of the work itself",
    ],
    accessibilityHighlights: [
      "All imagery carries descriptive alt text for project context, not just file names",
      "Motion respects reduced-motion preference with no information hidden behind it",
    ],
    intendedOutcome:
      "A studio site that reads as confidently as the firm's built work, with a consultation form as the single clear next step.",
    gradient: "from-[#1478FF] via-[#36C7FF] to-[#EEF4FA]",
    palette: [
      { hex: "#10213D", label: "Midnight slate" },
      { hex: "#1478FF", label: "Cyber blue accent" },
      { hex: "#36C7FF", label: "Ion cyan highlight" },
      { hex: "#EEF4FA", label: "Arctic mist ground" },
    ],
    typographyNote:
      "Space Grotesk for large display moments, Inter for supporting copy — the same system as the core studio site, restrained to a single accent weight.",
  },
  "nexora-systems": {
    name: "Nexora Systems",
    status: "Concept project",
    businessType: "AI analytics SaaS platform",
    audience: "Data and engineering leads evaluating an analytics platform for their team.",
    challenge:
      "B2B SaaS sites often bury the actual product behind marketing abstraction. Nexora Systems needed to explain a genuinely complex product clearly enough for a technical buyer to self-qualify before booking a demo.",
    goals: [
      "Explain the product's core workflow in plain language before any jargon",
      "Show, not just tell — real product UI excerpts alongside outcome-led copy",
      "Convert qualified technical visitors into demo requests",
    ],
    scope: [
      "Marketing home, Product, Pricing tiers, and demo-request flow",
      "Reusable component system for feature/benefit pairing",
      "Interactive product-UI preview panels",
    ],
    decisions: [
      "Led every section with the outcome ('catch anomalies before they reach production') before the mechanism",
      "Used a darker, denser visual register than the rest of the cyber-arctic system to signal technical seriousness without losing brand cohesion",
      "Kept the demo-request form to three fields, deferring qualification questions to the sales conversation",
    ],
    accessibilityHighlights: [
      "Product UI preview panels include a text-equivalent summary for screen-reader users",
      "All interactive states (hover, focus, active) are keyboard-reachable and visibly distinct",
    ],
    intendedOutcome:
      "A technical buyer can understand what Nexora Systems does and why it matters within two scrolls, and reach a demo request without friction.",
    gradient: "from-[#10213D] via-[#1478FF] to-[#36C7FF]",
    palette: [
      { hex: "#10213D", label: "Midnight slate ground" },
      { hex: "#1478FF", label: "Cyber blue accent" },
      { hex: "#36C7FF", label: "Ion cyan highlight" },
      { hex: "#526176", label: "Cool graphite text" },
    ],
    typographyNote:
      "The same Space Grotesk/Inter/JetBrains Mono system as the studio site, with JetBrains Mono used more heavily for metrics and technical labels to read as product-grade.",
  },
  "vellora-care": {
    name: "Vellora Care",
    status: "Concept project",
    businessType: "Premium skincare e-commerce brand",
    audience: "Skincare shoppers comparing premium, ingredient-conscious brands online.",
    challenge:
      "Premium skincare buyers are ingredient-literate and skeptical of vague marketing claims. Vellora Care needed a store that felt clinical-grade credible while still feeling warm and giftable.",
    goals: [
      "Build trust through ingredient transparency, not just brand imagery",
      "Make the path from product discovery to checkout short and calm",
      "Support routine-based bundles alongside individual products",
    ],
    scope: [
      "Home, collection and product templates, cart, and checkout flow",
      "Ingredient-transparency component reused across every product page",
      "Routine-builder bundle flow",
    ],
    decisions: [
      "Paired every hero product shot with a compact ingredient/benefit callout, rather than separating marketing copy from technical detail",
      "Used the cooler end of the cyber-arctic palette (arctic mist, frosted glass) to read as clinical and calm rather than loud or trend-driven",
      "Kept checkout to a single page with order summary always visible, reducing abandonment risk",
    ],
    accessibilityHighlights: [
      "Product imagery includes alt text describing product and context, not decorative-only description",
      "Cart and checkout states (empty, error, success) are announced to assistive technology",
    ],
    intendedOutcome:
      "A store that lets an ingredient-conscious shopper trust the brand and complete a purchase without leaving the product page to go research elsewhere.",
    gradient: "from-[#36C7FF] via-[#EEF4FA] to-[#D8E1EA]",
    palette: [
      { hex: "#36C7FF", label: "Ion cyan accent" },
      { hex: "#EEF4FA", label: "Arctic mist ground" },
      { hex: "#D8E1EA", label: "Smoke glass surface" },
      { hex: "#0A6B45", label: "Signal emerald (in-stock/trust cues)" },
    ],
    typographyNote:
      "Space Grotesk and Inter as usual, set slightly looser and paired with more whitespace than the rest of the system, to read as calm rather than clinical-cold.",
  },
};

export const capabilities = [
  {
    id: "strategy-structure",
    title: "Strategy & structure",
    description:
      "We research, plan, and map the right structure to meet your business goals.",
  },
  {
    id: "website-design",
    title: "Website design",
    description:
      "Pixel-precise, brand-aligned designs that communicate value and build trust.",
  },
  {
    id: "website-development",
    title: "Development",
    description:
      "Clean, scalable code for fast, secure, and reliable websites.",
  },
  {
    id: "content-cms",
    title: "Content & CMS",
    description: "Clear content structure and an easy-to-manage CMS tailored to your workflow.",
  },
  {
    id: "commerce-integrations",
    title: "Commerce & integrations",
    description: "Robust e-commerce and seamless third-party integrations that just work.",
  },
  {
    id: "care-improvement",
    title: "Care & improvement",
    description:
      "Ongoing maintenance, updates, and optimization for long-term performance.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Brief & fit",
    description: "You complete the Planner. We review goals, scope, content, timing, and budget.",
    clientInput: "A completed Project Planner covering your goals, pages, features, and budget.",
    deliverable: "A fit confirmation and any clarifying questions.",
    approval: "You confirm you'd like a proposal.",
    timeframe: "1–2 business days",
  },
  {
    number: "02",
    title: "Direction & scope",
    description: "You receive a recommended sitemap, deliverables, timeline, and price.",
    clientInput: "Answers to any clarifying questions from Brief & fit.",
    deliverable: "A written proposal: sitemap, deliverables, timeline, price, and payment milestones.",
    approval: "You sign the agreement and pay the first milestone.",
    timeframe: "2–4 business days",
  },
  {
    number: "03",
    title: "Design & approval",
    description: "We establish a visual direction, then expand into agreed pages and states.",
    clientInput: "Brand assets, content drafts, and feedback at each review checkpoint.",
    deliverable: "A visual direction, then full page designs across desktop and mobile.",
    approval: "You approve the visual direction before it expands to every page.",
    timeframe: "1–3 weeks, depending on package",
  },
  {
    number: "04",
    title: "Build & quality review",
    description: "The working site is completed, content is placed, and everything is reviewed.",
    clientInput: "Final content, remaining assets, and any integration accounts needed.",
    deliverable: "A working, responsive site with content in place, ready for your review.",
    approval: "You review the live preview and approve it for launch.",
    timeframe: "1–4 weeks, depending on package",
  },
  {
    number: "05",
    title: "Launch & care",
    description: "Your site is approved, launched, and supported through the launch window.",
    clientInput: "Domain/hosting access, if not already provided.",
    deliverable: "Launch, handoff materials, and 14 days of post-launch defect support.",
    approval: "None required — this stage completes the engagement.",
    timeframe: "1–2 business days to launch",
  },
];

// Grounded in the process stages above (approval points, response time,
// launch-window support) rather than generic promises — kept as its own
// list since it's read on the /process page only.
export const collaborationPromise = [
  "Every stage names what's waiting on you and what's waiting on Cyvexly before it starts.",
  "A response within two business days, every time you reach out.",
  "Approval before the work expands to the next stage — no surprise scope.",
  "14 days of post-launch defect support included after every project.",
];

// Curated highlights for the Home preview, kept separate from
// `pricingPackages` below (full scope list) so each can pick its own
// best 3-4 items. Keep name/price in sync with `pricingPackages` by hand.
export const pricingPreview = [
  {
    name: "Signal",
    price: "$1,800",
    description: "A focused first presence, campaign, event, or single service.",
    features: ["1–3 core pages", "Responsive design", "One primary form", "Essential SEO setup"],
    featured: false,
  },
  {
    name: "Orbit",
    price: "$3,500",
    description: "A complete small-business or professional-services website.",
    features: ["Up to 7 core pages", "Custom visual system", "Basic CMS or blog", "Two review rounds"],
    featured: true,
  },
  {
    name: "Nexus",
    price: "$5,800",
    description: "A growing business, content-led site, or strategic redesign.",
    features: ["Up to 12 core pages", "CMS collections", "Two standard integrations", "Three review rounds"],
    featured: false,
  },
];

export const servicesGroups = [
  {
    id: "strategy-structure",
    title: "Strategy & structure",
    problem:
      "It's unclear what pages, structure, and priorities will actually move your business forward.",
    who: "Any business starting a new site or rethinking an existing one.",
    included: [
      "Goals and audience definition",
      "Competitive review",
      "Sitemap and page priorities",
      "Content direction",
      "Conversion path planning",
    ],
    scopeChange: "Number of audiences, competitors reviewed, and page count.",
    nextAction: "Start with the Project Planner",
  },
  {
    id: "website-design",
    title: "Custom website design",
    problem: "Generic templates don't communicate what makes your business different.",
    who: "Businesses that need a distinctive, brand-aligned look and feel.",
    included: [
      "Visual direction",
      "Responsive page designs",
      "Interaction direction",
      "Component styling",
      "Defined revision rounds",
    ],
    scopeChange: "Page count, component complexity, and revision rounds.",
    nextAction: "See package details",
  },
  {
    id: "website-development",
    title: "Website development",
    problem: "A design isn't a website — it needs to actually work, everywhere.",
    who: "Every project, once design direction is approved.",
    included: [
      "The complete working website",
      "Responsive behavior across devices",
      "Functional forms",
      "Content entry",
      "Browser and device quality checks",
      "Launch preparation",
    ],
    scopeChange: "Functionality complexity and number of templates.",
    nextAction: "See package details",
  },
  {
    id: "content-cms",
    title: "Content & CMS",
    problem: "You need to update your site yourself, without calling a developer.",
    who: "Businesses that publish or update content regularly.",
    included: [
      "Copy structure",
      "Copywriting add-on",
      "Blog/resource systems",
      "Editable collections",
      "Content migration",
      "Owner training",
    ],
    scopeChange: "Content volume and migration complexity.",
    nextAction: "See add-on pricing",
  },
  {
    id: "commerce-integrations",
    title: "Commerce & integrations",
    problem: "You need to sell, book, or connect tools — not just present information.",
    who: "Stores, service businesses with booking, and teams relying on other tools.",
    included: [
      "Products, checkout, and booking",
      "Email signup",
      "CRM and live chat",
      "Maps and analytics",
      "Scheduling and memberships",
      "Approved third-party services",
    ],
    scopeChange: "Catalog size, number of integrations, and workflow complexity.",
    nextAction: "See Commerce package",
  },
  {
    id: "search-performance-accessibility",
    title: "Search, performance & accessibility",
    problem: "A beautiful site that's slow, hard to find, or hard to use loses visitors.",
    who: "Every project — this is included, not optional.",
    included: [
      "Search-ready page structure",
      "Page titles and descriptions",
      "Accessibility target",
      "Performance checks",
      "Analytics",
      "Measurement planning",
    ],
    scopeChange: "Depth of audit and remediation needed.",
    nextAction: "Read our accessibility target",
  },
  {
    id: "care-improvement",
    title: "Care & improvement",
    problem: "Launch day isn't the finish line — sites need attention to stay effective.",
    who: "Businesses that want ongoing updates without hiring in-house.",
    included: [
      "Updates and content requests",
      "Backups and monitoring where relevant",
      "Troubleshooting",
      "Reporting",
      "Future conversion improvements",
    ],
    scopeChange: "Monthly capacity and response-time tier.",
    nextAction: "Compare care plans",
  },
];

export const websiteTypes = [
  {
    id: "business-websites",
    name: "Business websites",
    description:
      "A complete, credible presence for a service business or professional: clear offer, easy navigation, and a strong path to inquiry.",
  },
  {
    id: "website-redesigns",
    name: "Website redesigns",
    description:
      "A modern rebuild of an outdated site — better presentation, mobile usability, clearer services, and stronger calls to action.",
  },
  {
    id: "landing-pages",
    name: "Landing pages",
    description:
      "A focused, high-conversion page for a campaign, event, or single offer, built to turn visits into action fast.",
  },
  {
    id: "ecommerce-websites",
    name: "E-commerce websites",
    description:
      "A store built around product presentation, checkout, shipping and tax planning, and a smooth path from browsing to purchase.",
  },
  {
    id: "website-care",
    name: "Website care",
    description:
      "Ongoing updates, monitoring, and improvements after launch, so your site stays current without becoming your job.",
  },
];

export const serviceCombinations = [
  {
    audience: "New businesses needing a credible first site",
    services: [
      { id: "strategy-structure", label: "Strategy & structure" },
      { id: "website-design", label: "Custom website design" },
      { id: "website-development", label: "Website development" },
    ],
    outcome: "A clear foundation, a distinctive visual system, and a complete working site.",
  },
  {
    audience: "Established businesses with an outdated site",
    services: [
      { id: "website-design", label: "Website redesign" },
      { id: "content-cms", label: "Content & CMS" },
      {
        id: "search-performance-accessibility",
        label: "Search, performance & accessibility",
      },
    ],
    outcome: "A sharper story, easier updates, and a faster, more usable customer experience.",
  },
  {
    audience: "Professional & creative service providers",
    services: [
      { id: "website-design", label: "Custom website design" },
      { id: "content-cms", label: "Content & CMS" },
      { id: "care-improvement", label: "Care & improvement" },
    ],
    outcome: "A credible portfolio-led presence that stays current as the practice evolves.",
  },
  {
    audience: "Startups & digital products",
    services: [
      { id: "strategy-structure", label: "Strategy & structure" },
      { id: "website-development", label: "Website development" },
      { id: "commerce-integrations", label: "Commerce & integrations" },
    ],
    outcome: "A focused launch path with a scalable build and the tools needed to operate.",
  },
  {
    audience: "Small online stores",
    services: [
      { id: "commerce-integrations", label: "Commerce & integrations" },
      { id: "content-cms", label: "Content & CMS" },
      { id: "care-improvement", label: "Care & improvement" },
    ],
    outcome: "A store that is easy to merchandise, ready to sell, and supported after launch.",
  },
];

export const servicesFaq = [
  {
    question: "Do I need to know exactly which services I need?",
    answer:
      "No. Describe your goals in the Project Planner and choose \"not sure — recommend it\" wherever you're uncertain. We'll recommend the right combination.",
  },
  {
    question: "Can I add services after the project starts?",
    answer:
      "Yes. New requests outside the agreed scope receive a written price and timing change before any extra work proceeds.",
  },
  {
    question: "Is copywriting included?",
    answer:
      "Every package includes a content structure. Full copywriting or copy editing are add-ons, priced per page — see Pricing for ranges.",
  },
  {
    question: "Do you handle hosting and domains?",
    answer:
      "We guide you through domain and hosting setup and can manage it on your behalf; those subscriptions are billed separately from our fee.",
  },
];

// Full package data for /pricing. See `pricingPreview` above - keep
// name/price in sync by hand when either changes.
export const pricingPackages = [
  {
    name: "Signal",
    price: "$1,800",
    bestFor: "A focused first presence, campaign, event, or single service.",
    scope: [
      "1–3 core pages",
      "Light visual direction",
      "Responsive design",
      "One primary form",
      "Essential SEO setup",
      "Analytics connection",
      "Two review rounds",
      "Launch support",
    ],
    timeline: "2–3 weeks",
    featured: false,
  },
  {
    name: "Orbit",
    price: "$3,500",
    bestFor: "A complete small-business or professional-services website.",
    scope: [
      "Up to 7 core pages",
      "Custom visual system",
      "Conversion-focused page structure",
      "Two forms",
      "Basic CMS or blog",
      "Essential SEO setup",
      "Analytics connection",
      "Two review rounds",
      "Owner handoff",
      "Launch support",
    ],
    timeline: "4–6 weeks",
    featured: true,
  },
  {
    name: "Nexus",
    price: "$5,800",
    bestFor: "A growing business, content-led site, or strategic redesign.",
    scope: [
      "Up to 12 core pages",
      "Deeper strategy",
      "Custom components",
      "CMS collections",
      "Up to two standard integrations",
      "Content migration allowance",
      "Enhanced motion direction",
      "Essential SEO setup",
      "Analytics connection",
      "Three review rounds",
      "Training",
      "Launch support",
    ],
    timeline: "6–9 weeks",
    featured: false,
  },
  {
    name: "Commerce",
    price: "From $8,500",
    bestFor: "A small-to-medium online store or product business.",
    scope: [
      "Store structure",
      "Product and collection templates",
      "Initial catalog allowance",
      "Checkout/payment configuration",
      "Shipping/tax requirement review",
      "Policy templates and placement",
      "Transactional experience review",
      "Analytics connection",
      "Training",
      "Launch support",
    ],
    timeline: "8–14+ weeks",
    featured: false,
  },
  {
    name: "Custom system",
    price: "Quoted after discovery",
    bestFor:
      "Memberships, complex booking, multilingual, large migrations, advanced integrations, or unusual workflows.",
    scope: [
      "A scoped proposal with phases",
      "Defined acceptance points",
      "Timeline and dependencies",
      "Milestone billing",
    ],
    timeline: "Scope dependent",
    featured: false,
  },
];

export const projectIncludes = [
  "A defined goal and primary action",
  "Sitemap / page plan",
  "Responsive desktop, tablet, and mobile behavior",
  "Custom styling aligned to your brand",
  "Accessible interaction and content standards target",
  "Functional forms and clear confirmation/error states",
  "Baseline page titles and descriptions for agreed pages",
  "Favicon and social-sharing image direction",
  "Analytics connection when you supply or authorize the account",
  "Pre-launch review and your approval",
  "Handoff and ownership terms",
  "14 days of post-launch defect support",
];

export const addOns = [
  { name: "Additional standard page", range: "$250–$450 each" },
  { name: "Complex or conversion landing page", range: "$700–$1,500" },
  { name: "Copy editing using your draft", range: "$90–$175 per page" },
  { name: "Full website copywriting", range: "$200–$450 per page" },
  { name: "Brand starter kit", range: "$750–$1,500" },
  { name: "Expanded visual identity", range: "From $2,500" },
  { name: "Blog / resource CMS", range: "$500–$1,200" },
  { name: "Booking or scheduling integration", range: "$350–$900" },
  { name: "CRM, email, or automation integration", range: "$500–$1,500 each" },
  { name: "Additional language framework", range: "From $1,200, plus translation" },
  { name: "Content or product migration", range: "Quoted by volume and condition" },
  { name: "Product entry beyond package allowance", range: "$25–$60 per simple product" },
  { name: "Advanced animation or custom interactive feature", range: "From $600" },
  { name: "Rush scheduling", range: "20–30% when accepted" },
  { name: "Accessibility audit / remediation beyond package scope", range: "Quoted after review" },
  { name: "Search / content growth work", range: "Monthly or campaign quote" },
];

export const carePlans = [
  {
    name: "Care",
    price: "$99/mo",
    use: "Basic peace of mind",
    capacity:
      "Monitoring/maintenance where applicable, one small content request, monthly check, standard response window",
  },
  {
    name: "Care+",
    price: "$229/mo",
    use: "Businesses that update regularly",
    capacity:
      "Up to two hours of content/design support, priority response, quarterly site review, analytics snapshot",
  },
  {
    name: "Evolve",
    price: "$449/mo",
    use: "Continuous improvement",
    capacity:
      "Up to five hours of prioritized updates, monthly review, conversion/content recommendations, priority queue",
  },
];

export const billedSeparately = [
  "Domain registration and renewal",
  "Hosting / platform subscription",
  "Premium fonts, stock assets, licensed themes, apps, or plugins",
  "Payment-processing fees",
  "Third-party email, booking, CRM, commerce, or analytics subscriptions",
  "Taxes where applicable",
  "Translation, photography, video, and specialized legal/compliance work unless specifically included",
];

export const pricingFaq = [
  {
    question: "Are these prices final?",
    answer:
      "They're honest starting points for typical scope. Your final quote reflects your actual pages, content, features, and timeline — you'll see it in writing before any work begins.",
  },
  {
    question: "How does payment work?",
    answer:
      "No work begins until we've agreed on scope and you've received a signed agreement and first invoice. Packages are billed in milestones; Care plans are billed monthly in advance.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Major cards, Apple Pay and Google Pay where available, ACH bank payment for U.S. clients, PayPal (and Venmo in the U.S.), bank wire by arrangement, and eligible installment options through our payment provider. Availability varies by your country and the provider's approval.",
  },
  {
    question: "What happens if my project grows beyond the package scope?",
    answer:
      "We'll flag it as soon as we see it and send a written price and timing change before any extra work proceeds — never a surprise invoice.",
  },
  {
    question: "Do care plans require a contract?",
    answer:
      "No long-term contract. Care plans bill monthly in advance and can be paused or cancelled with notice as described in your agreement.",
  },
  {
    question: "Not sure which package fits?",
    answer:
      "Complete the Project Planner and tell us what's uncertain — we'll recommend the right scope instead of guessing.",
  },
];

export const contactTopics = [
  "General question",
  "Pricing question",
  "Existing project support",
  "Partnership / press",
  "Something else",
];

export const faqPreview = [
  {
    question: "How long does a website project take?",
    answer:
      "Most projects run 2–9 weeks depending on scope. Signal projects typically finish in 2–3 weeks, Orbit in 4–6 weeks, and Nexus in 6–9 weeks.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "Complete the Project Planner with your goals, pages, features, and any brand assets you already have. We recommend a scope for anything you're unsure about.",
  },
  {
    question: "Will I be able to update my website myself?",
    answer:
      "Yes. Every site includes an editable CMS or content workflow suited to your comfort level, with training included at handoff.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Every project includes 14 days of post-launch defect support, and optional monthly Care plans for continued updates.",
  },
  {
    question: "Do you work with businesses outside my industry?",
    answer:
      "Yes. Cyvexly works remotely with service businesses, professionals, startups, creators, and online stores worldwide.",
  },
  {
    question: "How do payments work?",
    answer:
      "Work begins after a signed agreement and first invoice. Packages are billed in milestones; Care plans are billed monthly in advance.",
  },
];

export const faqLibrary = [
  {
    category: "Fit & getting started",
    items: [
      {
        question: "How do I know if Cyvexly is the right fit?",
        answer:
          "If you need a custom, strategy-led website rather than a template or DIY builder, we're likely a fit. Complete the Project Planner and we'll tell you honestly if we're not the right match.",
      },
      {
        question: "What types of websites do you build?",
        answer:
          "Business and professional-services sites, redesigns, landing pages, e-commerce stores, and — case by case — more complex custom systems like memberships or booking platforms.",
      },
      {
        question: "How do I start a project?",
        answer:
          "Complete the Project Planner. We review it and respond within two business days with a fit confirmation and any clarifying questions.",
      },
    ],
  },
  {
    category: "Pricing & payment",
    items: [
      {
        question: "Are the published prices final?",
        answer:
          "They're honest starting points for typical scope. Your final quote reflects your actual pages, content, features, and timeline, written out before work begins.",
      },
      {
        question: "Do you require a deposit?",
        answer:
          "Yes. Signal projects are 50% to begin and 50% at final approval. Orbit and Nexus are 40% to begin, 30% at design approval, 30% before launch. Commerce and Custom follow a milestone schedule set in the proposal.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "Major cards, Apple Pay and Google Pay where available, ACH bank payment for U.S. clients, PayPal and U.S. Venmo, bank wire by arrangement, and eligible installment options through our payment provider.",
      },
      {
        question: "Is anything billed separately from your fee?",
        answer:
          "Yes — domain registration, hosting, premium assets or licenses, payment-processing fees, third-party subscriptions, taxes, and specialized work like translation or photography unless included in your package.",
      },
    ],
  },
  {
    category: "Project timing",
    items: [
      {
        question: "How long does a typical project take?",
        answer:
          "2–3 weeks for Signal, 4–6 weeks for Orbit, 6–9 weeks for Nexus, and 8–14+ weeks for Commerce. Custom systems are scoped individually.",
      },
      {
        question: "What can delay a launch date?",
        answer:
          "Late content or approvals are the most common cause. We'll flag timing risk as soon as we see it rather than let it surprise you at the end.",
      },
      {
        question: "Can you accommodate a rush timeline?",
        answer:
          "Sometimes, for a 20–30% rush fee when our schedule allows it. Tell us your target date in the Project Planner and we'll confirm honestly.",
      },
    ],
  },
  {
    category: "What you need to provide",
    items: [
      {
        question: "What do you need from me to get started?",
        answer:
          "Your goals, pages, and features in the Project Planner, plus whatever brand assets you already have. Use \"not sure — recommend it\" for anything you're uncertain about.",
      },
      {
        question: "What if I don't have copy or photos yet?",
        answer:
          "That's normal. Copywriting and copy-editing are available as add-ons, and we can guide you on what photography or stock imagery will work best for your brand.",
      },
      {
        question: "Do I need existing branding?",
        answer:
          "No. If you don't have a logo or brand colors yet, a Brand Starter Kit add-on can establish them before design begins.",
      },
    ],
  },
  {
    category: "Revisions & approvals",
    items: [
      {
        question: "How many revision rounds are included?",
        answer:
          "Two rounds for Signal and Orbit, three for Nexus. Commerce and Custom revision rounds are defined in the proposal.",
      },
      {
        question: "What happens if I want changes outside the agreed scope?",
        answer:
          "We'll send a written price and timing change before any extra work proceeds — never a surprise invoice.",
      },
    ],
  },
  {
    category: "Domain, hosting & ownership",
    items: [
      {
        question: "Do you handle my domain and hosting?",
        answer:
          "We guide you through choosing and connecting them, and can manage them on your behalf. Those subscriptions are billed separately from our fee.",
      },
      {
        question: "Who owns the website after launch?",
        answer:
          "You do. Ownership and handoff terms are defined in your project agreement and transfer after final payment.",
      },
      {
        question: "Can I move my site to another developer later?",
        answer:
          "Yes. You own your content, design, and site after final payment, and we provide standard handoff materials.",
      },
    ],
  },
  {
    category: "Integrations & payment processing",
    items: [
      {
        question: "Can you connect my CRM, email tool, or booking system?",
        answer:
          "Yes, for approved third-party services. Common integrations are priced individually — see the Add-ons section on Pricing.",
      },
      {
        question: "Do you store customer payment details?",
        answer:
          "No. We use secure, provider-hosted payment pages or components, and never store raw card or bank details on your website.",
      },
    ],
  },
  {
    category: "Accessibility, search & analytics",
    items: [
      {
        question: "Do you follow accessibility standards?",
        answer:
          "Yes. We target WCAG 2.2 AA across the public experience — keyboard operability, sufficient contrast, visible focus, and meaningful error messages.",
      },
      {
        question: "Will my site show up in search results?",
        answer:
          "We make every site search-ready with clean structure, page titles, and descriptions. We can't guarantee rankings — no honest studio can.",
      },
      {
        question: "Can you set up analytics?",
        answer:
          "Yes, once you supply or authorize the account. We connect it as part of every package.",
      },
    ],
  },
  {
    category: "Launch & care",
    items: [
      {
        question: "What happens right after launch?",
        answer:
          "Every project includes 14 days of post-launch defect support, plus a documented handoff to you.",
      },
      {
        question: "Do you offer ongoing support after that?",
        answer:
          "Yes — optional monthly Care plans starting at $99/mo, with more capacity available on Care+ and Evolve.",
      },
      {
        question: "Is there a long-term contract for Care plans?",
        answer:
          "No. Care plans bill monthly in advance and can be paused or cancelled with notice as described in your agreement.",
      },
    ],
  },
  {
    category: "International clients",
    items: [
      {
        question: "Do you work with clients outside the U.S.?",
        answer:
          "Yes — Cyvexly works remotely with businesses worldwide. Proposals are priced in a clearly stated base currency, with international cards and supported local payment methods available.",
      },
      {
        question: "How do you handle different time zones?",
        answer:
          "We confirm your time zone in the Project Planner and coordinate check-ins and calls accordingly.",
      },
    ],
  },
  {
    category: "Cancellations & scope changes",
    items: [
      {
        question: "What if I need to pause my project?",
        answer:
          "Pause, cancellation, refund, and kill-fee terms are defined in your project agreement before work begins, so there are no surprises either way.",
      },
      {
        question: "Can the scope change after the agreement is signed?",
        answer:
          "Yes — new requests outside scope are priced and scheduled in writing before any extra work proceeds.",
      },
    ],
  },
];
