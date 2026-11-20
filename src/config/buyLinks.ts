/**
 * FullDum checkout link map.
 *
 * Key format: `${productId}:${variant}:${color}:${size}`
 *   - productId: mummy-called | biryani-coma | ammas-plate | caffeine-reset | slow-pour | dallah-qahwa | on-dum | leave-ticket | one-bag-for-me
 *   - variant:   tee | mug
 *   - color:     white | paper | charcoal
 *   - size:      S | M | L | XL | 2XL  (use "-" for mugs, which have no size)
 *
 * Launch-one Razorpay Payment Page URLs are live. All colours and sizes of each
 * product + variant share one Payment Page; shoppers choose size there.
 * Product pages show both Buy links, with no mailto notify fallback.
 *
 * Gamer Drop payment pages are live. getBuyLink() returns those URLs when
 * GAMER_DROP_CHECKOUT_LIVE is true, and an empty string if the flag is flipped
 * off. That flag is the one-line switch for Gamer Drop checkout.
 *
 * Do not put Razorpay API keys in this file or anywhere in the app.
 */
export const CONTACT_EMAIL = "wdhxb7q992wc@mail.grokbot.com";

/** Flip to true once the six Gamer Drop Razorpay payment pages are live. */
export const GAMER_DROP_CHECKOUT_LIVE = true;

const GAMER_DROP_PRODUCTS = new Set(["mummy-called", "biryani-coma", "ammas-plate"]);

export type BuyKey = string;

export const buyLinks: Record<BuyKey, string> = {
  // Caffeine Reset
  "caffeine-reset:tee:white:S": "https://rzp.io/rzp/fulldum-caffeine-reset-tee",
  "caffeine-reset:tee:white:M": "https://rzp.io/rzp/fulldum-caffeine-reset-tee",
  "caffeine-reset:tee:white:L": "https://rzp.io/rzp/fulldum-caffeine-reset-tee",
  "caffeine-reset:tee:white:XL": "https://rzp.io/rzp/fulldum-caffeine-reset-tee",
  "caffeine-reset:tee:white:2XL": "https://rzp.io/rzp/fulldum-caffeine-reset-tee",
  "caffeine-reset:tee:paper:S": "https://rzp.io/rzp/fulldum-caffeine-reset-tee",
  "caffeine-reset:tee:paper:M": "https://rzp.io/rzp/fulldum-caffeine-reset-tee",
  "caffeine-reset:tee:paper:L": "https://rzp.io/rzp/fulldum-caffeine-reset-tee",
  "caffeine-reset:tee:paper:XL": "https://rzp.io/rzp/fulldum-caffeine-reset-tee",
  "caffeine-reset:tee:paper:2XL": "https://rzp.io/rzp/fulldum-caffeine-reset-tee",
  "caffeine-reset:tee:charcoal:S": "https://rzp.io/rzp/fulldum-caffeine-reset-tee",
  "caffeine-reset:tee:charcoal:M": "https://rzp.io/rzp/fulldum-caffeine-reset-tee",
  "caffeine-reset:tee:charcoal:L": "https://rzp.io/rzp/fulldum-caffeine-reset-tee",
  "caffeine-reset:tee:charcoal:XL": "https://rzp.io/rzp/fulldum-caffeine-reset-tee",
  "caffeine-reset:tee:charcoal:2XL": "https://rzp.io/rzp/fulldum-caffeine-reset-tee",
  "caffeine-reset:mug:white:-": "https://rzp.io/rzp/fulldum-caffeine-reset-mug",
  "caffeine-reset:mug:charcoal:-": "https://rzp.io/rzp/fulldum-caffeine-reset-mug",

  // Slow Pour
  "slow-pour:tee:white:S": "https://rzp.io/rzp/fulldum-slow-pour-tee",
  "slow-pour:tee:white:M": "https://rzp.io/rzp/fulldum-slow-pour-tee",
  "slow-pour:tee:white:L": "https://rzp.io/rzp/fulldum-slow-pour-tee",
  "slow-pour:tee:white:XL": "https://rzp.io/rzp/fulldum-slow-pour-tee",
  "slow-pour:tee:white:2XL": "https://rzp.io/rzp/fulldum-slow-pour-tee",
  "slow-pour:tee:paper:S": "https://rzp.io/rzp/fulldum-slow-pour-tee",
  "slow-pour:tee:paper:M": "https://rzp.io/rzp/fulldum-slow-pour-tee",
  "slow-pour:tee:paper:L": "https://rzp.io/rzp/fulldum-slow-pour-tee",
  "slow-pour:tee:paper:XL": "https://rzp.io/rzp/fulldum-slow-pour-tee",
  "slow-pour:tee:paper:2XL": "https://rzp.io/rzp/fulldum-slow-pour-tee",
  "slow-pour:tee:charcoal:S": "https://rzp.io/rzp/fulldum-slow-pour-tee",
  "slow-pour:tee:charcoal:M": "https://rzp.io/rzp/fulldum-slow-pour-tee",
  "slow-pour:tee:charcoal:L": "https://rzp.io/rzp/fulldum-slow-pour-tee",
  "slow-pour:tee:charcoal:XL": "https://rzp.io/rzp/fulldum-slow-pour-tee",
  "slow-pour:tee:charcoal:2XL": "https://rzp.io/rzp/fulldum-slow-pour-tee",
  "slow-pour:mug:white:-": "https://rzp.io/rzp/fulldum-slow-pour-mug",
  "slow-pour:mug:charcoal:-": "https://rzp.io/rzp/fulldum-slow-pour-mug",

  // Dallah
  "dallah-qahwa:tee:white:S": "https://rzp.io/rzp/fulldum-dallah-qahwa-tee",
  "dallah-qahwa:tee:white:M": "https://rzp.io/rzp/fulldum-dallah-qahwa-tee",
  "dallah-qahwa:tee:white:L": "https://rzp.io/rzp/fulldum-dallah-qahwa-tee",
  "dallah-qahwa:tee:white:XL": "https://rzp.io/rzp/fulldum-dallah-qahwa-tee",
  "dallah-qahwa:tee:white:2XL": "https://rzp.io/rzp/fulldum-dallah-qahwa-tee",
  "dallah-qahwa:tee:paper:S": "https://rzp.io/rzp/fulldum-dallah-qahwa-tee",
  "dallah-qahwa:tee:paper:M": "https://rzp.io/rzp/fulldum-dallah-qahwa-tee",
  "dallah-qahwa:tee:paper:L": "https://rzp.io/rzp/fulldum-dallah-qahwa-tee",
  "dallah-qahwa:tee:paper:XL": "https://rzp.io/rzp/fulldum-dallah-qahwa-tee",
  "dallah-qahwa:tee:paper:2XL": "https://rzp.io/rzp/fulldum-dallah-qahwa-tee",
  "dallah-qahwa:tee:charcoal:S": "https://rzp.io/rzp/fulldum-dallah-qahwa-tee",
  "dallah-qahwa:tee:charcoal:M": "https://rzp.io/rzp/fulldum-dallah-qahwa-tee",
  "dallah-qahwa:tee:charcoal:L": "https://rzp.io/rzp/fulldum-dallah-qahwa-tee",
  "dallah-qahwa:tee:charcoal:XL": "https://rzp.io/rzp/fulldum-dallah-qahwa-tee",
  "dallah-qahwa:tee:charcoal:2XL": "https://rzp.io/rzp/fulldum-dallah-qahwa-tee",
  "dallah-qahwa:mug:white:-": "https://rzp.io/rzp/fulldum-dallah-qahwa-mug",
  "dallah-qahwa:mug:charcoal:-": "https://rzp.io/rzp/fulldum-dallah-qahwa-mug",

  // On Dum
  "on-dum:tee:white:S": "https://rzp.io/rzp/fulldum-on-dum-tee",
  "on-dum:tee:white:M": "https://rzp.io/rzp/fulldum-on-dum-tee",
  "on-dum:tee:white:L": "https://rzp.io/rzp/fulldum-on-dum-tee",
  "on-dum:tee:white:XL": "https://rzp.io/rzp/fulldum-on-dum-tee",
  "on-dum:tee:white:2XL": "https://rzp.io/rzp/fulldum-on-dum-tee",
  "on-dum:tee:paper:S": "https://rzp.io/rzp/fulldum-on-dum-tee",
  "on-dum:tee:paper:M": "https://rzp.io/rzp/fulldum-on-dum-tee",
  "on-dum:tee:paper:L": "https://rzp.io/rzp/fulldum-on-dum-tee",
  "on-dum:tee:paper:XL": "https://rzp.io/rzp/fulldum-on-dum-tee",
  "on-dum:tee:paper:2XL": "https://rzp.io/rzp/fulldum-on-dum-tee",
  "on-dum:tee:charcoal:S": "https://rzp.io/rzp/fulldum-on-dum-tee",
  "on-dum:tee:charcoal:M": "https://rzp.io/rzp/fulldum-on-dum-tee",
  "on-dum:tee:charcoal:L": "https://rzp.io/rzp/fulldum-on-dum-tee",
  "on-dum:tee:charcoal:XL": "https://rzp.io/rzp/fulldum-on-dum-tee",
  "on-dum:tee:charcoal:2XL": "https://rzp.io/rzp/fulldum-on-dum-tee",
  "on-dum:mug:white:-": "https://rzp.io/rzp/fulldum-on-dum-mug",
  "on-dum:mug:charcoal:-": "https://rzp.io/rzp/fulldum-on-dum-mug",

  // Leave Ticket — light tees and white mug only (the design is a charcoal ticket)
  "leave-ticket:tee:white:S": "https://rzp.io/rzp/fulldum-leave-ticket-tee",
  "leave-ticket:tee:white:M": "https://rzp.io/rzp/fulldum-leave-ticket-tee",
  "leave-ticket:tee:white:L": "https://rzp.io/rzp/fulldum-leave-ticket-tee",
  "leave-ticket:tee:white:XL": "https://rzp.io/rzp/fulldum-leave-ticket-tee",
  "leave-ticket:tee:white:2XL": "https://rzp.io/rzp/fulldum-leave-ticket-tee",
  "leave-ticket:tee:paper:S": "https://rzp.io/rzp/fulldum-leave-ticket-tee",
  "leave-ticket:tee:paper:M": "https://rzp.io/rzp/fulldum-leave-ticket-tee",
  "leave-ticket:tee:paper:L": "https://rzp.io/rzp/fulldum-leave-ticket-tee",
  "leave-ticket:tee:paper:XL": "https://rzp.io/rzp/fulldum-leave-ticket-tee",
  "leave-ticket:tee:paper:2XL": "https://rzp.io/rzp/fulldum-leave-ticket-tee",
  "leave-ticket:mug:white:-": "https://rzp.io/rzp/fulldum-leave-ticket-mug",

  // One Bag for Me
  "one-bag-for-me:tee:white:S": "https://rzp.io/rzp/fulldum-one-bag-for-me-tee",
  "one-bag-for-me:tee:white:M": "https://rzp.io/rzp/fulldum-one-bag-for-me-tee",
  "one-bag-for-me:tee:white:L": "https://rzp.io/rzp/fulldum-one-bag-for-me-tee",
  "one-bag-for-me:tee:white:XL": "https://rzp.io/rzp/fulldum-one-bag-for-me-tee",
  "one-bag-for-me:tee:white:2XL": "https://rzp.io/rzp/fulldum-one-bag-for-me-tee",
  "one-bag-for-me:tee:paper:S": "https://rzp.io/rzp/fulldum-one-bag-for-me-tee",
  "one-bag-for-me:tee:paper:M": "https://rzp.io/rzp/fulldum-one-bag-for-me-tee",
  "one-bag-for-me:tee:paper:L": "https://rzp.io/rzp/fulldum-one-bag-for-me-tee",
  "one-bag-for-me:tee:paper:XL": "https://rzp.io/rzp/fulldum-one-bag-for-me-tee",
  "one-bag-for-me:tee:paper:2XL": "https://rzp.io/rzp/fulldum-one-bag-for-me-tee",
  "one-bag-for-me:tee:charcoal:S": "https://rzp.io/rzp/fulldum-one-bag-for-me-tee",
  "one-bag-for-me:tee:charcoal:M": "https://rzp.io/rzp/fulldum-one-bag-for-me-tee",
  "one-bag-for-me:tee:charcoal:L": "https://rzp.io/rzp/fulldum-one-bag-for-me-tee",
  "one-bag-for-me:tee:charcoal:XL": "https://rzp.io/rzp/fulldum-one-bag-for-me-tee",
  "one-bag-for-me:tee:charcoal:2XL": "https://rzp.io/rzp/fulldum-one-bag-for-me-tee",
  "one-bag-for-me:mug:white:-": "https://rzp.io/rzp/fulldum-one-bag-for-me-mug",
  "one-bag-for-me:mug:charcoal:-": "https://rzp.io/rzp/fulldum-one-bag-for-me-mug",
  // Gamer Drop — live; gated by GAMER_DROP_CHECKOUT_LIVE.
  // Mummy Called
  "mummy-called:tee:white:S": "https://rzp.io/rzp/fulldum-mummy-called-tee",
  "mummy-called:tee:white:M": "https://rzp.io/rzp/fulldum-mummy-called-tee",
  "mummy-called:tee:white:L": "https://rzp.io/rzp/fulldum-mummy-called-tee",
  "mummy-called:tee:white:XL": "https://rzp.io/rzp/fulldum-mummy-called-tee",
  "mummy-called:tee:white:2XL": "https://rzp.io/rzp/fulldum-mummy-called-tee",
  "mummy-called:tee:paper:S": "https://rzp.io/rzp/fulldum-mummy-called-tee",
  "mummy-called:tee:paper:M": "https://rzp.io/rzp/fulldum-mummy-called-tee",
  "mummy-called:tee:paper:L": "https://rzp.io/rzp/fulldum-mummy-called-tee",
  "mummy-called:tee:paper:XL": "https://rzp.io/rzp/fulldum-mummy-called-tee",
  "mummy-called:tee:paper:2XL": "https://rzp.io/rzp/fulldum-mummy-called-tee",
  "mummy-called:tee:charcoal:S": "https://rzp.io/rzp/fulldum-mummy-called-tee",
  "mummy-called:tee:charcoal:M": "https://rzp.io/rzp/fulldum-mummy-called-tee",
  "mummy-called:tee:charcoal:L": "https://rzp.io/rzp/fulldum-mummy-called-tee",
  "mummy-called:tee:charcoal:XL": "https://rzp.io/rzp/fulldum-mummy-called-tee",
  "mummy-called:tee:charcoal:2XL": "https://rzp.io/rzp/fulldum-mummy-called-tee",
  "mummy-called:mug:white:-": "https://rzp.io/rzp/fulldum-mummy-called-mug",
  "mummy-called:mug:charcoal:-": "https://rzp.io/rzp/fulldum-mummy-called-mug",
  // Biryani Coma
  "biryani-coma:tee:white:S": "https://rzp.io/rzp/fulldum-biryani-coma-tee",
  "biryani-coma:tee:white:M": "https://rzp.io/rzp/fulldum-biryani-coma-tee",
  "biryani-coma:tee:white:L": "https://rzp.io/rzp/fulldum-biryani-coma-tee",
  "biryani-coma:tee:white:XL": "https://rzp.io/rzp/fulldum-biryani-coma-tee",
  "biryani-coma:tee:white:2XL": "https://rzp.io/rzp/fulldum-biryani-coma-tee",
  "biryani-coma:tee:paper:S": "https://rzp.io/rzp/fulldum-biryani-coma-tee",
  "biryani-coma:tee:paper:M": "https://rzp.io/rzp/fulldum-biryani-coma-tee",
  "biryani-coma:tee:paper:L": "https://rzp.io/rzp/fulldum-biryani-coma-tee",
  "biryani-coma:tee:paper:XL": "https://rzp.io/rzp/fulldum-biryani-coma-tee",
  "biryani-coma:tee:paper:2XL": "https://rzp.io/rzp/fulldum-biryani-coma-tee",
  "biryani-coma:tee:charcoal:S": "https://rzp.io/rzp/fulldum-biryani-coma-tee",
  "biryani-coma:tee:charcoal:M": "https://rzp.io/rzp/fulldum-biryani-coma-tee",
  "biryani-coma:tee:charcoal:L": "https://rzp.io/rzp/fulldum-biryani-coma-tee",
  "biryani-coma:tee:charcoal:XL": "https://rzp.io/rzp/fulldum-biryani-coma-tee",
  "biryani-coma:tee:charcoal:2XL": "https://rzp.io/rzp/fulldum-biryani-coma-tee",
  "biryani-coma:mug:white:-": "https://rzp.io/rzp/fulldum-biryani-coma-mug",
  "biryani-coma:mug:charcoal:-": "https://rzp.io/rzp/fulldum-biryani-coma-mug",
  // Amma's Plate
  "ammas-plate:tee:white:S": "https://rzp.io/rzp/fulldum-ammas-plate-tee",
  "ammas-plate:tee:white:M": "https://rzp.io/rzp/fulldum-ammas-plate-tee",
  "ammas-plate:tee:white:L": "https://rzp.io/rzp/fulldum-ammas-plate-tee",
  "ammas-plate:tee:white:XL": "https://rzp.io/rzp/fulldum-ammas-plate-tee",
  "ammas-plate:tee:white:2XL": "https://rzp.io/rzp/fulldum-ammas-plate-tee",
  "ammas-plate:tee:paper:S": "https://rzp.io/rzp/fulldum-ammas-plate-tee",
  "ammas-plate:tee:paper:M": "https://rzp.io/rzp/fulldum-ammas-plate-tee",
  "ammas-plate:tee:paper:L": "https://rzp.io/rzp/fulldum-ammas-plate-tee",
  "ammas-plate:tee:paper:XL": "https://rzp.io/rzp/fulldum-ammas-plate-tee",
  "ammas-plate:tee:paper:2XL": "https://rzp.io/rzp/fulldum-ammas-plate-tee",
  "ammas-plate:tee:charcoal:S": "https://rzp.io/rzp/fulldum-ammas-plate-tee",
  "ammas-plate:tee:charcoal:M": "https://rzp.io/rzp/fulldum-ammas-plate-tee",
  "ammas-plate:tee:charcoal:L": "https://rzp.io/rzp/fulldum-ammas-plate-tee",
  "ammas-plate:tee:charcoal:XL": "https://rzp.io/rzp/fulldum-ammas-plate-tee",
  "ammas-plate:tee:charcoal:2XL": "https://rzp.io/rzp/fulldum-ammas-plate-tee",
  "ammas-plate:mug:white:-": "https://rzp.io/rzp/fulldum-ammas-plate-mug",
  "ammas-plate:mug:charcoal:-": "https://rzp.io/rzp/fulldum-ammas-plate-mug",
};

export function buyLinkKey(productId: string, variant: string, color: string, size: string = "-"): BuyKey {
  return `${productId}:${variant}:${color}:${size}`;
}

export function getBuyLink(productId: string, variant: string, color: string, size: string = "-"): string {
  if (!GAMER_DROP_CHECKOUT_LIVE && GAMER_DROP_PRODUCTS.has(productId)) return "";
  return buyLinks[buyLinkKey(productId, variant, color, size)] ?? "";
}

