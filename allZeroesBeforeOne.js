// * TC : O(N) SC: O(1);

let array = [1,0,0,1,1,1,0,1,0,0,1];
let totalLength = array.length;

let zeroCount = 0;
let oneCount = 0;

for (let i=0; i<array.length; i++){
    if (array[i] == 0){
        zeroCount++;
    }
}

console.log("Before Converion");
console.log(array);

let zeroIndex = 0;
while (zeroCount > 0){
    array[zeroIndex] = 0;
    zeroCount--;
    zeroIndex++;
}

for (let i=zeroIndex; i<array.length; i++){
    array[i] = 1;
}

console.log("After Conversion");
console.log(array);