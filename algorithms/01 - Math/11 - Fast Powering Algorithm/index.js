function fastPower(x, y) {
  if (y === 0) return 1
  if (y % 2 === 0) {
    return Math.pow(fastPower(x, y / 2), 2)
  } else {
    return Math.pow(fastPower(x, Math.floor(y / 2)), 2) * x
  }
}

console.log(fastPower(6, 7))
console.log(fastPower(6, 6))
console.log(fastPower(6, 1))
console.log(fastPower(6, 0))