# Council R35 evidence — site-wide glass continuity and release smoke

- Review ID: `CYC-R35-20260901-01`
- Scheduler minute zero: `2026-09-01T04:01:03.161Z`
- Council round: `20260901T040103Z-heartbeat`
- Accepted source head: `a7e07ca30a40757fa00ee3d7d6452918edba5137`
- Accepted product-source change under review: Builder R21 source at `1437f5b` (current documentation heads continue through `a7e07ca`)
- Runtime: Council-owned production build on `127.0.0.1:5373`, fresh immutable snapshot and disposable runtime
- Public comparison: `https://cyvexly-studio.onrender.com/`
- PM Prompt: `NO ACTIVE PM PROMPT`

## Visible routes and states actually used

The in-app Browser opened the Council runtime at `127.0.0.1:5373` and the deployed public URL. Home was viewed at `1440×900` and `390×844` (including a full-page phone pass); Services at `1440×900` and `390×844`; Work at `390×844`; and Planner (`/start`) at `390×844`. Public Home was viewed at desktop/tablet/phone; public Services at desktop/phone; and public Work/Planner at phone. The mobile menu was opened and closed. Work `Business Site` produced Aurora Spaces and Nexora Systems with `aria-pressed="true"`; `Redesign` produced the honest empty message `No projects match that filter yet.` with no project headings. Local `/privacy` and `/terms` each resolved to the custom `Page not found — Cyvexly Studio` 404. Local Browser warning/error diagnostics were empty.

## Computed responsive/style observations

At Home phone width the document had `clientWidth=375` and `scrollWidth=375` (no horizontal overflow). The eight primary Home sections reported:

| section | class | computed surface |
| --- | --- | --- |
| Hero | `home-hero-stage` | blue radial/linear background |
| Selected work | plain `mx-auto max-w-6xl px-6 py-20` | transparent, no image, no blur |
| Capabilities | `glass-section` | `rgba(227,239,248,.76)`, `blur(8px) saturate(1.16)` |
| Built around your business | plain continuation section | transparent, no image, no blur |
| Process | plain continuation section | transparent, no image, no blur |
| Pricing | `glass-section` | `rgba(227,239,248,.76)`, `blur(8px) saturate(1.16)` |
| FAQ | plain continuation section | transparent, no image, no blur |
| Final CTA wrapper | plain continuation section | transparent; inner dark CTA shell remains present |

Services showed the same mixed treatment: the page-intro and service-combinations stages have authored atmosphere, while the core service-groups and FAQ/CTA continuation sections are transparent; only the Popular website types and Recent work sections use `glass-section`. Source inspection confirms these classes in `src/app/page.tsx` and `src/app/services/page.tsx`.

## Build/runtime method evidence

Offline dependency installation and the Council runtime production build completed. The build emitted one non-blocking generated-CSS optimizer warning associated with the Home video overlay arbitrary class, in addition to the known `metadataBase` warning; the emitted CSS contained a valid resolved gradient rule, so no product defect was promoted from that warning. The initial `localhost` browser route was unreachable in the IAB policy context; `127.0.0.1:5373` reached the same Council-owned runtime and was used for the local visible proof. The public deployed URL was used as an independent adoption comparison.

## Retained visual proof

The screenshots displayed during this round were the Council-owned in-app Browser captures for local Home phone/desktop, local Services desktop, and public Home/Services/Work/Planner desktop/tablet/phone/full-page phone states. No screenshot was retained as a durable artifact unless cited by a report; the durable style/interaction metrics above are the primary evidence for this round.
