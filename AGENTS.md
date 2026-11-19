<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

- Store images live in public/ (mockups/<slug>/tee.jpg and mug.jpg, brand/) so prerendered HTML references stable URLs; product defaultVariant drives cards and initial Type, while colour choices reuse the supplied type photo.
- Product Buy links resolve via src/lib/checkout.ts and src/config/buyLinks.ts getBuyLink using fixed representative keys so browsing selections cannot change either payment destination; preserve the map's key format.
- Share the fulfillment window through src/lib/shipping.ts so product checkout and the Shipping landing remain consistent.
- All public routes are listed in vite.config.ts `pages` for prerender, driven by PRODUCT_SLUGS/PUBLIC_PATHS in src/config/site.ts; public/sitemap.xml is rebuilt from that list on every build, so new routes go in site.ts only.
- Crawler-facing URLs (canonical, og:url, og:image, twitter:image, sitemap loc, JSON-LD logo/url) are absolute on SITE_URL in src/config/site.ts; never hand-write a second host literal outside that file.

