import { getBuyLink } from "@/config/buyLinks";
import { formatINR, PRICES, type Variant } from "./products";

export function buyAction(productId: string, variant: Variant) {
  const href = getBuyLink(productId, variant, "white", variant === "tee" ? "M" : "-");
  if (!href) {
    return {
      label: `${variant === "tee" ? "Tee" : "Mug"} — Coming soon`,
      href: "",
      disabled: true as const,
      target: undefined,
      rel: undefined,
    };
  }
  return {
    label: `Buy ${variant} ${formatINR(PRICES[variant])}`,
    href,
    disabled: false as const,
    target: "_blank" as const,
    rel: "noopener noreferrer",
  };
}
