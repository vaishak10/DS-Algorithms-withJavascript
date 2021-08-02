# Bubble Sort

Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order (ascending or descending arrangement). Bubble sort is based on Brute force method.

Bubble Sort is actually inefficient with its O(N^2) time complexity.

However, it can be terminated early, e.g. try Bubble Sort on the small sorted ascending example shown above [3, 6, 11, 25, 39] where it terminates in O(N) time.

***The improvement idea is simple***: If we go through the inner loop with no swapping at all, it means that the array is already sorted and we can stop Bubble Sort at that point.

## Approach

Given an array of N elements, Bubble Sort will:

1. Compare a pair of adjacent items (a, b)
2. Swap that pair if the items are out of order (in this case, when a > b)
3. Repeat Step 1 and 2 until we reach the end of array
4. By now, the largest item will be at the last position.
5. We then reduce N by 1 and repeat Step 1 until we have N = 1.

## Animation to demonstrate bubble sort
![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif)

## Calculating time complexity 

Comparison and swap require time that is bounded by a constant, let's call it c.
There are two nested loops in (the standard) Bubble Sort.

The outer loop runs for exactly N iterations. But the inner loop runs get shorter and shorter:

When i=0, (N−1) iterations, 
When i=1, (N−2) iterations,
...,
When i=(N−2), 1 iteration,
When i=(N−1), 0 iteration.

Thus, the total number of iterations = (N−1)+(N−2)+...+1+0 = N*(N−1)/2 (derivation).

Total time = c*N*(N−1)/2 = `O(N^2)`.

## Complexity

| Name                  | Best            | Average             | Worst               | Memory    |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: |
| **Bubble sort**       | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         |

## For Visualizations on how bubble sort works
- [algorithm-visualizer](https://algorithm-visualizer.org/brute-force/bubble-sort)
- [visualgo](https://visualgo.net/en/sorting?slide=7)