function permutationWithoutRepetition(arr) {
  if (arr.length === 1) return arr

  let element = arr.pop()

  return permutationWithoutRepetition(arr).map(item => {
    let newItem = []
    for (let i = 0; i <= item.length; i++) {
      newItem.push([...item.slice(0, i), element, ...item.slice(i)])
    }

    return newItem
  }).reduce((acc, cur) => [...acc, ...cur], [])
}

function permutationWithRepetition(arr) {
  let newArr = [[]]
  for (let i = 0; i < arr.length; i++) {
    newArr = newArr
      .map(item => arr.map(arrItem => [...item, arrItem]))
      .reduce((acc, cur) => [...acc, ...cur], [])
  }

  return newArr
}

console.log(permutationWithoutRepetition(['A', 'B', 'C', 'D']))
console.log(permutationWithRepetition(['A', 'B', 'C']))