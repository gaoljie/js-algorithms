let pipe = (...fns) => fns.reduce((f, g) => {
  return (...args) => g(f(...args))
});

function f(a, b) {
  return a + b
}

function g(x) {
  return 2*x
}

let piped = pipe(f, g)

console.log(piped(3, 4))

