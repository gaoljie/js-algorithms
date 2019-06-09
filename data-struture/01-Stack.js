/*
*  keyword: book stack, LIFO
* */

class Stack {
  constructor() {
    this.items = []
  }

  push (item) {
    this.items.push(item)
  }

  pop() {
    return this.items.pop()
  }

  peek(index) {
    return this.items[index]
  }

  size() {
    return this.items.length
  }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freeCodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
