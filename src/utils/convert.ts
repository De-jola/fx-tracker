export function convert(
  amount: number,
  from: string,
  to: string,
  rates: Record<string, number>,
): number {
  return amount * (rates[to] / rates[from]);
}

export const result = convert(50000, "NGN", "USD", { NGN: 1400, USD: 1 });
