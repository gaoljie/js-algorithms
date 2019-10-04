# Counting Sort

In computer science, **counting sort** is an algorithm for sorting a collection of objects according to keys that are small integers; that is, it is an integer sorting algorithm. It operates by counting the number of objects that have each distinct key value, and using arithmetic on those counts to determine the positions of each key value in the output sequence. Its running time is linear in the number of items and the difference between the maximum and minimum key values, so it is only suitable for direct use in situations where the variation in keys is not significantly greater than the number of items. However, it is often used as a subroutine in another sorting algorithm, radix sort, that can handle larger keys more efficiently.

Because counting sort uses key values as indexes into an array, it is not a comparison sort, and the `Ω(n log n)` lower bound for comparison sorting does not apply to it. Bucket sort may be used for many of the same tasks as counting sort, with a similar time analysis; however, compared to counting sort, bucket sort requires linked lists, dynamic arrays or a large amount of preallocated memory to hold the sets of items within each bucket, whereas counting sort instead stores a single number (the count of items) per bucket.

Counting sorting works best when the range of numbers for each array element is very small.

## Algorithm

**Step I**

In first step we calculate the count of all the elements of the input array `A`. Then Store the result in the count array `C`. The way we count is depicted below.

[![Counting Sort](https://camo.githubusercontent.com/2b73c553a6727431db8efbd2db58085165d6034f/68747470733a2f2f332e62702e626c6f6773706f742e636f6d2f2d6a4a63686c7931426b54632f574c4771434644647643492f41414141414141414148412f6c756c6a416c7a3270744d6e64495a4e48304b4c545475514d4e73667a44654651434c63422f73313630302f43536f72745570646174656453746570492e676966)](https://camo.githubusercontent.com/2b73c553a6727431db8efbd2db58085165d6034f/68747470733a2f2f332e62702e626c6f6773706f742e636f6d2f2d6a4a63686c7931426b54632f574c4771434644647643492f41414141414141414148412f6c756c6a416c7a3270744d6e64495a4e48304b4c545475514d4e73667a44654651434c63422f73313630302f43536f72745570646174656453746570492e676966)

**Step II**

In second step we calculate how many elements exist in the input array `A` which are less than or equals for the given index. `Ci` = numbers of elements less than or equals to `i` in input array.

[![Counting Sort](https://camo.githubusercontent.com/795f31df7c96d3ecfe49e1d32915bd3732fcc621/68747470733a2f2f312e62702e626c6f6773706f742e636f6d2f2d317646752d5649526139592f574c4847755a6b644633492f41414141414141414148732f386a4b7532646251656534617039786c56634e73494c72636c7177305578415641434c63422f73313630302f537465702d49492e706e67)](https://camo.githubusercontent.com/795f31df7c96d3ecfe49e1d32915bd3732fcc621/68747470733a2f2f312e62702e626c6f6773706f742e636f6d2f2d317646752d5649526139592f574c4847755a6b644633492f41414141414141414148732f386a4b7532646251656534617039786c56634e73494c72636c7177305578415641434c63422f73313630302f537465702d49492e706e67)

**Step III**

In this step we place the input array `A` element at sorted position by taking help of constructed count array `C` ,i.e what we constructed in step two. We used the result array `B` to store the sorted elements. Here we handled the index of `B` start from zero.

[![Counting Sort](https://camo.githubusercontent.com/02f9a6cfab70c3bdc81dda16112638071b688710/68747470733a2f2f312e62702e626c6f6773706f742e636f6d2f2d785071796c6e67714153592f574c47713370396e3976492f414141414141414141484d2f4a48647458416b4a593877597a444d4258787161726a6d687050684d3075384d41434c63422f73313630302f526573756c74417272617943532e676966)](https://camo.githubusercontent.com/02f9a6cfab70c3bdc81dda16112638071b688710/68747470733a2f2f312e62702e626c6f6773706f742e636f6d2f2d785071796c6e67714153592f574c47713370396e3976492f414141414141414141484d2f4a48647458416b4a593877597a444d4258787161726a6d687050684d3075384d41434c63422f73313630302f526573756c74417272617943532e676966)

## Complexity

| Name              | Best  | Average | Worst | Memory | Stable | Comments                    |
| ----------------- | ----- | ------- | ----- | ------ | ------ | --------------------------- |
| **Counting sort** | n + r | n + r   | n + r | n + r  | Yes    | r - biggest number in array |

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Counting_sort)
- [YouTube](https://www.youtube.com/watch?v=OKd534EWcdk&index=61&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [EfficientAlgorithms](https://efficientalgorithms.blogspot.com/2016/09/lenear-sorting-counting-sort.html)