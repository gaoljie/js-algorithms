// updated insertion sort
function shellSort(arr) {
  const len = arr.length
  let gap = Math.floor(len / 2)

  while (gap > 0) {
    for (let i = 0; i < len - gap; i++) {
      let curIndex = i
      while (curIndex >= 0) {
        if (arr[curIndex] > arr[curIndex + gap]) {
          [arr[curIndex], arr[curIndex + gap]] = [arr[curIndex + gap], arr[curIndex]]
        }

        curIndex -= gap
      }
    }
    gap = Math.floor(gap / 2)
  }

  return arr
}


console.log(shellSort([1,66,22,567,3,22,67,95,136,156,7432,6744,11,88]))
