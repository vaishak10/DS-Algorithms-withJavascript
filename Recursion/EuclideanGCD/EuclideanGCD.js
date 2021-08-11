// Implementation of Euclidean GCD 

/*Recursive Approach*/
let euclideanGCD = (first,second) => {
    if (second === 0) {
        return first;
    } else {
        return euclideanGCD(second,first%second);
    }
}

console.log(euclideanGCD(20,30));

/*Iterative Approach
let euclideanGCDIterative = (first,second) => {
    while (second !== 0) {
        const temp = second;
        second = first % second;
        first = temp;
    }
    return first;
};
console.log(euclideanGCDIterative(20,30));*/
