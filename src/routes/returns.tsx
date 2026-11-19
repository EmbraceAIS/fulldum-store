import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/returns")({
  head: () => pageHead({ title: "Returns — FullDum", description: "FullDum returns: custom prints cannot be returned except for damage or misprint, reported within 48 hours with a photo.", path: "/returns" }),
  component: Page,
});

function Page() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-14">
      <p className="kicker text-muted-foreground">Fair to both sides</p>
      <h1 className="mt-2 text-4xl font-bold md:text-5xl">Returns</h1>
      <div className="rule-turmeric mt-5" />
      <div className="prose-fd mt-8">
<p>Everything is printed just for you, so we cannot take back a print because it was the wrong size or a change of heart.</p>
<h2>Damage or misprint</h2><p>If your order arrives damaged or misprinted, we will make it right. Email <a href="mailto:wdhxb7q992wc@mail.grokbot.com">wdhxb7q992wc@mail.grokbot.com</a> within 48 hours of delivery with a photo of the problem and your order details.</p>
<h2>After 48 hours</h2><p>We cannot accept claims reported later than 48 hours after delivery.</p>
      </div>
    </section>
  );
}

