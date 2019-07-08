function hammingDistance(a, b) {
  if (a.length !== b.length) return null

  let count = 0
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) count++
  }

  return count
}

console.log(hammingDistance('karolin', 'kathrin'))