function powerSetRecursive(arr) {
  if (!arr.length) {
    return [[]]
  }
  let element = arr.pop();

  let subPowerSet = powerSetRecursive(arr)

  return [...subPowerSet, ...subPowerSet.map(item => [...item, element])]
}

function powerSetBitwise(arr) {
  let totalLength = 2 ** arr.length

  let powerSet = []
  for (let i = 0; i < totalLength; i++) {
    let subset = []

    for (let j = 0; j < arr.length; j++) {
      if (1 << j & i) {
        subset.push(arr[j])
      }
    }

    powerSet.push(subset)
  }

  return powerSet
}

console.log(powerSetRecursive([1, 2, 3]))
console.log(powerSetBitwise([1, 2, 3]))


