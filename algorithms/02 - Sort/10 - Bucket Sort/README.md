Bucket sort can be exceptionally fast because of the way elements are assigned to buckets, typically using an array where the index is the value. This means that more auxiliary memory is required for the buckets at the cost of running time than more comparison sorts. It runs in O(n+k) time in the average case where n*n* is the number of elements to be sorted and k*k* is the number of buckets.

![img](https://www.growingwiththeweb.com/images/2015/06/29/bucket-sort.svg)Bucket sort moves elements to buckets, then sorts the buckets

While bucket sort is a distribution sort, it typically uses a comparison sort to sort the buckets after they have been allocated.



对于N个待排数据，M个桶，平均每个桶[N/M]个数据的桶排序平均[时间复杂度](https://baike.baidu.com/item/时间复杂度)为：

O(N)+O(M*(N/M)*log(N/M))=O(N+N*(logN-logM))=O(N+N*logN-N*logM)

当N=M时，即极限情况下每个桶只有一个数据时。桶排序的最好效率能够达到O(N)。

**总结：**桶排序的平均[时间复杂度](https://baike.baidu.com/item/时间复杂度)为线性的O(N+C)，其中C=N*(logN-logM)。如果相对于同样的N，桶数量M越大，其效率越高，最好的[时间复杂度](https://baike.baidu.com/item/时间复杂度)达到O(N)。当然桶排序的[空间复杂度](https://baike.baidu.com/item/空间复杂度)为O(N+M)，如果输入数据非常庞大，而桶的数量也非常多，则空间代价无疑是昂贵的。此外，桶排序是稳定的

## Complexity

| Time       |           |              | Space              |
| ---------- | --------- | ------------ | ------------------ |
| Worst case | Best case | Average case | Worst case         |
| O(n^2)     | O(n + k)  | O(n + k)     | O(n + k) auxiliary |

## When it’s fast

Bucket sort’s best case occurs when the data being sorted can be distributed between the buckets perfectly. If the values are sparsely allocated over the possible value range, a larger bucket size is better since the buckets will likely be more evenly distributed. An example of this is `[2303, 33, 1044]`, if buckets can only contain 5 different values then for this example 461 buckets would need to be initialised. A bucket size of 200-1000 would be much more reasonable.

The inverse of this is also true; a densely allocated array like `[103, 99, 119, 112, 111]` performs best when buckets are as small as possible.

Bucket sort is an ideal algorithm choice when:

- The additional O(n + k) memory usage is not an issue
- Elements are expected to be fairly evenly distributed

## When it’s slow

Bucket sort performs at its worst, O(n^2), when all elements at allocated to the same bucket. Since individual buckets are sorted using another algorithm, if only a single bucket needs to be sorted, bucket sort will take on the complexity of the inner sorting algorithm.

This depends on the individual implementation though and can be mitigated. For example a bucket sort algorithm could be made to work with large bucket sizes by using [insertion sort](https://www.growingwiththeweb.com/2012/11/algorithm-insertion-sort.html) on small buckets (due to its low overhead), and [merge sort](https://www.growingwiththeweb.com/2012/11/algorithm-merge-sort.html) or [quicksort](https://www.growingwiththeweb.com/2012/12/algorithm-quicksort.html) on larger buckets.