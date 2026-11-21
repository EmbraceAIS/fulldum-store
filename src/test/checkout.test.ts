import { describe, expect, it } from "vitest";
import { buyLinks, EMI_PE_RAVE_CHECKOUT_LIVE, GAMER_DROP_CHECKOUT_LIVE, getBuyLink } from "@/config/buyLinks";
import { buyAction } from "@/lib/checkout";
import { getProduct, PRICES } from "@/lib/products";
import { SHIPPING_DAYS } from "@/lib/shipping";

const LIVE_SLUGS = ["caffeine-reset", "slow-pour", "dallah-qahwa", "on-dum", "leave-ticket", "one-bag-for-me"];
const GAMER_DROP_SLUGS = ["mummy-called", "biryani-coma", "ammas-plate"];
const CONCERT_DROP_SLUGS = ["emi-pe-rave"];

describe("checkout rules", () => {
  it.each(LIVE_SLUGS)("%s uses the supplied payment pages for every existing colour and size", (slug) => {
    const entries = Object.entries(buyLinks).filter(([key]) => key.startsWith(`${slug}:`));
    expect(entries).toHaveLength(slug === "leave-ticket" ? 11 : 17);
    for (const [key, url] of entries) {
      const variant = key.split(":")[1];
      expect(url).toBe(`https://rzp.io/rzp/fulldum-${slug}-${variant}`);
    }
    for (const variant of ["tee", "mug"] as const) {
      const action = buyAction(slug, variant);
      expect(action.href).toBe(`https://rzp.io/rzp/fulldum-${slug}-${variant}`);
      expect(action.disabled).toBe(false);
      expect(action.target).toBe("_blank");
      expect(action.rel).toBe("noopener noreferrer");
    }
  });
  it.each(GAMER_DROP_SLUGS)("%s uses the live Gamer Drop payment pages", (slug) => {
    expect(GAMER_DROP_CHECKOUT_LIVE).toBe(true);
    const entries = Object.entries(buyLinks).filter(([key]) => key.startsWith(`${slug}:`));
    expect(entries).toHaveLength(17);
    for (const [key, url] of entries) {
      const variant = key.split(":")[1];
      expect(url).toBe(`https://rzp.io/rzp/fulldum-${slug}-${variant}`);
    }
    for (const variant of ["tee", "mug"] as const) {
      expect(getBuyLink(slug, variant, "white", variant === "tee" ? "M" : "-")).toBe(`https://rzp.io/rzp/fulldum-${slug}-${variant}`);
      const action = buyAction(slug, variant);
      expect(action.href).toBe(`https://rzp.io/rzp/fulldum-${slug}-${variant}`);
      expect(action.disabled).toBe(false);
      expect(action.target).toBe("_blank");
      expect(action.rel).toBe("noopener noreferrer");
    }
  });

  it.each(CONCERT_DROP_SLUGS)("%s uses the live EMI Pe Rave payment pages", (slug) => {
    expect(EMI_PE_RAVE_CHECKOUT_LIVE).toBe(true);
    const entries = Object.entries(buyLinks).filter(([key]) => key.startsWith(`${slug}:`));
    expect(entries).toHaveLength(17);
    for (const [key, url] of entries) {
      const variant = key.split(":")[1];
      expect(url).toBe(`https://rzp.io/rzp/fulldum-${slug}-${variant}`);
    }
    for (const variant of ["tee", "mug"] as const) {
      expect(getBuyLink(slug, variant, "white", variant === "tee" ? "M" : "-")).toBe(`https://rzp.io/rzp/fulldum-${slug}-${variant}`);
      const action = buyAction(slug, variant);
      expect(action.href).toBe(`https://rzp.io/rzp/fulldum-${slug}-${variant}`);
      expect(action.disabled).toBe(false);
      expect(action.target).toBe("_blank");
      expect(action.rel).toBe("noopener noreferrer");
    }
  });
  it("keeps exactly the existing key set", () => {
    const expected = [...CONCERT_DROP_SLUGS, ...GAMER_DROP_SLUGS, ...LIVE_SLUGS].flatMap((slug) => [
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
