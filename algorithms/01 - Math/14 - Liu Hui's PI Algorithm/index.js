function liuHui(gonNum = 96) {
  let radius = 1

  let n = 6

  let l = radius

  while (n < gonNum) {
    const halfSide = l / 2

    const perpendicular = Math.sqrt(radius ** 2 - halfSide ** 2)

    const excessRadius = radius - perpendicular

    l = Math.sqrt(excessRadius ** 2 + halfSide ** 2)

    n = n * 2
  }

  return radius * (l * n) / 2 / (radius ** 2)
}


console.log(liuHui())