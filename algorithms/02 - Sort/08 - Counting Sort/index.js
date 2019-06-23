function countingSort(arr) {

  let min = Math.min(...arr)
  let max = Math.max(...arr)

  let countArr = Array(max - min + 1).fill(0)

  arr.forEach(item => {
    let index = item - min
    countArr[index]++
  })

  let newArr = []

  countArr.forEach((count, index) => {
    newArr = [...newArr, ...Array(count).fill(min + index)]
  })

  return newArr
}


console.log(countingSort([1,66,22,567,3,22,67,95,136,156,7432,6744,11,88]))
