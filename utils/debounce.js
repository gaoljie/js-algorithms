function debounce(fn, interval = 300) {
  let timeout = null

  return function (...args) {
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      fn.call(this, ...args)
    }, interval)
  }
}

const obj = {
  name: 'foo',
  sayMyName() {
    console.log('My name is', this.name)
  }
}

obj.sayMyName = debounce(obj.sayMyName, 1000)
obj.sayMyName()
obj.name = 'bar'
obj.sayMyName() //-> My name is bar <-- allows correct this binding
