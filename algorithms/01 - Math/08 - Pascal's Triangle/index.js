function pascalTriangle(lineN) {
  let current = [1]
  for (let i = 1; i < lineN + 1; i++) {
    current[i] = current[i - 1] * (lineN - i + 1) / i
  }

  return current
}

function pascalTriangleRecursive(lineN) {
  if (lineN === 0) return [1]
  if (lineN === 1) return [1, 1]
  let arr = [1]

  let prevLine = pascalTriangleRecursive(lineN - 1)

  for (let i = 0; i < prevLine.length - 1; i++) {
    arr[i + 1] = prevLine[i] + prevLine[i + 1]
  }

  arr.push(1)

  return arr
}


console.log(pascalTriangle(9))
console.log(pascalTriangleRecursive(9))