import { describe, test, expect } from "vitest";

import { convert } from "./convert";

describe("convert", () => {
  test("converts 50000 NGN to USD at the given rate", () => {
    const rates = { NGN: 1400, USD: 1 };
    expect(convert(50000, "NGN", "USD", rates)).toBe(35.714285714285715);
  });
});
