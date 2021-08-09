// Quick sort implementation

let quickSort = arr => {
    let newArray = arr.slice();
    let length = newArray.length;

    if(length <= 1){
        return newArray;
    }
    
    let pivot = newArray[0];
    let greater = [];
    let lesser = [];

    for(let i=1; i<length; i++){
        if (pivot < newArray[i]) {
            greater.push(newArray[i]);
        } else {
            lesser.push(newArray[i]);
        }
    }

    let sorted = quickSort(lesser);
    sorted.push(pivot);
    sorted = sorted.concat(quickSort(greater));

    return sorted;
};

console.log(quickSort([3,6,1,2,9,4]));