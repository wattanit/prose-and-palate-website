# Content

All site content lives here, cleanly separated from the code in `src/`. Each
folder is an Astro content collection (schema in `src/content.config.ts`).

```
contents/
├── bars/    *.mdx   # bar reviews    → /bars/<slug>    (digital-spread layout)
├── drinks/  *.mdx   # drink reviews  → /drinks/<slug>  (digital-spread layout)
├── books/   *.mdx   # book reviews   → /books/<slug>   (split layout)
└── pages/   *.md    # standard pages → /<slug>         (e.g. about)
```

The file name (without extension) is the URL slug. Set `draft: true` to hide a
file from production (it still shows in `npm run dev`).

## Bar / Drink reviews (digital spread)

Frontmatter (see `bars/jigger-and-pony.mdx` for a full example):

```yaml
title: "Jigger & Pony"
description: "One-line standfirst, shown as the lede."
date: 2026-06-24T21:00:00Z
author: "Tony Palate"
hero_image: "/images/posts/.../1.jpg"   # full-bleed hero (landscape, 21:9 band)
hero_image_portrait: "/images/posts/.../1-tall.jpg"  # optional; tall crop used on mobile (4:5)
hero_alt: "…"
eyebrow: "Singapore · World's 50 Best"   # hero kicker
tags: ["singapore", "cocktails"]         # rendered as #hashtags
info_heading: "Jigger & Pony"
map_embed: "https://www.google.com/maps/embed?pb=…"  # optional; the map's src URL
# (you may also paste the whole <iframe> embed snippet — the URL is extracted and
#  HTML entities like &#39; are decoded. If pasting the full snippet, use a YAML
#  block scalar `map_embed: |` because it contains double quotes.)
toc:                                     # floating TOC (desktop); "Verdict" auto-added
  - { label: "The Room", href: "#sec-1" }
ratings:                                 # FLEXIBLE: 0, 1, or many blocks (all /10)
  - label: "Cocktail"
    overall: 10
    summary: "…"
    criteria:
      - { label: "Skill", score: 10, note: "…" }
info:                                    # FLEXIBLE key/value details
  - { label: "Location", value: "…" }
```

One rating block renders full-width; two render side-by-side. The editorial
number ("Review · No. 14 · Bars") is generated automatically — never hand-number.

Body is MDX. Import the building blocks and structure the body with them:

```mdx
import Section from "@/components/Section.astro";
import Row from "@/components/Row.astro";
import Figure from "@/components/Figure.astro";
import PullQuote from "@/components/PullQuote.astro";

<p class="dropcap">Opening standfirst paragraph…</p>

<Section heading="The Room" id="sec-1">

A full-width paragraph. By default every block in a section stacks in one
column, in source order. Blank lines between every block; no indentation.

<Row>

<Figure id="lb-1" src="/images/…" alt="…" caption="…" />

A paragraph that sits beside the figure, in the asymmetric 2-column layout.

</Row>

Another full-width paragraph below the row.

</Section>

<PullQuote cite="On the service">A striking line…</PullQuote>

<Section heading="The People" id="sec-2" variant="prose"> … </Section>
```

**Layout control:**
- A `<Section>` is a single full-width column by default — blocks stack top to
  bottom. Use `variant="prose"` to narrow it to a comfortable reading measure.
- Wrap **two** blocks (a paragraph + a `<Figure>`, or two figures) in a `<Row>`
  to place them side by side: `<Row>` is ~42/58, `<Row variant="alt">` is ~58/42.
  Rows collapse to a single stacked column on mobile.
- Each `<Figure id>` must be unique on the page (it wires the `:target` lightbox).

## Book reviews

Like above but with `book_author`, `cover_image` (2:3), optional `cover_alt`,
`review_title` (editorial headline), and `stars` (0–5). `info` becomes the spec
sheet; `ratings[0]` drives the mini rating card. Body is plain markdown prose
with a `<p class="dropcap">` first paragraph.

## Standard pages

Plain markdown. Frontmatter: `title`, `description`, `eyebrow`, optional
`author`, `date`, `hero_image`/`hero_alt`/`hero_caption`. First paragraph as
`<p class="dropcap">…</p>`.
