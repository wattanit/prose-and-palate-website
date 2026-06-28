# Prose & Palate

A slow, tactile digital magazine reviewing the bars, drinks, and books worth lingering over.

Built with **Astro 7**, hand-written CSS (no framework), and plain file-based content — no CMS.

## Stack

- **Astro 7** — static site generator (`output: "static"`, deployed on Netlify)
- **MDX** (`@astrojs/mdx`) for review bodies
- **Hand-written CSS** — the entire design system lives in `src/styles/global.css`
  (warm paper-grain substrate, vellum glassmorphism, Playfair Display + Inter via
  Google Fonts, CSS-only dark mode with `localStorage` persistence)
- **Fuse.js** client-side search, `@astrojs/rss` feed, `@astrojs/sitemap`
- No Tailwind, no TinaCMS, no React.

## Quick start

```bash
npm install
npm run dev          # http://localhost:4321  (add --host to expose on your LAN)
npm run build        # → dist/
npm run preview      # serve the production build
npm run check        # astro check (types + diagnostics)
```

## Project structure

Code lives in `src/`; **all content lives in the root `contents/` folder**, cleanly separated.

```
contents/                 # content (see contents/README.md for the authoring guide)
├── bars/    *.mdx         # bar reviews    → /bars/<slug>    (digital-spread layout)
├── drinks/  *.mdx         # drink reviews  → /drinks/<slug>  (digital-spread layout)
├── books/   *.mdx         # book reviews   → /books/<slug>   (split layout)
└── pages/   *.md          # standard pages → /<slug>         (e.g. about)

src/
├── content.config.ts      # collections (glob-loaded from ../contents) + Zod schemas
├── styles/global.css      # the entire design system
├── layouts/               # BaseLayout, SpreadReview, BookReview, StandardArticle
├── components/            # Masthead, Footer, RatingPanel, InfoCard, FloatingToc,
│                          # ReviewCard, and MDX blocks: Section, Figure, PullQuote
├── lib/                   # siteConfig, reviews (queries + editorial numbering), format
└── pages/                 # routes: home, bars|drinks|books (index + [slug]),
                           # [...slug] (pages), search, rss.xml, search-index.json, 404

public/images/             # content imagery (+ /site for shared assets)
```

## Content

Reviews use **flexible schemas**: `ratings` is an array of blocks (each with its own
`criteria[]`), and `info` is a key/value array — so a review can carry one rating block
or several, and whatever detail fields are relevant. Editorial numbering
("Review · No. 14 · Bars") is generated automatically from publish order per category.

Set `draft: true` to hide a file from production (it still appears in `npm run dev`).

**See [`contents/README.md`](contents/README.md) for the full authoring guide** (frontmatter
fields, the MDX `<Section>`/`<Figure>`/`<PullQuote>` conventions, the optional
`hero_image_portrait`, and book-specific fields).

## Deployment

Netlify, static. Build command `npm run build`, publish directory `dist` (see `netlify.toml`).
The canonical site URL is set in `astro.config.mjs` (`site`) and `src/lib/siteConfig.ts`.

## License

MIT — see `LICENSE`.
