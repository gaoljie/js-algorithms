function combinationWithoutRepetition(arr, num) {
  if (num === 1) return arr.map(item => [item])

  let combinations = []
  arr.forEach((item, index) => {
    let currentCom = combinationWithoutRepetition(arr.slice(index + 1), num - 1).map(com => [item, ...com])

    combinations = [...combinations, ...currentCom]
  })

  return combinations
}

function combinationWithRepetition(arr, num) {
  if (num === 1) return arr.map(item => [item])

  let combinations = []
  arr.forEach((item, index) => {
    let currentCom = combinationWithRepetition(arr.slice(index), num - 1).map(com => [item, ...com])

    combinations = [...combinations, ...currentCom]
  })

  return combinations
}

console.log(combinationWithoutRepetition(['A', 'B', 'C', 'D'], 3))
console.log(combinationWithRepetition(['A', 'B', 'C'], 3))