import type { APIRoute } from "astro";
import {
  getAllReviews,
  reviewHref,
  CATEGORY,
  collectionOf,
} from "@/lib/reviews";

export const GET: APIRoute = async () => {
  const reviews = await getAllReviews();
  const index = reviews.map((entry) => {
    const cat = CATEGORY[collectionOf(entry)];
    const d = entry.data;
    return {
      title: d.title,
      excerpt: d.description ?? "",
      url: reviewHref(entry),
      category: cat.label,
      tagClass: cat.tagClass,
      tags: d.tags,
      image: d.hero_image ?? ("cover_image" in d ? d.cover_image : ""),
      date: d.date.toISOString(),
    };
  });
  return new Response(JSON.stringify(index), {
    headers: { "Content-Type": "application/json" },
  });
};
