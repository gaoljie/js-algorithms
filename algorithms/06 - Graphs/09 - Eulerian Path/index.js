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

  return edges.filter(edge => {
    return newGraph[edge[0]].size !== 1 && newGraph[edge[1]].size !== 1
  })
}

function eulerian(graph) {

  let newGraph = {}
  let odd = []
  let path = []

  let bridges = articulation(graph).map(edge => edge[0] + edge[1])

  for (let edge of graph) {
    let vertex1 = edge[0]
    let vertex2 = edge[1]

    if (!newGraph[vertex1]) newGraph[vertex1] = []
    if (!newGraph[vertex2]) newGraph[vertex2] = []

    newGraph[vertex1].push(vertex2)
    newGraph[vertex2].push(vertex1)

  }

  let vertices = Object.keys(newGraph)

  for (let vertex of vertices) {
    if (newGraph[vertex].length % 2) {
      odd.push(vertex)
    }
  }

  let currentVertex
  if (!odd.length) {
    currentVertex = vertices[0]
  } else if (odd.length === 2) {
    currentVertex = odd[0]
  } else {
    return null
  }

  path.push(currentVertex)

  while (newGraph[currentVertex].length) {

    let neighbors = newGraph[currentVertex]
    for (let neighbor of neighbors) {
      if (!bridges.includes(currentVertex + neighbor)
        && !bridges.includes(neighbor + currentVertex)) {

        neighbors.splice(neighbors.indexOf(neighbor), 1)

        newGraph[neighbor].splice(newGraph[neighbor].indexOf(currentVertex), 1)

        let graphIndex = graph.findIndex(edge => {
          let str = edge[0] + edge[1]
          return (str === (currentVertex + neighbor)) || ( str === (neighbor + currentVertex))
        })

        graph.splice(graphIndex, 1)

        bridges = articulation(graph).map(edge => edge[0] + edge[1])
        currentVertex = neighbor
        path.push(currentVertex)
        break
      }
    }
  }

  return path
}


console.log(eulerian([
  ['A', 'B'],
  ['A', 'C'],
  ['B', 'C'],
  ['B', 'D'],
  ['C', 'E']
]))

console.log(eulerian([
  ['A', 'B'],
  ['A', 'E'],
  ['A', 'F'],
  ['A', 'G'],
  ['G', 'F'],
  ['B', 'E'],
  ['B', 'E'],
  ['B', 'C'],
  ['E', 'D'],
  ['C', 'D']
]))