function curry(fn, ...args) {
  return (...rest) => {
    return fn(...args, ...rest)
  }
}

function volume(l,h,w) {
  return l * h * w
}
const hCy = curry(volume,100);
console.log(hCy(200, 900))

