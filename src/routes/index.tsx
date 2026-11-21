import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { concertDrop, gamerDrop, launchOne } from "@/lib/products";
import { pageHead } from "@/lib/seo";
import { publicPath } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "FullDum — Food and desi life, on merch.",
      description: "EMI Pe Rave is in for concert season, plus the Gamer Drop and the first FullDum prints. Tees ₹799 and mugs ₹449, printed in India, shipping included.",
      path: "/",
    }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-14 pb-16 md:pt-24">
        <img src={publicPath("/brand/fulldum-wordmark-light.svg")} alt="FullDum" width={2200} height={700} className="mx-auto w-full max-w-xl" />
        <h1 className="mx-auto mt-8 max-w-2xl text-center font-warm text-2xl italic leading-snug md:text-3xl">
          Food and desi life, on merch.
        </h1>
        <div className="mt-8 flex justify-center gap-3">
          <a href="#concert-season" className="btn-ink">Shop EMI Pe Rave</a>
          <Link to="/shop" className="btn-line">See all prints</Link>
        </div>
      </section>

      <section aria-labelledby="story" className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="kicker text-muted-foreground">The story</p>
            <div className="rule-turmeric mt-3" />
            <h2 id="story" className="mt-4 text-3xl font-bold">Witty and warm, never loud.</h2>
          </div>
          <div className="space-y-4 font-serif text-xl leading-relaxed md:text-2xl">
            <p>FullDum is merch for food and desi life. The first cup. The lid you are not supposed to lift. The bag that is mostly gifts.</p>
            <p>Witty and warm, never loud. We print tees and mugs in India, and we ship them prepaid.</p>
          </div>
        </div>
      </section>


      <section id="concert-season" aria-labelledby="concert-season-heading" className="mx-auto max-w-6xl px-5 pt-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="kicker text-muted-foreground">Concert season</p>
            <h2 id="concert-season-heading" className="mt-2 text-3xl font-bold md:text-4xl">Paisa gaya, vibe aayi.</h2>
          </div>
        </div>
        <p className="mt-3 max-w-xl text-muted-foreground">One new print for the ticket that went on EMI. Tee ₹799, mug ₹449, shipping included.</p>
        <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {concertDrop.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>

      <section id="gamer-drop" aria-labelledby="gamer-drop-heading" className="mx-auto max-w-6xl px-5 pt-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="kicker text-muted-foreground">Gamer Drop</p>
            <h2 id="gamer-drop-heading" className="mt-2 text-3xl font-bold md:text-4xl">Come downstairs. The plate is cleared.</h2>
          </div>
        </div>
        <p className="mt-3 max-w-xl text-muted-foreground">Three new prints. Tees ₹799, mugs ₹449, shipping included.</p>
        <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {gamerDrop.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>

      <section aria-labelledby="launch" className="mx-auto max-w-6xl px-5 pt-16 pb-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="kicker text-muted-foreground">Launch one</p>
            <h2 id="launch" className="mt-2 text-3xl font-bold md:text-4xl">Six prints, one kettle on.</h2>
          </div>
          <Link to="/shop" className="hidden text-sm font-medium underline decoration-turmeric decoration-2 underline-offset-4 sm:block">See all</Link>
        </div>
        <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {launchOne.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>
    </>
  );
}
