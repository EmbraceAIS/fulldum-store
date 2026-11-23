import { Link } from "@tanstack/react-router";
import { publicPath } from "@/config/site";

export function Header() {
  return (
    <header className="border-b border-border bg-background/95 sticky top-0 z-30 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" aria-label="FullDum home" className="shrink-0">
          <img src={publicPath("/brand/fulldum-wordmark-light.svg")} alt="FullDum" width={2200} height={700} className="h-12 w-auto md:h-16" />
        </Link>
        <nav aria-label="Main" className="flex items-center gap-5 text-sm font-medium md:gap-8">
          <Link to="/shop" activeProps={{ className: "underline decoration-turmeric decoration-2 underline-offset-8" }}>Shop</Link>
          <Link to="/shipping" activeProps={{ className: "underline decoration-turmeric decoration-2 underline-offset-8" }}>Shipping</Link>
          <Link to="/contact" activeProps={{ className: "underline decoration-turmeric decoration-2 underline-offset-8" }}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 bg-charcoal text-paper">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-2">
        <div>
          <img src={publicPath("/brand/fulldum-wordmark-dark.svg")} alt="FullDum" width={2200} height={700} className="h-12 w-auto" loading="lazy" />
          <p className="mt-4 font-warm italic text-lg opacity-90">Put the kettle on. We will wait.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap items-start gap-x-8 gap-y-3 text-sm md:justify-end">
          <Link to="/blog" className="hover:text-turmeric">Journal</Link>
          <Link to="/returns" className="hover:text-turmeric">Returns</Link>
          <Link to="/privacy" className="hover:text-turmeric">Privacy</Link>
          <Link to="/terms" className="hover:text-turmeric">Terms</Link>
          <Link to="/contact" className="hover:text-turmeric">Contact</Link>
        </nav>
      </div>
      <div className="border-t border-paper/15">
        <p className="mx-auto max-w-6xl px-5 py-5 kicker text-paper/80">FullDum. Printed in India.</p>
      </div>
    </footer>
  );
}

