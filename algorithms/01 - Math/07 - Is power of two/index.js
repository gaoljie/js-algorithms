function isPowerOfTwo(n) {
  if (n === 1) return false

  while (n !== 1) {
    if (n % 2 === 1) {
      return false
    }

    n = n / 2
  }

  return true
}

function isPowerOfTwoBitwise(n) {
  if (n === 1) return false

  return (n & (n - 1)) === 0
}
console.log(isPowerOfTwo(2))

console.log(isPowerOfTwo(64))

console.log(isPowerOfTwo(65))

console.log(isPowerOfTwo(18))

console.log(isPowerOfTwo(1))

console.log('--------')
console.log(isPowerOfTwoBitwise(2))

console.log(isPowerOfTwoBitwise(64))

console.log(isPowerOfTwoBitwise(65))

console.log(isPowerOfTwoBitwise(18))

console.log(isPowerOfTwoBitwise(1))