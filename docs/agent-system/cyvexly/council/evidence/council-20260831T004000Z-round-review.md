# Council Round 7 — shared scale and glass review

## Review identity

- Round: `council-20260831T004000Z`
- Source snapshot: `8ec27c1573312a5fbb58c8d69018da263b338b0d`
- Snapshot dirty fingerprint: `B83368CEE13A42589577CB67911F296E98DDD050478A6429D4E52432BCE5A655`
- Council runtime: `.codex/runtime/council/council-20260831T004000Z/runtime`, port `5373`

## Fresh product observation

The round-9 shared-system change is visible in the Council-owned runtime. The
Home page was opened and viewed at `1440×900`, `768×1024`, and `390×844`; the
phone capture was also opened for a complete visual read. The new body glow,
signal-grid atmosphere, glass panels, sticky header, primary CTA, and orbit
halo/gloss read as one coherent cyber-arctic system. Cards remain readable and
the three concept-project disclosures remain attached to their artwork.

The accepted Home mockup still sets a higher visual bar: it has more luminous
photographic/device treatments, iconography, and denser glass depth than the
current truthful abstract implementation. This remains the Owner's open
abstract-versus-higher-fidelity artwork/final-parity decision, not a reason to
invent client proof.

Services and Work were also opened at phone width. Their shared glass cards,
concept artwork, disclosures, links, and CTA surfaces remain coherent, and no
horizontal clipping was visible. Planner was opened at phone width and remains
readable with its nine-step rail, fields, and action controls.

## Responsive and interaction checks

The live runtime reports `16px` root size and zero horizontal overflow at all
four checked widths. Computed desktop/phone states were:

| CSS viewport | H1 | Header | Primary nav | Mobile menu |
| --- | --- | --- | --- | --- |
| 1440 | 48px | 79px | visible | hidden |
| 1024 | 48px | 79px | visible | hidden |
| 720 | 48px | 73px | hidden | visible |
| 390 | 36px | 73px | hidden | visible |

The in-app browser opened the mobile menu; its `aria-expanded` state became
`true` and `#mobile-nav` became visible. The FAQ first disclosure opened with
`aria-expanded="true"`. These are direct runtime interactions, not source-only
claims.

The empty Step-1 Planner Continue action produced three linked alerts and
focused `input#fullName`, with `aria-describedby="fullName-error"`. After
test-safe local values advanced the flow, the Goals step exposed accessible
radio and checkbox groups. The empty primary-goal action produced the expected
alert and `FIELDSET[aria-invalid="true"][aria-describedby="primaryGoal-error"]`.
Its focus could not be observed in this unattended session because the
focus helper is scheduled through `requestAnimationFrame`; preserve the exact
attended/different-capability retry for grouped controls and reduced motion.

## Route/build scope

Home, Services, Work, Planner, and the primary phone layout were smoke-tested
in the Council-owned runtime with one `h1`, one `main`, and
`scrollWidth === clientWidth`. The Council build probe was started but did not
return while the dev runtime and Next build workers shared the disposable
`.next` tree; therefore this round does not independently claim a fresh build
pass. The Builder's round-9 clean lint/build/typecheck evidence remains
source-identity evidence, not promoted as Council execution.

No product source, tests, Builder resources, Auditor resources, `.engine-lock`,
or external integrations were modified. No valid form submission or external
mail side effect was attempted.
