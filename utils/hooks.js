const MyReact = ( () => {
  let hooks = []
  let currentHook = 0

  return {
    render: Component => {
      const Comp = Component()

      Comp.render()

      currentHook = 0

      return Comp
    },
    useEffect: (callback, depArray) => {
      const hasNoDeps = !depArray
      const deps = hooks[currentHook]

      const hasChangeDeps = deps ? depArray.some((el, i) => el !== deps[i]) : true

      if (hasNoDeps || hasChangeDeps) {
        callback()

        hooks[currentHook] = depArray
      }

      currentHook++
    },
    useState: (initialValue) => {
      hooks[currentHook] = hooks[currentHook] || initialValue

      const setStateHookIndex = currentHook

      const setState = newState => hooks[setStateHookIndex] = newState

      return [hooks[currentHook++], setState]
    }
  }
})()


function useSplitURL(str) {
  const [text, setText] = MyReact.useState(str)
  const masked = text.split('.')
  return [masked, setText]
}

function Counter() {
  const [count, setCount] = MyReact.useState(0)
  const [text, setText] = useSplitURL('www.netlify.com')

  MyReact.useEffect(() => {
    console.log('effect', count, text)
  }, [count, text])

  return {
    click: () => setCount(count + 1),
    type: txt => setText(txt),
    noop: () => setCount(count),
    render: () => console.log('render', { count, text })
  }
}
let App
App = MyReact.render(Counter)
// effect 0 foo
// render {count: 0, text: 'foo'}
App.click()
App = MyReact.render(Counter)
// effect 1 foo
// render {count: 1, text: 'foo'}
App.type('www.reactjs.org')

App = MyReact.render(Counter)
// effect 1 bar
// render {count: 1, text: 'bar'}
App.noop()
App = MyReact.render(Counter)
// // no effect run
// render {count: 1, text: 'bar'}
App.click()
App = MyReact.render(Counter)
// effect 2 bar
// render {count: 2, text: 'bar'}