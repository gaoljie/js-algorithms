function squareRoot(n, delta = 0.1) {
  if (n < 0) {
    throw new Error('only positive number')
  }

  if (n === 0) {
    return 0
  }

  let x = 1

  while (Math.abs(n - x * x) > delta) {
    x = x - (x * x - n) / (2 * x)
  }

  return x.toFixed(3)
}

console.log(squareRoot(25))
console.log(squareRoot(473))
console.log(squareRoot(14723))
