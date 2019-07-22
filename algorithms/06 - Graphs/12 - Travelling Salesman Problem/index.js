function powerSet(arr) {
  arr = [...arr]
  if (!arr.length) {
    return [[]]
  }
  let element = arr.pop();

  let subPowerSet = powerSet(arr)

  return [...subPowerSet, ...subPowerSet.map(item => [...item, element])]
}

function tsp(graph, start) {
  let newGraph = {}
  for (let edge of graph) {
    let vertex1 = edge[0]
    let vertex2 = edge[1]
    let dist = edge[2]

    if (!newGraph[vertex1]) newGraph[vertex1] = {}

    newGraph[vertex1][vertex2] = dist
  }

  let vertices = Object.keys(newGraph).filter(key => key !== start)

  let sets = powerSet(vertices).sort((a, b) => a.length - b.length)


  let result = {}

  for (let set of sets) {
    for (let vertex of vertices) {
      result[vertex + ',' + JSON.stringify(set)] = tspUtil(vertex, set, newGraph)
    }
  }

  let lastSet = sets[sets.length - 1]

  result[start + ',' + JSON.stringify(lastSet)] = tspUtil(start, lastSet, newGraph)

  function tspUtil(vertex, set, graph) {
    if (!set.length) return graph[vertex][start]

    if (set.includes(vertex)) return Infinity

    return Math.min(...set.map(endVertex => {
      return graph[vertex][endVertex] + result[endVertex + ',' + JSON.stringify(set.filter(item => item !== endVertex))]
    }))
  }

  console.log(result)
  return result[start + ',' + JSON.stringify(lastSet)]
}

console.log(tsp([
  ['1', '2', 10],
  ['1', '3', 15],
  ['1', '4', 20],
  ['2', '1', 5],
  ['2', '3', 9],
  ['2', '4', 10],
  ['3', '1', 6],
  ['3', '2', 13],
  ['3', '4', 12],
  ['4', '1', 8],
  ['4', '2', 8],
  ['4', '3', 9]
], '1'))