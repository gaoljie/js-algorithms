function kosaraju(graph) {
  function createGraph(graph) {

    let newGraph = {}
    for (let edge of graph) {
      let vertex1 = edge[0]
      let vertex2 = edge[1]

      if (!newGraph[vertex1]) newGraph[vertex1] = new Set()
      if (!newGraph[vertex2]) newGraph[vertex2] = new Set()

      newGraph[vertex1].add(vertex2)

    }

    return newGraph
  }

  let newGraph = createGraph(graph)

  let visited = new Set()

  let stack = []

  let vertices = Object.keys(newGraph)

  for (let vertex of vertices) {
    dfs(vertex, visited, stack, newGraph)
  }

  function dfs(vertex, visited, stack, graph) {
    if (visited.has(vertex)) return

    visited.add(vertex)

    let neighbors = graph[vertex]
    for (let neighbor of neighbors) {
      dfs(neighbor, visited, stack, graph)
    }

    stack.unshift(vertex)
  }


  //second iteration

  let reverseGraph = createGraph(graph.map(item => [...item].reverse()))

  let reverseVisited = new Set()

  let total = []

  for (let vertex of stack) {
    if (!reverseVisited.has(vertex)) {
      let result = reverseDfs(vertex, reverseVisited, reverseGraph, [])
      total.push(result)
    }
  }

  function reverseDfs(vertex, visited, graph, result) {
    if (visited.has(vertex)) return

    visited.add(vertex)
    result.push(vertex)

    let neighbors = graph[vertex]
    for (let neighbor of neighbors) {
      reverseDfs(neighbor, visited, graph, result)
    }

    return result
  }

  return total
}

console.log(kosaraju([
  ['B', 'C'],
  ['C', 'A'],
  ['A', 'B'],
  ['B', 'D'],
  ['D', 'E'],
  ['E', 'F'],
  ['F', 'D'],
  ['I', 'J'],
  ['J', 'K'],
  ['J', 'G'],
  ['G', 'H'],
  ['H', 'I'],
  ['G', 'F']
]))