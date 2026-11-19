import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { shippingWindow } from "@/lib/shipping";

export const Route = createFileRoute("/shipping")({
  head: () => pageHead({ title: "Shipping — FullDum", description: `FullDum ships from India in ${shippingWindow}. Prepaid only, no cash on delivery, and shipping is already in the price.`, path: "/shipping" }),
  component: Page,
});

function Page() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-14">
      <p className="mb-8 border-l-4 border-turmeric pl-4 text-lg font-semibold">Thanks for your order! You'll get a confirmation email; we print and ship within {shippingWindow}.</p>
      <p className="kicker text-muted-foreground">The slow part is the printing</p>
      <h1 className="mt-2 text-4xl font-bold md:text-5xl">Shipping</h1>
      <div className="rule-turmeric mt-5" />
      <div className="prose-fd mt-8">
<p>Every tee and mug is printed to order in India, then sent your way. Kettle on, it is coming.</p>
<h2>How long</h2><p>Orders ship from India and usually arrive in {shippingWindow}.</p>
<h2>What it costs</h2><p>Shipping is included in the price. Tees are ₹799 and mugs are ₹449, delivered.</p>
<h2>How you pay</h2><p>Prepaid only. No cash on delivery.</p>
<h2>Questions</h2><p>Write to <a href="mailto:wdhxb7q992wc@mail.grokbot.com">wdhxb7q992wc@mail.grokbot.com</a>.</p>
      </div>
    </section>
  );
}

