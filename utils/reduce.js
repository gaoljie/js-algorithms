function reduce(arr, fn, initial) {
  if (!arr.length) {
    if (initial === undefined) {
      throw new TypeError()
    } else {
      return initial
    }
  }

  let startIndex = initial === undefined ? 1 : 0

  let acc = initial === undefined ? arr[0] : initial

  for (let i = startIndex; i < arr.length; i++) {
    acc = fn(acc, arr[i])
  }

  return acc
}



console.log(reduce([1], ()=>{})) //1
console.log(reduce([], ()=>{}, 1)) //1
console.log(reduce([{ x: 22 }, { x: 42 }], ( acc, cur ) => Math.max( acc.x, cur.x ))) //42
console.log(reduce([], ()=>{})) // typeError
