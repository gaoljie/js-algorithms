function combinationSum(arr, target) {
  if (!arr.length) return []

  let firstItem = arr[0]

  if (target < firstItem) return []

  if (target === firstItem) {
    return [[firstItem]]
  }

  return [...combinationSum(arr, target - firstItem).map(subArr => [firstItem, ...subArr]),...combinationSum(arr.slice(1), target)]
}

console.log(combinationSum([1], 4))
console.log(combinationSum([2, 3, 6, 7], 7))
console.log(combinationSum([2, 3, 5], 8))
console.log(combinationSum([2, 5], 3))