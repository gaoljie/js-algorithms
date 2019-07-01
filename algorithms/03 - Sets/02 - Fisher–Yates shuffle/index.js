function fisherYates(arr) {
  const newArr = [...arr]

  for (let i = newArr.length - 1; i >=0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));

    [newArr[i], newArr[randomIndex]] = [newArr[randomIndex], newArr[i]]
  }

  return newArr
}

console.log(fisherYates([1,6,99,23,66,11,573,26,64,2257,135,13]))


