// Count number of AG Subsequence:-

let A = "GAB";

let gCount = 0;

for (let i=0; i<A.length; i++){
    if (A[i] === "G"){
        gCount++;
    }
}

let subsequenceCount = 0;

for (let i=0; i<A.length; i++){
    if (A[i] === "G"){
        gCount--;
    }else if (A[i] === "A"){
        subsequenceCount += gCount;
    }
}

console.log(subsequenceCount);



