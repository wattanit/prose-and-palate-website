import { getCollection, type CollectionEntry } from "astro:content";

export type ReviewCollection = "bars" | "drinks" | "books";
export type ReviewEntry =
  | CollectionEntry<"bars">
  | CollectionEntry<"drinks">
  | CollectionEntry<"books">;

/* Per-subject metadata: the editorial "column", display labels, tag class,
   route base, and category-listing header copy. */
export const CATEGORY: Record<
  ReviewCollection,
  {
    label: string; // chip / eyebrow label, e.g. "Bars"
    column: string; // editorial column, e.g. "Review" | "Tasting"
    tagClass: string; // CSS tag modifier
    path: string; // route base, e.g. "bars"
    title: string; // category page H1
    blurb: string; // category page description
  }
> = {
  bars: {
    label: "Bars",
    column: "Review",
    tagClass: "tag--bars",
    path: "bars",
    title: "Bars & Rooms",
    blurb:
      "The places that earn a second visit — and a third, and a tenth. Hospitality, design, and the small rituals of a regular.",
  },
  drinks: {
    label: "Drinks",
    column: "Tasting",
    tagClass: "tag--drinks",
    path: "drinks",
    title: "Drinks & Spirits",
    blurb:
      "Tasting notes, forgotten classics, and the quiet philosophy in a well-made pour.",
  },
  books: {
    label: "Books",
    column: "Review",
    tagClass: "tag--books",
    path: "books",
    title: "Books & Pages",
    blurb: "Fiction and essays that reward the reader who refuses to hurry.",
  },
};

/** Drafts are hidden in production builds, visible during local dev. */
export function isPublished(entry: { data: { draft?: boolean } }): boolean {
  return import.meta.env.PROD ? entry.data.draft !== true : true;
}

const byDateDesc = (a: ReviewEntry, b: ReviewEntry) =>
  b.data.date.valueOf() - a.data.date.valueOf();

/** Published reviews in one collection, newest first. */
export async function getReviews(
  collection: ReviewCollection,
): Promise<ReviewEntry[]> {
  const entries = (await getCollection(
    collection,
    isPublished,
  )) as ReviewEntry[];
  return entries.sort(byDateDesc);
}

/** All published reviews across every collection, newest first. */
export async function getAllReviews(): Promise<ReviewEntry[]> {
  const groups = await Promise.all(
    (["bars", "drinks", "books"] as ReviewCollection[]).map(getReviews),
  );
  return groups.flat().sort(byDateDesc);
}

/** The collection a review entry belongs to (entry.collection is typed wide). */
export function collectionOf(entry: ReviewEntry): ReviewCollection {
  return entry.collection as ReviewCollection;
}

/** Canonical URL path for a review, e.g. "/bars/atlas". */
export function reviewHref(entry: ReviewEntry): string {
  return `/${CATEGORY[collectionOf(entry)].path}/${entry.id}`;
}

/**
 * Per-category running number: 1 + the count of published reviews in the same
 * collection with an earlier date. Auto-generated — never hand-numbered.
 */
export async function editorialNumber(
  collection: ReviewCollection,
  id: string,
): Promise<number> {
  const ascending = (await getReviews(collection)).slice().reverse();
  const idx = ascending.findIndex((e) => e.id === id);
  return idx + 1;
}

/** The full kicker, e.g. "Review · No. 14 · Bars". */
export function editorialKicker(
  collection: ReviewCollection,
  n: number,
): string {
  const { column, label } = CATEGORY[collection];
  return `${column} · No. ${n} · ${label}`;
}
