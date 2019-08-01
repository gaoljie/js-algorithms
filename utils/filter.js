function filter(arr, fn) {
  let filtered = []

  for (let i = 0; i < arr.length; i++) {
    let result = fn(arr[i], i, arr)

    if (result) filtered.push(arr[i])
  }

  return filtered
}

console.log(filter([1,2], (x)=>x==1))