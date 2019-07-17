function undirectedWithDFS(graph) {
  let visited = new Set()

  let newGraph = {}

  for (let edge of graph) {
    let vertex1 = edge[0]
    let vertex2 = edge[1]

    if (!newGraph[vertex1]) newGraph[vertex1] = new Set()
    if (!newGraph[vertex2]) newGraph[vertex2] = new Set()

    newGraph[vertex1].add(vertex2)
    newGraph[vertex2].add(vertex1)

  }

  for (let vertex in newGraph) {
    let cycle = dfs(vertex, newGraph, visited, null)

    if (cycle) {
      return true
    }
  }

  return false
}

function dfs(node, graph, visited, parent) {
  if (!visited.has(node)) {
    visited.add(node)

    let neighbors = graph[node]

    for (let neighbor of neighbors) {
      if (visited.has(neighbor)) {
        if (neighbor !== parent) {
          return true
        } else {
          continue
        }
      } else {
        let isCircle = dfs(neighbor, graph, visited, node)

        if (isCircle) {
          return true
        }
      }
    }
  }

  return false
}

function undirectedCycleWithDisjointset(graph) {

  let disjointSet = {}

  for (let edge of graph) {
    let vertex1 = edge[0]
    let vertex2 = edge[1]

    if (!disjointSet[vertex1]) {
      disjointSet[vertex1] = new Set([vertex1])
    }

    if (!disjointSet[vertex2]) {
      disjointSet[vertex2] = new Set([vertex2])
    }

    let set1 = disjointSet[vertex1]
    let set2 = disjointSet[vertex2]
    if (set1 !== set2) {
      let unionSet = union(set1, set2)

      unionSet.forEach(item => disjointSet[item] = unionSet)
    } else {
      return true
    }

  }

  return false
}

function union(setA, setB) {
  let union = new Set(setA)
  for (let item of setB) {
    union.add(item)
  }

  return union
}

console.log(undirectedWithDFS([
  ['A', 'F'],
  ['B', 'E'],
  ['A', 'B'],
  ['E', 'D'],
  ['D', 'C'],
  ['B', 'C'],
]))

console.log(undirectedCycleWithDisjointset([
  ['A', 'F'],
  ['B', 'E'],
  ['A', 'B'],
  ['E', 'D'],
  ['D', 'C'],
  ['B', 'C'],
]))