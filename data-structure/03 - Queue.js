/*
*  keyword: FIFO, enqueue, dequeue, front, empty
* */

class Queue {
  constructor() {
    this.items = []
  }

  enqueue (item) {
    this.items.push(item)
  }

  dequeue() {
    return this.items.shift()
  }

  front() {
    return this.items[0]
  }

  empty() {
    return this.items.length == 0
  }

  size() {
    return this.items.length
  }
}

var q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.dequeue();
console.log(q.front());