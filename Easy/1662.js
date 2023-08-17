const word1 = ["ab", "c"];
const word2 = ["a", "bc"];

let finalizedOne = "";

for (let i=0; i< word1.length; i++){
    finalizedOne += word1[i];
}

let finalizedTwo = "";

for (let i=0; i< word2.length; i++){
    finalizedTwo += word2[i];
}

if (finalizedOne.length != finalizedTwo.length){
    console.log(false);
}

let pointerOne = 0
let pointerTwo = 0

while ((pointerOne < finalizedOne.length) && (pointerTwo < finalizedTwo.length)){
    if (finalizedOne[pointerOne] != finalizedTwo[pointerTwo]){
        console.log(false);
    }
    pointerOne++;
    pointerTwo++;
}

console.log(true);