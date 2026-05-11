#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supports the following arithmetic operations:
 *   - Addition       (+)
 *   - Subtraction    (-)
 *   - Multiplication (×)
 *   - Division       (÷)
 *   - Modulo         (%)
 *   - Power          (**)
 *   - Square Root    (√)
 *
 * Usage: node calculator.js <number> <operation> [number]
 *   Operations: add, subtract, multiply, divide, modulo, power, sqrt
 *
 * Examples:
 *   node calculator.js 10 add 5       => 15
 *   node calculator.js 10 subtract 3  => 7
 *   node calculator.js 4 multiply 6   => 24
 *   node calculator.js 9 divide 3     => 3
 *   node calculator.js 10 modulo 3    => 1
 *   node calculator.js 2 power 8      => 256
 *   node calculator.js 16 sqrt        => 4
 */

/**
 * Adds two numbers together.
 * @param {number} a - The first operand.
 * @param {number} b - The second operand.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts b from a.
 * @param {number} a - The first operand.
 * @param {number} b - The second operand.
 * @returns {number} The difference of a and b.
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers together.
 * @param {number} a - The first operand.
 * @param {number} b - The second operand.
 * @returns {number} The product of a and b.
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides a by b. Throws an error if b is zero.
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number} The quotient of a and b.
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

/**
 * Returns the remainder of a divided by b.
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number} The remainder of a divided by b.
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Modulo by zero is not allowed.");
  }
  return a % b;
}

/**
 * Returns base raised to the power of exponent.
 * @param {number} base - The base number.
 * @param {number} exponent - The exponent.
 * @returns {number} base raised to the exponent.
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Returns the square root of n. Throws an error for negative numbers.
 * @param {number} n - The number to take the square root of.
 * @returns {number} The square root of n.
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error("Square root of a negative number is not allowed.");
  }
  return Math.sqrt(n);
}

// CLI entry point — only runs when executed directly, not when imported as a module
if (require.main === module) {
const [,, first, operation, second] = process.argv;

const singleOperandOps = ["sqrt"];
if (!first || !operation || (!second && !singleOperandOps.includes(operation.toLowerCase()))) {
  console.error("Usage: node calculator.js <number> <operation> [number]");
  console.error("Operations: add, subtract, multiply, divide, modulo, power, sqrt");
  process.exit(1);
}

const a = parseFloat(first);
const b = second !== undefined ? parseFloat(second) : undefined;

if (isNaN(a) || (b !== undefined && isNaN(b))) {
  console.error("Error: Operands must be valid numbers.");
  process.exit(1);
}

let result;
try {
  switch (operation.toLowerCase()) {
    case "add":
      result = add(a, b);
      break;
    case "subtract":
      result = subtract(a, b);
      break;
    case "multiply":
      result = multiply(a, b);
      break;
    case "divide":
      result = divide(a, b);
      break;
    case "modulo":
      result = modulo(a, b);
      break;
    case "power":
      result = power(a, b);
      break;
    case "sqrt":
      result = squareRoot(a);
      break;
    default:
      console.error(`Error: Unknown operation "${operation}". Use add, subtract, multiply, divide, modulo, power, or sqrt.`);
      process.exit(1);
  }
  console.log(`Result: ${result}`);
} catch (err) {
  console.error(`Error: ${err.message}`);
  process.exit(1);
}
} // end require.main === module

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
