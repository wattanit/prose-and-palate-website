/* Date + reading-time helpers (native Intl — no date-fns). */

const longFmt = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});
const shortFmt = new Intl.DateTimeFormat("en-GB", {
  month: "short",
  year: "numeric",
});

/** e.g. "27 June 2026" — used in review meta rows. */
export function formatLong(date: Date): string {
  return longFmt.format(date);
}

/** e.g. "Jun 2026" — used on cards and the cover hero. */
export function formatShort(date: Date): string {
  return shortFmt.format(date);
}

/** e.g. "8 min read" — estimated from raw markdown body at ~200 wpm. */
export function readingTime(content: string): string {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}
