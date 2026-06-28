# Website Technical Specification

version 1.0 — Astro 7 rebuild (new design)

> Supersedes the 0.x spec, which described a Bookworm/Tailwind/TinaCMS build. That stack
> was removed in the ground-up rebuild. The visual source of truth is the approved prototype
> in `new-design-prototype/`; the design system was ported verbatim to `src/styles/global.css`.

## Core framework & stack

- **Framework:** Astro 7 — static site generator (`output: "static"`)
- **Content authoring:** MDX (`@astrojs/mdx`); plain Markdown for standard pages
- **Styling:** hand-written CSS only, all in `src/styles/global.css`. **No Tailwind**, no
  build-time CSS plugins, no `tailwind.config.*`.
- **CMS:** none. Content is plain files under the root `contents/` folder.
- **Search / feeds:** Fuse.js (client-side), `@astrojs/rss`, `@astrojs/sitemap`
- **Deployment:** Netlify, static (`npm run build` → `dist`)
- **No React.** Interactivity is CSS-only or small vanilla TS islands.

## Branding & visual identity

### Logo
Text-based: "Prose & Palate" in Playfair Display (bold, non-italic); the ampersand carries
the amber accent. A small "Est. MMXXV" caption sits alongside. No image mark.

### Colour palette (CSS custom properties — light mode)
Warm, paper-derived. Defined as tokens at the top of `global.css`; dark mode overrides them
via `body:has(.theme-toggle:checked)`.

- Paper substrate: `--paper #f4efe3`, `--paper-2 #ece4d2`, `--paper-3 #e4dac4`
- Ink (text): `--ink #2a2520`, `--ink-soft #58504a`, `--ink-faint #8c8275`
- Rules: `--rule #d6cbb4`, `--rule-soft #e2d8c4`
- Amber accent (whiskey/gold): `--amber #a9762c`, `--amber-deep #83591d`, `--amber-soft #c79a4e`
- Wine accent (cocktail): `--wine #7c2f2f`, `--wine-soft #a14a4a`
- Vellum (glassmorphism): translucent `--vellum-bg` + `backdrop-filter: blur(16px) saturate(125%)`

A fixed SVG `feTurbulence` grain + a soft vignette form the paper-grain substrate behind everything.

### Typography
- **Display (headings, logo, lede, drop caps, pull quotes):** Playfair Display
- **Body / UI / meta:** Inter
- Loaded via Google Fonts `<link>` in `BaseLayout`.

### Navigation
- Masthead: Home · Bars · Drinks · Books · Search, plus the CSS-only dark-mode toggle.
- Footer: brand + blurb, Subjects (Bars/Drinks/Books), The Magazine (Search, RSS).
- (An About page exists but is currently `draft`, so its links are omitted until published.)

## Content architecture

All content lives in the root `contents/` folder, separated from `src/`. Collections are
defined in `src/content.config.ts` and glob-loaded with `base: "./contents/<dir>"`.

| Collection | Folder | Route | Layout |
|------------|--------|-------|--------|
| `bars` | `contents/bars` | `/bars/<slug>` | digital spread |
| `drinks` | `contents/drinks` | `/drinks/<slug>` | digital spread |
| `books` | `contents/books` | `/books/<slug>` | split / dual-column |
| `pages` | `contents/pages` | `/<slug>` | standard article |

### Flexible review schema
Reviews are intentionally **not** fixed-field. Key shared fields:

- `title`, `description` (standfirst), `date`, `author`, `hero_image` (+ optional
  `hero_image_portrait` for mobile art direction), `eyebrow`, `tags`, `draft`
- `ratings`: an **array of blocks**, each `{ label, overall, summary, criteria[] }` where a
  criterion is `{ label, score, note }`. All scores are /10. The rating panel adapts: one
  block renders full-width, two render side-by-side.
- `info`: an **array** of `{ label, value }` detail pairs (+ optional `map_embed` for
  bars/drinks; `info` becomes the spec sheet for books).
- `toc`: optional floating table-of-contents entries.
- Books add `book_author`, `cover_image`, `review_title`, `stars`.

Editorial numbering ("Review · No. 14 · Bars" / "Tasting · No. 27 · Drinks") is generated
automatically from publish order within each collection — never hand-numbered. `draft: true`
hides an entry from production builds (still visible in `npm run dev`).

## Layouts & components

- **Layouts:** `BaseLayout` (head, fonts, view transitions, no-flash dark-mode script),
  `SpreadReview` (bars + drinks), `BookReview` (split), `StandardArticle` (pages).
- **Spread body** is authored in MDX with `<Section variant="default|alt|prose">`,
  `<Figure>` (pure-CSS `:target` lightbox), and `<PullQuote>`. The body is a box-based
  asymmetric mosaic; text-only sections collapse to a single reading column.
- **Components:** `Masthead`, `Footer`, `RatingPanel`, `InfoCard`, `FloatingToc`,
  `ReviewCard` (category grid + home cards; book covers shown whole over a blurred fill).

## Behaviour & features

- **Dark mode:** CSS-only via `body:has(.theme-toggle:checked)`, enhanced with a no-flash
  inline script + `localStorage` persistence that survives view transitions.
- **Lightbox:** pure CSS `:target` (no JS).
- **Parallax:** `background-attachment: fixed` on heroes; disabled on mobile and under
  `prefers-reduced-motion`.
- **View transitions:** Astro `<ClientRouter />` for app-like navigation.
- **Search:** `/search` — a vanilla TS island running Fuse.js over a build-time
  `/search-index.json`.
- **Responsive:** breakpoints at 60rem / 48rem / 30rem; all layouts collapse to a single
  column on mobile; the nav wraps and the toggle stays right-aligned.

## SEO & performance

- Per-page `<title>`, meta description, canonical, and Open Graph tags (`BaseLayout`).
- Auto-generated sitemap (`/sitemap-index.xml`); `robots.txt` references it.
- RSS feed at `/rss.xml` aggregating all published reviews.
- Static output; images served from `public/images`.
- Canonical site URL: `https://www.prosepalate.com` (set in `astro.config.mjs` and
  `src/lib/siteConfig.ts`).
