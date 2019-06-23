function buckSort(arr, size = 100) {
  let min = Math.min(...arr)
  let max = Math.max(...arr)

  let bucket = Array(Math.ceil((max - min) / size)).fill(null).map(() => [])

  arr.forEach(item => {
    let index = Math.floor((item - min) / size)

    bucket[index].push(item)
  })

  return bucket.reduce((acc, cur) => {
    return [...acc, ...cur.sort((a,b)=>a-b)]
  }, [])
}



console.log(buckSort([1,66,22,567,3,22,67,95,136,156,7432,6744,11,88]))
