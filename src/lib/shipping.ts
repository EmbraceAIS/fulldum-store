export const SHIPPING_DAYS = { min: 5, max: 9 } as const;
export const shippingWindow = `${SHIPPING_DAYS.min}–${SHIPPING_DAYS.max} days`;
