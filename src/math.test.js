import { divide, multiply, add, modulo } from './math.js'
import assert from 'node:assert/strict'

assert.equal(divide(10, 2), 5)
assert.equal(multiply(3, 4), 12)
assert.equal(add(1, 2), 3)

// modulo assertions
assert.equal(modulo(10, 3), 1)
assert.equal(modulo(-1, 3), 2)
assert.equal(modulo(1, -3), -2)
assert.throws(() => modulo(1, 0), RangeError)

// This currently FAILS — divide(10, 0) returns Infinity instead of throwing
assert.throws(() => divide(10, 0), RangeError)

// NOTE: divide(10, 0) currently returns Infinity instead of throwing (tracked in issue #1)

console.log('All tests passed!')
