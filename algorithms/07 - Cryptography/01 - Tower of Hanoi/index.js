function hash(text) {
  return [...text].reduce((acc, char, index) => acc + char.charCodeAt(0) * (13 ** index))
}
