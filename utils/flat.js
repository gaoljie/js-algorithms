function flat(arr) {
  return arr.reduce((acc, cur) => {
    if (Array.isArray(cur)) {
      return [...acc, ...flat(cur)]
    } else {
      return [...acc, cur]
    }
  }, [])
}

console.log(flat([1, 2, [3, 4]]))

console.log(flat([1,2,3,[1,2,3,4, [2,3,4]]]))