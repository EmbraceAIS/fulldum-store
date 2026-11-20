/**
 * The store's one public address. Every absolute URL the site hands to search
 * engines and social crawlers — canonical, og:url, og:image, twitter:image,
 * sitemap entries, JSON-LD logo and url — is built from SITE_URL, so moving the
 * store to another host means changing this line only.
 *
 * No trailing slash: paths are appended as-is, `siteUrl("/shop")`.
 *
 * GitHub Pages serves this project at /fulldum-store/. BASE_PATH is that
 * prefix; publicPath() is for in-page asset and favicon hrefs.
 */
export const BASE_PATH = "/fulldum-store";
export const SITE_URL = "https://embraceais.github.io/fulldum-store";

/** Shop order. Drives the product routes, prerender and the sitemap. */
export const GAMER_DROP_SLUGS = ["mummy-called", "biryani-coma", "ammas-plate"] as const;
export const LAUNCH_ONE_SLUGS = [
  "caffeine-reset",
  "slow-pour",
  "dallah-qahwa",
  "on-dum",
  "leave-ticket",
  "one-bag-for-me",
] as const;
export const PRODUCT_SLUGS = [...GAMER_DROP_SLUGS, ...LAUNCH_ONE_SLUGS] as const;

/** Every page a crawler should be told about. */
export const PUBLIC_PATHS: string[] = [
  "/",
  "/shop",
  "/shipping",
  "/returns",
  "/privacy",
  "/terms",
  "/contact",
  ...PRODUCT_SLUGS.map((slug) => `/product/${slug}`),
];

/** Absolute URL on SITE_URL for a site path. Already-absolute URLs pass through. */
export function siteUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) return path;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}

/** Root-relative path including the GitHub Pages base. */
export function publicPath(path = "/") {
  const p = path.startsWith("/") ? path : `/${path}`;
  if (p === "/") return `${BASE_PATH}/`;
  return `${BASE_PATH}${p}`;
}
