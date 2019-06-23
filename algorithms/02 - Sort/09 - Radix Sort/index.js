function radixSort(arr) {
  let radixArr = Array(10).fill(null).map(()=>[])
  let maxNum = Math.max(...arr)

  let maxDigits = (maxNum + '').length

  let dev = 1

  for (let i = 0; i < maxDigits; i++) {
    arr.forEach(item => {
      let index = Math.floor(item / dev) % 10
      radixArr[index].push(item)
    })


    arr = radixArr.reduce((acc, cur) => {
      return [...acc, ...cur]
    }, [])

    radixArr = Array(10).fill(null).map(()=>[])

    dev *= 10

  }

  return arr
}



console.log(radixSort([1,66,22,567,3,22,67,95,136,156,7432,6744,11,88]))
