class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function sort(a, b) {
  return a.data.count - b.data.count;
}

function buildHeap(str) {
  let freq = {};

  for (const char of str) {
    if (!freq[char]) freq[char] = 0;

    freq[char]++;
  }

  let arr = [];
  for (const [char, count] of Object.entries(freq)) {
    arr.push(
      new Node({
        type: "char",
        count,
        char
      })
    );
  }

  arr.sort(sort);

  return arr;
}

function traverse({ left, right }, dict, prefix = "") {
  if (left.data.type === "char") {
    dict[left.data.char] = prefix + "0";
  } else {
    traverse(left, dict, prefix + "0");
  }

  if (right.data.type === "char") {
    dict[right.data.char] = prefix + "1";
  } else {
    traverse(right, dict, prefix + "1");
  }
}

function huffman(str) {
  let arr = buildHeap(str);
  while (arr.length > 1) {
    let [first, second, ...rest] = arr;
    let parent = new Node(
      {
        type: "num",
        count: first.data.count + second.data.count
      },
      first,
      second
    );

    arr = [parent, ...rest];
    arr.sort(sort);
  }

  let dict = {};
  traverse(arr[0], dict);

  return dict;
}

console.log(huffman("asdasdadqwnsaldasoiciqqqqqsadsddsszzz"));
