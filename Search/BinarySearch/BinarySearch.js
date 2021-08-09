//Binary Search 
//Note: Array from which an element has to be searched has to be sorted in order to perform binary Search

/*Binary Search Using Recursive Approach*/
let binarySearchRecursiveMethod = (arr,element,low=0,high=arr.length-1) => {
    let midPos = Math.floor((high+low)/2);
    if (high >= low){
        if(element === arr[midPos]){
            //return the position in the array where the search element was found
            return midPos; 
        } else if (element < arr[midPos]){
            // If element is less than the element at mid position , then make a recursive call
            //with low=0 and high=mid-1, so that element is being search only in the lower range elements.
            return binarySearchRecursiveMethod(arr,element,low,high=midPos-1);
        } else {
             // If element is greater than the element at mid position , then make a recursive call
            //with low=mid+1 and high as length of array, so that element is being search only in that higher range elements
            return binarySearchRecursiveMethod(arr,element,low=midPos+1,high);
        }
    } else {
        //this specifies that element has not been found at any position of the array
        return -1;
    }
};

let array = [2,3,4,5,6,7];
let elementPos = binarySearchRecursiveMethod(array,9);
if(elementPos !== -1){
    console.log(`Element ${array[elementPos]} found at position ${elementPos}`);
} else {
    console.log(`Element not found`);
} 

/* Binary search using iterative method 
let binarySearchIterativeMethod = (arr,element,low=0,high=arr.length-1) => {
    while (high >= low){
        let midPos = Math.floor((high+low)/2);
        if(element === arr[midPos]){
            //return the position in the array where the search element was found
            return midPos; 
        } else if (element < arr[midPos]){
            //The range will be set from low to midPos-1;
            high = midPos - 1;
        } else {
            //The range will be set from midPos+1 to high;
            low = midPos + 1;
        }
    }
    //this specifies that element has not been found at any position of the array
    return -1;
};

let array = [2,3,4,5,6,7];
let elementPos = binarySearchIterativeMethod(array,3);
if(elementPos !== -1){
    console.log(`Element ${array[elementPos]} found at position ${elementPos}`);
} else {
    console.log(`Element not found`);
}*/