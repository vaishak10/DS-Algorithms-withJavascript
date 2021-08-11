// Implementation of finding nth Factorial

var numbers = [1,0,0,0,0,0,0,0]; 
// numbers array is set as per user. Value at 0th position will be 1 since(0! = 1)

let nthFactorial = num => {
    if(num < 0) {
        return;
    }
    if(num === 0 || num === 1){
        return 1;
    }

    let factorial = num * nthFactorial(num-1);
    numbers[num-1] = factorial;
    return factorial;
}

console.log(nthFactorial(numbers.length));             
console.log(numbers);