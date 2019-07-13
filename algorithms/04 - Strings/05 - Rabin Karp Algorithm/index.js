function hash(text) {
  return [...text].reduce((acc, char, index) => acc + char.charCodeAt(0) * (13 ** index))
}

function rabinKarp(text, word) {
  let hashValue = hash(word)

  let length = word.length

  for (let i = 0; i < text.length - length; i++) {
    if (hash(text.slice(i, i + length)) === hashValue) {
      return i
    }
  }

  return -1
}

console.log(rabinKarp('abcxabcdabxaabaabaaaabcdabcdabcy', 'aabaabaaa'))
console.log(rabinKarp('abcxabcdabxaabcdabcabcdabcdabcy', 'abcdabca'))