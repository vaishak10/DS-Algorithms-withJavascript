# Euclidean Greatest Common Divisor (GCD)

In mathematics, the Euclidean algorithm, or Euclid's algorithm, is an efficient method for computing the greatest common divisor (GCD) of two numbers, the largest number that divides both of them without leaving a remainder.

The Euclidean algorithm is based on the principle that the greatest common divisor of two numbers does not change if the larger number is replaced by its difference with the smaller number.<br>
For example, `21` is the GCD of `252` and `105` (as `252 = 21 × 12` and `105 = 21 × 5`), and the same number `21` is also the GCD of `105` and `252 − 105 = 147`.<br>
Since this replacement reduces the larger of the two numbers, repeating this process gives successively smaller pairs of numbers until the two numbers become equal. When that occurs, they are the GCD of the original two numbers.

## Time complexity

It is an efficient method for finding the GCD(Greatest  Common Divisor) of two integers. The time complexity of this algorithm is `O(log(min(a, b)))`. Recursively it can be expressed as:
`gcd(a, b) = gcd(b, a%b)`
where, a and b are two integers.

To know how to find out the time complexity of EuclideanGCD refer this [EuclideanGCD-Timecomplexity](https://www.geeksforgeeks.org/time-complexity-of-euclidean-algorithm/)

## Tracing EuclideanGCD with an example

Let's find the EuclideanGCD of 20 and 30 i.e., EuclideanGCD(20,30)

- Interative Approach
    
    ```
    first = 20;
    second = 30;

    while (second(30) !== 0) --> True
        temp = second(30);
        second = first(20) % second(30) = 20;
        first = temp(30);

    while (second(20) !== 0) --> True
        temp = second(20);
        second = first(30) % second(20) = 10;
        first = temp(20);

    while (second(10) !== 0) --> True
        temp = second(10);
        second = first(20) % second(10) = 10;
        first = temp(10);

    while (second(10) !== 0) --> True
        temp = second(10);
        second = first(10) % second(10) = 0;
        first = temp(10);

    while (second(0) !== 0) --> False

    return first(10) --> EuclideanGCD(20,30) = 10; 
    ```

- Recursive Approach
    
    ```
    first = 20;
    second = 30;

    if (second (30) === 0) --> False
    else
    return EuclideanGCD(second(30),first(20)%second(30) = 20) ------ > EuclideanGCD(20,30) = 10; 
                |                                     ^
                |                                     |
                V                                     | 
                first = 30;                           | 10
                second = 20;                          |
                if (second (20) === 0) --> False      |
                else         *--------------------------
                return EuclideanGCD(second(20),first(30)%second(20)=10) <--
                            |                                             |
                            |                                             |
                            V                                             | 10
                            first = 20;                                   |
                            second = 10;                                  |
                            if(second(10) === 0) --> False                |
                            else         *----------------------------------                            
                            return EuclideanGCD(second(10),first(20)%second(10)=10) <---
                                        |                                              |
                                        |                                              | 
                                        V                                              | 10
                                        first = 10;                                    | 
                                        second = 10;                                   |
                                        if(second(10) === 0) --> False                 |
                                        else        *-----------------------------------
                                        return EuclideanGCD(second(10),first(10)%second(10)=0)<----   
                                                    |                                             |
                                                    |                                             |
                                                    V                                             | 10
                                                    first = 10;                                   |
                                                    second = 0;                                   |      
                                                    if(second(0) === 0) -->True                   |
                                                        return first(10)   *-----------------------
    ```
## Visualizations of Euclidean GCD
  [Euclidean GCD](https://algorithm-visualizer.org/simple-recursive/euclidean-greatest-common-divisor)

      
