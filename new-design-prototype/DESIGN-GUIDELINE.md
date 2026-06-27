# Prose & Palate: Brand & Design Guidelines

## 1. Core Identity: The Modern Editorial

Prose & Palate is a tactile, lifestyle-focused digital magazine. It bridges the gap between slow, intentional living and modern web capabilities. The aesthetic is sophisticated, authoritative, and cozy, deliberately avoiding standard, sterile "tech-blog" minimalism.

## 2. Typography

A strict pairing of classic elegance and sharp modernism.

* **Brand & Headings:** **Playfair Display** (Serif). Used for the site title, article headlines, oversized drop caps, and stylized pull quotes.
* **The "Lede" Paragraph:** The entire first paragraph of every review is set in Playfair Display (slightly oversized) to act as a magazine-style standfirst, visually separating the introduction from the body.
* **Body Text:** A clean, highly legible sans-serif (e.g., **Inter** or **Lato**) for sharp, modern contrast and comfortable long-form reading on digital screens.
* **Hierarchy:** Relies on dramatic contrast in size, weight, and white space rather than underlining or excessive colors.

## 3. Color Palette & Textures

Colors are drawn from the subjects being reviewed, emphasizing warmth, depth, and physical materials.

* **The Substrate (Paper Grain):** The entire site utilizes a subtle, fixed SVG noise overlay. Negative space should feel like physical, textured paper rather than empty pixels.
* **Light Mode (Primary):** A warm, textured off-white.
* **Dark Mode (Primary):** A deep, moody charcoal (avoiding pure, stark black). A CSS-only toggle in the header switches themes.
* **Accents:** Deep ambers (whiskey/gold tones) and dark, muted reds (cocktail tones) for subtle highlights, tags, or link states.
* **UI Elements (Vellum/Glassmorphism):** Menus, floating table of contents, hero text blocks, rating panels, and info cards use a frosted, slightly blurred glassmorphism effect, mimicking physical acetate or vellum laid over the paper substrate.

## 4. Layout & The Grid

Employs an asymmetrical, editorial grid where white space is treated as an active design element to let content breathe. The site reviews three subjects — bars, drinks, and books — each with a layout tuned to its content.

### 4.1 Home / Landing Page

* An editorial landing with a sticky masthead and an issue dateline.
* A **featured hero** — a large anchor image with a frosted vellum caption block overlapping its bottom edge.
* An **asymmetrical review grid** of recent reviews, mixing card sizes (lead, wide, narrow, standard) across a 12-column grid for visual rhythm.
* A centered **quote band** divider between sections.
* A **categories strip** linking to Bars, Drinks, and Books sections.

### 4.2 Bar & Spirit Reviews (The Digital Spread)

Mimics a physical double-page magazine spread.

**The Hero:**
* Features a massive, high-quality anchor image spanning the reading container (full-bleed, ~21:9 aspect ratio on desktop).
* The title and Playfair lede sit inside a frosted **vellum title block** that physically overlaps the bottom edge of the image and the paper background below it.
* A subtle **parallax** is applied to the hero image (CSS `background-attachment: fixed`), with the vellum block moving slightly faster than the background anchor image as the user scrolls.
* A category tag and an eyebrow label (e.g. "Singapore · Asia's 50 Best") sit at the top-left corner of the hero image.
* A **floating vellum table of contents** is pinned to the left edge of the viewport on desktop, listing the review's sections for quick navigation.

**The Body — Box-Based Asymmetric Mosaic:**
* After a full-width standfirst intro paragraph with an oversized drop cap, the review body is organized into **sections** (each under an `h2` heading).
* Each section uses a **box-based design**: every paragraph and every photo is treated as its own independent block, flowing into an **asymmetric two-column grid**.
* The two columns are intentionally **not symmetrical** — the default ratio is ~42/58 (`5fr 7fr`). Alternate sections flip to ~58/42 to avoid visual repetition and create editorial rhythm.
* The section heading always spans the full width above the boxes.
* **Photos** are centered horizontally within their column, capped at a maximum height (~22rem), and displayed at their **natural aspect ratio** (never cropped). Each photo carries a caption directly beneath it, set off by a hairline separator.
* **Text blocks** are vertically centered within their grid row, aligning with the photo beside them.
* A section with **no photos** collapses into a single full-width reading column.
* **Pull quotes** break up the body between sections, styled as large italic Playfair Display text with an accent-colored left border.
* On **mobile** (≤48rem), the grid collapses to a single column and all blocks stack top-to-bottom in source order.

### 4.3 Book Reviews (The Split-Screen)

Utilizes a structured, split-screen dual-column layout.

* The **book cover** acts as a static, sticky visual anchor on one side (left). It is capped at a moderate size (~20rem max width) so it reads as an accent, not a dominating element. A subtle page-edge ridge effect mimics a real book's spine.
* Below or beside the cover sits a **spec sheet** — a structured key/value list (publisher, pages, published date, genre, format) with dashed separators.
* An embedded **rating card** (smaller variant) sits within the anchor column.
* The **review text** scrolls on the other side (right), using the same typographic treatment as the bar reviews: Playfair lede, drop cap, section headings, and pull quotes.
* On **mobile**, the columns collapse and the cover sits above the review text.

## 5. Photography & "Aliveness"

Photography acts as the visual anchor, enhanced by tasteful, modern web interactions.

* **Image Aesthetic:** Photos should mimic film-simulation cameras—embracing soft grain, warm color grading, and high contrast to enhance the tactile feel. A subtle CSS filter (slightly increased saturation and contrast) is applied to body images.
* **Lightbooth:** When images are clicked, the background applies a soft blur (via `backdrop-filter`), bringing absolute focus to the textures of the drink or book. Implemented in pure CSS using the `:target` technique — no JavaScript required.
* **Parallax Scrollytelling:** Subtle parallax is applied to the Bar & Spirit hero sections. As the user scrolls, the vellum text block moves slightly faster than the background anchor image, creating a smooth, sliding transition into the body of the review.
* **Hover Life:** Card images scale subtly on hover; buttons and "read more" links slide their arrow icon.
* **View Transitions:** Native Astro view transitions are used to ensure fluid, app-like page loads that keep the experience feeling alive.

## 6. Ratings, Details & Tags

Each review ends with a structured closing area: a rating panel, an info card, and hashtags.

### 6.1 Rating Panel

A vellum-surfaced panel containing one or more **rating blocks**.

* **Rating blocks** group criteria by aspect. For example, a bar review might have a **Cocktail** block (Skill, Recipe, Ingredients) and a **Place** block (Taste, Ambiance, Service, Value). A spirit review might have a single **Spirit** block (Complexity, Balance, Finish, Value).
* Each block displays a **large overall score** (Playfair Display, prominently sized) out of 10, followed by a one-sentence **italic summary** of the block.
* Below the summary, each **criterion** is listed with its individual score (out of 10) and a short descriptive note explaining the rating.
* Scores use a consistent **/10 scale** across all review types.

### 6.2 Info Card

A vellum-surfaced card providing practical details about the subject.

* Displays the subject name as a heading, followed by a structured key/value list (e.g. Location, Price Range, Vibe, Perfect For for bars; Distillery, Age, ABV for spirits).
* One side reserves space for an **embedded map** (Google Maps for bars/restaurants; distillery/location for spirits).

### 6.3 Hashtags

Pill-styled tags displayed centered below the info card, for discoverability and social sharing.

## 7. Editorial Numbering

Each review opens with a small kicker in the form **`Column · No. N · Category`** (e.g. `Review · No. 14 · Bars`, `Tasting · No. 27 · Drinks`).

* **Column** — the magazine "column" (article type). `Review` for bars & books, `Tasting` for drinks.
* **No. N** — a **per-category running counter**. Bars, drinks, and books each maintain their own independent sequence (e.g. Bars #1-#14, Drinks #1-#27, Books #1-#9). In the framework build this number should be auto-generated from the count of published reviews in that category preceding the current one — no hand-numbering.
* **Category** — the subject (Bars / Drinks / Books).

## 8. Implementation Notes

* **Pure prototype stage:** The current prototype is implemented in pure HTML and CSS only — no JavaScript, no framework — to lock in the visual language before framework integration.
* **Flexible rating & detail fields:** The fields shown in the rating panel and info card are **not fixed templates**. They are illustrative, not prescriptive:
  * The number and type of **criteria** within a rating block may vary per review.
  * The number of **rating blocks** itself may vary. There is no rule that bar reviews must always have separate Cocktail and Place blocks — for example, a wine bar would not have a Cocktail block.
  * The **info card** fields are likewise flexible. More or fewer fields may appear depending on what is relevant to the subject.
* **Scores:** All scores are on a **/10 scale**.
* **Responsive:** All layouts collapse to single-column stacking on mobile (≤48rem breakpoint).
* **Reduced motion:** Parallax and transitions are disabled when the user's system prefers reduced motion.
