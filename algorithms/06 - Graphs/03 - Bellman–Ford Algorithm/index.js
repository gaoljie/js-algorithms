function bellmanFord(graph, source) {
  let dist = {}
  let prev = {}
  for (let edge of graph) {
    let vertex1 = edge[0]
    let vertex2 = edge[1]

    dist[vertex1] = Infinity;
    dist[vertex2] = Infinity;
  }

  dist[source] = 0

  for (let vertex of Object.keys(dist)) {
    let changed = false

    for (let edge of graph) {
      let start = edge[0]
      let end = edge[1]
      let len = edge[2]

      if (dist[start] + len < dist[end]) {
        dist[end] = dist[start] + len
        changed = true

        prev[end] = start
      }
    }

    if (!changed) {
      break
    }
  }

  return dist
}

console.log(bellmanFord([
  ['S', 'E', 8],
  ['S', 'A', 10],
  ['E', 'D', 1],
  ['D', 'A', -4],
  ['D', 'C', -1],
  ['A', 'C', 2],
  ['C', 'B', -2],
  ['B', 'A', 1]
], 'S'))