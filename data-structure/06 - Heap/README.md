In computer science, a **heap** is a specialized tree-based data structure that satisfies the heap property described below.

In a _min heap_, if `P` is a parent node of `C`, then the key (the value) of `P` is less than or equal to the key of `C`.

[![MinHeap](https://camo.githubusercontent.com/16e4220b69a866f97cc20d934c4b16fe5b9147de/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f362f36392f4d696e2d686561702e706e67)](https://camo.githubusercontent.com/16e4220b69a866f97cc20d934c4b16fe5b9147de/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f362f36392f4d696e2d686561702e706e67)

In a _max heap_, the key of `P` is greater than or equal to the key of `C`

[![Heap](https://camo.githubusercontent.com/cf3c66d0d2ed67af70a8bc500fc215526d266a0d/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f332f33382f4d61782d486561702e737667)](https://camo.githubusercontent.com/cf3c66d0d2ed67af70a8bc500fc215526d266a0d/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f332f33382f4d61782d486561702e737667)

The node at the "top" of the heap with no parents is called the root node.

```
Binary heap time complexity
╔═══════════╦══════════╦════════════╗
║ Algorithm ║ Average  ║ Worst Case ║
╠═══════════╬══════════╬════════════╣
║ Space     ║ O(n)     ║ O(n)       ║
║ Search    ║ O(n)     ║ O(n)       ║
║ Insert    ║ O(1)     ║ O(log n)   ║
║ Delete    ║ O(log n) ║ O(log n)   ║
║ Peek      ║ O(1)     ║ O(1)       ║
╚═══════════╩══════════╩════════════╝
```

