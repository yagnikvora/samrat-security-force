## Plan: Samrat Security Next.js Build

Build a pixel-accurate, reusable multi-page marketing site in Next.js App Router with a centralized typed content configuration and Sanity-powered blog v1. Keep static sections config-driven now, while preparing the architecture to move more sections to CMS later without rewrites.

**Mobile-First Rule (Mandatory)**
- From this point onward, every new component and every component change must include a mobile view implementation with good UX.
- No feature is considered complete unless desktop and mobile behavior are both validated.
- Every UI delivery must include responsive checks for navigation, spacing, touch targets, and readable typography.

**Validation Execution Policy (Project-Wide)**
- For small and isolated UI/content changes (for example: text copy updates, spacing tweaks, icon swaps in one component), do not run full `lint` + `build` by default.
- For medium or high-impact changes (for example: shared components, routing, config shape/type changes, data layer changes, dependency updates, multi-file refactors), run both `lint` and production `build`.
- Always run validation when a change can affect multiple pages, runtime behavior, or deployment safety.
- If validation is skipped for a small change, note that it was intentionally skipped due to low-risk scope.

**Steps**
1. Phase 0 - Preflight and guardrails
Validate Next.js 16 project behavior, lock environment assumptions, and finalize visual direction from provided references. This phase blocks all others.

2. Phase 1 - Information architecture and route map (depends on 1)
Implement the confirmed public routes: /, /about, /services, /team, /clients, /faq, /blog, /contact, plus global 404 behavior. Keep route naming exactly as confirmed.

3. Phase 2 - Design system foundation (depends on 1, parallel with 2)
Extract reusable design tokens from the provided mockups (color scales, typography hierarchy, spacing, radius, shadows, section rhythm).
Define CSS variables in global styles and create a small utility layer for repeated layout primitives (container, section header, CTA button variants, card shells).
Add responsive breakpoints and accessibility color-contrast checks early so all pages inherit consistent behavior.

4. Phase 3 - Global shell components (depends on 2 and 3)
Build reusable site chrome: sticky header/nav, CTA button behavior, shared footer blocks, newsletter band, and back-to-top interaction.
Ensure all pages reuse the same shell composition so visual consistency and future updates are centralized.

5. Phase 4 - Centralized static content config (depends on 2)
Create one typed configuration module for all non-blog static content (company profile, nav labels, service cards, stats counters, FAQ entries, contact details, social links, legal links, repeated section copy).
Split that module internally by domain objects while exposing a single import surface for page components.
Define TypeScript types/interfaces to enforce required fields and avoid runtime content gaps.

6. Phase 5 - Page assembly from config + assets (depends on 4 and 5)
Build each page section-by-section using shared components and config content.
Prioritize desktop and mobile parity with the provided designs.
Use provided assets folder as the source of truth for imagery/icons; no permanent placeholder assets since asset-first delivery is confirmed.

7. Phase 6 - Blog v1 with Sanity CMS (depends on 2, can run parallel with late Phase 5)
Set up Sanity integration for blog only: post list page and post detail page.
Implement schema for blog post essentials (title, slug, excerpt, cover image, publish date, author, rich body).
Use server-side data fetching strategy compatible with Next.js 16 and add caching/revalidation policy suitable for production deploy on non-Vercel hosting.
Keep blog UX v1 intentionally simple: list + detail only (no search/filter/related posts in v1).

8. Phase 7 - Contact and operational integrations (depends on 5)
Implement contact form behavior as mailbox redirection using a prefilled mailto flow (to, from/email, subject, body) rather than server-side sending.
Add client-side validation, spam mitigation basics (honeypot/time trap), and resilient fallback UX when a local mail client is unavailable.
Keep a pluggable abstraction so a real send API can be introduced later without rewriting the form UI.

9. Phase 8 - SEO, performance, and quality hardening (depends on 6, 7, 8)
Add per-page metadata, Open Graph/Twitter card patterns, sitemap/robots, canonical handling, and clean heading structure.
Optimize images, lazy-load below-the-fold media, and verify Core Web Vitals targets.
Run lint/build/type checks and responsive QA pass across key viewport ranges.

10. Phase 9 - Deployment and handoff (depends on 9)
Prepare environment variable contract for Next + Sanity + email service.
Document content operations workflow: static config edits vs Sanity blog publishing.
Provide launch checklist and rollback-safe release sequence.

**Relevant files**
- y:/Work/samrat-security-force/package.json - Confirm dependencies, scripts, and add CMS/integration packages.
- y:/Work/samrat-security-force/next.config.ts - Add image/domain and runtime settings required for remote CMS/media usage.
- y:/Work/samrat-security-force/tsconfig.json - Preserve strict typing and aliases for shared config/components.
- y:/Work/samrat-security-force/app/layout.tsx - Apply global shell composition and metadata defaults.
- y:/Work/samrat-security-force/app/globals.css - Define extracted design tokens and global utility patterns.
- y:/Work/samrat-security-force/app/page.tsx - Home page implementation entry from design reference.
- y:/Work/samrat-security-force/app - Add confirmed route pages, shared sections, and 404 experience.
- y:/Work/samrat-security-force/public - Host provided production assets in organized structure.
- y:/Work/samrat-security-force/Website Design - Visual reference source for fidelity checks.

**Verification**
1. Run local quality gates (`lint`, type-check, production `build`, and route smoke tests) for medium/high-impact or cross-cutting changes.
2. Compare each implemented page against design screenshots for spacing, typography, color, component states, and responsive behavior.
3. Validate blog flow end-to-end: create post in Sanity, publish, verify listing and detail rendering, verify cache/revalidation behavior.
4. Validate contact flow end-to-end with test submissions and failure-path handling.
5. Run accessibility checks (semantic landmarks, keyboard navigation, focus states, alt text, contrast).
6. Run performance checks (LCP/CLS/INP trends, image weight audit, JS payload review).
7. Confirm production environment variable mapping for target host and sanity-test deployment preview.

**Decisions**
- Sanity scope: blog only for initial release.
- Admin model: use Sanity Studio editors, no custom in-app admin panel.
- Contact destination: mailbox redirection with prefilled mail fields (mailto flow) for v1.
- Language: English only for v1.
- Priority: SEO and performance first while matching design faithfully.
- Deployment target: Plesk hosting.
- Static content source: typed TypeScript config module.
- Sitemap slugs: confirmed unchanged.
- Design tokens: derive from provided mockups.
- Assets workflow: all production assets provided before implementation.
- Blog v1 scope: basic list + single post only.

**Scope boundaries**
Included:
- Full multi-page front-end matching provided visual language.
- Reusable component architecture and universal theme/token system.
- Centralized static-content configuration layer.
- Sanity-powered blog v1 (list + detail).
- Contact form to email.

Excluded for v1:
- Custom admin dashboard inside Next.js.
- Multilingual/i18n features.
- Advanced blog features (search, filters, related posts).
- Full CMS migration of all non-blog site sections.

**Further Considerations**
1. For Plesk deployment, confirm Node.js runtime version and process manager constraints before finalizing cache/revalidation settings.
2. Decide mailto fallback behavior for users without a configured desktop mail client (copy-to-clipboard template and visible support email).
3. Sanity Studio is planned in the same repository; decide whether it should be route-mounted with the app or run as a separate workspace package within the repo.
