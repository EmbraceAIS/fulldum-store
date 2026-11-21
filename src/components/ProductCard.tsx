import { Link } from "@tanstack/react-router";
import { EMI_PE_RAVE_CHECKOUT_LIVE, GAMER_DROP_CHECKOUT_LIVE } from "@/config/buyLinks";
import { formatINR, mockupSrc, PRICES, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const isArabic = product.slug === "dallah-qahwa";
  return (
    <Link to="/product/$slug" params={{ slug: product.slug }} className="group block">
      <div className="overflow-hidden rounded-lg bg-card">
        <img
          src={mockupSrc(product.slug, product.defaultVariant)}
          alt={`${product.title} — ${product.defaultVariant === "tee" ? "cream tee" : "white 11 oz mug"}`}
          width={product.defaultVariant === "tee" ? 864 : 1024}
          height={product.defaultVariant === "tee" ? 1152 : 1024}
          loading="lazy"
          className="aspect-[6/7] w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <h3 className={`mt-4 text-lg font-semibold leading-snug ${isArabic ? "" : ""}`}>
        {isArabic ? (
          <>
            <span lang="ar" dir="rtl" className="font-arabic">القهوة تجمعنا</span> — Coffee Brings Us Together
          </>
        ) : (
          product.title
        )}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Tee {formatINR(PRICES.tee)} · Mug {formatINR(PRICES.mug)} · shipping included
        {(product.collection === "gamer-drop" && !GAMER_DROP_CHECKOUT_LIVE) || (product.collection === "concert-drop" && !EMI_PE_RAVE_CHECKOUT_LIVE) ? " · Coming soon" : ""}
      </p>
    </Link>
  );
}

