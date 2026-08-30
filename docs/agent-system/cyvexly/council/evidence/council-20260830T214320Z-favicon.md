# Council CYC-R4 favicon/OG live evidence

- Round: `council-20260830T214320Z`
- Source head: `97f7b69522937783e8e3eb2581f0832f1c420f5b`
- Runtime: isolated Council server at `http://127.0.0.1:5373`

## Favicon route

The live `/icon.svg` request returned HTTP 200 with `image/svg+xml`, and the
served body contained the new orbit/check path (`M24.5 8.5A12 12 0 1 1 21.5 25`).
A role-owned preview page rendered the current mark at 16px, 32px, and 64px on
light and dark backgrounds. The 16px current mark remains legible as a bold
check plus open orbit. A side-by-side preview of the previous mark at the same
sizes showed the old thin Y-in-circle collapsing into a tiny indistinct glyph
at 16px, while the current mark retained a recognizable signal.

The preview was opened and visually inspected in the in-app browser. The
temporary preview HTML and old-mark SVG lived only under the disposable Council
runtime and were removed with the round cleanup.

## Open Graph route

The live `/opengraph-image` route rendered a 1200×630 PNG. The retained capture
`council-20260830T214320Z-opengraph.png` was opened and visually inspected. The
new cyan mark is crisp at the top-left, the headline and supporting line retain
the intended dark arctic hierarchy, and no clipping or unexpected asset is
visible.

## Actual browser-tab asset

The document head exposes two icon links, with the generated `/favicon.ico?...`
link before `/icon.svg?...`. Fetching the live favicon route and extracting its
16px and 256px frames produced the default white Vercel triangle, not either
Cyvexly mark. The retained `council-20260830T214320Z-favicon-16.png` and
`council-20260830T214320Z-favicon.png` captures were opened and visually
inspected. The new SVG is legible in isolation but does not yet control the
first/actual browser-tab asset.

During source-drift reconciliation, the isolated runtime returned the normal
404 page for `/scratch-favicon-ico?size=16`; the untracked
`src/app/scratch-favicon-ico/route.tsx` was therefore not present in the
immutable snapshot/runtime reviewed here.

## Diagnostics

Normal product routes returned no browser warnings or errors. Two
`Cannot use 'in' operator to search for 'animation' in undefined` entries
occurred only after the browser-control screenshot call on standalone image
routes; those routes contain no application script and the error is treated as
Browser-pane instrumentation noise, not a product-console finding. The normal
homepage diagnostics were clean after reconnecting the browser.
