//Follows bottom-up approach

var climbStairs = function(n) {
    
    if (n === 1) {
        return 1;
    }
    
    if (n === 2) {
        return 2;
    }
    
    
    let previous = 1;
    let current = 1;
    let temp = 0;
    
    for (let i=1; i<n; i++) {
        temp = current;
        current = current + previous;
        previous = temp;
    }
    
    return current;
    
};

console.log(climbStairs(4)); //output: 5