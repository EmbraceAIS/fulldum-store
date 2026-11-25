import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import type { ComponentType } from "react";
import { blogPost } from "@/config/blog";
import { siteUrl } from "@/config/site";
import { pageHead } from "@/lib/seo";
import * as concertOutfits from "@/content/blog/what-to-wear-to-a-concert-in-india";
import * as biryaniComa from "@/content/blog/why-biryani-makes-you-sleepy";
import { formatDate } from "./index";

type PostModule = { Body: ComponentType; faq: { q: string; a: string }[] };

const CONTENT: Record<string, PostModule> = {
  "what-to-wear-to-a-concert-in-india": concertOutfits,
  "why-biryani-makes-you-sleepy": biryaniComa,
};

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPost(params.slug);
    if (!post || !CONTENT[params.slug]) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Not found — FullDum" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.post;
    const faq = CONTENT[params.slug]?.faq ?? [];
    const base = pageHead({ title: `${p.title} — FullDum`, description: p.description, path: `/blog/${p.slug}`, type: "article", image: p.ogImage });
    const scripts = [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.title,
          description: p.description,
          image: siteUrl(p.ogImage),
          datePublished: p.published,
          dateModified: p.published,
          mainEntityOfPage: siteUrl(`/blog/${p.slug}`),
          author: { "@type": "Organization", name: "FullDum", url: siteUrl("/") },
          publisher: { "@type": "Organization", name: "FullDum", logo: { "@type": "ImageObject", url: siteUrl("/favicon-512.png") } },
        }),
      },
    ];
    if (faq.length)
      scripts.push({
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }),
      });
    return { ...base, meta: [...base.meta, { property: "article:published_time", content: p.published }], scripts };
  },
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const { Body, faq } = CONTENT[post.slug]!;
  return (
    <article className="mx-auto max-w-6xl px-5 pt-8">
      <nav aria-label="Breadcrumb" className="kicker text-muted-foreground">
        <Link to="/blog" className="hover:text-foreground">Journal</Link> / <span>{post.kicker}</span>
      </nav>
      <header className="mt-6 max-w-3xl">
        <p className="kicker text-muted-foreground">{post.kicker} · {formatDate(post.published)}</p>
        <h1 className="mt-2 text-4xl font-bold leading-tight md:text-5xl">{post.title}</h1>
        <div className="rule-turmeric mt-5" />
      </header>
      <div className="prose-fd mt-8">
        <Body />
        {faq.length > 0 && (
          <section aria-labelledby="faq">
            <h2 id="faq">Quick answers</h2>
            {faq.map((f) => (
              <div key={f.q}>
                <h3 className="mt-5 font-semibold text-foreground">{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </section>
        )}
      </div>
      <div className="mt-12 flex flex-wrap gap-3">
        <Link to="/product/$slug" params={{ slug: post.product.slug }} className="btn-ink">{post.product.label}</Link>
        <Link to="/shop" className="btn-line">All prints</Link>
      </div>
    </article>
  );
}
