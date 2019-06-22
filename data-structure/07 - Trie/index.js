class Node {
  constructor() {
    this.keys = new Map()
    this.end = false
  }

  setEnd() {
    this.end = true
  }
}

class Trie {
  constructor() {
    this.root = new Node()
  }

  add(input, node = this.root) {
    if (!input.length) {
      node.setEnd()
    } else if (!node.keys.has(input[0])) {
      let newNode = new Node()
      node.keys.set(input[0], newNode)
      return this.add(input.substr(1), newNode)
    } else {
      return this.add(input.substr(1), node.keys.get(input[0]))
    }
  }

  isWord(word) {
    let node = this.root;
    [...word].forEach(char => {
      if (node.keys.has(char)) {
        node = node.keys.get(char)
      } else {
        return false
      }
    })

    return node.end
  }
}

myTrie = new Trie();
myTrie.add("ball");
myTrie.add("bat");
myTrie.add("doll");
myTrie.add("dork");
myTrie.add("do");
myTrie.add("dorm");
myTrie.add("send");
myTrie.add("sense");
console.log(myTrie.isWord("doll"));
console.log(myTrie.isWord("do"));
console.log(myTrie.isWord("dor"));