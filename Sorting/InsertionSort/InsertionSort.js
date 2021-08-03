//Insertion Sort

let insertionSort = arr => {
    let arrLen = arr.length;
    let newArray = arr.slice();
    for (let i=1; i < arrLen; i++) {
        let j;
        const temp = newArray[i];
        for(j = i-1; j>=0 && (newArray[j] > temp); j--) {
            newArray[j+1] = newArray[j]
        }
        newArray[j+1] = temp;
    }
    return newArray;
}

console.log(insertionSort([5, 3, 1, 2, 4, 8, 3, 8]));