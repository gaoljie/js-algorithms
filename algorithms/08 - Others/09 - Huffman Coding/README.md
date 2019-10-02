Huffman coding is an efficient method of compressing data without losing information, Huffman coding works by using a frequency-sorted binary tree to encode symbols.



- Take a list of symbols and their probabilities.
- Select two symbols with the lowest probabilities (if multiple symbols have the same probability, select two arbitrarily).
- Create a binary tree out of these two symbols, labeling one branch with a "1" and the other with a "0". It doesn't matter which side you label 1 or 0 as long as the labeling is consistent throughout the problem (e.g. the left side should always be 1 and the right side should always be 0, or the left side should always be 0 and the right side should always be 1).
- Add the probabilities of the two symbols to get the probability of the new subtree.
- Remove the symbols from the list and add the subtree to the list.
- Go back through the list and take the two symbols/subtrees with the smallest probabilities and combine those into a new subtree. Remove the original symbols/subtrees from the list, and add the new subtree to the list.
- Repeat until all of the elements are combined.

