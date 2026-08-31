export type ServiceDetail = {
  slug: string;
  name: string;
  eyebrow: string;
  headline: string;
  summary: string;
  problem: string;
  outcome: string;
  included: string[];
  clientInputs: string[];
  scopeFactors: string[];
  package: {
    name: string;
    price: string;
    timing: string;
    note: string;
  };
  example: {
    slug: "aurora-spaces" | "nexora-systems" | "vellora-care";
    name: string;
    context: string;
  };
  faqs: { question: string; answer: string }[];
};

export const serviceDetails = {
  "business-websites": {
    slug: "business-websites",
    name: "Business websites",
    eyebrow: "A clear, credible digital home",
    headline: "Turn your expertise into a website people understand and trust.",
    summary:
      "A complete website for a service business or professional team, shaped around the questions clients ask before they inquire.",
    problem:
      "Your business may be strong while your website feels vague, dated, or difficult to navigate. Visitors cannot quickly tell what you do, who it is for, or why they should choose you.",
    outcome:
      "A focused, responsive site that explains your value, makes services easy to scan, and gives qualified visitors a confident next step.",
    included: [
      "Goals, audience, sitemap, and conversion-path planning",
      "Custom visual direction aligned to your brand",
      "Responsive design and development for agreed pages",
      "Inquiry forms with clear success and error states",
      "Essential page titles, descriptions, analytics, and launch checks",
      "Owner handoff and 14 days of post-launch defect support",
    ],
    clientInputs: [
      "Business goals, primary audiences, and key services",
      "Brand assets or examples of the direction you want",
      "Page copy, photography, and proof points — or a plan for creating them",
      "Timely feedback from the people approving the work",
    ],
    scopeFactors: [
      "Number of pages and unique page layouts",
      "Copywriting, content migration, or photography needs",
      "CMS, booking, CRM, or other integrations",
      "Approval speed and any fixed launch date",
    ],
    package: {
      name: "Orbit",
      price: "From $3,500",
      timing: "Typically 4–6 weeks",
      note: "A common starting point for a complete small-business or professional-services website. Final scope is confirmed in writing.",
    },
    example: {
      slug: "aurora-spaces",
      name: "Aurora Spaces",
      context:
        "A labeled concept showing how a specialist studio can lead with authority, restrained navigation, and one clear consultation path.",
    },
    faqs: [
      {
        question: "How many pages does a business website include?",
        answer:
          "Orbit includes up to seven core pages. Fewer or additional pages can be scoped around your actual content and visitor journey.",
      },
      {
        question: "Can you help organize our services and copy?",
        answer:
          "Yes. Content structure is part of every project. Copy editing or full copywriting can be added when you need more hands-on support.",
      },
      {
        question: "Will we be able to update the site ourselves?",
        answer:
          "When regular updates are part of the brief, we can include an appropriate CMS and owner handoff. The exact editable areas are agreed before build.",
      },
    ],
  },
  "website-redesigns": {
    slug: "website-redesigns",
    name: "Website redesigns",
    eyebrow: "A strategic rebuild, not a surface reskin",
    headline: "Replace an outdated website with a clearer path to action.",
    summary:
      "A structured redesign for an established business whose current site no longer reflects its quality, offer, or customer journey.",
    problem:
      "Your current site may have accumulated unclear pages, dated visuals, mobile friction, or content that no longer matches the business. Changing colors alone will not solve the underlying structure.",
    outcome:
      "A modern system that preserves what still works, resolves the important usability gaps, and makes the next version easier to maintain.",
    included: [
      "Current-site review and content inventory",
      "Revised sitemap, page priorities, and conversion paths",
      "New responsive visual and component system",
      "Development, content placement, and agreed migration",
      "Redirect and launch planning for replaced URLs",
      "Quality review, owner handoff, and launch support",
    ],
    clientInputs: [
      "Access to the current site, analytics, and editable content where available",
      "A clear view of what has changed in the business",
      "Known customer questions, complaints, and high-value pages",
      "A decision on content that should be kept, rewritten, or retired",
    ],
    scopeFactors: [
      "Current page and content volume",
      "Migration condition, redirect needs, and CMS complexity",
      "New features or integrations added during the redesign",
      "Brand work required before the website direction can settle",
    ],
    package: {
      name: "Nexus",
      price: "From $5,800",
      timing: "Typically 6–9 weeks",
      note: "A common starting point for a strategic redesign with deeper structure, custom components, and a migration allowance.",
    },
    example: {
      slug: "nexora-systems",
      name: "Nexora Systems",
      context:
        "A labeled concept showing how a complex offer can be reorganized around plain-language outcomes and visible product proof.",
    },
    faqs: [
      {
        question: "Do we have to replace every part of our current site?",
        answer:
          "No. The first review identifies useful content and functionality worth preserving, then separates it from the parts creating confusion or friction.",
      },
      {
        question: "Can you migrate our existing content?",
        answer:
          "Yes. Nexus includes a migration allowance. Larger, inconsistent, or highly structured libraries are quoted by volume and condition.",
      },
      {
        question: "What happens to our current search rankings?",
        answer:
          "We plan page titles, descriptions, URL changes, and redirects for the agreed scope. No studio can guarantee rankings, but avoidable launch losses should not be left to chance.",
      },
    ],
  },
  "landing-pages": {
    slug: "landing-pages",
    name: "Landing pages",
    eyebrow: "One offer, one audience, one clear action",
    headline: "Give your campaign a focused place to convert attention into action.",
    summary:
      "A purpose-built landing page for a launch, event, campaign, or single service — without the distractions of a full website journey.",
    problem:
      "Campaign traffic often lands on a general page that asks visitors to interpret too much. The message, proof, and action compete with unrelated navigation and content.",
    outcome:
      "A fast, responsive page that keeps one audience moving from the promise to the evidence and into one measurable action.",
    included: [
      "Offer, audience, and conversion-goal definition",
      "Page outline and content hierarchy",
      "Custom responsive design and development",
      "One primary form or agreed conversion action",
      "Essential metadata and analytics connection",
      "Launch checks and a 14-day defect-support window",
    ],
    clientInputs: [
      "The campaign, offer, event, or service being promoted",
      "One primary audience and one desired action",
      "Proof points, offer details, and required disclaimers",
      "Brand assets plus the traffic source and launch date",
    ],
    scopeFactors: [
      "Copywriting and asset-production needs",
      "Form, payment, scheduling, or CRM integrations",
      "Advanced motion or custom interactive sections",
      "Rush scheduling and the readiness of campaign content",
    ],
    package: {
      name: "Signal",
      price: "From $1,800",
      timing: "Typically 2–3 weeks",
      note: "A focused starting point for one to three core pages, one primary form, responsive design, and essential launch setup.",
    },
    example: {
      slug: "nexora-systems",
      name: "Nexora Systems",
      context:
        "A labeled concept demonstrating outcome-first copy, compact product proof, and a direct demo-request path for a focused technical audience.",
    },
    faqs: [
      {
        question: "Is a landing page the same as a one-page website?",
        answer:
          "They can look similar, but a landing page is shaped around one campaign and action. A one-page business site usually has to explain a broader company and may serve several visitor needs.",
      },
      {
        question: "Can the page connect to our CRM or email platform?",
        answer:
          "Yes. Standard connections can be scoped once we know the platform, required fields, consent language, and follow-up workflow.",
      },
      {
        question: "Can you guarantee a conversion rate?",
        answer:
          "No. Results depend on the offer, audience, traffic quality, and sales process. We build a clear measurable path and can use real performance data for later improvement.",
      },
    ],
  },
  "ecommerce-websites": {
    slug: "ecommerce-websites",
    name: "E-commerce websites",
    eyebrow: "A store planned around trust and checkout",
    headline: "Make products easier to understand, choose, and buy.",
    summary:
      "A commerce site for a small-to-medium catalog, designed around product clarity, operational requirements, and a calm route to purchase.",
    problem:
      "A store can look polished and still lose customers through weak product information, confusing collections, unexpected checkout requirements, or an operations plan that arrives too late.",
    outcome:
      "A responsive storefront that connects product presentation to checkout while making shipping, tax, content, and owner workflows part of the plan from the start.",
    included: [
      "Store, collection, product, cart, and checkout structure",
      "Custom responsive storefront design and development",
      "Initial catalog allowance and product-data planning",
      "Payment, shipping, and tax requirement review",
      "Policy placement and transactional-experience review",
      "Analytics, training, launch checks, and launch support",
    ],
    clientInputs: [
      "Product catalog, variants, pricing, inventory, and imagery",
      "Shipping regions, rates, tax requirements, and return approach",
      "Payment-provider and platform account access at the agreed stage",
      "Final product, policy, and customer-service content",
    ],
    scopeFactors: [
      "Catalog size, variants, bundles, and migration condition",
      "Subscriptions, memberships, accounts, or unusual checkout rules",
      "Shipping, tax, fulfillment, and third-party integrations",
      "Product-entry, photography, copy, and policy-support needs",
    ],
    package: {
      name: "Commerce",
      price: "From $8,500",
      timing: "Typically 8–14+ weeks",
      note: "A starting point for a small-to-medium online store. Platform fees, payment processing, and third-party subscriptions are separate.",
    },
    example: {
      slug: "vellora-care",
      name: "Vellora Care",
      context:
        "A labeled commerce concept combining ingredient clarity, collection browsing, and a short route from product evaluation to checkout.",
    },
    faqs: [
      {
        question: "Which commerce platform do you use?",
        answer:
          "The recommendation follows your catalog, editing workflow, integrations, and operating requirements. We do not force every store into the same platform before discovery.",
      },
      {
        question: "Are platform and payment fees included?",
        answer:
          "No. Hosting or platform subscriptions, payment-processing fees, premium apps, and other third-party services are billed separately.",
      },
      {
        question: "Can you enter all of our products?",
        answer:
          "Commerce includes an initial catalog allowance. Additional product entry or a larger migration is quoted by volume, variants, and source-data condition.",
      },
    ],
  },
  "website-care": {
    slug: "website-care",
    name: "Website care",
    eyebrow: "A dependable lane for post-launch changes",
    headline: "Keep your website current without turning upkeep into your job.",
    summary:
      "Ongoing maintenance, content support, and prioritized improvement for businesses that want a reliable owner-led point of contact after launch.",
    problem:
      "Small updates linger, software and content age, and nobody owns the routine checks. The site slowly becomes less accurate and less useful even when the business keeps moving.",
    outcome:
      "A defined monthly support lane with clear capacity and response priority, so maintenance and improvements are handled deliberately instead of becoming emergencies.",
    included: [
      "Monitoring and maintenance where applicable",
      "A defined monthly content or design-support capacity",
      "Troubleshooting and prioritized update requests",
      "Site or analytics review at the plan's stated cadence",
      "Recommendations appropriate to the selected plan",
      "A clear queue for work that exceeds monthly capacity",
    ],
    clientInputs: [
      "Website and platform access appropriate to the requested work",
      "A prioritized request with final copy and assets",
      "One point of contact for approvals",
      "Relevant vendor or account access when an issue crosses systems",
    ],
    scopeFactors: [
      "Selected monthly capacity and response priority",
      "Platform condition and whether Cyvexly built the original site",
      "Requests that require new features, redesign, or third-party specialists",
      "Urgent incidents or work beyond the plan's monthly allowance",
    ],
    package: {
      name: "Care",
      price: "From $99/mo",
      timing: "Ongoing, billed monthly in advance",
      note: "Care starts with basic peace of mind. Care+ and Evolve add more support capacity, review depth, and priority.",
    },
    example: {
      slug: "vellora-care",
      name: "Vellora Care",
      context:
        "A labeled concept illustrating the kind of product and content system that benefits from deliberate ongoing updates; it is not presented as a client care engagement.",
    },
    faqs: [
      {
        question: "Do I need a care plan for a site Cyvexly builds?",
        answer:
          "No. Every project includes 14 days of post-launch defect support. A care plan is for ongoing updates, maintenance, or improvement after that window.",
      },
      {
        question: "Can you care for a website built by someone else?",
        answer:
          "Often, yes. We first review the platform, access, condition, and known issues so both sides understand what can be supported responsibly.",
      },
      {
        question: "What if a request is larger than my monthly allowance?",
        answer:
          "We identify the extra scope before proceeding and recommend a separate quote, a later month, or a higher-capacity plan — never an unannounced overage.",
      },
    ],
  },
} as const satisfies Record<string, ServiceDetail>;

export type ServiceSlug = keyof typeof serviceDetails;

export function isServiceSlug(value: string): value is ServiceSlug {
  return value in serviceDetails;
}
