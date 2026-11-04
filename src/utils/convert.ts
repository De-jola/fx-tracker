import { balanceValidation } from "./balanceValidation";
export function convert(
  amount: number,
  from: string,
  to: string,
  rates: Record<string, number>,
): number {
  return amount * (rates[to] / rates[from]);
}

export const result =
  balanceValidation(50000, 0) &&
  convert(50000, "NGN", "USD", { NGN: 1400, USD: 1 });
