# Cyvexly App Debt — Round 29 Resolved-Section Archive

Archived round 35 to keep `CYVEXLY_APP_DEBT.md` under its 30720-byte
hot-file cap. This is the full, unedited "Resolved round 29" section.

## Resolved round 29

- **Public contact identity replaced sitewide.** `src/lib/site-config.ts`'s
  `siteConfig.email` changed from the stale `hello@cyvexly.com` to the
  Owner-confirmed `design@cyvexly.com`; added `phoneDisplay` (`"(317)
  572-5780"`) and `phoneHref` (`"tel:+13175725780"`). Since Contact,
  Planner, and the footer all read `siteConfig.email` rather than a
  hardcoded string, the change propagates automatically. Added the new
  phone as a visible `tel:` link next to email on `/contact` (`src/app/
  contact/page.tsx`) and in the footer's Contact column (`src/components/
  site-footer.tsx`). Verified in the real production build output
  (`.next/server/app/contact.html`, `footer` markup on every page): both
  `design@cyvexly.com` and `tel:+13175725780` / `(317) 572-5780` render
  correctly; zero remaining `hello@cyvexly` references anywhere in built
  HTML (grep-verified).
- **United States-only truth audit — "worldwide"/international-market and
  unsupported payment-method claims removed.** Owner direction
  `2026-09-04-14` requires removing stale worldwide/international language
  and any claim that a specific payment method is presently active before a
  provider is authorized (vision §8 is explicit: "the public site must not
  state or imply that a specific payment method is presently operational").
  A repo-wide grep for `worldwide`, `international`, and specific payment
  brand names (`Venmo`, `PayPal`, `Apple Pay`, `Google Pay`, `ACH`, `bank
  wire`, `installment`) found six worldwide/international-market
  occurrences and three payment-method-claim occurrences across
  `src/lib/site-config.ts` (Home/FAQ preview line, the FAQ library's
  "International clients" category, `pricingFaq`, and `faqLibrary`'s
  "Pricing & payment" category), `src/app/page.tsx` and
  `src/app/opengraph-image.tsx` (both had the same "Available worldwide"
  hero/OG line), `src/components/site-footer.tsx` ("Remote & worldwide"),
  and `src/app/pricing/page.tsx` (an inline payment-methods paragraph
  duplicating the FAQ claim). All were rewritten to state United
  States-only availability truthfully and to describe the payment-method
  decision honestly as pending provider selection — proposals/invoices will
  state exactly which methods are active once a provider is authorized, and
  no payment is ever requested before a signed agreement and invoice. The
  FAQ library's "International clients" category was renamed "Service area
  & time zones" with its first question/answer rewritten to state
  Indiana/United States-only service rather than removed outright, since the
  time-zone-coordination question underneath it remains accurate and useful.
  Re-verified via the real production build: zero `worldwide` or
  `hello@cyvexly` matches remain in any generated route's HTML.
- **`metadataBase` and `sitemap.xml` closed** — see `CYVEXLY_APP_DEBT.md`
  item 1, Round 29 update.
- **Verification:** `pnpm exec tsc --noEmit`, `pnpm run lint`, and
  `pnpm run build` (24 routes including the new `/sitemap.xml`) all pass
  clean. This unattended scheduled-task session cannot open the visible
  in-app Browser (dev-server preview is blocked for unattended sessions —
  see the tool's own refusal message), so visual/rendered proof relies on
  the real production build's generated static HTML/XML output rather than
  a live screenshot; the next attended Builder round should still open the
  public Render site to confirm the same result visually.
- **Not touched this round:** the About page and Privacy/Terms drafts (both
  built round 30, see above), the real server-side email delivery path
  (item 2), and Chunk 5's domain/DNS, analytics, and QA workstreams remain
  open. This round is one bounded workstream (contact-identity truth +
  metadata/sitemap), not a claim that Chunk 5 is complete.
