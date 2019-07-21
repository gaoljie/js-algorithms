function articulation(graph) {
  let visited = []
  let low = []
  let newGraph = {}
  let edges = []

  for (let edge of graph) {
    let vertex1 = edge[0]
    let vertex2 = edge[1]

    if (!newGraph[vertex1]) newGraph[vertex1] = new Set()
    if (!newGraph[vertex2]) newGraph[vertex2] = new Set()

    newGraph[vertex1].add(vertex2)
    newGraph[vertex2].add(vertex1)

  }

  for (let vertex in newGraph) {
    dfs(vertex, newGraph, visited, edges, null)
  }

  function dfs(vertex, graph, visited, edges, parent) {
    let vertexIndex = visited.indexOf(vertex);
    if (vertexIndex === -1) {

      visited.push(vertex)

      vertexIndex = visited.length - 1

      low[vertexIndex] = vertexIndex

      let neighbors = graph[vertex]

      for (let neighbor of neighbors) {
        if (parent === neighbor) continue

        let neighborIndex = dfs(neighbor, graph, visited, edges, vertex)

        if (low[neighborIndex] < low[vertexIndex]) {

          low[vertexIndex] = low[neighborIndex]
        }

        if (vertexIndex < low[neighborIndex]) {
          edges.push([vertex, neighbor])
        }
      }

    }

    return vertexIndex
  }

  return edges
}


console.log(articulation([
  ['0', '1'],
  ['1', '2'],
  ['2', '0'],
  ['2', '3'],
  ['3', '4'],
  ['2', '5'],
  ['5', '6'],
  ['6', '7'],
  ['7', '8'],
  ['8', '5']
]))

console.log(articulation([
  ['A', 'C'],
  ['C', 'B'],
  ['B', 'A'],
  ['C', 'D'],
  ['D', 'E'],
  ['E', 'G'],
  ['G', 'F'],
  ['F', 'E'],
  ['F', 'H']
]))