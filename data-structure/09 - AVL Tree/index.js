class Node {
  constructor(data, left = null, right = null, parent = null) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.parent = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const node = new Node(data);
    if (!this.root) {
      this.root = node;
      return node;
    }

    let current = this.root;

    while (current) {
      if (data === current.data) return;

      if (data < current.data) {
        if (!current.left) {
          current.left = node;
          node.parent = current;
          return node;
        }
        current = current.left;
      }

      if (data > current.data) {
        if (!current.right) {
          current.right = node;
          node.parent = current;
          return node;
        }
        current = current.right;
      }
    }
  }
}

class AVL extends BST {
  getBalanceFactor(node) {
    if (!node) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  isBalanced(node) {
    let balanceFactor = this.getBalanceFactor(node);

    return balanceFactor <= 1 && balanceFactor >= -1;
  }

  getHeight(root) {
    let height = 0;
    if (root === null || typeof root === "undefined") {
      height = -1;
    } else {
      height =
        Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
    }
    return height;
  }

  insert(data) {
    let current = super.insert(data);

    while (this.isBalanced(current) && current) {
      current = current.parent;
    }

    if (!current) return;

    if (this.getBalanceFactor(current) > 1) {
      if (this.getBalanceFactor(current.left) > 0) {
        this.rotateLL(current);
      } else {
        this.rotateLR(current);
      }
    } else if (this.getBalanceFactor(current) < -1) {
      if (this.getBalanceFactor(current.right) < 0) {
        this.rotateRR(current);
      } else {
        this.rotateRL(current);
      }
    }
  }

  rotateLL(node) {
    let temp = node.left;
    node.left = temp.right;
    temp.right = node;

    return temp;
  }

  rotateRR(node) {
    let temp = node.right;
    node.right = temp;
    temp.left = node;

    return temp;
  }

  rotateLR(node) {
    node.left = this.rotateRR(node.left);
    return this.rotateLL(node);
  }

  rotateRL(node) {
    node.right = this.rotateLL(node.right);
    return this.rotateRR(node);
  }
}