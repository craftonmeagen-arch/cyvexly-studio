export const siteConfig = {
  name: "Cyvexly Studio",
  tagline: "Websites built to make your business unmistakable.",
  email: "design@cyvexly.com",
  phoneDisplay: "(317) 572-5780",
  phoneHref: "tel:+13175725780",
};

export const primaryNav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
];

export const footerNav = {
  studio: [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Pricing", href: "/pricing" },
    { label: "Process", href: "/process" },
    { label: "About", href: "/about" },
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
  { id: "owner-led", label: "Work directly with the studio" },
  { id: "custom-strategy", label: "Website projects from $1,800" },
  { id: "clean-code", label: "Typical websites: 2–6 weeks" },
  { id: "secure", label: "You own the finished site" },
  { id: "communication", label: "Replies within two business days" },
];

export const selectedWork = [
  {
    slug: "velora-dining",
    name: "Velora",
    kind: "Built concept demo",
    category: "Business Site",
    summary:
      "Built hospitality concept pairing cinematic restaurant storytelling with responsive menu, reservation, private-event, gifting, and gallery journeys.",
    tags: ["Hospitality", "Interactive demo"],
    capabilities: [
      "Responsive menu, gallery, and visit planning",
      "Reservation and private-event demo flows",
      "Gift-card selection with safe local confirmation",
    ],
    href: "/work/velora-dining",
    demoHref: "/velora",
    gradient: "from-[#20271F] via-[#49332E] to-[#D6BD8F]",
  },
  {
    slug: "nexora-systems",
    name: "Nexora Systems",
    kind: "Built concept demo",
    category: "Business Site",
    summary:
      "Working release-intelligence demo with responsive analytics, service filters, issue investigation, and clear non-transmitting sample states.",
    tags: ["Web application", "Interactive demo"],
    capabilities: [
      "Selectable time ranges and comparison states",
      "Service filtering and issue investigation",
      "Plain-language summaries with accessible chart context",
    ],
    href: "/work/nexora-systems",
    demoHref: "/nexora",
    gradient: "from-[#10213D] via-[#0F66E0] to-[#36C7FF]",
  },
];

export const caseStudies = {
  "velora-dining": {
    name: "Velora",
    status: "Built concept demo — fictional",
    businessType: "Fictional fine-dining restaurant",
    audience:
      "Hospitality teams evaluating how a distinctive restaurant brand can combine editorial storytelling with practical guest journeys.",
    challenge:
      "Restaurant websites often separate atmosphere from utility: either the page feels beautiful but hides the menu and booking path, or it functions but loses the sense of occasion. This fictional brief called for both in one cohesive experience.",
    goals: [
      "Create an immediate sense of place without implying a real restaurant exists",
      "Make seasonal menus, private dining, gifting, and visit details easy to explore",
      "Demonstrate complete guest journeys without transmitting data or taking payment",
    ],
    scope: [
      "Responsive single-page restaurant experience with desktop and mobile navigation",
      "Interactive menus, dish details, room selection, gallery, and print styling",
      "Reservation, private-event, newsletter, and gift-card demonstration flows",
    ],
    decisions: [
      "Paired a warm editorial art direction with compact practical controls, so utility never breaks the evening-focused atmosphere",
      "Used native dialogs, real validation, keyboard-operable tabs, and clear correction states to make the demonstration functional rather than a static mockup",
      "Self-hosted the illustrative photography and typefaces so normal demo use stays inside Cyvexly's own origin and works with the site's production security policy",
    ],
    accessibilityHighlights: [
      "Semantic landmarks, a skip link, native dialogs, visible focus, keyboard tabs, and Escape focus return are built into the experience",
      "Reduced-motion support and a tested 320px reflow state preserve content and controls without horizontal scrolling",
    ],
    intendedOutcome:
      "A prospect can experience how Cyvexly combines brand presence, responsive polish, and complete interaction design—while every fictional fact and non-transmitting workflow remains unmistakably disclosed.",
    demoHref: "/velora",
    gradient: "from-[#20271F] via-[#49332E] to-[#D6BD8F]",
    palette: [
      { hex: "#20271F", label: "Forest evening" },
      { hex: "#F6F3EC", label: "Warm paper" },
      { hex: "#D6BD8F", label: "Antique gold" },
      { hex: "#49332E", label: "Muted wine" },
    ],
    typographyNote:
      "Cormorant Garamond carries the editorial dining voice; Manrope keeps navigation, controls, forms, and disclosure copy crisp and practical.",
  },
  "nexora-systems": {
    name: "Nexora Systems",
    status: "Built concept demo — fictional",
    businessType: "Fictional release-intelligence platform",
    audience: "Data and engineering leads evaluating an analytics platform for their team.",
    challenge:
      "B2B SaaS sites often bury the actual product behind marketing abstraction. Nexora Systems needed to explain a genuinely complex product clearly enough for a technical buyer to self-qualify before booking a demo.",
    goals: [
      "Explain the product's core workflow in plain language before any jargon",
      "Show, not just tell — real product UI excerpts alongside outcome-led copy",
      "Convert qualified technical visitors into demo requests",
    ],
    scope: [
      "Responsive release overview with selectable time ranges and plain-language signal summaries",
      "Service filtering, issue selection, evidence detail, and recommended investigation states",
      "Safe Cyvexly inquiry handoff with no monitoring connection, account, or data transmission",
    ],
    decisions: [
      "Led with the decision an engineering team needs to make, then revealed the supporting signal and release context",
      "Used a darker, denser interface for technical focus while preserving readable hierarchy and generous control targets",
      "Kept every metric deterministic and visibly fictional, with inquiry actions returning to Cyvexly instead of simulating a real account or alerting system",
    ],
    accessibilityHighlights: [
      "The trend graphic has a text equivalent, the dashboard begins with a skip link, and changing an issue updates a polite live region",
      "Time ranges, service filters, issue rows, and the comparison control are keyboard reachable with visible pressed or checked states",
    ],
    intendedOutcome:
      "A technical buyer can use the fictional product flow, understand how Cyvexly organizes dense application information, and reach a relevant project inquiry without mistaking sample data for a live service.",
    demoHref: "/nexora",
    gradient: "from-[#10213D] via-[#0F66E0] to-[#36C7FF]",
    palette: [
      { hex: "#10213D", label: "Midnight slate ground" },
      { hex: "#0F66E0", label: "Cyber blue accent" },
      { hex: "#36C7FF", label: "Ion cyan highlight" },
      { hex: "#46576E", label: "Cool graphite text" },
    ],
    typographyNote:
      "Technical labels use a compact monospace face, while plain supporting type keeps product explanations approachable.",
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
    description: "You send a short inquiry or a detailed brief. We review the goal, timing, and likely fit.",
    clientInput: "A short description of what you need. The detailed Project Planner is optional.",
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

// Short values shown on the About page (vision §6.8).
export const aboutValues = [
  {
    id: "clarity",
    title: "Clarity",
    description: "Plain language and a visible plan, not jargon or a black box.",
  },
  {
    id: "originality",
    title: "Originality",
    description: "A structure and design built for your business, never a reused template.",
  },
  {
    id: "practicality",
    title: "Practicality",
    description: "Every decision has to earn its place by helping the business, not just looking good.",
  },
  {
    id: "ownership",
    title: "Ownership",
    description: "You own your content, design, and site after final payment — no lock-in.",
  },
  {
    id: "continued-care",
    title: "Continued care",
    description: "The relationship doesn't end at launch; care and improvement stay available.",
  },
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
    features: ["Up to 12 core pages", "CMS collections", "Up to two standard integrations", "Three review rounds"],
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
    nextAction: "Ask about strategy",
    nextHref: "/contact?interest=custom-project",
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
    nextHref: "/pricing#packages",
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
    nextHref: "/pricing#packages",
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
    nextHref: "/pricing#add-ons",
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
    nextHref: "/pricing#commerce-package",
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
    nextHref: "/accessibility",
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
    nextHref: "/pricing#care-plans",
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

export const buyerNeeds = [
  {
    id: "new-business-website",
    eyebrow: "A new business website",
    title: "Launch a credible site that makes the next step obvious.",
    description:
      "For new businesses and established teams without a useful web presence. We shape the message, page plan, visual direction, build, and inquiry path together.",
    startingPoint: "Signal from $1,800 · Orbit from $3,500",
    detailHref: "/services/business-websites",
    detailLabel: "Explore business websites",
    inquiryHref: "/contact?interest=custom-project",
    proofHref: "/work/velora-dining",
    proofLabel: "See the built Velora example",
  },
  {
    id: "improve-existing-website",
    eyebrow: "Improve an existing website",
    title: "Replace a dated or confusing site with a clearer customer journey.",
    description:
      "For businesses whose current site no longer reflects the quality of their work, performs poorly on phones, or makes services difficult to understand.",
    startingPoint: "Often Orbit from $3,500 or Nexus from $5,800",
    detailHref: "/services/website-redesigns",
    detailLabel: "Explore website redesigns",
    inquiryHref: "/contact?interest=custom-project",
  },
  {
    id: "sell-or-book-online",
    eyebrow: "Sell or take bookings online",
    title: "Connect presentation, booking, checkout, and the tools behind them.",
    description:
      "For stores, hospitality businesses, and service teams that need customers to move from interest to a real booking or purchase flow.",
    startingPoint: "Commerce from $8,500",
    detailHref: "/services/ecommerce-websites",
    detailLabel: "Explore commerce websites",
    inquiryHref: "/contact?interest=commerce-package",
    proofHref: "/work/velora-dining",
    proofLabel: "See Velora's booking journey",
  },
  {
    id: "custom-web-application",
    eyebrow: "A custom web application",
    title: "Plan a purpose-built workflow that a standard website cannot cover.",
    description:
      "For memberships, advanced booking, multilingual experiences, large migrations, integrations, and other operational workflows that need discovery before a quote.",
    startingPoint: "Quoted after discovery",
    detailHref: "/pricing#custom-system-package",
    detailLabel: "See the custom-system approach",
    inquiryHref: "/contact?interest=custom-system",
  },
  {
    id: "ongoing-website-support",
    eyebrow: "Ongoing website support",
    title: "Keep the site current without making upkeep another job.",
    description:
      "For teams that want a defined monthly capacity for maintenance, content changes, design support, and measured improvement after launch.",
    startingPoint: "Care plans from $99/month",
    detailHref: "/services/website-care",
    detailLabel: "Explore website care",
    inquiryHref: "/contact?interest=custom-project",
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
      "No. Send a short inquiry with what you want the website to accomplish and we'll recommend the right combination. The detailed Project Planner is optional when you want to share more.",
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
    plainName: "Focused starter website",
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
    contentEditing: "Available as an add-on",
    integrations: "One primary form",
    revisions: "Two review rounds",
    featured: false,
  },
  {
    name: "Orbit",
    plainName: "Small-business website",
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
    contentEditing: "Basic CMS or blog",
    integrations: "Two forms",
    revisions: "Two review rounds",
    featured: true,
  },
  {
    name: "Nexus",
    plainName: "Larger content site or redesign",
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
    contentEditing: "CMS collections and training",
    integrations: "Up to two standard integrations",
    revisions: "Three review rounds",
    featured: false,
  },
  {
    name: "Commerce",
    plainName: "Online store or booking-led website",
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
    contentEditing: "Catalog tools and training",
    integrations: "Checkout plus approved store services",
    revisions: "Defined in the proposal",
    featured: false,
  },
  {
    name: "Custom system",
    plainName: "Purpose-built web application",
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
    contentEditing: "Defined during discovery",
    integrations: "Defined during discovery",
    revisions: "Defined in the proposal",
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
      "Monitoring and maintenance where applicable, one small content request, and a monthly check. We respond within two business days.",
  },
  {
    name: "Care+",
    price: "$229/mo",
    use: "Businesses that update regularly",
    capacity:
      "Up to two hours of content or design support, a quarterly site review, and an analytics snapshot. Priority requests receive a response within one business day.",
  },
  {
    name: "Evolve",
    price: "$449/mo",
    use: "Continuous improvement",
    capacity:
      "Up to five hours of prioritized updates, a monthly review, and conversion or content recommendations. Priority requests receive a response within one business day.",
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
      "We're finalizing our payment provider for United States clients. Once it's active, your proposal and invoice will state exactly which methods are accepted — no payment is ever requested before a signed agreement and invoice.",
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
      "Send a short inquiry and tell us what's uncertain — we'll recommend the right scope instead of guessing. Use the detailed Planner only when you're ready to share more.",
  },
];

export const contactTopics = [
  "Project inquiry",
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
      "A short description of your goal is enough to start the conversation. If you already know the pages, features, or brand assets involved, you can include them in the detailed Planner.",
  },
  {
    question: "Will I be able to update my website myself?",
    answer:
      "Most projects include an editable CMS or content workflow scoped to your plan and comfort level, with training included at handoff — the exact editable areas are agreed before build.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Every project includes 14 days of post-launch defect support, and optional monthly Care plans for continued updates.",
  },
  {
    question: "Do you work with businesses outside my industry?",
    answer:
      "Yes. Cyvexly works remotely with service businesses, professionals, startups, creators, and online stores across the United States.",
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
          "If you need a custom, strategy-led website rather than a template or DIY builder, we're likely a fit. Send a short inquiry and we'll tell you honestly if we're not the right match.",
      },
      {
        question: "What types of websites do you build?",
        answer:
          "Business and professional-services sites, redesigns, landing pages, e-commerce stores, and — case by case — more complex custom systems like memberships or booking platforms.",
      },
      {
        question: "How do I start a project?",
        answer:
          "Send a short inquiry with your name, email, and what you're considering. We respond within two business days with a fit confirmation and any clarifying questions; the detailed Planner is optional.",
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
          "We're finalizing our payment provider for United States clients. Once it's active, your proposal and invoice will state exactly which methods are accepted — no payment is ever requested before a signed agreement and invoice.",
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
          "Sometimes, for a 20–30% rush fee when our schedule allows it. Mention your target date in a short inquiry or the detailed Planner and we'll confirm honestly.",
      },
    ],
  },
  {
    category: "What you need to provide",
    items: [
      {
        question: "What do you need from me to get started?",
        answer:
          "A rough goal and your contact details are enough for the first conversation. Before a proposal, we'll confirm pages, features, and available brand assets; the detailed Planner lets you share those early if you want.",
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
    category: "Service area & time zones",
    items: [
      {
        question: "Do you work with clients outside Indiana?",
        answer:
          "Yes — Cyvexly works remotely with businesses across the United States. At launch, Cyvexly serves United States clients only.",
      },
      {
        question: "How do you handle different time zones?",
        answer:
          "We confirm your time zone before scheduling check-ins or calls and plan the communication rhythm around it.",
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
