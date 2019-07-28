function trapRain(towerHeight) {
  let maxSeenRightArr = []

  let maxSeenSoFar = 0

  for (let i = towerHeight.length - 1; i >= 0; i--) {
    if (towerHeight[i] > maxSeenSoFar) {
      maxSeenSoFar = towerHeight[i]
    }

    maxSeenRightArr[i] = maxSeenSoFar
  }

  let maxSeenLeft = 0

  let rainWater = 0

  for (let i = 0; i < towerHeight.length; i++) {
    if (towerHeight[i] > maxSeenLeft) {
      maxSeenLeft = towerHeight[i]
    }

    let maxSeenRight = maxSeenRightArr[i]

    rainWater = Math.max(Math.min(maxSeenLeft, maxSeenRight) - towerHeight[i], 0) + rainWater
  }

  return rainWater
}

console.log(trapRain([0,1,0,2,1,0,1,3,2,1,2,1]))