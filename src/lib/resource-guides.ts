export type ResourceGuidePoint = {
  title: string;
  text: string;
};

export type ResourceGuideSection = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  points?: ResourceGuidePoint[];
  note?: string;
};

export type ResourceGuideTable = {
  title: string;
  intro: string;
  columns: [string, string, string, string];
  rows: [string, string, string, string][];
  note: string;
};

export type ResourceGuideLink = {
  label: string;
  description: string;
  href: string;
};

export type ResourceGuide = {
  slug: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  published: string;
  updated: string;
  readTime: string;
  quickAnswer: string;
  quickPoints: string[];
  table?: ResourceGuideTable;
  sections: ResourceGuideSection[];
  related: ResourceGuideLink[];
  inquiryInterest: string;
};

export const resourceGuides = {
  "small-business-website-cost": {
    slug: "small-business-website-cost",
    eyebrow: "Website budget guide",
    title: "What does a custom small-business website cost?",
    shortTitle: "Small-business website cost",
    summary:
      "A practical way to understand website pricing, compare quotes, and decide which scope belongs in your first release.",
    seoTitle: "Small-Business Website Cost Guide | Cyvexly Studio",
    seoDescription:
      "See what changes custom website cost, how Cyvexly's $1,800–$8,500 starting packages differ, and which expenses sit outside the project fee.",
    published: "2026-09-13",
    updated: "September 13, 2026",
    readTime: "8-minute guide",
    quickAnswer:
      "Cyvexly website projects currently start at $1,800 for a focused 1–3 page site, $3,500 for a complete small-business website, $5,800 for a larger content site or strategic redesign, and $8,500 for a commerce or booking-led website. Custom applications are quoted after discovery. These are starting points—not universal prices or a quote for your project.",
    quickPoints: [
      "The number of pages matters, but content, integrations, migration, and decision speed can matter just as much.",
      "A lower starting price is useful only when the scope still includes the work your business needs.",
      "Your proposal should separate the project fee from hosting, domain, licenses, provider fees, and optional ongoing care.",
    ],
    table: {
      title: "Cyvexly's current starting points",
      intro:
        "Use these packages as comparison anchors. The final scope, timeline, and price are confirmed in a written proposal before work begins.",
      columns: ["Starting point", "Current price", "Typical scope", "Typical window"],
      rows: [
        ["Signal", "$1,800", "1–3 focused pages", "2–3 weeks"],
        ["Orbit", "$3,500", "Up to 7 core pages", "4–6 weeks"],
        ["Nexus", "$5,800", "Up to 12 core pages or redesign", "6–9 weeks"],
        ["Commerce", "$8,500", "Storefront or booking journey", "8–14+ weeks"],
        ["Custom application", "Quoted after discovery", "Purpose-built workflow", "Scope dependent"],
      ],
      note:
        "Starting prices are current as of September 13, 2026. They are not market averages and do not include every outside subscription or optional service.",
    },
    sections: [
      {
        id: "cost-drivers",
        eyebrow: "Scope before price",
        title: "The six decisions that change website cost",
        paragraphs: [
          "A useful estimate begins with the job the website must do. Two seven-page websites can require very different effort if one presents straightforward services and the other needs gated resources, a booking journey, or a large content migration.",
          "Before comparing totals, make sure each proposal is responding to the same business need and the same definition of completion.",
        ],
        points: [
          {
            title: "Page and template count",
            text: "A unique page needs its own content hierarchy and review. Reusable article, service, or product templates can handle repeated content more efficiently, but still need deliberate setup.",
          },
          {
            title: "Content readiness",
            text: "Organized, approved copy and images reduce uncertainty. Copy editing, full copywriting, photo direction, and asset cleanup add real work when the source material is incomplete.",
          },
          {
            title: "Features and integrations",
            text: "A contact form is different from booking rules, payments, customer accounts, CRM automation, multilingual content, or a custom operational workflow.",
          },
          {
            title: "Migration",
            text: "Moving clean content is simpler than untangling an old site with duplicate pages, inconsistent formatting, missing media, or search URLs that need careful redirects.",
          },
          {
            title: "Design depth",
            text: "A light visual direction costs less than a full custom system with original components, motion, art direction, and multiple complex page states.",
          },
          {
            title: "Timeline and review flow",
            text: "A realistic schedule leaves room for decisions and corrections. Rush work or delayed approvals can change staffing, sequence, and cost.",
          },
        ],
      },
      {
        id: "first-release",
        eyebrow: "Budget control",
        title: "Choose the smallest complete first release",
        paragraphs: [
          "Budget control does not mean stripping away the reason the website exists. It means separating the first complete buyer journey from ideas that can safely wait.",
          "For a service business, that first release may be Home, Services, About, proof, FAQs, and a working inquiry path. A store or booking business usually needs additional operational decisions before it can launch responsibly.",
        ],
        points: [
          {
            title: "Must work at launch",
            text: "The pages, actions, and integrations a visitor needs to understand the offer and take the next step.",
          },
          {
            title: "Useful soon after launch",
            text: "Resources, secondary landing pages, automation, or richer content that can be added once the core journey is proven.",
          },
          {
            title: "Future possibility",
            text: "Ideas that should not complicate the initial architecture until the business case, content, or operating process is ready.",
          },
        ],
        note:
          "A smaller first release should still be responsive, accessible, testable, and ready to represent the business. It should not be a knowingly broken preview.",
      },
      {
        id: "outside-costs",
        eyebrow: "No surprise categories",
        title: "Costs that may sit outside the project fee",
        paragraphs: [
          "A responsible quote distinguishes the studio's work from costs charged by other providers. Depending on the project, those may include domain registration, hosting, premium fonts or assets, plugins, booking or commerce services, payment-processing fees, email or CRM subscriptions, photography, translation, specialized legal work, and applicable taxes.",
          "Ask who creates each account, who owns it, how renewals are billed, and what happens if you stop working with the studio. Cyvexly's approach is to identify these costs separately rather than burying them inside an unexplained total.",
        ],
      },
      {
        id: "compare-quotes",
        eyebrow: "Apples-to-apples review",
        title: "How to compare website proposals",
        paragraphs: [
          "The cheapest total can become expensive when essential work is missing. The highest total is not automatically the most complete. Compare the named deliverables and operating assumptions behind each number.",
        ],
        points: [
          {
            title: "Defined pages and features",
            text: "Look for a page or template count, form and integration details, content responsibilities, and the specific launch outcome.",
          },
          {
            title: "Review and change process",
            text: "Confirm how many review rounds are included and how additions outside the agreed scope receive price and timing approval.",
          },
          {
            title: "Ownership and access",
            text: "Know who owns the finished work, domain, hosting, analytics, and provider accounts—and whether you receive the access needed to operate them.",
          },
          {
            title: "Launch and support",
            text: "Confirm testing, redirects when relevant, analytics connection, training or handoff, post-launch defect support, and the boundary between warranty and ongoing care.",
          },
        ],
      },
    ],
    related: [
      {
        label: "Compare Cyvexly packages",
        description: "See current package scope, add-ons, ongoing costs, and payment milestones.",
        href: "/pricing",
      },
      {
        label: "See what a project includes",
        description: "Walk through the baseline work from planning through launch and handoff.",
        href: "/resources/what-custom-website-includes",
      },
      {
        label: "Choose a service starting point",
        description: "Match your business need to a focused website, redesign, commerce, or application path.",
        href: "/services",
      },
    ],
    inquiryInterest: "website-budget",
  },
  "what-custom-website-includes": {
    slug: "what-custom-website-includes",
    eyebrow: "Website scope guide",
    title: "What should a custom website project include?",
    shortTitle: "What a custom website includes",
    summary:
      "A stage-by-stage checklist for understanding planning, design, development, launch, ownership, and the items that need separate scope.",
    seoTitle: "What Is Included in a Custom Website? | Cyvexly Studio",
    seoDescription:
      "Use this practical custom website checklist to understand strategy, design, development, testing, launch, ownership, support, and common add-ons.",
    published: "2026-09-13",
    updated: "September 13, 2026",
    readTime: "9-minute guide",
    quickAnswer:
      "A complete custom website project should define the business goal, page plan, content responsibilities, responsive design, accessible interactions, functional development, forms and integrations, search basics, testing, launch, ownership, and post-launch support. The proposal should also name what is not included so neither side has to guess.",
    quickPoints: [
      "The deliverable is a working buyer journey, not merely a collection of attractive screens.",
      "Content, third-party subscriptions, advanced integrations, migration, and ongoing updates need explicit ownership.",
      "Acceptance, account access, handoff, and post-launch support should be understood before work begins.",
    ],
    table: {
      title: "A complete project in four stages",
      intro:
        "The exact deliverables change with scope, but every proposal should make these stages understandable.",
      columns: ["Stage", "Primary decision", "Typical evidence", "Owner involvement"],
      rows: [
        ["Plan", "What the site must accomplish", "Goals, audience, sitemap, content plan", "Confirm priorities and source material"],
        ["Design", "How the journey communicates", "Responsive layouts, hierarchy, interaction states", "Review the real content and decisions"],
        ["Build", "How the experience works", "Functional pages, forms, integrations, testing", "Supply account access and test key flows"],
        ["Launch", "What is ready to publish", "QA record, approvals, analytics, handoff", "Approve launch and retain account access"],
      ],
      note:
        "Cyvexly names the exact pages, features, review rounds, timeline, price, and acceptance points in the proposal for each project.",
    },
    sections: [
      {
        id: "planning",
        eyebrow: "Stage 1",
        title: "Planning turns a request into a buildable scope",
        paragraphs: [
          "A custom project should begin with the business decision the website needs to support: explain a service, build trust, generate inquiries, accept bookings, sell products, or coordinate a more complex workflow. That goal shapes the pages, content, features, and primary calls to action.",
          "Cyvexly's baseline includes a defined goal and primary action plus a sitemap or page plan. Larger projects may require deeper discovery, content inventory, migration planning, user roles, acceptance criteria, or phased delivery.",
        ],
        points: [
          {
            title: "Audience and decision",
            text: "Who is the page for, what do they need to understand, and what useful next step should they be able to take?",
          },
          {
            title: "Page and content plan",
            text: "Which pages or reusable templates are needed, who supplies the source material, and what must be written, edited, migrated, or created?",
          },
          {
            title: "Functional requirements",
            text: "Which forms, accounts, booking, commerce, data, or integrations are truly required for launch?",
          },
          {
            title: "Approval and acceptance",
            text: "Who makes decisions, how review rounds work, and what evidence shows each stage is complete?",
          },
        ],
      },
      {
        id: "design",
        eyebrow: "Stage 2",
        title: "Design includes decisions beyond appearance",
        paragraphs: [
          "Custom design should organize real content, not decorate placeholder blocks. It defines hierarchy, navigation, page rhythm, trust signals, calls to action, and the states a visitor sees when something succeeds, fails, expands, or changes.",
          "Cyvexly's package baseline includes custom styling aligned to the brand, responsive desktop/tablet/mobile behavior, and an accessible interaction and content target. Visual identity development, advanced motion, original photography, or illustration can be added when the project needs them.",
        ],
        points: [
          {
            title: "Responsive behavior",
            text: "The design must deliberately reflow across screen sizes rather than simply shrink a desktop composition.",
          },
          {
            title: "Readable hierarchy",
            text: "Headings, supporting copy, proof, and actions should help a buyer scan first and understand more when they continue.",
          },
          {
            title: "Accessible interaction",
            text: "Keyboard use, focus, labels, contrast, error explanation, motion preferences, and semantic structure belong in the experience—not in a last-minute checklist.",
          },
        ],
      },
      {
        id: "development",
        eyebrow: "Stage 3",
        title: "Development makes the promised journey real",
        paragraphs: [
          "The build should reproduce the approved system with maintainable components, real content, working navigation, functional forms, and honest success and failure states. Integrations should be tested against the accounts and permissions that will exist in production.",
          "Cyvexly's baseline includes functional forms, clear confirmation and error states, essential page titles and descriptions for agreed pages, favicon and social-sharing direction, and an analytics connection when the client supplies or authorizes the account.",
        ],
        points: [
          {
            title: "Content-complete pages",
            text: "Real headings, images, links, forms, policies, and calls to action should be present before acceptance—not hidden behind a promise to finish later.",
          },
          {
            title: "Production states",
            text: "Loading, empty, invalid, successful, unavailable, and provider-failure states need understandable behavior where they apply.",
          },
          {
            title: "Quality checks",
            text: "Responsive layout, keyboard operation, form correction, metadata, links, performance, and key buyer paths should be tested in proportion to project risk.",
          },
        ],
      },
      {
        id: "launch-handoff",
        eyebrow: "Stage 4",
        title: "Launch should include ownership and a clean handoff",
        paragraphs: [
          "Publishing is a controlled transition, not the moment a developer first discovers how the production environment behaves. Domain routing, security, forms, analytics, search controls, redirects, and third-party settings should be checked for the agreed scope.",
          "Cyvexly's baseline includes a pre-launch review, client approval, handoff and ownership terms, launch support, and 14 days of post-launch defect support. Ongoing content, maintenance, and improvements are separate unless the proposal or a care plan includes them.",
        ],
        points: [
          {
            title: "Accounts and access",
            text: "The client should know which accounts they own, which credentials remain private, and how to reach the domain, hosting, analytics, content, and provider settings they need.",
          },
          {
            title: "Definition of a defect",
            text: "Post-launch defect support should cover agreed behavior that is not working; new pages, changed requirements, and ongoing content are different kinds of work.",
          },
          {
            title: "Improvement path",
            text: "A useful handoff identifies sensible next work without pretending every future idea belongs in the launch scope.",
          },
        ],
      },
      {
        id: "separate-scope",
        eyebrow: "Read the exclusions",
        title: "Items that often need separate scope",
        paragraphs: [
          "Full copywriting, large migrations, brand identity, original photography or video, translation, advanced animation, customer accounts, custom applications, accessibility remediation beyond the agreed build, and complex booking, commerce, CRM, email, or automation work are not safe to assume from the words “custom website.”",
          "Domain, hosting, fonts, assets, provider subscriptions, payment-processing fees, and specialized legal or compliance work may also be billed by outside providers. A clear proposal names these boundaries and the person responsible for each prerequisite.",
        ],
        note:
          "If a proposal is silent about an important item, treat it as a question—not as an inclusion.",
      },
      {
        id: "proposal-check",
        eyebrow: "Before signing",
        title: "Seven questions your proposal should answer",
        paragraphs: [
          "You should be able to answer these without reconstructing the project from emails or sales calls.",
        ],
        points: [
          { title: "Outcome", text: "What business goal and primary visitor action define success for this release?" },
          { title: "Deliverables", text: "Which pages, templates, features, integrations, and content services are included?" },
          { title: "Responsibilities", text: "What must the client and studio each supply, decide, approve, or configure?" },
          { title: "Schedule", text: "What are the stages, dependencies, review windows, and target launch conditions?" },
          { title: "Price", text: "What is the project fee, what is billed separately, and how are out-of-scope changes approved?" },
          { title: "Ownership", text: "Who owns the finished work and provider accounts, and what access is handed over?" },
          { title: "After launch", text: "What defect support, training, maintenance, and future improvement options are included or available?" },
        ],
      },
    ],
    related: [
      {
        label: "Understand website cost",
        description: "See which decisions change price and how to compare proposals responsibly.",
        href: "/resources/small-business-website-cost",
      },
      {
        label: "See Cyvexly's process",
        description: "Follow the path from fit and scope through design, build, launch, and support.",
        href: "/process",
      },
      {
        label: "Explore service starting points",
        description: "Choose the business need that sounds most like your project.",
        href: "/services",
      },
    ],
    inquiryInterest: "project-scope",
  },
} satisfies Record<string, ResourceGuide>;

export type ResourceGuideSlug = keyof typeof resourceGuides;

export function isResourceGuideSlug(slug: string): slug is ResourceGuideSlug {
  return slug in resourceGuides;
}
