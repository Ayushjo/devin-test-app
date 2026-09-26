/**
 * Basic math utilities.
 * BUG: divide() does not handle division by zero.
 *      It silently returns Infinity instead of throwing.
 */
export function divide(a, b) {
  return a / b
}

export function modulo(a, b) {
  if (b === 0) throw new RangeError('Division by zero')
  // JS % keeps the sign of the dividend. Adjust so result has sign of divisor.
  return ((a % b) + b) % b
}

export function multiply(a, b) {
  return a * b
}

export function add(a, b) {
  return a + b
}
