/*
*  keyword: has, add, remove, values, size, union, intersection, difference, subset
* */

class Set {
  constructor() {
    this.items = []
  }

  has(item) {
    return this.items.includes(item)
  }

  values() {
    return this.items
  }

  add(item) {
    if (!this.has(item)) {
      this.items.push(item)
      return true
    }
    return false
  }

  remove(item) {
    if (this.has(item)) {
      const index = this.items.indexOf(item)
      this.items.splice(index, 1)
      return true
    }
    return false
  }

  size() {
    return this.items.length
  }

  union(otherSet) {
    const unionSet = new Set()

    const firstSet = this.values()
    const secondSet = otherSet.values()

    firstSet.forEach(item => {
      unionSet.add(item)
    })


    secondSet.forEach(item => {
      unionSet.add(item)
    })

    return unionSet
  }

  intersection(otherSet) {
    const intersectionSet = new Set()

    const firstSet = this.values()

    firstSet.forEach(item => {
      if (otherSet.has(item)) {
        intersectionSet.add(item)
      }
    })

    return intersectionSet
  }

  difference(otherSet) {
    const differenceSet = new Set()

    const firstSet = this.values()

    firstSet.forEach(item => {
      if (!otherSet.has(item)) {
        differenceSet.add(item)
      }
    })

    return differenceSet
  }

  subset(otherSet) {
    const firstSet = this.values()

    return firstSet.every(item => {
      return otherSet.has(item)
    })
  }
}

var setA = new Set();
var setB = new Set();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

var setC = new Set();
var setD = new Set();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log(setD.values())
setD.remove("a");
console.log(setD.has("a"));
console.log(setD.add("d"));
