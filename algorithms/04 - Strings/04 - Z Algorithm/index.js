function zCalculation(str) {
  let arr = [0]

  let left = 0
  let right = 0

  for (let i = 1; i < str.length; i++) {
      if (i > right) {
        left = right = i
        
        while (right < str.length && str[right] === str[right - left]) {
          right++
        }

        arr[i] = right - left

        right--
      } else {
        if (i + arr[i - left] - 1 < right) {
          arr[i] = arr[i - left]
        } else {
          left = i

          while (right < str.length && str[right] === str[right - left]) {
            right++
          }

          arr[i] = right - left

          right--
        }
      }
  }

  return arr
}

function zAlgorithm(text, pattern) {
  let arr = []
  zCalculation(pattern + '$' + text).forEach((item, index) => {
    if (item === pattern.length) {
      arr.push(index - pattern.length - 1)
    }
  })

  return arr
}
console.log(zAlgorithm('abcbcglabcx', 'abc'))