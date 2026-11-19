import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { PUBLIC_PATHS, siteUrl } from "../src/config/site.ts";

const XML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PUBLIC_PATHS.map((path) => `  <url><loc>${siteUrl(path)}</loc></url>`).join("\n")}
</urlset>
`;

/** Writes public/sitemap.xml with absolute URLs on SITE_URL. Run by vite.config.ts on every build. */
export function writeSitemap(outDir = "public") {
  const file = join(outDir, "sitemap.xml");
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, XML, "utf8");
  return file;
}

// Also runnable by hand: `bun scripts/write-sitemap.ts`.
if (import.meta.main) writeSitemap();

