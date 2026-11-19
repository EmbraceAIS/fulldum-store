import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/shop")({
  head: () => pageHead({ title: "Shop — FullDum", description: "All six FullDum launch prints on tees (₹799) and 11 oz mugs (₹449). Shipping included, prepaid, printed in India.", path: "/shop" }),
  component: Shop,
});

function Shop() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-14">
      <p className="kicker text-muted-foreground">Launch one</p>
      <h1 className="mt-2 text-4xl font-bold md:text-5xl">Shop</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">Tees ₹799, mugs ₹449. Shipping is in the price. No surprises at the door.</p>
      <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => <ProductCard key={p.slug} product={p} />)}
      </div>
    </section>
  );
}

