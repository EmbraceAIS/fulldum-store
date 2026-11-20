import data from "@/data/products.json";
import { publicPath } from "@/config/site";

export type Variant = "tee" | "mug";
export type Color = "white" | "paper" | "charcoal";
export const SIZES = ["S", "M", "L", "XL", "2XL"] as const;
export type Size = (typeof SIZES)[number];
export const PRICES: Record<Variant, number> = { tee: 799, mug: 449 };
export const COLOR_LABEL: Record<Color, string> = { white: "White", paper: "Paper", charcoal: "Charcoal" };

export type Collection = "gamer-drop" | "launch-one";

export interface Product {
  slug: string;
  title: string;
  short: string;
  defaultVariant: Variant;
  colors: Record<Variant, Color[]>;
  story: string;
  collection: Collection;
}

const stories: Record<string, string> = {
  "caffeine-reset": "For the week you promised to cut back. Talk gently, walk slowly, and nobody mention the second cup.",
  "slow-pour": "Kettle on, bloom, wait. Good coffee is mostly standing in the kitchen pretending you are not impatient.",
  "dallah-qahwa": "Two finjan, one dallah, and nowhere else to be. The pot comes out, the chairs come closer.",
  "on-dum": "The handi is sealed. The dough is doing its job. You are not lifting that lid to \u201cjust check.\u201d",
  "leave-ticket": "Every desk in the Gulf has one invisible calendar. This is the only countdown anyone actually reads.",
  "one-bag-for-me": "Two shirts and a charger for you. Forty kilos of dates, chocolates and perfume for everyone else.",
  "mummy-called": "The raid was going well. Then the landline rang, and downstairs won.",
  "biryani-coma": "The plate is empty. The controller can wait. Do not disturb.",
  "ammas-plate": "You finished it. She noticed. That is the only score that matters.",
};

const MUG_LED = new Set(["caffeine-reset", "slow-pour", "dallah-qahwa", "on-dum"]);

export const products: Product[] = data.products.map((p) => ({
  slug: p.slug,
  title: p.title,
  short: p.short,
  defaultVariant: MUG_LED.has(p.slug) ? "mug" : "tee",
  story: stories[p.slug] ?? "",
  collection: (p.collection === "gamer-drop" ? "gamer-drop" : "launch-one") as Collection,
  colors: {
    tee: p.colors as Color[],
    mug: (p.slug === "leave-ticket" ? ["white"] : ["white", "charcoal"]) as Color[],
  },
}));

export const gamerDrop = products.filter((p) => p.collection === "gamer-drop");
export const launchOne = products.filter((p) => p.collection === "launch-one");

export const CONTACT = data.contact;

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function mockupSrc(slug: string, variant: Variant, _color?: Color) {
  return publicPath(`/mockups/${slug}/${variant}.jpg`);
}

export function formatINR(n: number) {
  return `\u20b9${n}`;
}

