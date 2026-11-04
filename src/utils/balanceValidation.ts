export function balanceValidation(
  balance: number,
  minBalance: number = 0,
): boolean {
  return balance >= minBalance;
}

balanceValidation(50000, 0);
balanceValidation(-500, 0);
