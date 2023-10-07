let A = "acbac";
let B = "ac";

let array = new Array(A.length+2).fill(0);
let mod = 1e9+7;
array[0] = 1;
array[1] = 29;

for (let i=2; i<=A.length; i++){
    array[i] = (array[i-1]*29) % mod;
}

let hB = 0;

for (let i=0; i<B.length; i++){
    let asciiValue = B[i].charCodeAt(0);
    hB += (asciiValue * array[i]);
    hB %= mod;
}

let start = 0;
let end = B.length;
let hA = 0;

for (let i=start; i<end; i++){
    let asciiValue = A[i].charCodeAt(0);
    hA +=( asciiValue * array[i]);
    hA %= mod;
}

let count = 0;

if (hB == hA){
    count+=1;
}

start = 1;

while (end < A.length){
    let removedAsciiValue = A[start-1].charCodeAt(0);
    let removedValue = (removedAsciiValue * array[start-1]) % mod;
    let incomingAsciiValue = A[end].charCodeAt(0);
    let incomingValue = (incomingAsciiValue * array[end]) % mod;

    hA = (hA - removedValue + incomingValue) % mod;

    if (hA < 0){
        hA += mod;
    }
    hB = (hB * 29) % mod;

    if (hA == hB){
        count+=1;
    }
    start+=1;
    end+=1;
}

console.log(count);