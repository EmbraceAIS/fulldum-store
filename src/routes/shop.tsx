import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { concertDrop, gamerDrop, launchOne } from "@/lib/products";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/shop")({
  head: () => pageHead({ title: "Shop — FullDum", description: "EMI Pe Rave, the Gamer Drop and the first FullDum launch: tees ₹799 and 11 oz mugs ₹449. Shipping included, prepaid, printed in India.", path: "/shop" }),
  component: Shop,
});

function Shop() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-14 pb-16">
      <h1 className="mt-2 text-4xl font-bold md:text-5xl">Shop</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">Tees ₹799, mugs ₹449. Shipping is in the price. No surprises at the door.</p>


      <div className="mt-14">
        <p className="kicker text-muted-foreground">Concert season</p>
        <h2 className="mt-2 text-2xl font-bold md:text-3xl">Paisa gaya, vibe aayi.</h2>
        <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {concertDrop.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </div>

      <div className="mt-16">
        <p className="kicker text-muted-foreground">Gamer Drop</p>
        <h2 className="mt-2 text-2xl font-bold md:text-3xl">Come downstairs. The plate is cleared.</h2>
        <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {gamerDrop.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </div>

      <div className="mt-16">
        <p className="kicker text-muted-foreground">Launch one</p>
        <h2 className="mt-2 text-2xl font-bold md:text-3xl">Six prints, one kettle on.</h2>
        <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {launchOne.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </div>
    </section>
  );
}
