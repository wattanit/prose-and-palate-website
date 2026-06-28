// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.prosepalate.com",
  trailingSlash: "never",
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "css-variables",
      wrap: true,
    },
  },
});
