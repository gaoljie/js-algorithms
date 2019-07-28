function nQueen(n) {
  if (n < 4) return null


  function f(positions, currentRow) {

    if (currentRow === n) return positions

    for (let col = 0; col < n; col++) {

      if (positionOpened(positions, currentRow, col)) {

        let currentPositions = [...positions, [currentRow, col]]

        let result = f(currentPositions, currentRow + 1)

        if (!result) {
          continue
        } else {
          return result
        }
      }
    }

    return false
  }
  
  function positionOpened(result, row, col) {
    return !result.find(position => (
      position[0] === row ||
      position[1] === col ||
      (position[0] - position[1]) === (row - col) ||
      (position[0] + position[1]) === (row + col)
    ))
  }

  return f([], 0)
}

console.log(nQueen(4))
console.log(nQueen(6))