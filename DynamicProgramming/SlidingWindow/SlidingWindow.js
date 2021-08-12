//Implementation of sliding window

let slidingWindow = arr => {
    let sumsArray = [];
    for (let i=0; i<arr.length-2; i++){
        sumsArray.push(arr[i]+arr[i+1]+arr[i+2]);
    }
    console.log(sumsArray); //Before Sorting the sumsArray
    sumsArray = sumsArray.sort((a,b) => a-b);
    console.log(sumsArray); //After Sorting the sumsArray
    return sumsArray[sumsArray.length - 1]; //Return the last element from the sorted sumsArray.
}

console.log(slidingWindow([5,2,3,4,9,10,3,4,5,2,7]));

