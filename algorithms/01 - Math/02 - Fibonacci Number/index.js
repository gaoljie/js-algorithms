function fibonacci(n) {
  const arr = [0, 1]
  
  if (n === 1 || n === 2) return arr
  
  while (n > 2) {

    arr.push(arr[arr.length - 1] + arr[arr.length - 2])

    n -= 1
  }

  return arr
}

console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(15))