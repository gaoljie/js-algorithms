function jumpSearch(arr, item) {
  let gap = Math.floor(Math.sqrt(arr.length))

  for (let i = 0; i < arr.length; i += gap) {
    let right = i + gap >= arr.length ? arr.length - 1 : i + gap
    if (arr[i] <= item && arr[right] >= item) {
      for (let j = i; j <= right  ; j++) {
        if (arr[j] === item) {
          return j
        }
      }
    }
  }

  return -1
}

console.log(jumpSearch([1, 2, 5, 10, 20, 21, 24, 30, 48], 30))