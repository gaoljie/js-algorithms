
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null
  }

  add(data) {
    const node = new Node(data)
    if (!this.root) {
      this.root = node
      return
    }

    let current = this.root

    while (current) {
      if (data === current.data) return

      if (data < current.data) {
        if (!current.left) {
          current.left = node
          return
        }
        current = current.left
      }

      if (data > current.data) {
        if (!current.right) {
          current.right = node
          return
        }
        current = current.right
      }
    }
  }

  find(data) {
    if (!this.root) {
      return false
    }

    let current = this.root

    while (current.data) {
      if (data === current.data) return current

      if (data < current.data) {
        current = current.left
      }

      if (data > current.data) {
        current = current.right
      }
    }

    return false
  }

  inOrder() {
    if (this.root === null) {
      return false
    }

    const result = []

    function traverseInOrder(node) {
      node.left && traverseInOrder(node.left)
      result.push(node.data)
      node.right && traverseInOrder(node.right)
    }

    traverseInOrder(this.root);
    return result;
  }

  //dfs
  preOrder() {
    if (this.root === null) {
      return false
    }

    const result = []

    function traversePreOrder(node) {
      result.push(node.data)
      node.left && traversePreOrder(node.left)
      node.right && traversePreOrder(node.right)
    }

    traversePreOrder(this.root);
    return result;
  }

  postOrder() {
    if (this.root === null) {
      return false
    }

    const result = []

    function traversePostOrder(node) {
      node.left && traversePostOrder(node.left)
      node.right && traversePostOrder(node.right)
      result.push(node.data)
    }

    traversePostOrder(this.root);
    return result;
  }

  //breadth-first search
  bfs() {
    let node = this.root
    let queue = [node]
    let result = []
    while(queue.length) {
      node = queue.shift()

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)

      result.push(node.data)
    }
  }
}