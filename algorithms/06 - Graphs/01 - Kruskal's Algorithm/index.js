
function kruskal(graph) {
  graph.sort((a, b) => {
    return a[2] - b[2]
  })

  let vertexs = getVertex(graph)

  let disjointSet = {}

  for (let vertex of vertexs) {
    disjointSet[vertex] = new Set([vertex])
  }

  let result = []

  for (let edge of graph) {
    let root1 = disjointSet[edge[0]]
    let root2 = disjointSet[edge[1]]

    if (root1 === root2) {
      continue
    } else {
      result.push(edge)

      let unionSet = union(root1, root2)

      unionSet.forEach(item => {
        disjointSet[item] = unionSet
      })

    }
  }

  return result
}

function getVertex(graph) {
  let set = new Set()

  graph.forEach(item => {
    set = union(set, new Set(item.slice(0, 2)))
  })

  return set
}

function union(setA, setB) {
  let union = new Set(setA)
  for (let item of setB) {
    union.add(item)
  }

  return union
}

console.log(kruskal([
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

console.log(kruskal([
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