function floydWarshall(graph) {
  let vertices = new Set()
  let dist = {}
  let path = {}
  for (let edge of graph) {
    let start = edge[0]
    let end = edge[1]
    vertices.add(start)
    vertices.add(end)

    if (!dist[start]) (dist[start] = {})
    if (!path[start]) (path[start] = {})

    dist[start][end] = edge[2]
    path[start][end] = start
  }

  for (let vertex of vertices) {
    Object.keys(dist).forEach(item => {
      if (!dist[item][vertex]) {
        dist[item][vertex] = vertex === item ? 0 : Infinity
        path[item][vertex] = -1
      }
    })
  }

  for (let k of vertices) {
    for (let i of vertices) {
      for (let j of vertices) {
        if (dist[i][j] > dist[i][k] + dist[k][j]) {
          dist[i][j] = dist[i][k] + dist[k][j]
          path[i][j] = path[k][j]
        }
      }
    }
  }

  return [dist, path]
}

console.log(floydWarshall([
  ['0', '3', 15],
  ['3', '0', 1],
  ['0', '1', 3],
  ['1', '2', -2],
  ['0', '2', 6],
  ['2', '3', 2],
]))