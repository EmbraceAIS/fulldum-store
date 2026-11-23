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
export const CONCERT_DROP_SLUGS = ["emi-pe-rave"] as const;
export const GAMER_DROP_SLUGS = ["mummy-called", "biryani-coma", "ammas-plate"] as const;
export const LAUNCH_ONE_SLUGS = [
  "caffeine-reset",
  "slow-pour",
  "dallah-qahwa",
  "on-dum",
  "leave-ticket",
  "one-bag-for-me",
] as const;
export const PRODUCT_SLUGS = [...CONCERT_DROP_SLUGS, ...GAMER_DROP_SLUGS, ...LAUNCH_ONE_SLUGS] as const;

/** Journal posts, newest first. Each slug has its own file in src/routes/blog/. */
export const BLOG_SLUGS = ["what-to-wear-to-a-concert-in-india"] as const;

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
  "/blog",
  ...BLOG_SLUGS.map((slug) => `/blog/${slug}`),
];

/** Absolute URL on SITE_URL for a site path. Already-absolute URLs pass through.
 *  publicPath() values already include BASE_PATH; strip that prefix so we do
 *  not emit …/fulldum-store/fulldum-store/…. */
export function siteUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) return path;
  let p = path.startsWith("/") ? path : `/${path}`;
  if (p === BASE_PATH || p.startsWith(`${BASE_PATH}/`)) {
    p = p.slice(BASE_PATH.length) || "/";
  }
  return `${SITE_URL}${p}`;
}

/** Root-relative path including the GitHub Pages base. */
export function publicPath(path = "/") {
  const p = path.startsWith("/") ? path : `/${path}`;
  if (p === "/") return `${BASE_PATH}/`;
  return `${BASE_PATH}${p}`;
}
