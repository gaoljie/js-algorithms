/*
* keyword: collision
* */

const BucketSize = 32

const hash = (key) => {
  let sum = 0;

  [...key].forEach(char => {
    sum += char.charCodeAt(0)
  })

  return sum % BucketSize
}

class HashTable {
  constructor() {
    this.bucket = Array(BucketSize).fill(null).map(() => [])
  }

  insert(key, value) {
    const index = hash(key)
    const list = this.bucket[index]
    const item = list.find(item => item[0] === key)
    item ? (item[1] = value) : list.push([key, value])
  }

  delete(key) {
    const index = hash(key)
    const list = this.bucket[index]
    const deleteIndex = list.findIndex(item => item[0] === key)
    if (deleteIndex > -1) {
      list.splice(deleteIndex, 1)
    }
  }

  get(key) {
    const index = hash(key)
    const list = this.bucket[index]
    const item = list.find(item => item[0] === key)
    return item ? list.find(item => item[0] === key)[1] : undefined
  }
}

const hashTable = new HashTable()
hashTable.insert('a', 1123213)
hashTable.insert('a', 1321)
hashTable.insert('b', 1321)
hashTable.delete('b', 1321)

console.log(hashTable.get('a'))
console.log(hashTable.bucket)