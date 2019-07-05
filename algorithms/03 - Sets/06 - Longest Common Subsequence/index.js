function lcs(a, b) {
  if (!b || !a) return 0
  if (a[0] === b[0]) {
    return 1 + lcs(a.slice(1), b.slice(1))
  }

  return Math.max(lcs(a, b.slice(1)), lcs(a.slice(1), b))
}

function lcsWithString(a, b) {
  if (!b || !a) return ''
  if (a[0] === b[0]) {
    return a[0] + lcsWithString(a.slice(1), b.slice(1))
  }

  let strA = lcsWithString(a, b.slice(1))
  let strB = lcsWithString(a.slice(1), b)

  return (strA.length > strB.length) ? strA : strB
}

console.log(lcs('ABCDGH', 'AEDFHR'))
console.log(lcs('AGGTAB', 'GXTXAYB'))
console.log(lcsWithString('ABCDGH', 'AEDFHR'))
console.log(lcsWithString('AGGTAB', 'GXTXAYB'))