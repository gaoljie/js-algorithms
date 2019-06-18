/*
*  keyword: array, parent
* */

class MinHeap {
  constructor() {
    this.heap = []
  }

  insert(num) {
    this.heap.push(num)
    let curIndex = this.heap.length - 1
    let parentIndex = Math.floor((curIndex - 1) / 2)

    while (num < this.heap[parentIndex]) {
      [this.heap[parentIndex], this.heap[curIndex]] = [this.heap[curIndex], this.heap[parentIndex]]
      curIndex = parentIndex
      parentIndex = Math.floor((curIndex - 1) / 2)
    }
  }
}

var heap = new MinHeap();

heap.insert(4)
heap.insert(3)
heap.insert(1)
heap.insert(12)
heap.insert(2)
heap.insert(22)
heap.insert(35)
heap.insert(84)
heap.insert(15)
heap.insert(22)

console.log(heap.heap)