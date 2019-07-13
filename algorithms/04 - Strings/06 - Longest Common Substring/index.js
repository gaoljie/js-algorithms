function lcs(a, b) {
  let memo = Array(a.length + 1).fill(null).map(_ => Array(b.length + 1).fill(0))

  let max = [0, 0]
  for (let row = 1; row <= a.length; row++) {
    for (let col = 1; col <= b.length; col++) {
      if (a[row - 1] === b[col - 1]) {
        memo[row][col] = memo[row - 1][col - 1] + 1

        if (memo[row][col] > memo[max[0]][max[1]]) {
          max = [row, col]
        }
      }
    }
  }

  let substrLength = memo[max[0]][max[1]]
  return a.slice(max[0] - substrLength, max[0])
}


console.log(lcs('BABCA', 'ABCBA'))
console.log(lcs('ABABC', 'BABCA'))