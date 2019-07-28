function stairCase(n) {
  let arr = [1, 2]

  if (n <= 0) return 0

  if (n <= 2) return arr[n - 1]


  for (let i = 2; i < n; i++) {
    [arr[0], arr[1]] = [arr[1], arr[0] + arr[1]]
  }

  return arr[1]
}

console.log(stairCase(10))
console.log(stairCase(9))
console.log(stairCase(2))
console.log(stairCase(1))
console.log(stairCase(-1))