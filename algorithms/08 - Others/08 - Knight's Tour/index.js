function knightTour(n) {
  let visited = Array(n).fill(null).map(_ => Array(n).fill(false))

  function possibleMove(start, n, visited) {

    let [x, y] = start

    let moves = [
      [x - 1, y - 2],
      [x - 2, y - 1],
      [x + 1, y - 2],
      [x + 2, y - 1],
      [x - 2, y + 1],
      [x - 1, y + 2],
      [x + 1, y + 2],
      [x + 2, y + 1],
    ].filter(move => {
      let [x, y] = move

      return (x >= 0 && x < n) && (y >= 0 && y < n) && !visited[x][y]
    })

    return moves
  }

  function travel(start, visited, moves) {
    moves.push(start)

    if (moves.length === (n * n)) {
      return moves
    }

    let [x, y] = start

    visited[x][y] = true

    let possible = possibleMove(start, n, visited)

    for (let i = 0; i < possible.length; i++) {
      let result = travel(possible[i], visited, moves)
      if (result) {
        return result
      }
    }

    moves.pop()
    visited[x][y] = false

    return false
  }

  return travel([0, 0], visited, [])
}

console.log(knightTour(5))

console.log(knightTour(3))

console.log(knightTour(4))
