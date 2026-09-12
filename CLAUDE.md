# website (pathways.ke marketing site) — Claude Code Guide

This repo is the public marketing site for Pathways. As of 2026-09-09 it hosted only two
compliance pages (`privacy.html`, `delete-data.html`, both required for app-store listings)
behind a Vercel deployment — `index.html` was just a meta-refresh redirect to `/delete-data`.
Building the actual marketing site is tracked in
[PathwaysKe/website#1](https://github.com/PathwaysKe/website/issues/1), an 8-phase plan
(full rationale/sequencing doc: https://claude.ai/code/artifact/978c96c1-dbba-419e-8b1e-ecfd5dc11e4a).

This file is a living status/handoff doc, not a stable-conventions file — update it as phases
complete rather than treating it as append-only history.

## Status as of 2026-09-12

Current branch: `feat/astro-scaffold-1` (created off `main`, no commits yet — this file is the
first). Nothing pushed to remote.

## Decisions locked (do not re-litigate without a reason)

- **Audience**: equal split, not one primary buyer. Home page routes visitors into two
  separate funnels rather than leading with one audience and footnoting the other.
- **Content ownership post-launch**: engineering via PR. No CMS.
- **Domain**: `pathways.ke`, already registered.
- **Timeline**: ASAP, no fixed date — treat as urgent, parallelize phases where sensible
  rather than strictly serializing all of Phase 0–2 before touching code.
- **Product relationship — important, overrides the original issue's wording**: `pathways-web`
  (school/teacher portal, B2B) and `mobile-app-v1` (consumer app, B2C) are **fully independent
  products**, each with its own funnel. The original issue's sitemap phrased the mobile app
  as a "your school already uses this" companion gated behind school adoption — that's
  **wrong**; the mobile app has its own standalone freemium pricing and can be downloaded by
  any parent regardless of school adoption. Site IA must give each product its own real
  funnel, not nest one under the other.
- **Hosting**: Cloudflare Pages. `wrangler` not yet installed/authenticated — `wrangler login`
  is interactive and must be run by the user, not automated.
- **Framework**: Astro (static-first — SEO matters here in a way `pathways-web`'s client-
  rendered Vite SPA pattern isn't built for; the one interactive piece, a demo-booking form,
  becomes an Astro island).
- **Lead capture**: Supabase table + notification. `backend` already runs on Supabase; no
  separate CRM exists anywhere in the org's repos, so don't introduce one.
- **Analytics**: Plausible (privacy-respecting, fits a schools-facing product), not GA.
- **Screenshots**: none exist anywhere in the org's repos as of the 2026-09-09 audit. User
  will supply real screenshots later. Build with dimension-accurate placeholder frames now —
  this is a tracked Phase 5/6 blocker, not something to solve by generating fake ones.

## Positioning drafts (Phase 1) — drafted, presented to user, not yet explicitly re-confirmed

- **For Schools** (school head, the buyer): "Pathways gives your school one system for
  scheme-of-work planning, lesson delivery, and merit lists your teachers actually keep
  updated — plus the coverage visibility you're currently chasing down by asking around."
- **For Parents** (mobile app, independent funnel): "Pathways turns Kenya's CBC curriculum
  into study notes and practice your child can use at home — in a form you can actually
  follow, without decoding the curriculum yourself."

## Sitemap (Phase 2) — two independent funnels, not one nested in the other

- **Home** — brand-level split ("Run a school?" / "Parent of a CBC learner?") routing into
  the two funnels below. Not a single narrative trying to serve both.
- **For Schools** — portal case, features, pricing (School Starter KES 3,000/mo, School Pro
  KES 8,000/mo), book a demo.
- **For Parents** — app case, features, pricing (Free; Basic KES 100/mo or KES 1,000/yr; Pro
  KES 250/mo or KES 2,500/yr), app store links.
- Product walkthroughs fold into each funnel page rather than being a separate top-level
  page — the two products' screens don't share one walkthrough.
- **About**, **Contact** — shared.
- **Privacy**, **Delete Data** — existing pages; URLs must not change.

## Asset audit findings (read-only scan across sibling repos, 2026-09-09)

**pathways-web feature set** (what a school admin/teacher can actually use today — market
only this, nothing else):
auth + onboarding wizard; school admin: student roster, classroom setup wizard, teacher
roster, school-wide calendar, central timetable, coverage rollup; teacher-facing: "Today's
Teaching" view, Scheme of Work builder/editor, Lesson Plan builder/editor, Merit List (exam
sittings → marks-entry grid → report), personal timetable, Record of Work, Notes (incl.
curriculum library), Assignment/Test builder (incl. learner attempt view).
`/bank` (question bank), `/results`, and `/billing` are explicit `PlaceholderPage` stubs in
the code — **not implemented, do not market as shipped.**

**Pricing** (exact tiers, source files noted so they can be re-verified if they change):
- School portal (`backend/supabase/migrations/20260713161501_teacher_subscription_plans.sql`):
  Teacher Free (KES 0/mo, 1 classroom, 20 students/class, 10 AI gens/mo), Teacher Pro
  (KES 500/mo), Teacher Pro Yearly (KES 4,800/yr), School Starter (KES 3,000/mo), School Pro
  (KES 8,000/mo, unlimited classrooms/AI gens, custom branding).
- Mobile app (`mobile-app-v1/docs/app_overview.md`, `docs/feature-list.md`,
  `docs/pitch_deck.md`): Free (KES 0), Basic (KES 100/mo or KES 1,000/yr), Pro (KES 250/mo or
  KES 2,500/yr).

**Design tokens** — source of truth is `pathways-web/src/index.css` (`:root` / `.dark`
blocks, Tailwind v4 CSS vars). Full values, so the site can port them without re-reading that
file:

```css
:root {
  --radius: 0.75rem;
  --background: #f8fafc;
  --foreground: #0f172a;
  --card: #ffffff;
  --card-foreground: #0f172a;
  --popover: #ffffff;
  --popover-foreground: #0f172a;
  --primary: #2563eb;
  --primary-foreground: #ffffff;
  --primary-container: #eff6ff;
  --primary-container-foreground: #1e3a6e;
  --primary-solid: #2563eb;
  --secondary: #f1f5f9;
  --secondary-foreground: #0f172a;
  --muted: #f1f5f9;
  --muted-foreground: #64748b;
  --accent: #f1f5f9;
  --accent-foreground: #0f172a;
  --destructive: #dc2626;
  --destructive-foreground: #ffffff;
  --border: #e2e8f0;
  --input: #e2e8f0;
  --input-background: #f8fafc;
  --ring: #2563eb;
  --success: #16a34a;
  --success-foreground: #ffffff;
  --warning: #d97706;
  --warning-foreground: #ffffff;
  --info: #0ea5e9;
  --info-foreground: #ffffff;
  --brand-teal: #0d9488;       /* header/banner chrome ONLY — not interactive states */
  --brand-teal-foreground: #ffffff;
  --brand-teal-text: #0d9488;
  --brand-teal-solid: #0f766e;
  --font-sans: "Inter Variable", system-ui, "Segoe UI", Roboto, sans-serif;
}

.dark {
  --background: #0f172a;
  --foreground: #f8fafc;
  --card: #1e293b;
  --card-foreground: #f8fafc;
  --popover: #1e293b;
  --popover-foreground: #f8fafc;
  --primary: #3b82f6;
  --primary-foreground: #ffffff;
  --primary-container: #1d3461;
  --primary-container-foreground: #bfdbfe;
  --primary-solid: #1d4ed8;
  --secondary: #1e293b;
  --secondary-foreground: #f8fafc;
  --muted: #1e293b;
  --muted-foreground: #94a3b8;
  --accent: #1e293b;
  --accent-foreground: #f8fafc;
  --destructive: #ef4444;
  --destructive-foreground: #ffffff;
  --border: #334155;
  --input: #334155;
  --input-background: #1e293b;
  --ring: #3b82f6;
  --success: #22c55e;
  --success-foreground: #ffffff;
  --warning: #f59e0b;
  --warning-foreground: #ffffff;
  --info: #38bdf8;
  --info-foreground: #ffffff;
  --brand-teal: #0d9488;
  --brand-teal-foreground: #ffffff;
  --brand-teal-text: #14b8a6;  /* lighter than light-mode for AA contrast on dark card */
  --brand-teal-solid: #0f766e;
}
```

`--primary` (blue) is the single interactive/selection accent. `--brand-teal` is scoped to
header/banner decoration only, mirroring `mobile-app-v1/lib/theme.dart`'s `brandTeal`. Don't
use teal for buttons/links/focus states.

**Positioning language already written elsewhere** (voice reference, not yet reused
verbatim): `backend/OVERVIEW.md`'s product description; `mobile-app-v1/docs/app_overview.md`;
`mobile-app-v1/docs/pitch_deck.md` tagline "Pathways - Learn together."

**q-approval-page** — internal CBC editorial/content-review tool (Cloudflare Worker). Not a
marketing asset, irrelevant to this site.

**Screenshots** — none exist in any of the four sibling repos (`pathways-web`,
`mobile-app-v1`, `backend`, `q-approval-page`) as of the 2026-09-09 audit.

## Build progress

- `feat/astro-scaffold-1` branch created off `main`, this file is its first commit.
- An Astro scaffold (minimal template, deps installed) was generated once already in a
  session-scoped scratchpad directory — that directory no longer exists for a new session.
  Re-generate with:
  ```
  npx create-astro@latest <dir> --template minimal --install --no-git --yes --no-ai
  ```
  then merge `package.json`, `astro.config.mjs`, `tsconfig.json`, `src/`, `.gitignore` into
  this repo (don't let it clobber `privacy.html`/`delete-data.html`/`vercel.json` at the
  root — see next point).
- Plan for the compliance pages (not yet executed): move `privacy.html` →
  `public/privacy/index.html`, `delete-data.html` → `public/delete-data/index.html`, verbatim
  — both are fully self-contained inline-styled HTML, no Astro conversion needed. This
  preserves the exact current URLs once Astro's build output takes over serving.
- `index.html` at repo root currently does a meta-refresh redirect to `/delete-data` — open
  decision: keep that redirect as the homepage until Phase 5 content is ready, or replace
  immediately with a minimal real Home page.
- Not yet done: Tailwind v4 added to the Astro project; the design tokens above ported into a
  global CSS file; `wrangler.toml` / Cloudflare Pages project setup (needs `wrangler login`,
  interactive, user must run it); any actual page content.

## Next steps, in order

1. Re-generate the Astro scaffold and merge it into this repo as described above.
2. Add Tailwind v4; port the design tokens above into a global CSS file.
3. Migrate `privacy.html`/`delete-data.html` into `public/` as described; decide `index.html`'s
   interim fate.
4. Cloudflare Pages project + `wrangler.toml` (user runs `wrangler login` themselves).
5. Build Home + For Schools + For Parents page skeletons per the sitemap above, with
   placeholder screenshot frames sized to match real product screens.
6. Get explicit sign-off on the positioning drafts and sitemap above if that hasn't happened
   yet — they were presented and unopposed but not explicitly re-confirmed after the
   product-independence correction.
