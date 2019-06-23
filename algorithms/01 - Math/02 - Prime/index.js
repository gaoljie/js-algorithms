function isPrime(num) {
  if (num === 1) return false

  if (num <= 3) return true

  if (num % 2 === 0) return false

  const limit = Math.ceil(Math.sqrt(num))

  for (var i = 3; i <= limit; i += 2) {
    if (num % i === 0) return false
  }

  return true
}

console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(4))
console.log(isPrime(11))
console.log(isPrime(9))
