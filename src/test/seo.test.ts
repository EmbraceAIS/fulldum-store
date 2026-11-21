import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { PRODUCT_SLUGS, PUBLIC_PATHS, SITE_URL, publicPath, siteUrl } from "@/config/site";
import { pageHead } from "@/lib/seo";

const HOST = "https://embraceais.github.io/fulldum-store";

function metaContent(list: unknown[], want: string) {
  for (const entry of list) {
    const e = entry as Record<string, string | undefined>;
    if (e["property"] === want || e["name"] === want) return e["content"];
  }
  return undefined;
}

describe("absolute site URLs", () => {
  it("SITE_URL is the published host with no trailing slash", () => {
    expect(SITE_URL).toBe(HOST);
    expect(SITE_URL.endsWith("/")).toBe(false);
  });

  it("siteUrl keeps the root path's slash and passes absolute URLs through", () => {
    expect(siteUrl("/")).toBe(`${HOST}/`);
    expect(siteUrl("shipping")).toBe(`${HOST}/shipping`);
    expect(siteUrl("https://example.com/x")).toBe("https://example.com/x");
  });

  it("siteUrl does not double BASE_PATH when given a publicPath() asset", () => {
    expect(siteUrl(publicPath("/mockups/emi-pe-rave/tee.jpg"))).toBe(`${HOST}/mockups/emi-pe-rave/tee.jpg`);
    expect(siteUrl("/mockups/emi-pe-rave/tee.jpg")).toBe(`${HOST}/mockups/emi-pe-rave/tee.jpg`);
  });

  it("canonical, og:url, og:image and twitter:image are absolute on the published host", () => {
    const head = pageHead({ title: "Shop — FullDum", description: "All six prints.", path: "/shop" });
    expect(metaContent(head.meta, "og:url")).toBe(`${HOST}/shop`);
    expect(metaContent(head.meta, "og:image")).toBe(`${HOST}/og-home.png`);
    expect(metaContent(head.meta, "twitter:image")).toBe(`${HOST}/og-home.png`);
    expect(head.links[0]?.["href"]).toBe(`${HOST}/shop`);
  });

  it("sitemap lists every public path as an absolute URL", () => {
    const xml = readFileSync("public/sitemap.xml", "utf8");
    expect(PUBLIC_PATHS).toHaveLength(7 + PRODUCT_SLUGS.length);
    for (const path of PUBLIC_PATHS) expect(xml).toContain(`<loc>${HOST}${path}</loc>`);
    expect(xml).not.toMatch(/<loc>\//);
  });
});

