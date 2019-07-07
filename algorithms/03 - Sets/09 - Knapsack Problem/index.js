function knapsack(items, capacity) {

  let memo = []
  for (let row = 0; row < items.length; row++) {
    let rows = []
    for (let col = 0; col <= capacity; col++) {
      let item = items[row]
      let weight = item.w
      let value = item.v

      let maxValueAtLastRowSameCol = memo[row - 1] ? memo[row - 1][col] : 0
      if (weight > col) {
        rows[col] = maxValueAtLastRowSameCol
      } else {
        rows[col] = Math.max(value + (memo[row - 1] ? memo[row - 1][col - weight] : 0), maxValueAtLastRowSameCol)
      }
    }

    memo.push(rows)
  }
  return memo[items.length - 1][capacity]
}

console.log(knapsack([{w:1, v:1}, {w:3, v:4}, {w:4, v:5}, {w:5, v:7}], 7))

console.log(knapsack([
  {w:70,v:135},
  {w:73,v:139},
  {w:77,v:149},
  {w:80,v:150},
  {w:82,v:156},
  {w:87,v:163},
  {w:90,v:173},
  {w:94,v:184},
  {w:98,v:192},
  {w:106,v:201},
  {w:110,v:210},
  {w:113,v:214},
  {w:115,v:221},
  {w:118,v:229},
  {w:120,v:240},
], 750));