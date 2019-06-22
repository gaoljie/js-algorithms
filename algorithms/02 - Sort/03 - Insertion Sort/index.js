function insertionSort(arr) {
  const sortedArr = [arr[0]]

  for (let i = 1; i < arr.length; i++) {
    let curIndex = 0
    let item = arr[i]
    while (item > sortedArr[curIndex]) {
      curIndex++
    }

    sortedArr.splice(curIndex, 0, item)
  }
  return sortedArr
}

console.log(insertionSort([1,66,22,567,3,22,67,95,136,156,7432,6744,11,88]))
