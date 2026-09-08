# Team Two Website Builder — Round 109 handoff

**Session:** scheduled/unattended Team Two Website Builder, 2026-09-08 EDT
**Start source:** `01a60fe` on `main`, matched `origin/main`
**Accepted product/test source:** `7b9813c` on `main`, pushed and adopted
**Authority:** Owner direction `2026-09-08-19`

Found and fixed Back to top focus loss. On deployed `1c49c00`, a real Space-
key activation scrolled to the top and hid the trigger but left focus on
`BODY`. The handler now moves focus to the visible hero heading before the
reduced-motion-aware scroll. The new regression fails on the previous public
source and passes locally/publicly at `7b9813c`; the opened focus capture shows
the heading outline.

TypeScript, lint (one known round-42 evidence warning), the 53-route build, and
the complete local/public Chrome suites pass with zero workflow/runtime/network/
unexpected-origin errors. Retain only the before/local/public result JSONs and
the local focus capture under
`builder/evidence/round-109-honey-hearted-back-top/` until independent review
consumes them. The owned port-5192 runtime was stopped; 27,264,120 bytes of
redundant captures/download output were removed at closeout.

**Next Builder round:** disposition review intake first. Do not repeat the same
Builder matrix without fresh evidence. Chunk 7 still needs two independent
reviews; Owner substitutions remain unchanged.
