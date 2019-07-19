function prim(graph) {
  let edges = [...graph].sort((a, b) => {
    return a[2] - b[2]
  })

  let visited = new Set()

  let path = []

  let currentEdge = [edges[0]]

  while (currentEdge.length) {
    let edge = currentEdge.shift()
    let vertex1 = edge[0]
    let vertex2 = edge[1]

    visited.add(vertex1)
    visited.add(vertex2)

    path.push(edge)

    currentEdge = edges.filter(edge => {
      let vertex1 = edge[0]
      let vertex2 = edge[1]

      return (visited.has(vertex1) && !visited.has(vertex2)) || (!visited.has(vertex1) && visited.has(vertex2))
    })
  }

  return path
}

console.log(prim([
  ['A', 'D', 1],
  ['B', 'C', 1],
  ['C', 'D', 1],
  ['E', 'F', 2],
  ['B', 'D', 3],
  ['A', 'D', 1],
  ['A', 'B', 3],
  ['C', 'F', 4],
  ['C', 'E', 5],
  ['D', 'E', 5]
]))

console.log(prim([
  ['A', 'E', 5],
  ['E', 'H', 3],
  ['A', 'H', 6],
  ['H', 'F', 5],
  ['A', 'F', 1],
  ['A', 'B', 8],
  ['B', 'F', 6],
  ['C', 'F', 2],
  ['G', 'F', 9],
  ['G', 'C', 7],
  ['C', 'B', 4]
]))