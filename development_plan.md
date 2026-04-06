## Development Plan Checklist: Samrat Security

Execution model: strict phase order with limited parallel tracks to maximize quality and reduce rework.

Estimated total effort: 72 to 98 hours (single developer), excluding asset delays and content approval cycles.

## Phase timeline and estimates

1. Phase A: Foundation and architecture lock
Estimate: 6 to 8 hours
Deliverables:
- Validate Next.js 16 behavior and host constraints for Plesk.
- Finalize route map and page skeleton strategy.
- Define folder conventions for components, sections, config, and blog data layer.
Exit criteria:
- Architecture decisions signed off.
- No unknown blockers for runtime/deploy.

2. Phase B: Universal theme and design tokens
Estimate: 8 to 12 hours
Deliverables:
- Extract color, spacing, typography, radius, shadow, and section rhythm from design files.
- Build global token system and responsive foundations.
- Define reusable visual primitives for cards, buttons, chips, badges, section headings.
Exit criteria:
- All pages can consume shared tokenized styles.
- Desktop and mobile style baseline validated.

3. Phase C: Shared shell and reusable sections
Estimate: 8 to 10 hours
Deliverables:
- Header/navigation and CTA interactions.
- Footer with quick links, support links, contact block, legal row, and back-to-top behavior.
- Newsletter band and common section wrappers.
Exit criteria:
- One shared shell reused across all pages.
- Navigation and footer are content-driven.

4. Phase D: Central typed static config
Estimate: 6 to 9 hours
Deliverables:
- One TypeScript content config surface for static site content.
- Domain-structured modules under same config surface: nav, hero, services, stats, FAQs, clients, contact, footer, legal.
- Strong typing and required-field guarantees.
Exit criteria:
- Page copy and static data are centrally editable without hunting files.
- Components compile against typed content contracts.

5. Phase E: Core page build and visual parity
Estimate: 16 to 22 hours
Deliverables:
- Build: Home, About, Services, Team, Clients, FAQ, Contact, 404.
- Integrate provided production assets exactly.
- Match screenshot layout and hierarchy on desktop and mobile.
Exit criteria:
- All non-blog pages visually aligned with reference design.
- No placeholder assets remain.

6. Phase F: Sanity blog v1
Estimate: 12 to 16 hours
Deliverables:
- In-repo Sanity Studio setup.
- Blog post schema for title, slug, excerpt, cover image, published date, author, rich content.
- Blog list and blog detail routes.
- Caching/revalidation approach compatible with Plesk runtime.
Exit criteria:
- Editor can publish a post in Sanity and see it live on site.
- Blog list and detail both pass SEO and rendering checks.

7. Phase G: Contact form mailto workflow
Estimate: 4 to 6 hours
Deliverables:
- Prefilled mailbox redirect flow with to, subject, body.
- Client-side validation and anti-spam basic safeguards.
- Fallback UI for users without configured local mail client.
Exit criteria:
- Contact action opens user mailbox with proper prefilled content.
- Fallback path provides clear alternative instructions.

8. Phase H: SEO, accessibility, performance hardening
Estimate: 8 to 10 hours
Deliverables:
- Per-page metadata, OG/Twitter cards, sitemap, robots, canonicals.
- Accessibility checks for keyboard, focus, semantics, contrast, alt coverage.
- Performance optimizations for images and payload.
Exit criteria:
- Build passes quality checks.
- Launch readiness score accepted.

9. Phase I: Deploy prep and handoff
Estimate: 4 to 5 hours
Deliverables:
- Environment variable contract and deployment runbook for Plesk.
- Content ops guide: what is managed in static config vs Sanity.
- Release checklist and rollback-safe notes.
Exit criteria:
- Team can deploy and maintain independently.

## Strict execution sequence

1. Run Phase A completely.
2. Run Phase B and Phase C.
3. Run Phase D immediately after Phase B.
4. Start Phase E after Phase C and D are done.
5. Start Phase F in parallel only when Phase B is stable.
6. Start Phase G after contact page structure in Phase E is complete.
7. Run Phase H only after E, F, G.
8. Finish with Phase I.

## Parallelization plan

Allowed parallel tracks:
- Track 1: Theme and component system
- Track 2: Sanity blog integration

Do not parallelize:
- Static config design and final page wiring
- SEO finalization before all pages and blog routes are stable

## Milestone-based acceptance

1. Milestone 1: Foundation complete
- Architecture locked, route map approved, no host/runtime unknowns.

2. Milestone 2: UI system complete
- Shared shell and tokenized components done.

3. Milestone 3: Static pages complete
- All non-blog pages built with config-driven content.

4. Milestone 4: Blog complete
- Sanity publishing and blog rendering verified.

5. Milestone 5: Launch ready
- SEO, accessibility, performance, and deployment docs complete.

## Risk controls

1. Plesk runtime mismatch risk
Mitigation:
- Validate Node version and process constraints in Phase A before coding advanced cache behavior.

2. Mailto limitation risk on some devices
Mitigation:
- Add visible support email and copy-ready template fallback.

3. Design drift risk across pages
Mitigation:
- Enforce token-driven components and freeze page-level custom overrides.

4. CMS schema rework risk
Mitigation:
- Lock v1 schema scope to blog essentials only.

## What is in scope

- Pixel-accurate theme implementation from provided designs.
- Universal reusable component architecture.
- Central static content config in TypeScript.
- Sanity blog v1 list and detail pages.
- Contact prefilled mailbox workflow.

## What is out of scope for v1

- Full CMS for all pages and sections.
- Blog filters, search, and related posts.
- Multi-language support.
- Custom internal admin dashboard in app.

## Reference

Detailed strategic plan remains in plan.md.
