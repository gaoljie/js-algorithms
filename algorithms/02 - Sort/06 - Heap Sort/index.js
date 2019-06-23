function buildMaxHeap(arr) {
  let heap = []

  while (arr.length) {
    heap = [arr.pop(), ...heap]

    heapify(heap, 0, heap.length - 1)
  }

  return heap
}

function heapSort(arr) {
  arr = buildMaxHeap(arr)
  for (let i = arr.length - 1; i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, 0, i)
  }

  return arr
}

function heapify(arr, index, max) {
  let leftChild, rightChild, largest

  while (index < max) {
    largest = index
    leftChild = index * 2 + 1
    rightChild = index * 2 + 2

    if (arr[largest] < arr[leftChild] && leftChild < max) {
      largest = leftChild
    }


    if (arr[largest] < arr[rightChild] && rightChild < max) {
      largest = rightChild
    }

    if (index === largest) return

    [arr[index], arr[largest]] = [arr[largest], arr[index]]

    index = largest
  }
}


console.log(heapSort([1,66,22,567,3,22,67,95,136,156,7432,6744,11,88]))
