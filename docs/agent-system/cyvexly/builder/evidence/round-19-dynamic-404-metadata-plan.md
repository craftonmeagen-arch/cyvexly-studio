# Round 19 dynamic-route 404 metadata plan

**Session:** `builder-20260831T213918Z-r19`
**Lock claimed:** `2026-08-31T21:39:18.9107395Z`
**Start source:** `409ef8026ae6c93b49f3090a950bea7f1d2a2b7b` on `main`, matching `origin/main`
**PM prompt:** no active prompt
**Triggered finding:** `CYV-IFA-008` in `IFA-2026-08-31-R7`, with the original reproduction in `IFA-2026-08-31-R6`

## Intended outcome

Unknown `/services/[slug]` and `/work/[slug]` URLs must retain the canonical
`Page not found — Cyvexly Studio` document title before and after hydration,
return HTTP 404, include search-engine `noindex`, and render the established
custom recovery page. Valid service and case-study routes must retain their
specific titles and content.

## Baseline and root-cause hypothesis

The independent Auditor found that both unknown dynamic routes return correct
404 server HTML but hydrate to `Service — Cyvexly Studio` or
`Project — Cyvexly Studio`. Current source directly returns those fallback
titles from each route's `generateMetadata`, then separately calls
`notFound()` from the page. The leading hypothesis is that the route-specific
metadata stream overwrites the global not-found title during hydration.

Before editing, reproduce the full failure on the accepted source with both an
ordinary HTTP client and fresh Chromium navigation. Record the status, server
title, hydrated title, robots metadata, H1/main count, recovery links, and
diagnostics. This falsifies stale evidence and distinguishes metadata failure
from body/status failure.

## Methodology and reachability check

Next.js App Router normally handles an unavailable dynamic resource by calling
`notFound()` in the route segment. Official Next.js 16 documentation confirms
that `notFound()` may be called inside `generateMetadata`, terminates that
segment, renders its not-found UI, and injects `noindex`:

- <https://nextjs.org/docs/app/api-reference/functions/generate-metadata>
- <https://nextjs.org/docs/app/api-reference/functions/not-found>

This is reachable with existing source and requires no new dependency,
credential, platform service, or Owner decision. The earliest inexpensive
proof is a local optimized build plus fresh-load checks for both invalid and
valid dynamic routes. If calling `notFound()` in `generateMetadata` does not
preserve the canonical title in the installed Next.js 16.3.3 runtime, use one
shared not-found metadata constant as the bounded fallback rather than
duplicating divergent strings.

## Coherent slice and boundaries

- Modify only the two dynamic route metadata branches unless runtime evidence
  proves shared metadata is required.
- Preserve all valid route titles/descriptions, static params, body content,
  visuals, and navigation.
- Do not fabricate Privacy/Terms, founder identity, production-domain metadata,
  transactional email, or concept-project assets.
- Do not touch Auditor/Council files or resources and do not change any
  scheduler or automation.

## Risks and controls

- Calling `notFound()` in both metadata and page rendering could change static
  generation behavior: run the optimized build and inspect the generated route
  set.
- Streaming metadata can differ between HTML-limited and ordinary browsers:
  verify raw HTTP HTML and a fresh hydrated Chromium document.
- A broad metadata change could regress valid dynamic pages: check all five
  service details and all three case studies, including title and HTTP status.
- A correct title alone could hide a broken body: retain one H1/main, four
  recovery links, exact 404 status, `noindex`, and responsive containment.

## Proof plan

1. Accepted-source baseline for two unknown dynamic routes.
2. ESLint, clean optimized build, and post-build TypeScript.
3. Optimized production runtime checks for both unknown routes: raw response,
   fresh hydrated DOM, title, robots, H1/main, recovery links, width, console.
4. Adjacent regression for five valid service routes, three valid case studies,
   and a generic unknown route.
5. Native keyboard activation of a recovery link from the custom 404.
6. Public deployment verification after push, including changed content/ETag
   identity where available and fresh desktop/phone checks.

## Engineer Council / reflection

- Does the repair act at the metadata branch that creates the incorrect truth,
  rather than cosmetically mutating `document.title`? It must.
- Does it preserve Next.js' native not-found semantics and search noindex? The
  optimized server and browser must show both.
- Does the result remain stable for initial HTML, hydration, valid routes, and
  navigation? Each layer receives an explicit control.
- Would another visual-fidelity tweak be stronger work? No: the fresh
  independent finding is a concrete launch-quality defect, while the available
  visual slices are awaiting Owner acceptance and Privacy/Terms are
  Owner-blocked.

## Completion boundary

`DONE WITH PUBLIC PROOF` only if both unknown dynamic route families have the
canonical not-found title before and after hydration, retain HTTP 404/noindex
and recovery UI, all valid dynamic routes keep their specific metadata, the
build/test suite passes, and the public Render deployment matches the fixed
source. Otherwise record the exact remaining proof or platform gap.
