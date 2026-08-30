# Cyvexly App Debt

## Open

1. **About page needs Owner-supplied founder identity.** Vision §6.8 requires
   an honest first-person founder story, a real name, and a portrait/
   distinctive studio image. No Builder round has this information and must
   not invent a founder name, backstory, or photo to fill it — that would be
   fabricated identity content, not a reversible implementation detail. Route
   to the Owner: what name/pronoun should the site use, is there a real
   portrait or should a non-portrait studio image stand in for now, and what
   should the first-person story actually say about why Cyvexly exists.
2. **Public domain is undecided.** Vision §15 allows a temporary Render
   preview URL before the owned domain is connected. No Builder round should
   hardcode a production domain into metadata, sitemap, or canonical URLs
   until the Owner confirms one; when that happens, add `metadataBase`
   (currently omitted rather than guessed). Round 3 built the actual
   `opengraph-image.tsx` asset (verified real, on-brand, pixel-correct —
   see `CYVEXLY_CHUNK_DEBT.md` item 4) since that specific file does not
   need the domain to exist or render correctly, but confirmed via a real
   production `pnpm run build` (not just the dev server, which is
   misleading here) that the auto-generated `og:image`/`twitter:image`
   absolute URLs still bake in `http://localhost:3000` without
   `metadataBase` set. **Do not deploy without setting `metadataBase`
   first** — this file still blocks the domain from a different, more
   specific angle than round 2 assumed (it's the metadata wiring, not the
   image asset, that's domain-dependent), plus `sitemap.xml` and canonical
   URLs, which were not attempted this round for the same reason.
3. **Privacy Policy and Website Terms need Owner-supplied jurisdiction
   facts before they can be honestly drafted.** Round 2 built
   `/accessibility` (jurisdiction-agnostic: a WCAG target and a contact
   route) but deliberately did not attempt `/privacy` or `/terms`. Vision
   §6.12 and §12 both note legal text "should be reviewed for the business
   location and customer markets before launch" — that implies the business
   location and primary customer markets need to be known facts, not
   Builder-guessed ones, before drafting text that references applicable
   consumer-protection or data-privacy regimes (e.g., which state/country
   law governs, whether GDPR/CCPA-style disclosures apply). Route to the
   Owner: what is Cyvexly's business location/registration, and which
   customer markets should the policies explicitly address? Do not invent a
   jurisdiction to unblock this — draft only once that's known, the same
   principle as the About page's founder-identity gap (item 1).
4. **§4.12 Outcome Reachability Check — Project Planner (Chunk 3)
   email-delivery mechanism.** Performed round 3, before opening Chunk 3,
   per the round-2 handoff's explicit recommendation. **Round 4 update:**
   the separable, authorized part of this item (the Planner's UI/state/
   validation) is now built and verified at `/start` — see
   `CYVEXLY_ACTIVE_CHUNK.md`'s round-4 report. The blocked part described
   below (a real automatic confirmation email sent *from* Cyvexly) is
   unchanged and still needs both authorizations named here. The Planner
   currently submits via the same `mailto:` interim bridge as Contact,
   explicitly labeled in the UI as not satisfying this requirement.
   - **Required outcome (vision §6.9):** on Planner submit, (a) Cyvexly
     receives the complete structured answers, and (b) the prospect
     automatically receives a confirmation email summarizing their own
     answers, sent *from* Cyvexly — not something the prospect must send
     themselves.
   - **Normal handling for this class of problem:** a Next.js Route
     Handler (server-side `app/api/.../route.ts`) that calls a
     transactional email API (e.g., Resend, Postmark, SendGrid, AWS SES)
     to send both the internal notification and the prospect
     confirmation. This is the standard pattern for a dynamic Next.js app
     (not a static site) needing server-sent email, and is the strongest
     departure-justified alternative to a client-only mechanism precisely
     because the outcome requires mail sent *by* the server, not the
     visitor's own mail client.
   - **Actual platform/constraints:** the app is Next.js on (per vision
     §15) a Render web service — capable of running server routes, so the
     pattern is technically compatible. No credential capability is
     recorded for any email-delivery provider (`CYVEXLY_TOOLS_AND_
     CAPABILITIES.md`).
   - **Verified reachability:** unreachable end-to-end right now. Sending
     mail *as* Cyvexly needs (1) a chosen transactional email provider and
     an authorized API key/credential, and (2) for reliable inbox delivery
     (not spam-folder placement), a verified sending domain (SPF/DKIM),
     which itself depends on the domain decision this file's item 2
     already has open. These two gaps compound: even choosing a provider
     now would leave sending unverified/undeliverable until the domain is
     decided.
   - **What would falsify this:** discovering the deploy platform includes
     a zero-credential outbound-email primitive that needs no third-party
     account or domain verification — not found; every mainstream
     transactional-email path requires a provider account at minimum, and
     reliable delivery additionally requires domain verification.
   - **Classification:** reachable after two named authorizations/
     decisions (email provider + credential; production domain), not
     reachable now, and not something a Builder round may substitute with
     a fabricated or silently-scoped-down mechanism.
   - **Separable authorized work that remains reachable now (not
     blocked):** the Planner's UI — nine-step form, progress indicator,
     per-step validation, conditional questions, review/summary step —
     needs no email backend to build and verify (content/state/interaction
     only). The interim zero-authorization submit mechanism already
     proven on the Contact page (round 2's `mailto:` bridge) can serve
     `/start` too, but must be documented as not fulfilling the "automatic
     confirmation email from Cyvexly" requirement — it only lets the
     *visitor's own* mail client send a notification to Cyvexly, exactly
     like Contact. Route to the Owner: which transactional email provider
     to authorize (and its API key), once the domain decision (item 2) is
     also made.
   - **Recommendation:** the next Builder opening Chunk 3 should build the
     full Planner UI/state/validation now as the coherent authorized
     slice, wire submission to the same `mailto:` interim pattern as
     Contact with the limitation stated in this entry, and leave the real
     transactional-email wiring as an explicitly routed follow-up once
     both the domain and an email-provider authorization exist — not
     invent or silently downgrade the "sent from Cyvexly" requirement.
   - **Round 4 update — a real, honest limitation of the interim bridge
     for a form this size, not a new blocker.** Built round 4: the
     Planner's `mailto:` submission (`/start`) encodes the entire
     nine-step answer summary into the `mailto:` URL itself, unlike
     Contact's single short message field. A thoroughly answered
     submission (long text in several open-ended fields: business
     description, current problems, sites admired, open notes, etc.)
     could plausibly produce a `mailto:` URL long enough to hit a
     mail-client or OS protocol-handler length limit on some platforms —
     not measured precisely this round (no clean way to intercept
     `window.location.href` assignment for measurement without
     triggering a real OS-level mail-client handoff, which this round
     deliberately avoided — see `CYVEXLY_ACTIVE_CHUNK.md`'s round-4
     report). This has no clean fix within the current no-backend
     constraint: truncating the body risks silently dropping real
     prospect answers, which is worse than the rare failure case it
     would prevent. The real fix is the same one already tracked above —
     a server-side email route once authorized, which sends the full
     structured data directly rather than round-tripping it through a
     URL. Not a new blocker on opening Chunk 3 or building the Planner
     (Contact already accepted this class of interim-bridge limitation),
     but worth the next Builder or Owner knowing before treating the
     `mailto:` bridge as a durable solution rather than the explicitly
     temporary one it's labeled as in the UI.
