// @lovable.dev/vite-tanstack-config already includes tanstackStart, react, tailwind, nitro etc.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { BASE_PATH, PRODUCT_SLUGS } from "./src/config/site";
import { writeSitemap } from "./scripts/write-sitemap";

const sitemap = {
  name: "fulldum-sitemap",
  buildStart() {
    writeSitemap();
  },
};

export default defineConfig({
  plugins: [sitemap],
  vite: {
    base: `${BASE_PATH}/`,
  },
  // Static GitHub Pages host; no Cloudflare/Nitro server bundle needed.
  nitro: false,
  tanstackStart: {
    server: { entry: "server" },
    pages: [
      ...["/", "/shop", "/shipping", "/returns", "/privacy", "/terms", "/contact"].map((path) => ({ path })),
      ...PRODUCT_SLUGS.map((slug) => ({ path: `/product/${slug}` })),
    ],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
