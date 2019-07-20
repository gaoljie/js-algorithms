function topological(graph) {
  let visited = new Set()

  let sorted = []

  let newGraph = {}

  for (let edge of graph) {
    let vertex1 = edge[0]
    let vertex2 = edge[1]

    if (!newGraph[vertex1]) newGraph[vertex1] = new Set()
    if (!newGraph[vertex2]) newGraph[vertex2] = new Set()

    newGraph[vertex1].add(vertex2)

  }

  for (let vertex in newGraph) {
    dfs(vertex, newGraph, visited, sorted)
  }


  function dfs(vertex, graph, visited, sorted) {
    if (!visited.has(vertex)) {

      visited.add(vertex)

      let neighbors = graph[vertex]

      for (let neighbor of neighbors) {
        dfs(neighbor, graph, visited, sorted)
      }

      sorted.unshift(vertex)
    }
  }

  return sorted
}


console.log(topological([
  ['E', 'H'],
  ['B', 'C'],
  ['A', 'C'],
  ['B', 'D'],
  ['C', 'E'],
  ['D', 'F'],
  ['E', 'F'],
  ['F', 'G']
]))