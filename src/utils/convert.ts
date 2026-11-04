export function convert(
  amount: number,
  from: String,
  to: String,
  rates: Record<string, number>,
): number {
  return amount * (rates[to] / rates[from]);
}

convert(100, "USD", "EUR", { USD: 1, EUR: 0.9 });
