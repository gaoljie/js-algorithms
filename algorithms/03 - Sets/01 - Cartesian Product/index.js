function cartesian(setA, setB) {
  if (!setA || !setB || !setA.length || !setB.length) {
    return null
  }

  let products = []

  setA.forEach(itemA => {
    setB.forEach(itemB => {
      products.push([itemA, itemB])
    })
  })

  return products
}


console.log(cartesian([1, 2], [3, 5]))