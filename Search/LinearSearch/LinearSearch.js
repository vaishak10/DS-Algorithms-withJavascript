//Linear Search 

let linearSearch = (arr,element) => {
    let arrLength = arr.length;
    for (let i=0; i<arrLength; i++){
        if (arr[i] === element){
            return i;
        }
    }
    return -1;
};

let array = [3,2,5,6,8];
let isElementPos = linearSearch(array,3);
if (isElementPos !== -1){
    console.log(`The element ${array[isElementPos]} found at position ${isElementPos}`);
} else {
    console.log("Element not found");
}