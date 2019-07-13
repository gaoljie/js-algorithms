function interpolationSearch(arr, item) {
  let left = 0
  let right = arr.length - 1

  while (left <= right && item >= arr[left] && item <= arr[right]) {

    if (left === right) {
      return item === arr[left] ? left : -1
    }

    let delta = (arr[right] - arr[left]) / (right - left)

    let pos = left + Math.floor((item - arr[left]) / delta)

    if (arr[pos] === item) {
      return pos
    }

    if (arr[pos] < item) {
      left = pos + 1
    } else {
      right = pos - 1
    }
  }

  return -1
}

console.log(interpolationSearch([1, 2, 3, 700, 800, 1200, 1300, 1400, 1900], 600))