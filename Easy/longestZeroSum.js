// Given an array A of N integers.
// Find the length of the longest subarray in the array which sums to zero.

const A = [9,-20,-11,-8,-4,2,-12,14,1];

let hashmap = new Map();
hashmap.set(0,-1);

let runningSum = 0;
let runningLength = 0;
let maxLength = 0;


for (let i=0; i< A.length; i++){
    runningSum += Number(A[i]);
    if (hashmap.has(runningSum)){
        runningLength = i- hashmap.get(runningSum);
        maxLength = Math.max(maxLength,runningLength);
    }

    if (hashmap.has(runningSum)){
        continue;
    }else{
        hashmap.set(runningSum,i);
    }
}

console.log(maxLength);

