# Binary Search 

Binary search, also known as half-interval search, logarithmic search, or binary chop, is a search algorithm **that finds the position of a target value within a sorted array**.

This searching algorithm is efficient than linear search as the time complexity is **O(log(n))** (since we divide the array into 2 halves).

A important point to keep in mind while using binary search is that , the array to search from has to be a sorted array.
Unlike the typical linear search. 

## Approach 
Binary search compares the target value to the middle element of the array.
1. if they are unequal, the half in which the target cannot lie is eliminated and the search continues on the remaining half until it is successful. 
2. If the search ends with the remaining half being empty, the target is not in the array.

## Animation to demonstrate the working of Binary Search
![Binary Search](https://upload.wikimedia.org/wikipedia/commons/8/83/Binary_Search_Depiction.svg)

## Complexity

**Time Complexity**: `O(log(n))` - since we split search area by two for every next iteration.

## Visual demonstrations of Binary Search 

- [Algorithm-visualizer](https://algorithm-visualizer.org/branch-and-bound/binary-search)