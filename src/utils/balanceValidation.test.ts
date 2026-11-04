import { describe, test, expect } from "vitest";
import { balanceValidation } from "./balanceValidation";

describe("balanceValidation", () => {
  test("Should return true for a vlaid balance", () => {
    expect(balanceValidation(1000)).toBe(true);
  });
});
