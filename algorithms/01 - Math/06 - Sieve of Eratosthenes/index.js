function sieveOfEratosthenes(n) {
  let isPrime = Array(n + 1).fill(true)

  isPrime[0] = false
  isPrime[1] = false

  const prime = []
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) prime.push(i)

    let nextNum = i * i

    while (nextNum <= n) {
      isPrime[nextNum] = false
      nextNum += i
    }
  }

  return prime
}


console.log(sieveOfEratosthenes(500))
