function euclideanAlgorithm(a, b) {
  if (b === 0) return a

  return euclideanAlgorithm(b, a % b)
}

console.log(euclideanAlgorithm(24, 6))
console.log(euclideanAlgorithm(1071, 462))
console.log(euclideanAlgorithm(462,1071))
