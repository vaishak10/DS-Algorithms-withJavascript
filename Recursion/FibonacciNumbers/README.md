# Fibonacci Numbers

In mathematics, the Fibonacci numbers are the numbers in the following integer sequence, called the Fibonacci sequence, and characterized by the fact that every number after the first two is the sum of the two preceding ones:

`0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...`

## Complexity

Time Complexity for generate fibonacci series using recursion is `O(2^n)`. 

To know more about calculating time complexity please do refer [fibonacci-series-complexity](https://syedtousifahmed.medium.com/fibonacci-iterative-vs-recursive-5182d7783055)

## Tracing Fibonacci numbers with an example

Let's generate a fibonacci series upto 5 numbers. `i.e., fibonacciNumbers(5), where n = 5 `<br>

```
if (n (5) === 1) --> False
else 
if (n (5) === 2) --> False
else 
s = fibonacciNumbers(n(5) - 1) = fibonacciNumbers(4)
(s = [0,1,1,2])                     ^   |
(s.push(s[3](2) + s[2](1)) = 3))    |   |
return s ([0,1,1,2,3])              |   |
|                                   |   V
|                                   |   if (n (4) === 1) --> False
|                                   |   else 
|                                   |   if (n (4) === 2) --> False
|                                   |  else  
|                                   |  s = fibonacciNumbers(n(4) - 1) = fibonacciNumbers(3)
|                                   |  (s=[0,1,1])                           ^  |
|                                   |  s.push(s[2](1) + s[1](1) = 2)         |  |
|                                    --* return s ([0,1,1,2])                |  V
|                                                                            |   if (n (3) === 1) --> False
|                                                                            |   else 
|                                                                            |   if (n (3) === 2) --> False
|                                                                            |
|                                                                            |   else
|                                                                            |   s = fibonacciNumbers(n(3) - 1) = fibonacciNumbers(2) <-----------
|                                                                            |   (s=[0,1])                                   |                    |
|                                                                            |   s.push(s[1](1) + s[0](0) = 1).              |                    |            
|                                                                            --* return s ([0,1,1])                          |                    |
|                                                                                                                            |                    |
|                                                                                                                            V                    |
|                                                                                                                       if (n (2) === 1)-->False  |
|                                                                                                                       else                      |
V                                                                                                                       if (n (2) === 2)-->True   |
fibonacciNumbers(5) = [0,1,1,2,3];                                                                                      return [0,1] *------------
```

## Visualizations of fibonacci numbers

[Fibonacci Series](https://algorithm-visualizer.org/dynamic-programming/fibonacci-sequence)