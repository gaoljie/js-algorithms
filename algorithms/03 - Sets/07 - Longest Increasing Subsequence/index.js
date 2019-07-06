function lis(arr) {
  let count = Array(arr.length).fill(1)

  let max = 1

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        let sum = count[j] + 1
        if (sum > count[i]) count[i] = sum

        if (sum > max) max = sum
      }
    }
  }

  return max
}

console.log(lis([3, 4, -1, 0, 6, 2, 3]))
console.log(lis([0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]))

