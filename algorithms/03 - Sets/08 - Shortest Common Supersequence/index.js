function scs(a, b) {
  if (!a) return b
  if (!b) return a

  if (a[0] === b[0]) {
    return a[0] + scs(a.slice(1), b.slice(1))
  }

  let strA = b[0] + scs(a, b.slice(1))
  let strB = a[0] + scs(a.slice(1), b)

  return strA.length > strB.length ? strB : strA
}

console.log(scs('AGGTAB', 'GXTXAYB'))