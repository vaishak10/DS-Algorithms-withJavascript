//1. Implementation using do while and for loops

let bubbleSort1 = arr => {
    let newArray = arr.slice();
    let arrayLength = newArray.length;
    let isSwapped = true;
    do{
        isSwapped = false;
        for (let i=1; i<arrayLength; i++){
            if(newArray[i-1] > newArray[i]){
                [newArray[i],newArray[i-1]] = [newArray[i-1],newArray[i]];
                isSwapped = true;
            }
        }
        arrayLength--;
    } while(isSwapped);
    return newArray;
};

console.log(bubbleSort1([3,6,1,2,9,4]));

//2. Implementation using while and for loops

/*let bubbleSort2 = arr => {
    let newArray = arr.slice();
    let arrayLength = newArray.length;
    let isSwapped = true;
    while(isSwapped){
        isSwapped = false;
        for(let i=0; i < arrayLength-1; i++){
            if(newArray[i] > newArray[i+1]) {
                [newArray[i],newArray[i+1]] = [newArray[i+1],newArray[i]];
                isSwapped = true;
            }
        }
    }
    return newArray;
}

console.log(bubbleSort2([3,6,10,2,9,4,5]));*/