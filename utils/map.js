function map(arr, fn) {
  let result = []

  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i, arr))
  }

  return result
}

console.log(map([1,2], (x)=>x*2))