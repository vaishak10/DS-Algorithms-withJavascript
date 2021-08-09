# Quicksort

Quicksort is a divide and conquer algorithm.

Quicksort first divides a large array into two smaller sub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays

The steps are:

<ul> 
<li>Pick an element, called a pivot, from the array.</li>
<li>Partitioning: reorder the array so that all elements with values less than the pivot come before the pivot, while all
elements with values greater than the pivot come after it (equal values can go either way).</li>
<li>After this partitioning, the pivot is in its final position. This is called the partition operation.</li>
<li> Recursively apply the above steps to the sub-array of elements with smaller values and separately to the
sub-array of elements with greater values.</li>
</ul>

## Approach

1. Divide step: Choose an item p (known as the pivot)
2. Then partition the items of a[i..j] into three parts: a[i..m-1], a[m], and a[m+1..j].
3. a[i..m-1] (possibly empty) contains items that are smaller than p.
4. a[m] is the pivot p, i.e. index m is the correct position for p in the sorted order of array a.
5. a[m+1..j] (possibly empty) contains items that are greater than or equal to p.
6. Then, recursively sort the two parts.

## Real time example of working with Quick sort

Try Quick Sort on example array [27, 38, 12, 39, 27, 16]. We shall elaborate the first partition step as follows:
1. We set p = a[0] = 27.
2. We set a[1] = 38 as part of S2 so S1 = {} and S2 = {38}.
3. We swap a[1] = 38 with a[2] = 12 so S1 = {12} and S2 = {38}.
4. We set a[3] = 39 and later a[4] = 27 as part of S2 so S1 = {12} and S2 = {38,39,27}.
5. We swap a[2] = 38 with a[5] = 16 so S1 = {12,16} and S2 = {39,27,38}.
6. We swap p = a[0] = 27 with a[2] = 16 so S1 = {16,12}, p = {27}, and S2 = {39,27,38}.

After this, a[2] = 27 is guaranteed to be sorted and now Quick Sort recursively sorts the left side a[0..1] first and later recursively sorts the right side a[3..5].

## Animated visualization of the Quicksort algorithm.

Note: The horizontal lines are pivot values.

![Quicksort](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)

## Complexity

| Name                  | Best            | Average             | Worst               |
| --------------------- | :-------------: | :-----------------: | :-----------------: |
| **Quick sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n<sup>2</sup>       |

## Visualizations of Quicksort algorithm.

- [Algorithm-visualizer](https://algorithm-visualizer.org/divide-and-conquer/quicksort)
- [Visualgo](https://visualgo.net/en/sorting?slide=12)
