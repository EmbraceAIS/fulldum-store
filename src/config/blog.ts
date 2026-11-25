/** Journal post metadata, newest first. Slugs must match BLOG_SLUGS in site.ts. */
export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  published: string; // YYYY-MM-DD
  ogImage: string; // site path under public/
  kicker: string;
  /** Product the end-of-post button points to. */
  product: { slug: string; label: string };
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "why-biryani-makes-you-sleepy",
    title: "Biryani Coma Is Real: Why a Big Biryani Lunch Makes You Sleepy",
    description:
      "That Sunday post-biryani nap has a medical name. Why a big biryani lunch makes you drowsy, how long a food coma lasts, the blood-to-stomach myth, and how to stay awake.",
    published: "2026-11-25",
    ogImage: "/blog/og/why-biryani-makes-you-sleepy.png",
    kicker: "Desi life",
    product: { slug: "biryani-coma", label: "See Biryani Coma" },
  },
  {
    slug: "what-to-wear-to-a-concert-in-india",
    title: "What to Wear to a Concert in India: The Desi December Survival Guide",
    description:
      "Concert season is here. What to wear to a December gig in India: shoes, layers, bags, and the one graphic tee that does the talking. Practical, desi, no fuss.",
    published: "2026-11-23",
    ogImage: "/blog/og/what-to-wear-to-a-concert-in-india.png",
    kicker: "Concert season",
    product: { slug: "emi-pe-rave", label: "See EMI Pe Rave" },
  },
];

export function blogPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
