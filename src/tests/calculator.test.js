/**
 * Unit tests for calculator.js
 *
 * Covers the four basic arithmetic operations:
 *   - Addition       (+)
 *   - Subtraction    (-)
 *   - Multiplication (*)
 *   - Division       (/)
 *
 * Includes edge cases such as division by zero, negatives, decimals, and zeros.
 */

const { add, subtract, multiply, divide } = require("../calculator");

// ─── Addition ────────────────────────────────────────────────────────────────
describe("add", () => {
  // Example from image: 2 + 3 = 5
  test("2 + 3 = 5", () => expect(add(2, 3)).toBe(5));

  test("adds positive integers", () => expect(add(10, 20)).toBe(30));
  test("adds negative numbers", () => expect(add(-4, -6)).toBe(-10));
  test("adds a positive and a negative", () => expect(add(10, -3)).toBe(7));
  test("adds decimals", () => expect(add(1.5, 2.5)).toBe(4));
  test("adding zero returns the same number", () => expect(add(7, 0)).toBe(7));
  test("adding two zeros returns zero", () => expect(add(0, 0)).toBe(0));
});

// ─── Subtraction ─────────────────────────────────────────────────────────────
describe("subtract", () => {
  // Example from image: 10 - 4 = 6
  test("10 - 4 = 6", () => expect(subtract(10, 4)).toBe(6));

  test("subtracts positive integers", () => expect(subtract(20, 8)).toBe(12));
  test("subtracts resulting in a negative", () => expect(subtract(3, 10)).toBe(-7));
  test("subtracts negative numbers", () => expect(subtract(-5, -3)).toBe(-2));
  test("subtracts decimals", () => expect(subtract(5.5, 2.5)).toBe(3));
  test("subtracting zero returns the same number", () => expect(subtract(9, 0)).toBe(9));
  test("subtracting from zero returns negated value", () => expect(subtract(0, 5)).toBe(-5));
});

// ─── Multiplication ──────────────────────────────────────────────────────────
describe("multiply", () => {
  // Example from image: 45 * 2 = 90
  test("45 * 2 = 90", () => expect(multiply(45, 2)).toBe(90));

  test("multiplies positive integers", () => expect(multiply(6, 7)).toBe(42));
  test("multiplies negative numbers", () => expect(multiply(-3, -4)).toBe(12));
  test("multiplies a positive and a negative", () => expect(multiply(5, -3)).toBe(-15));
  test("multiplies decimals", () => expect(multiply(2.5, 4)).toBe(10));
  test("multiplying by zero returns zero", () => expect(multiply(99, 0)).toBe(0));
  test("multiplying by one returns the same number", () => expect(multiply(8, 1)).toBe(8));
});

// ─── Division ────────────────────────────────────────────────────────────────
describe("divide", () => {
  // Example from image: 20 / 5 = 4
  test("20 / 5 = 4", () => expect(divide(20, 5)).toBe(4));

  test("divides positive integers", () => expect(divide(9, 3)).toBe(3));
  test("divides resulting in a decimal", () => expect(divide(7, 2)).toBe(3.5));
  test("divides negative numbers", () => expect(divide(-12, -4)).toBe(3));
  test("divides a positive by a negative", () => expect(divide(10, -2)).toBe(-5));
  test("dividing zero by a number returns zero", () => expect(divide(0, 5)).toBe(0));

  // Edge case: division by zero
  test("throws an error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed.");
  });
  test("throws an error when dividing zero by zero", () => {
    expect(() => divide(0, 0)).toThrow("Division by zero is not allowed.");
  });
});
