import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () => pageHead({ title: "Terms — FullDum", description: "Terms for FullDum custom printed merch: prepaid orders, printed to order, shipping within India.", path: "/terms" }),
  component: Page,
});

function Page() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-14">
      <p className="kicker text-muted-foreground">The small print, kept small</p>
      <h1 className="mt-2 text-4xl font-bold md:text-5xl">Terms</h1>
      <div className="rule-turmeric mt-5" />
      <div className="prose-fd mt-8">
<ul><li>FullDum sells custom printed tees and mugs, made to order.</li>
<li>All orders are prepaid. We do not offer cash on delivery.</li>
<li>Prices are in Indian rupees and include shipping within India.</li>
<li>We ship within India, usually in 5–8 days. Delays from couriers are rare but possible.</li>
<li>Colours on screen can look slightly different from the printed item.</li>
<li>Returns are covered by our returns policy: damage or misprint only, reported within 48 hours.</li>
<li>All designs belong to FullDum. Please do not reproduce them.</li>
<li>Questions go to <a href="mailto:wdhxb7q992wc@mail.grokbot.com">wdhxb7q992wc@mail.grokbot.com</a>.</li></ul>
      </div>
    </section>
  );
}

