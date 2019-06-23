function quickSort(arr) {
  const len = arr.length

  if (len < 2) return arr;

  const pivot = arr.shift()

  const left = []
  const right = []

  arr.forEach(item => {
    item < pivot ? left.push(item) : right.push(item)
  })

  return [...quickSort(left), pivot, ...quickSort(right)]
}


console.log(quickSort([1,66,22,567,3,22,67,95,136,156,7432,6744,11,88]))
