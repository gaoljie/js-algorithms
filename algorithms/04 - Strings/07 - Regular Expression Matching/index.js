function isMatch(string, pattern) {
  let memo = Array(string.length + 1).fill(null).map(_ => Array(pattern.length + 1).fill(false))

  memo[0][0] = true

  for (let col = 1; col <= pattern.length; col++) {
    if (pattern[col - 1] === '*') {
      memo[0][col] = memo[0][col - 2]
    } else {
      memo[0][col] = false
    }
  }
  for (let row = 1; row <= string.length; row++) {
    for (let col = 1; col <= pattern.length; col++) {
      let strIndex = row - 1
      let patternIndex = col - 1
      if (string[strIndex] === pattern[patternIndex] || pattern[patternIndex] === '.') {
        memo[row][col] = memo[row - 1][col - 1]
      } else if (pattern[patternIndex] === '*') {
        memo[row][col] = memo[row][col - 2] || ((string[strIndex] === pattern[patternIndex - 1] || pattern[patternIndex - 1] === '.') ? memo[row - 1][col] : false)
      } else {
        memo[row][col] = false
      }
    }
  }

  return memo[string.length][pattern.length]
}


console.log(isMatch('xaabyc', 'xa*b.c'))
console.log(isMatch('mississippi', 'mis*is*.p*.'))
console.log(isMatch('abba', 'a*b*.c'))
console.log(isMatch('abba', '.*c'))
console.log(isMatch('aaa', 'a*'))