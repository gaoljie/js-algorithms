In computing, a **hash table** (hash map) is a data structure which implements an _associative array_ abstract data type, a structure that can _map keys to values_. A hash table uses a _hash function_ to compute an index into an array of buckets or slots, from which the desired value can be found

Ideally, the hash function will assign each key to a unique bucket, but most hash table designs employ an imperfect hash function, which might cause hash collisions where the hash function generates the same index for more than one key. Such collisions must be accommodated in some way.

[![Hash Table](https://camo.githubusercontent.com/2b2b396c714c8344d3928c46d6b0f6be47d3d8c8/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f372f37642f486173685f7461626c655f335f315f315f305f315f305f305f53502e737667)](https://camo.githubusercontent.com/2b2b396c714c8344d3928c46d6b0f6be47d3d8c8/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f372f37642f486173685f7461626c655f335f315f315f305f315f305f305f53502e737667)

Hash collision resolved by separate chaining.

[![Hash Collision](https://camo.githubusercontent.com/404b54bac0302f96ef42dcd4c9bc4fc5ea03ec0b/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f642f64302f486173685f7461626c655f355f305f315f315f315f315f315f4c4c2e737667)](https://camo.githubusercontent.com/404b54bac0302f96ef42dcd4c9bc4fc5ea03ec0b/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f642f64302f486173685f7461626c655f355f305f315f315f315f315f315f4c4c2e737667)

```
Hash table time complexity
╔═══════════╦═════════╦════════════╗
║ Algorithm ║ Average ║ Worst Case ║
╠═══════════╬═════════╬════════════╣
║ Space     ║ O(n)    ║ O(n)       ║
║ Search    ║ O(1)    ║ O(n)       ║
║ Insert    ║ O(1)    ║ O(n)       ║
║ Delete    ║ O(1)    ║ O(n)       ║
╚═══════════╩═════════╩════════════╝
```

