let compose = (...fns) => fns.reduceRight((f, g) => {
  return (...args) => g(f(...args))
});

function f(a, b) {
  return a + b
}

function g(x) {
  return 2*x
}

let composed = compose(g, f)

console.log(composed(3, 4))

