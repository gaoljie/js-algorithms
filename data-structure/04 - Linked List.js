/*
*  keyword: append, remove, find, removeAt,
* */

class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  append(value) {
    let newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      return
    }

    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = newNode
  }

  remove(value) {
    if (!this.head) return

    let current = this.head
    if (value === current.value) {
      this.head = current.next
      return
    }

    while (current) {
      let next = current.next

      if (next.value === value) {
        current.next = next.next
        return
      }

      current = next
    }
  }

  find(value) {
    let current = this.head

    while (current) {
      if (current.value === value) {
        return current
      }

      current = current.next
    }
  }

  appendAt(index, value) {
    if (index < 0 || index > this.length()) {
      throw new Error('index not valid')
    }
    let newNode = new Node(value)

    if (index === 0) {
      newNode.next = this.head
      this.head = newNode
      return
    }

    let count = 0
    let current = this.head
    let prev = null

    while (count < index) {
      count++
      prev = current
      current = current.next
    }

    prev.next = newNode
    newNode.next = current
  }


  removeAt(index) {
    if (index < 0 || index > this.length()) {
      throw new Error('index not valid')
    }

    if (index === 0) {
      this.head = this.head.next
      return
    }

    let count = 0
    let current = this.head
    let prev = null

    while (count < index) {
      count++
      prev = current
      current = current.next
    }

    prev.next = current.next
  }

  length() {
    let current = this.head
    let count = 0
    while (current) {
      count++
      current = current.next
    }

    return count
  }

  print() {
    let current = this.head
    let arr = []
    while (current) {
      arr.push(current.value)
      current = current.next
    }

    console.log(arr)
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null
  }

  append(value) {
    let newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      return
    }

    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = newNode
    newNode.prev = current
  }

  remove(value) {
    if (!this.head) return

    let current = this.head
    if (value === current.value) {
      this.head = current.next
      return
    }

    while (current) {
      let next = current.next

      if (next.value === value) {
        current.next = next.next
        if (next.next) {
          next.next.prev = current
        }
        return
      }

      current = next
    }
  }

  find(value) {
    let current = this.head

    while (current) {
      if (current.value === value) {
        return current
      }

      current = current.next
    }
  }

  appendAt(index, value) {
    if (index < 0 || index > this.length()) {
      throw new Error('index not valid')
    }
    let newNode = new Node(value)

    if (index === 0) {
      newNode.next = this.head
      this.head = newNode
      return
    }

    let count = 0
    let current = this.head
    let prev = null

    while (count < index) {
      count++
      prev = current
      current = current.next
    }

    prev.next = newNode
    newNode.next = current
  }


  removeAt(index) {
    if (index < 0 || index > this.length()) {
      throw new Error('index not valid')
    }

    if (index === 0) {
      this.head = this.head.next
      return
    }

    let count = 0
    let current = this.head
    let prev = null

    while (count < index) {
      count++
      prev = current
      current = current.next
    }

    prev.next = current.next

    if (current.next) {
      current.next.prev = prev
    }
  }

  length() {
    let current = this.head
    let count = 0
    while (current) {
      count++
      current = current.next
    }

    return count
  }

  print() {
    let current = this.head
    let arr = []
    while (current) {
      arr.push(current.value)
      current = current.next
    }

    console.log(arr)
  }
}


const linkedList = new LinkedList()

//append
linkedList.append('a')
linkedList.append('b')
linkedList.append('c')
linkedList.append('d')
linkedList.append('e')
linkedList.appendAt(0, 'x')
linkedList.appendAt(1, 'y')
linkedList.appendAt(7, 'z')
console.log(linkedList.length())
console.log('----remove----')
linkedList.remove('x')
linkedList.remove('z')
linkedList.remove('a')
linkedList.removeAt(0)
linkedList.removeAt(3)
linkedList.removeAt(1)
