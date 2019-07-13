function binarySearch(arr, item) {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (arr[mid] < item) {
      left = mid
    } else if (arr[mid] > item) {
      right = mid
    } else {
      return mid
    }
  }

  return -1
}

console.log(binarySearch([1, 2, 5, 10, 20, 21, 24, 30, 48], 30))