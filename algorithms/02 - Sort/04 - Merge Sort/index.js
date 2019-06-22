function mergeSort(arr) {
  const len = arr.length

  if (len < 2) return arr;

  const middle = Math.floor(len / 2)

  const left = arr.slice(0, middle)
  const right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const arr = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }
  return [...arr, ...left, ...right]
}


console.log(mergeSort([1,66,22,567,3,22,67,95,136,156,7432,6744,11,88]))
