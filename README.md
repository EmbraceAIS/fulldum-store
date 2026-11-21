# FullDum store

FullDum is merch for food and desi life — tees and mugs printed in India, shipped prepaid
with shipping already included. The voice is witty and warm, never loud. The brand is always
written **FullDum**, one word, capital F and D.

Palette: charcoal `#2A2724`, turmeric `#E0A624`, brick red `#B33C28`, paper `#F6EFE4`.
Type: Space Grotesk for headlines, Fraunces italic for warm lines, Cormorant Garamond for
serif, Outfit for UI and body, Noto Naskh Arabic on the dallah page.

## Pages

| Path | What's there |
| --- | --- |
| `/` | Home: the wordmark, the tagline, the story, Concert season, the Gamer Drop and launch one |
| `/shop` | Concert season, Gamer Drop and launch-one prints |
| `/product/emi-pe-rave` | EMI Pe Rave tee and mug |
| `/product/caffeine-reset` | Caffeine Reset tee and mug |
| `/product/slow-pour` | Slow Pour tee and mug |
| `/product/dallah-qahwa` | Dallah Qahwa tee and mug |
| `/product/on-dum` | On Dum tee and mug |
| `/product/leave-ticket` | Leave Ticket tee and mug |
| `/product/one-bag-for-me` | One Bag For Me tee and mug |
| `/shipping` | Ships from India in 5–9 days, prepaid only, shipping included |
| `/returns` | No returns on custom prints except damage or misprint, reported within 48 hours with a photo |
| `/privacy` | Privacy policy |
| `/terms` | Terms of sale |
| `/contact` | Contact |

The launch line-up: Caffeine Reset, Slow Pour, Dallah Qahwa, On Dum, Leave Ticket and
One Bag For Me. Tees ₹799, mugs ₹449, both with shipping included. Tee sizes are S, M, L,
XL and 2XL. Leave Ticket comes on white and paper tees and the white mug only.

Live store: <https://embraceais.github.io/fulldum-store/>

## Selling

Each product page has **Buy tee ₹799** and **Buy mug ₹449** buttons. Links come from
`src/config/buyLinks.ts` and open the matching Razorpay Payment Page in a new tab. Size is
chosen on that next page. Contact: wdhxb7q992wc@mail.grokbot.com.

No Razorpay API keys, SDKs or secrets belong in this repository — Payment Page URLs only.

## Running it

```sh
npm install
npm run dev
npm run build
```

Built with TanStack Start, TypeScript, React and Tailwind CSS. Every public route is listed
in `vite.config.ts` for prerendering and in `public/sitemap.xml`, both built from
`PUBLIC_PATHS` in `src/config/site.ts` — add a new page there and both follow. That file also
holds `SITE_URL`, the single public address every canonical, `og:url`, `og:image` and
JSON-LD URL is built from. Product data lives in `src/data/products.json`; images are served
from `public/`.

