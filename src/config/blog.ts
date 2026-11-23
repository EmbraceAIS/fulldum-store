/** Journal post metadata, newest first. Slugs must match BLOG_SLUGS in site.ts. */
export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  published: string; // YYYY-MM-DD
  ogImage: string; // site path under public/
  kicker: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "what-to-wear-to-a-concert-in-india",
    title: "What to Wear to a Concert in India: The Desi December Survival Guide",
    description:
      "Concert season is here. What to wear to a December gig in India: shoes, layers, bags, and the one graphic tee that does the talking. Practical, desi, no fuss.",
    published: "2026-11-23",
    ogImage: "/blog/og/what-to-wear-to-a-concert-in-india.png",
    kicker: "Concert season",
  },
];

export function blogPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
