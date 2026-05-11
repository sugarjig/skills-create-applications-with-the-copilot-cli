#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supports the four basic arithmetic operations:
 *   - Addition       (+)
 *   - Subtraction    (-)
 *   - Multiplication (×)
 *   - Division       (÷)
 *
 * Usage: node calculator.js <number> <operation> <number>
 *   Operations: add, subtract, multiply, divide
 *
 * Examples:
 *   node calculator.js 10 add 5       => 15
 *   node calculator.js 10 subtract 3  => 7
 *   node calculator.js 4 multiply 6   => 24
 *   node calculator.js 9 divide 3     => 3
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

// CLI entry point — only runs when executed directly, not when imported as a module
if (require.main === module) {
const [,, first, operation, second] = process.argv;

if (!first || !operation || !second) {
  console.error("Usage: node calculator.js <number> <operation> <number>");
  console.error("Operations: add, subtract, multiply, divide");
  process.exit(1);
}

const a = parseFloat(first);
const b = parseFloat(second);

if (isNaN(a) || isNaN(b)) {
  console.error("Error: Both operands must be valid numbers.");
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
    default:
      console.error(`Error: Unknown operation "${operation}". Use add, subtract, multiply, or divide.`);
      process.exit(1);
  }
  console.log(`Result: ${result}`);
} catch (err) {
  console.error(`Error: ${err.message}`);
  process.exit(1);
}
} // end require.main === module

module.exports = { add, subtract, multiply, divide };
