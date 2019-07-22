function hanoi(n, from, to, via) {
  if (n === 1) {
    console.log(`${n}: ${from} -> ${to}`)
    return
  }
  hanoi(n - 1, from, via, to)

  console.log(`${n}: ${from} -> ${to}`)

  hanoi(n - 1, via, to, from)
}

hanoi(3, 'A', 'B', 'C')