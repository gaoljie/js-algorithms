function integerPartition(n) {
  let matrix = Array(n + 1).fill(null).map(() => Array(n + 1).fill(0))

  matrix[0][0] = 1

  for (let col = 0; col <= n; col++) {
    for (let row = 1; row <= n; row++) {
      if (row > col) {
        matrix[row][col] = matrix[col][col]
        continue
      }

      matrix[row][col] = matrix[row - 1][col] + matrix[row][col - row]
    }
  }

  return matrix[n][n]
}

function integerPartitionRecursive(n) {
  return matrix(n, n)
}

function matrix(row, col) {
  if (col === 0) return 1

  if (row === 0) return 0

  if (row > col) return matrix(col, col)

  return matrix(row - 1, col) + matrix(row, col - row)
}


console.log(integerPartition(7))
console.log(integerPartitionRecursive(7))
