function dpJump(arr) {

  let numOfJump = Array(arr.length).fill(Infinity)

  numOfJump[0] = 0

  let prevJump = [null]

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      let step = arr[j]

      if (j + step >= i ) {
        if (numOfJump[j] + 1 < numOfJump[i]) {
          numOfJump[i] = numOfJump[j] + 1

          prevJump[i] = j
        }
      }
    }
  }


  return numOfJump[arr.length - 1] < Infinity
}

function greedyJump(arr) {
  let leftGoodPosition = arr.length - 1;

  for (let numberIndex = arr.length - 2; numberIndex >= 0; numberIndex -= 1) {

    const maxCurrentJumpLength = numberIndex + arr[numberIndex];

    if (maxCurrentJumpLength >= leftGoodPosition) {

      leftGoodPosition = numberIndex;

    }
  }

  return leftGoodPosition === 0;
}

console.log(dpJump([2, 3, 1, 1, 2, 4, 2, 0, 1, 1]))
console.log(dpJump([1, 1, 1, 10, 1]))
console.log(dpJump([5, 4, 3, 2, 1, 0, 0]))
console.log(dpJump([3, 2, 1, 0, 4]))

console.log(greedyJump([2, 3, 1, 1, 2, 4, 2, 0, 1, 1]))
console.log(greedyJump([1, 1, 1, 10, 1]))
console.log(greedyJump([5, 4, 3, 2, 1, 0, 0]))
console.log(greedyJump([3, 2, 1, 0, 4]))