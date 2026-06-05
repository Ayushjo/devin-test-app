import { divide, multiply, add } from './math.js'
import assert from 'node:assert/strict'

assert.equal(divide(10, 2), 5)
assert.equal(multiply(3, 4), 12)
assert.equal(add(1, 2), 3)

// This currently FAILS — divide(10, 0) returns Infinity instead of throwing
assert.throws(() => divide(10, 0), RangeError)

console.log('All tests passed!')
