import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { siteUrl } from "@/config/site";
import { buyAction } from "@/lib/checkout";
import { COLOR_LABEL, formatINR, getProduct, mockupSrc, PRICES, SIZES, type Color, type Product, type Size, type Variant } from "@/lib/products";
import { pageHead } from "@/lib/seo";
import { shippingWindow } from "@/lib/shipping";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Not found — FullDum" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.product;
    const name = p.slug === "dallah-qahwa" ? "Coffee Brings Us Together (القهوة تجمعنا)" : p.title;
    const base = pageHead({
      title: `${name} — FullDum`,
      description: `${p.short} Tee ₹799 or 11 oz mug ₹449, shipping included.`,
      path: `/product/${params.slug}`,
      type: "product",
    });
    return {
      ...base,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: p.title,
            description: p.short,
            image: siteUrl(mockupSrc(p.slug, "tee", "white")),
            brand: { "@type": "Brand", name: "FullDum" },
            offers: { "@type": "AggregateOffer", priceCurrency: "INR", lowPrice: 449, highPrice: 799 },
          }),
        },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  return <ProductDetails key={product.slug} product={product} />;
}

function ProductDetails({ product }: { product: Product }) {
  const [variant, setVariant] = useState<Variant>(product.defaultVariant);
  const [color, setColor] = useState<Color>("white");
  const [size, setSize] = useState<Size>("M");
  const colors = product.colors[variant];
  const activeColor = colors.includes(color) ? color : (colors[0] ?? "white");
  const actions = (["tee", "mug"] as const).map((type) => buyAction(product.slug, type));
  const isArabic = product.slug === "dallah-qahwa";

  return (
    <article className="mx-auto max-w-6xl px-5 pt-8">
      <nav aria-label="Breadcrumb" className="kicker text-muted-foreground">
        <Link to="/shop" className="hover:text-foreground">Shop</Link> / <span>{isArabic ? "Coffee Brings Us Together" : product.title.split(" — ")[0]}</span>
      </nav>
      <div className="mt-6 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start">
        <div className="rounded-lg bg-card p-4 md:p-8">
          <img
            src={mockupSrc(product.slug, variant)}
            alt={`${product.title} — ${variant === "tee" ? "cream tee" : "white 11 oz mug"}`}
            width={variant === "tee" ? 864 : 1024}
            height={variant === "tee" ? 1152 : 1024}
            className="mx-auto aspect-[6/7] w-full max-w-2xl object-contain"
          />
        </div>

        <div className="lg:sticky lg:top-24">
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            {isArabic ? (
              <>
                <span lang="ar" dir="rtl" className="block font-arabic text-4xl md:text-5xl">القهوة تجمعنا</span>
                <span className="mt-2 block">Coffee Brings Us Together</span>
              </>
            ) : product.title}
          </h1>
          <p className="mt-4 text-2xl font-semibold">{formatINR(PRICES[variant])}</p>
          <p className="text-sm text-muted-foreground">Shipping included · Prepaid only</p>
          <p className="mt-6 text-lg leading-relaxed">{product.short}</p>
          <p className="mt-3 font-warm italic text-muted-foreground">{product.story}</p>

          <fieldset className="mt-8">
            <legend className="kicker mb-3">Type</legend>
            <div className="flex flex-wrap gap-2">
              {(["tee", "mug"] as Variant[]).map((v) => (
                <button key={v} type="button" className="chip" aria-pressed={variant === v} onClick={() => setVariant(v)}>
                  {v === "tee" ? `Tee · ${formatINR(PRICES.tee)}` : `11 oz mug · ${formatINR(PRICES.mug)}`}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-6">
            <legend className="kicker mb-3">Colour: {COLOR_LABEL[activeColor]}</legend>
            <div className="flex flex-wrap gap-2">
              {colors.map((c) => (
                <button key={c} type="button" className="chip" aria-pressed={activeColor === c} onClick={() => setColor(c)}>
                  {COLOR_LABEL[c]}
                </button>
              ))}
            </div>
          </fieldset>

          {variant === "tee" && (
            <fieldset className="mt-6">
              <legend className="kicker mb-3">Size</legend>
              <div className="flex flex-wrap gap-2">
                {SIZES.map((s) => (
                  <button key={s} type="button" className="chip min-w-12" aria-pressed={size === s} onClick={() => setSize(s)}>{s}</button>
                ))}
              </div>
            </fieldset>
          )}

          <div className="mt-8 flex flex-col gap-3">
            {actions.map((action) => (
              <a key={action.label} href={action.href} target={action.target} rel={action.rel} className="btn-ink w-full">
                {action.label}
              </a>
            ))}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">Pick your size on the next page. Printed to order, ships in {shippingWindow}.</p>
          <ul className="mt-6 space-y-1 text-sm text-muted-foreground">
            <li>Printed in India, ships in {shippingWindow}.</li>
            <li>No cash on delivery. <Link to="/returns" className="underline decoration-turmeric underline-offset-2">Returns</Link> for damage or misprint only.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}

