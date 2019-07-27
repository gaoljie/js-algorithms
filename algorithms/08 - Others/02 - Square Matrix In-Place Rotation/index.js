function squareMatrixRotation(originalMatrix) {
  let matrix = originalMatrix.slice()
  for (let row = 0; row < matrix.length; row++) {
    for (let col = row + 1; col < matrix.length; col++) {
      [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]]
    }
  }
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length / 2; col++) {
      [matrix[row][col], matrix[row][matrix.length - col - 1]] = [matrix[row][matrix.length - col - 1], matrix[row][col]]
    }
  }

  return matrix
}

console.log(squareMatrixRotation([
  ['A', 'B', 'C'],
  ['D', 'E', 'F'],
  ['G', 'H', 'I'],
]))

console.log(squareMatrixRotation([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]))

console.log(squareMatrixRotation([
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
]))