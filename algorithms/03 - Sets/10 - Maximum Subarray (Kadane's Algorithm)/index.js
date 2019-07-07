function kadane(arr) {
  let subArr = []
  let subMax = 0

  let maxArr = []
  let max = 0
  for (let i = 0; i < arr.length; i++) {
    let curNum = arr[i]

    if (curNum + subMax > curNum) {
      subArr.push(curNum)
      subMax += curNum

    } else {
      subArr = [curNum]
      subMax = curNum
    }

    if (subMax > max) {
      max = subMax
      maxArr = subArr.slice()
    }
  }

  return maxArr
}

console.log(kadane([1, -3, 2, -5, 7, 6, -1, 4, 11, -23]))
console.log(kadane([-2, -3, 4, -1, -2, 1, 5, -3]))