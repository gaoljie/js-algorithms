/*
*  keyword: array, parent
* */


class PQ {
  constructor(comparator) {
    this.comparator = comparator
    this.heap = []
  }

  enqueue(element) {
    this.heap.push(element)

    let curIndex = this.heap.length - 1
    let parentIndex = Math.floor((curIndex - 1) / 2)
    while (parentIndex >= 0 && this.comparator(this.heap[curIndex], this.heap[parentIndex])) {
      [this.heap[parentIndex], this.heap[curIndex]] = [this.heap[curIndex], this.heap[parentIndex]]
      curIndex = parentIndex
      parentIndex = Math.floor((curIndex - 1) / 2)
    }
  }

  dequeue() {
    if (!this.heap.length) return null;

    [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]]

    const item = this.heap.pop()

    let curIndex = 0
    let left = curIndex * 2 + 1
    let right = curIndex * 2 + 2

    let next = right >= this.heap.length ? left : (this.comparator(this.heap[left], this.heap[right]) ? left : right)

    while (next < this.heap.length && this.comparator(this.heap[next], this.heap[curIndex])) {
      [this.heap[next], this.heap[curIndex]] = [this.heap[curIndex], this.heap[next]]
      curIndex = next
      left = curIndex * 2 + 1
      right = curIndex * 2 + 2
      next = right >= this.heap.length ? left : (this.comparator(this.heap[left], this.heap[right]) ? left : right)
    }

    return item

  }

  peek() {
    return this.heap[0]
  }

  size() {
    return this.heap.length
  }

  print() {
    console.log(this.heap)
  }
}

var maxHeap = new PQ((a, b) => a > b);

maxHeap.enqueue(4)
maxHeap.enqueue(3)
maxHeap.enqueue(1)
maxHeap.enqueue(12)
maxHeap.enqueue(2)
maxHeap.enqueue(22)
maxHeap.enqueue(35)
maxHeap.enqueue(84)
maxHeap.enqueue(15)
maxHeap.enqueue(22)
maxHeap.dequeue()
maxHeap.dequeue()
maxHeap.dequeue()
maxHeap.dequeue()
maxHeap.dequeue()
maxHeap.dequeue()
maxHeap.dequeue()
maxHeap.dequeue()
maxHeap.print()