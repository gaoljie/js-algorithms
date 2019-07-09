function med(a, b) {
  let memo = Array(a.length + 1).fill(null).map(_ => [])

  for (let row = 0; row <= a.length; row++) {
    for (let col = 0; col <= b.length; col++) {
      if (row === 0) {
        memo[row][col] = col
        continue
      }
      if (col === 0) {
        memo[row][col] = row
        continue
      }

      let min = Math.min(memo[row][col - 1], memo[row - 1][col], memo[row - 1][col - 1])

      memo[row][col] = min + (a[row - 1] === b[col - 1] ? 0 : 1)
    }
  }

  return memo[a.length][b.length]
}

console.log(med('kitten', 'sitting'))
console.log(med('intention', 'execution'))