# pathways.ke

The public marketing site for Pathways: a static [Astro](https://astro.build) site, styled with
Tailwind v4 on the product's design tokens, animated with GSAP, deployed to Cloudflare Pages.

## Run it

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve dist/
npm run check      # astro check (types)
```

Add `?motion=off` to any URL to disable animation (same as the footer's "Reduce motion").

## Where things live

| Path | What |
| --- | --- |
| `src/pages/` | Home, `/schools`, `/parents`, `/about`, `/contact`, `/demo`, 404 |
| `src/layouts/Base.astro` | Head (SEO, fonts, JSON-LD), header, footer, global reveal/marker/counter motion |
| `src/components/` | `Pola` (mascot, 12 poses, blink), `OrbitHub` (hero graphic), `PhoneFrame` (screenshot or clip), `PortalMock` (CSS stand-in for the school portal), `LeadForm`, `FAQ`, `SubjectMarquee`, `Preloader` |
| `src/lib/site.ts` | Every public fact the site states: contacts, URLs, parent pricing. Change prices here only. |
| `src/lib/motion.ts` | GSAP setup, reduced-motion handling, reveal helpers, view-transition teardown |
| `src/styles/global.css` | Design tokens (ported from `pathways-web`), Tailwind theme, component classes |
| `src/assets/screens/` | Real app screenshots (corners masked by `scripts/process-screens.mjs`) |
| `src/assets/pola/` | Mascot art from the design kit |
| `public/video/` | Clips cut from the raw recordings by `scripts/encode-video.sh` |
| `public/privacy/`, `public/delete-data/` | Compliance pages, verbatim, at their original URLs |
| `public/_headers`, `public/_redirects` | Cloudflare Pages headers and the old `.html` redirects |

## Assets pipeline

- **Screenshots**: drop 1080×2424 PNGs into `src/assets/screens/` and run
  `node scripts/process-screens.mjs` once to make the phone corners transparent.
- **Recordings**: put the raw `.webm` files in `~/Desktop/Assets` (or set `SRC=`) and run
  `scripts/encode-video.sh`. Cut points are in the script; it writes WebM + MP4 + JPEG poster.
- **Icons and OG cards**: `node scripts/make-icons.mjs`.

## Lead capture

`LeadForm` posts to the backend Supabase table `website_leads` (backend#1552) using
`PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_ANON_KEY`. With those unset it falls back to a
prefilled `mailto:`. Set them in the Cloudflare Pages project (or `wrangler.toml`) once the
backend migration is live.

## Deploy

Cloudflare Pages, project `pathways-website`, build command `npm run build`, output `dist`.
Project `pathways-website` exists (created 2026-10-07). Deploy from a laptop with
`PUBLIC_SUPABASE_URL=… PUBLIC_SUPABASE_ANON_KEY=… npm run build && npx wrangler pages deploy dist --project-name pathways-website --branch main`.
Analytics: none yet (Plausible was removed until an account exists).
