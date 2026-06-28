export const site = {
  title: "Prose & Palate",
  established: "Est. MMXXV",
  description:
    "A slow magazine for bars, drinks, and books worth lingering over.",
  url: "https://www.prosepalate.com",
  copyright: "© 2026 Prose & Palate.",
  footerBlurb:
    "A slow magazine for bars, drinks, and books worth lingering over.",
};

/* Primary navigation — `match` is used to set the active state by path prefix. */
export const nav = [
  { label: "Home", href: "/", match: "exact" as const },
  { label: "Bars", href: "/bars", match: "prefix" as const },
  { label: "Drinks", href: "/drinks", match: "prefix" as const },
  { label: "Books", href: "/books", match: "prefix" as const },
  { label: "Search", href: "/search", match: "prefix" as const },
];

export const footerLinks = {
  subjects: [
    { label: "Bars", href: "/bars" },
    { label: "Drinks", href: "/drinks" },
    { label: "Books", href: "/books" },
  ],
  magazine: [
    { label: "Search", href: "/search" },
    { label: "RSS", href: "/rss.xml" },
  ],
};
