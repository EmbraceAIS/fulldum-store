import { existsSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { getProduct, mockupSrc, type Variant } from "@/lib/products";

describe("launch photo selection", () => {
  it.each<[string, Variant]>([
    ["caffeine-reset", "mug"],
    ["slow-pour", "mug"],
    ["dallah-qahwa", "mug"],
    ["on-dum", "mug"],
    ["leave-ticket", "tee"],
    ["one-bag-for-me", "tee"],
    ["mummy-called", "tee"],
    ["biryani-coma", "tee"],
    ["ammas-plate", "tee"],
  ])("%s starts with the %s photo", (slug, variant) => {
    expect(getProduct(slug)?.defaultVariant).toBe(variant);
    expect(mockupSrc(slug, variant)).toBe(`/fulldum-store/mockups/${slug}/${variant}.jpg`);
    expect(existsSync(`public/mockups/${slug}/${variant}.jpg`)).toBe(true);
  });

  it("type swaps the supplied photo without inventing colourway photos", () => {
    expect(mockupSrc("caffeine-reset", "tee", "paper")).toBe("/fulldum-store/mockups/caffeine-reset/tee.jpg");
    expect(mockupSrc("caffeine-reset", "tee", "charcoal")).toBe("/fulldum-store/mockups/caffeine-reset/tee.jpg");
    expect(mockupSrc("caffeine-reset", "mug", "white")).toBe("/fulldum-store/mockups/caffeine-reset/mug.jpg");
    expect(mockupSrc("caffeine-reset", "mug", "charcoal")).toBe("/fulldum-store/mockups/caffeine-reset/mug.jpg");
  });
});
