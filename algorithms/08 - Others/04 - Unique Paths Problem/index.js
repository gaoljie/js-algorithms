function uniquePath(m, n) {
  let memo = Array(m).fill(null).map(_ => [])
  
  memo[0] = Array(n).fill(1)
  
  memo.forEach(row => row[0] = 1)

  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      memo[row][col] = memo[row - 1][col] + memo[row][col - 1]
    }
  }

  return memo[m - 1][n - 1]
}

console.log(uniquePath(4, 4))
console.log(uniquePath(7, 3))

