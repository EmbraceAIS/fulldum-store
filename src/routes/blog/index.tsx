import { createFileRoute, Link } from "@tanstack/react-router";
import { BLOG_POSTS } from "@/config/blog";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () =>
    pageHead({
      title: "Journal — FullDum",
      description: "Notes from the FullDum kitchen table: concert season, chai, biryani and desi life, with the odd useful checklist.",
      path: "/blog",
    }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-14">
      <p className="kicker text-muted-foreground">Read it with chai</p>
      <h1 className="mt-2 text-4xl font-bold md:text-5xl">Journal</h1>
      <div className="rule-turmeric mt-5" />
      <ul className="mt-10 grid gap-6 md:grid-cols-2">
        {BLOG_POSTS.map((p) => (
          <li key={p.slug} className="rounded-lg bg-card p-6 md:p-8">
            <p className="kicker text-muted-foreground">{p.kicker} · {formatDate(p.published)}</p>
            <h2 className="mt-3 text-2xl font-bold leading-snug">
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="hover:underline decoration-turmeric decoration-2 underline-offset-4">{p.title}</Link>
            </h2>
            <p className="mt-3 text-muted-foreground">{p.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00+05:30`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata" });
}
