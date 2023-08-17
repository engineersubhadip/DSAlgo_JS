let sentence = "leetcode";

const array = []

for (let i=97; i<=122;i++){
    let charValue = String.fromCharCode(i);
    array.push(charValue);
}

for (let i=0; i<array.length;i++){
    if (! sentence.includes(array[i])){
        console.log(false);
        break;
    }
}
console.log(true);

