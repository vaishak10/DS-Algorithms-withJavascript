# Selection Sort

Selection Sort is one among the 3 (others including Insertion Sort and Bubble Sort) comparison-based sorting algorithms.
It has O(N^2) time complexity, making it inefficient on large lists, and generally performs worse than the similar insertion sort.
Selection sort is noted for its simplicity, and it has performance advantages over more complicated algorithms in certain situations, particularly where auxiliary memory(or external memory) is limited.
Selection sort is based on Brute force method.


## Approach:

1. Find the smallest element in the array and exchange it with the element in the first position.
2. Find the second smallest element in the array and exchange it with the element in the second position.
3. Continue this process until the array is sorted.

## Complexity

| Name                  | Best            | Average             | Worst               | Memory    |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: |
| **Selection sort**    | n<sup>2</sup>   | n<sup>2</sup>       | n<sup>2</sup>       | 1         |

## Animation to represent the working of selection sort
![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif)

## For Visualizations on how selection sort works
- [algorithm-visualizer](https://algorithm-visualizer.org/brute-force/selection-sort)
- [visualgo](https://visualgo.net/en/sorting?slide=8)