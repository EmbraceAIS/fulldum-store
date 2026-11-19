import { describe, expect, it } from "vitest";
import { buyLinks, getBuyLink } from "@/config/buyLinks";
import { buyAction } from "@/lib/checkout";
import { getProduct, PRICES } from "@/lib/products";
import { SHIPPING_DAYS } from "@/lib/shipping";

describe("checkout rules", () => {
  it.each([
    "caffeine-reset", "slow-pour", "dallah-qahwa", "on-dum", "leave-ticket", "one-bag-for-me",
  ])("%s uses the supplied payment pages for every existing colour and size", (slug) => {
    const entries = Object.entries(buyLinks).filter(([key]) => key.startsWith(`${slug}:`));
    expect(entries).toHaveLength(slug === "leave-ticket" ? 11 : 17);
    for (const [key, url] of entries) {
      const variant = key.split(":")[1];
      expect(url).toBe(`https://rzp.io/rzp/fulldum-${slug}-${variant}`);
    }
    for (const variant of ["tee", "mug"] as const) {
      const action = buyAction(slug, variant);
      expect(action.href).toBe(`https://rzp.io/rzp/fulldum-${slug}-${variant}`);
      expect(action.target).toBe("_blank");
      expect(action.rel).toBe("noopener noreferrer");
    }
  });
  it("keeps exactly the existing key set", () => {
    const expected = ["caffeine-reset", "slow-pour", "dallah-qahwa", "on-dum", "leave-ticket", "one-bag-for-me"].flatMap((slug) => [
      ...(slug === "leave-ticket" ? ["white", "paper"] : ["white", "paper", "charcoal"]).flatMap((color) =>
        ["S", "M", "L", "XL", "2XL"].map((size) => `${slug}:tee:${color}:${size}`)),
      ...(slug === "leave-ticket" ? ["white"] : ["white", "charcoal"]).map((color) => `${slug}:mug:${color}:-`),
    ]);
    expect(Object.keys(buyLinks).sort()).toEqual(expected.sort());
    expect(getBuyLink("leave-ticket", "tee", "charcoal", "M")).toBe("");
  });
  it("fulfillment is 5–9 days", () => {
    expect(SHIPPING_DAYS).toEqual({ min: 5, max: 9 });
  });
  it("prices", () => {
    expect(PRICES.tee).toBe(799);
    expect(PRICES.mug).toBe(449);
  });
  it("leave ticket has no charcoal", () => {
    const p = getProduct("leave-ticket");
    expect(p?.colors.tee).toEqual(["white", "paper"]);
    expect(p?.colors.mug).toEqual(["white"]);
  });
});

