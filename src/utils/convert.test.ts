import { describe, test, expect } from "vitest";

import { convert } from "./convert";

describe("convert", () => {
  test("converts 100 USD to EUR at the given rate", () => {
    const rates = { USD: 1, EUR: 0.9 };
    expect(convert(100, "USD", "EUR", rates)).toBe(90);
  });
});
