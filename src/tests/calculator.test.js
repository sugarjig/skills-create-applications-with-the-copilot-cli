/**
 * Unit tests for calculator.js
 *
 * Covers arithmetic operations:
 *   - Addition       (+)
 *   - Subtraction    (-)
 *   - Multiplication (*)
 *   - Division       (/)
 *   - Modulo         (%)
 *   - Power          (**)
 *   - Square Root    (√)
 *
 * Includes edge cases such as division by zero, negatives, decimals, and zeros.
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require("../calculator");

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

// ─── Modulo ──────────────────────────────────────────────────────────────────
describe("modulo", () => {
  // Example from image: 5 % 2 = 1
  test("5 % 2 = 1", () => expect(modulo(5, 2)).toBe(1));

  test("returns zero when evenly divisible", () => expect(modulo(10, 5)).toBe(0));
  test("works with larger dividend", () => expect(modulo(17, 4)).toBe(1));
  test("works with negative dividend", () => expect(modulo(-7, 3)).toBe(-1));
  test("works with negative divisor", () => expect(modulo(7, -3)).toBe(1));
  test("works with decimals", () => expect(modulo(5.5, 2)).toBeCloseTo(1.5));

  // Edge case: modulo by zero
  test("throws an error when modulo by zero", () => {
    expect(() => modulo(10, 0)).toThrow("Modulo by zero is not allowed.");
  });
});

// ─── Power ───────────────────────────────────────────────────────────────────
describe("power", () => {
  // Example from image: 2 ^ 3 = 8
  test("2 ^ 3 = 8", () => expect(power(2, 3)).toBe(8));

  test("raises to the power of zero returns 1", () => expect(power(5, 0)).toBe(1));
  test("raises to the power of one returns base", () => expect(power(7, 1)).toBe(7));
  test("works with negative exponent", () => expect(power(2, -1)).toBeCloseTo(0.5));
  test("works with fractional exponent", () => expect(power(4, 0.5)).toBe(2));
  test("works with negative base and even exponent", () => expect(power(-3, 2)).toBe(9));
  test("works with negative base and odd exponent", () => expect(power(-2, 3)).toBe(-8));
});

// ─── Square Root ─────────────────────────────────────────────────────────────
describe("squareRoot", () => {
  // Example from image: √16 = 4
  test("√16 = 4", () => expect(squareRoot(16)).toBe(4));

  test("square root of 0 is 0", () => expect(squareRoot(0)).toBe(0));
  test("square root of 1 is 1", () => expect(squareRoot(1)).toBe(1));
  test("square root of 9 is 3", () => expect(squareRoot(9)).toBe(3));
  test("returns decimal for non-perfect square", () => expect(squareRoot(2)).toBeCloseTo(1.414, 3));

  // Edge case: negative number
  test("throws an error for negative numbers", () => {
    expect(() => squareRoot(-1)).toThrow("Square root of a negative number is not allowed.");
  });
  test("throws an error for large negative numbers", () => {
    expect(() => squareRoot(-100)).toThrow("Square root of a negative number is not allowed.");
  });
});
