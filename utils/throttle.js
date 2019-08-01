function throttle(fn, interval = 300) {
  let canRun = true

  return function (...args) {
    if (!canRun) return;

    canRun = false

    setTimeout(() => {
      fn.call(this, ...args)
      canRun = true
    }, interval)
  }
}

const obj = {
  name: 'foo',
  sayMyName() {
    console.log('My name is', this.name)
  }
}

obj.sayMyName = throttle(obj.sayMyName, 1000)
obj.sayMyName()
obj.name = 'bar'
obj.sayMyName() //-> My name is bar <-- allows correct this binding
