function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }

  return arr
}

console.log(selectionSort([1,66,22,567,3,22,67,95,136,156,7432,6744,11,88]))
