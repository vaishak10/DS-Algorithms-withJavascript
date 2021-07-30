let selectionSort = arr => {
    let minPos;
    let newArray = arr.slice(); //Create a copy of original array
    for (let i=0; i<newArray.length - 1; i++){
        minPos = i;
        for (let j=i+1; j<newArray.length; j++){
            if (newArray[j]<newArray[minPos]){
                minPos = j;
            }
        }
        if (minPos !== i){
            [newArray[i],newArray[minPos]] = [newArray[minPos],newArray[i]];
        }
    }
    return newArray;
}

console.log(selectionSort([4,8,1,2,9,5,3,10,2]));