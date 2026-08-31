# IFA-2026-08-31-R5 — Metadata, indexing, and asset integrity probe

## Identity and isolation

- Review: `IFA-2026-08-31-R5`; heartbeat minute zero `2026-08-31T19:36:21.996Z`.
- Source: HEAD `f0f1eacee667cf7f63be54b4cf3432f71056ab74`; fingerprint `4aa73afd7b0cfac313700c241c88df6ef56d71cfdd732e1fab01cee0a57f09b7` (39 `src/` files); `src/app/scratch-favicon-check/route.tsx` absent.
- The standard Auditor guard remains unavailable because managed permissions deny `.codex` writes. I used exact disposable copy `C:\Users\Tcraf\AppData\Local\Temp\cyvexly-auditor-20260831T1936Z-005` on reserved port `5273`; only this Auditor runtime was started. No product source/tests, `.engine-lock`, Builder resources, Council guard, or other-role files were touched.

## Scope and method

This round used a new launch-readiness capability rather than repeating the prior media/services slice: static metadata and indexing controls, generated OG/icon/media asset delivery and byte-range behavior, and rendered meta confirmation in the real Codex in-app Browser against the isolated local runtime. I inspected the current source and the latest available `.next/server/app` artifact, fetched local resources over HTTP, opened the generated OG image for visual inspection, and queried browser warning/error logs. No external destination or form was submitted.

## Results

### Rendered metadata and preview controls

At `http://localhost:5273/`, the real in-app Browser rendered:

- title `Cyvexly Studio — Websites built to make your business unmistakable`;
- `robots: noindex, nofollow`;
- OG and Twitter image URLs resolving to `http://localhost:5273/opengraph-image?...` in the live dev request context;
- English document language and both `/favicon.ico` and `/icon.svg` links;
- no canonical link (consistent with the still-undecided production domain);
- browser warn/error query `[]`.

The corresponding latest available optimized artifact in `.next/server/app/index.html` (timestamp `2026-08-31T13:25:41` local) contains the expected Home/video markup, `robots=noindex, nofollow`, but static OG/Twitter image URLs rooted at `http://localhost:3000/opengraph-image?...`. Each of the five built service-detail HTML artifacts has its own expected title and the same localhost:3000 OG fallback.

This independently reconfirms `CYV-IFA-005`: the preview is correctly non-indexable, but static share metadata is not launch-safe until the Owner approves a domain and `metadataBase` is wired. I did not infer or write a domain.

### Generated asset HTTP integrity

Local requests returned:

| Resource | Status | Content-Type | Bytes |
| --- | ---: | --- | ---: |
| `/robots.txt` | 200 | `text/plain` | 27 |
| `/opengraph-image` | 200 | `image/png` | 85,215 |
| `/icon.svg` | 200 | `image/svg+xml` | 362 |
| `/favicon.ico` | 200 | `image/x-icon` | 10,622 |
| `/media/cyvexly-services-loop.mp4` | 200 | `video/mp4` | 3,978,486 |
| `/media/cyvexly-services-poster.webp` | 200 | `image/webp` | 12,006 |

An explicit `Range: bytes=0-1023` request for the MP4 returned `206`, `Content-Range: bytes 0-1023/3978486`, `Content-Length: 1024`, `Accept-Ranges: bytes`, and `video/mp4`. The rendered OG PNG was saved as `auditor-20260831T1936Z-005-og-image.png` and opened for inspection; it is a readable 1200×630 dark Cyvexly title card with the C/Y signal mark and no invented claim or artifact text.

## Verification and limits

- The current source contains no scratch favicon route and `git status --short src` is clean.
- This probe did not create a fresh optimized build: Turbopack rejects the exact out-of-root dependency junction, while a Webpack retry is blocked by sandbox HTTPS EACCES during `next/font` Google Font fetches. The `.next` artifact was treated as a latest-available build artifact, not as a new build claim.
- Public Render was not rechecked because the managed environment blocks its HTTPS socket; prior Builder/Council public evidence remains the public record.
- Physical keyboard, reduced-motion preference, cross-browser, and external email delivery remain unconfirmed.
