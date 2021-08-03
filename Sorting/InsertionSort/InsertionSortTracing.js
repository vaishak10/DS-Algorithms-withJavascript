//Insertion Sort - Tracing 

/*consider a Array , array = [5, 3, 1, 2, 4, 8, 3, 8]

1st pass, 
    if array[0](5) > array[1](3)
    then, array[0],array[1] = array[1],array[0];

    After 1st pass , the array will look like [3, 5, 1, 2, 4, 8, 3, 8]

2nd pass,
    1. if array[1](5) > array[2](1)
       then, array[1],array[2] = array[2],array[1];

       array will look like [3, 1, 5, 2, 4, 8, 3, 8]
    
    2. if array[0](3) > array[1](1)
       then, array[0],array[1] = array[1],array[0];

       array will look like [1, 3, 5, 2, 4, 8, 3, 8]
    
    After 2nd pass , the array will look like [1, 3, 5, 2, 4, 8, 3, 8]

3rd pass,
    1. if array[2](5) > array[3](2)
       then, array[2],array[1] = array[1],array[2];

       array will look like [1, 3, 2, 5, 4, 8, 3, 8]
    
    2. if array[1](3) > array[2](2)
       then, array[2],array[1] = array[1],array[2];

       array will look like [1, 2, 3, 5, 4, 8, 3, 8]
    
    3. since, array[0](1) > array[1](2) is false, The values are not swapped
    
    After 3rd pass , the array will look like [1, 2, 3, 5, 4, 8, 3, 8]

4th pass,
    1. if array[3](5) > array[4](4)
       then, array[3],array[4] = array[4],array[3];

       array will look like [1, 2, 3, 4, 5, 8, 3, 8]
    
    2. since array[2](3) > array[3](4) is false
       
    after 4th pass , the array will look like [1, 2, 3, 4, 5, 8, 3, 8]

5th pass,
    1. if array[4](5) > array[5](8)
       since it is false, The loop gets terminated 
    
    after 5th pass, the array will look like [1, 2, 3, 4, 5, 8, 3, 8]

6th pass,
    1. if array[5](8) > array[6](3)
       then, array[5],array[6] = array[6],array[5];

       array will look like [1, 2, 3, 4, 5, 3, 8, 8]
    
    2. if array[4](5) > array[5](3)
       then, array[4],array[5] = array[5],array[4];

       array will look like [1, 2, 3, 4, 3, 5, 8, 8]
    
    3. if array[3](4) > array[4](3)
       then, array[3],array[4] = array[4],array[3];

       array will look like [1, 2, 3, 3, 4, 5, 8, 8]

    4. if array[2](3) > array[3](3)
       since the above condition is false, the loop gets terminated

    After 6th pass, the array will look like [1, 2, 3, 3, 4, 5, 8, 8]

7th pass,
     
     since array[6](8) > array[7](8) is false
     the loop gets terminated

    After the 7th and final pass the array will be 

    The sorted Array ---> [1, 2, 3, 3, 4, 5, 8, 8]


*/ 