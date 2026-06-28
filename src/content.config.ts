import { defineCollection } from "astro:content";
import { z } from "astro:schema";
import { glob } from "astro/loaders";

/* A single rating block (e.g. "The Cocktail", "The Place", "Spirit").
   Reviews carry a FLEXIBLE array of these — 0, 1, or many. The rating panel
   adapts its layout to however many blocks a given review provides. */
const ratingBlock = z.object({
  label: z.string(),
  overall: z.number(),
  summary: z.string().optional(),
  criteria: z
    .array(
      z.object({
        label: z.string(),
        score: z.number(),
        note: z.string().optional(),
      }),
    )
    .default([]),
});

/* A single key/value detail in the info card / spec sheet. Also flexible —
   each review lists only the fields relevant to its subject. */
const infoItem = z.object({
  label: z.string(),
  value: z.string(),
});

/* Fields shared by every review type. */
const reviewBase = {
  title: z.string(),
  meta_title: z.string().optional(),
  description: z.string().optional(), // standfirst / card excerpt
  date: z.coerce.date(),
  author: z.string().default("The Editors"),
  photographer: z.string().optional(),
  draft: z.boolean().default(false),
  hero_image: z.string(), // landscape (21:9 desktop band)
  hero_image_portrait: z.string().optional(), // optional tall crop for narrow/mobile frames
  hero_alt: z.string().optional(),
  eyebrow: z.string().optional(), // hero kicker, e.g. "Singapore · Asia's 50 Best"
  tags: z.array(z.string()).default([]),
  ratings: z.array(ratingBlock).default([]),
  info: z.array(infoItem).default([]),
  info_heading: z.string().optional(), // subject name shown atop the info card
  // Floating table of contents (desktop). Each entry links to a section id in
  // the body; "Verdict" is appended automatically when ratings exist.
  toc: z
    .array(z.object({ label: z.string(), href: z.string() }))
    .default([]),
};

const bars = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./contents/bars" }),
  schema: z.object({ ...reviewBase, map_embed: z.string().optional() }),
});

const drinks = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./contents/drinks" }),
  schema: z.object({ ...reviewBase, map_embed: z.string().optional() }),
});

const books = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./contents/books" }),
  schema: z.object({
    ...reviewBase,
    hero_image: z.string().optional(), // books fall back to the cover for cards
    book_author: z.string(),
    cover_image: z.string(),
    cover_alt: z.string().optional(),
    review_title: z.string().optional(), // editorial headline for the review column
    stars: z.number().optional(), // 0–5, for the star row on the mini rating card
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./contents/pages" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    eyebrow: z.string().optional(),
    date: z.coerce.date().optional(),
    author: z.string().optional(),
    hero_image: z.string().optional(),
    hero_alt: z.string().optional(),
    hero_caption: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { bars, drinks, books, pages };
