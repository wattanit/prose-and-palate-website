# Prose & Palate — Design Prototype

A pure **HTML + CSS** look-and-feel prototype for the new Prose & Palate design, built to the
[Brand & Design Guidelines](./DESIGN-GUIDELINE.md). No JavaScript, no framework — this stage is
about locking in the visual language only. Framework integration comes later.

## How to view

From this folder, start any static server:

```bash
cd new-design-prototype
python3 -m http.server 8765
# then open http://localhost:8765/
```

(Opening the `.html` files directly via `file://` also works, but a local server is recommended so
the Google Fonts and relative asset paths resolve cleanly.)

## Pages

| Page | File | Layout | Demonstrates |
|------|------|--------|--------------|
| **Home** | `index.html` | Editorial landing | Masthead, issue dateline, featured hero with vellum caption, asymmetrical review grid, quote band |
| **Bar review** | `bar-review.html` | **Digital spread** | Full-bleed anchor image, vellum title block overlapping image + paper, floating TOC, drop cap, margin-wrapped figures, lightbooth, verdict |
| **Drink review** | `drink-review.html` | **Digital spread** | Same spread treatment as bars (guideline groups Bar & Spirit together) |
| **Book review** | `book-review.html` | **Split / dual-column** | Static book-cover anchor on one side, scrolling review on the other, spec sheet |

Body copy is placeholder (lorem-style with a few real sentences) — only the *design* matters here.

## File structure

```
new-design-prototype/
├── DESIGN-GUIDELINE.md        # the brief (unchanged)
├── README.md                  # this file
├── index.html                 # home
├── bar-review.html            # bars — digital spread
├── drink-review.html          # drinks — digital spread
├── book-review.html           # books — split layout
├── css/
│   └── styles.css             # the entire design system (one file, tokens up top)
└── assets/
    ├── bar-hero.jpg …         # real photography curated from the existing site
    └── book-cover.svg         # hand-built editorial book cover (no book photos existed)
```

## How the guideline maps to the build

**Typography** — Playfair Display (brand, headlines, lede/standfirst, drop caps, pull quotes) paired
with Inter (body, UI, meta). Loaded via Google Fonts `<link>`.

**Color & texture**
- Warm off-white paper (light) and a deep, warm charcoal (dark) — never pure black.
- A fixed SVG `feTurbulence` noise overlay + a soft vignette create the **paper-grain substrate**
  behind everything (`.substrate`).
- Accents: deep amber (whiskey/gold) and muted wine-red (cocktail), used for tags, rules, links,
  drop caps and ratings.
- **Vellum / glassmorphism** (`.vellum`): `backdrop-filter: blur()` + translucency + soft border +
  drop shadow. Used on the nav, the hero title block, the floating TOC, the verdict card, and the
  rating card.

**Layout**
- **Bars & Drinks** use the *digital spread*: a massive anchor image with a frosted vellum title
  block that physically overlaps the bottom of the image and the paper below it.
- **Books** use the *split-screen*: the cover stays pinned (sticky) as a visual anchor while the
  review scrolls beside it.

**Photography & aliveness** — where the guideline calls for interaction, the following are done in
**pure CSS, no JS**:
- **Lightbooth:** clicking a body image opens it full-screen on a blurred vellum backdrop, via the
  CSS `:target` technique (`#lb-1` etc.).
- **Parallax:** a subtle hero parallax using `background-attachment: fixed`.
- **Hover life:** image zoom, button/arrow slide, card lifts.
- **Dark mode:** a CSS-only toggle (`:has()` + a hidden checkbox) in the header; also honours
  `prefers-reduced-motion`.

## Deferred to the framework stage (Astro)

These are intentional in the guideline but are framework/runtime concerns, so they're left as hooks
for the next stage rather than faked here:
- **Astro View Transitions** for app-like page loads.
- **Scroll-driven parallax** of the vellum block (smoother than CSS `fixed` can offer).
- CMS/data-driven content, image optimisation, real routing & shared layout components.

## Notes & assumptions
- Imagery is reused from the existing site's bar photography; a dedicated book photo didn't exist, so
  a bespoke SVG cover was designed to keep the book layout intentional.
- Light mode is the visual default (the editorial signature); use the header toggle (☀/☾) to preview
  dark mode on any page.
