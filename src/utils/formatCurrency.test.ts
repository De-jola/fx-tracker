import { describe, test, expect } from "vitest";
import { formatCurrency } from "./formatCurrency";
import { result } from "./convert";

describe("formatCurrency", () => {
  test("formats USD currency correctly", () => {
    expect(formatCurrency(result, "USD")).toBe("$35.71");
  });
});
