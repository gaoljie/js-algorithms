function hamiltonian(graph) {

  let newGraph = {}
  for (let edge of graph) {
    let vertex1 = edge[0]
    let vertex2 = edge[1]

    if (!newGraph[vertex1]) newGraph[vertex1] = new Set()
    if (!newGraph[vertex2]) newGraph[vertex2] = new Set()

    newGraph[vertex1].add(vertex2)
    newGraph[vertex2].add(vertex1)

  }


  function isSafe(vertex, parent, arr) {
    if (!newGraph[parent].has(vertex)) {
      return false
    }

    if (arr.includes(vertex)) {
      return false
    }

    return true
  }

  function hamUtil(path, position, vertices, graph, result) {

    let parent = path[position - 1]

    vertices.forEach(vertex => {

      if (!isSafe(vertex, parent, path)) return;

      let newPath = [...path]

      newPath[position] = vertex

      if (position === vertices.length - 1) {
        //if this pattern already exist (in reverse order)
        let isRepeated = result.find(item => {
          let arr = item[0].slice(1);

          if (JSON.stringify(arr.reverse()) === JSON.stringify(newPath.slice(1))) {
            return true
          }

          return false
        })

        if (isRepeated) return;

        let firstVertex = newPath[0]

        //if last vertex is connected to first vertex, it is a circle
        if (graph[firstVertex].has(vertex)) {

          result.push([newPath, true])
        } else {
          result.push([newPath, false])
        }
      } else {
        hamUtil(newPath, position + 1, vertices, graph, result)
      }

    })
  }

  let vertices = Object.keys(newGraph)

  let path = []

  let result = []

  path[0] = vertices[0]

  hamUtil(path, 1, vertices, newGraph, result)

  return result
}

console.log(hamiltonian([
  ['1', '2'],
  ['2', '4'],
  ['4', '5'],
  ['5', '1'],
  ['5', '2'],
  ['2', '3'],
  ['3', '4'],
  ['1', '3']
]))

