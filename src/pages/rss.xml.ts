import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { site } from "@/lib/siteConfig";
import { getAllReviews, reviewHref, CATEGORY, collectionOf } from "@/lib/reviews";

export async function GET(context: APIContext) {
  const reviews = await getAllReviews();
  return rss({
    title: site.title,
    description: site.description,
    site: context.site ?? site.url,
    items: reviews.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description ?? "",
      pubDate: entry.data.date,
      link: reviewHref(entry),
      categories: [CATEGORY[collectionOf(entry)].label],
    })),
  });
}
