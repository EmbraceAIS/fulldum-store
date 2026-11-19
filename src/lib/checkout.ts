import { getBuyLink } from "@/config/buyLinks";
import { formatINR, PRICES, type Variant } from "./products";

export function buyAction(productId: string, variant: Variant) {
  return {
    label: `Buy ${variant} ${formatINR(PRICES[variant])}`,
    href: getBuyLink(productId, variant, "white", variant === "tee" ? "M" : "-"),
    target: "_blank" as const,
    rel: "noopener noreferrer",
  };
}

