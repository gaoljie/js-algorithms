function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func(... args);
    } else {
      return function(...args2) {
        return curried(...args,...args2 );
      }
    }
  };

}
function volume(l,h,w) {
  return l * h * w
}
const hCy = curry(volume);
console.log(hCy(200)(100)(200))

