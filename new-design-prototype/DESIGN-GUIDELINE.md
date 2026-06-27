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
* **Dark Mode (Primary):** A deep, moody charcoal (avoiding pure, stark black).
* **Accents:** Deep ambers (whiskey/gold tones) and dark, muted reds (cocktail tones) for subtle highlights, tags, or link states.
* **UI Elements (Vellum/Glassmorphism):** Menus, floating table of contents, and hero text blocks use a frosted, slightly blurred glassmorphism effect, mimicking physical acetate or vellum laid over the paper substrate.

## 4. Layout & The Grid

Employs an asymmetrical, editorial grid where white space is treated as an active design element to let content breathe.

* **Bar & Spirit Reviews (The Digital Spread):** Mimics a physical double-page magazine spread. Features a massive, high-quality anchor image spanning the reading container. The title and Playfair lede sit inside a frosted "vellum" block that physically overlaps the bottom edge of the image and the paper background below it. Images within the body text are pulled into margins with dynamic text wrapping.
* **Book Reviews:** Utilizes a structured, split-screen or dual-column layout. The book cover acts as a static visual anchor on one side while the review text scrolls on the other.

## 5. Photography & "Aliveness"

Photography acts as the visual anchor, enhanced by tasteful, modern web interactions.

* **Image Aesthetic:** Photos should mimic film-simulation cameras—embracing soft grain, warm color grading, and high contrast to enhance the tactile feel.
* **Lightbooth:** When images are clicked, the background applies a soft blur, bringing absolute focus to the textures of the drink or book.
* **Parallax Scrollytelling:** Subtle parallax is applied to the Bar & Spirit hero sections. As the user scrolls, the vellum text block moves slightly faster than the background anchor image, creating a smooth, sliding transition into the body of the review.
* **View Transitions:** Native Astro view transitions are used to ensure fluid, app-like page loads that keep the experience feeling alive.
