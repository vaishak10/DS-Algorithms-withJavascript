function findLCS(str1,str2) {

    let str1Array = str1.split('');
    let str2Array = str2.split('');
    let resultArray = [];

    str1Array = Array.from(new Set(str1Array));
    str2Array = Array.from(new Set(str2Array));

    for(let i=0; i<str1Array.length; i++) {
        if(str2Array.includes(str1Array[i])) {
           resultArray.push(str1Array[i]);
        }
    }

    return resultArray.length;
}

console.log(findLCS('ABCDGH','AEDFHR')); //returns 3