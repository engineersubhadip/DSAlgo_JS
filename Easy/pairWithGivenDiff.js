// Given an one-dimensional unsorted array A containing N integers.

// You are also given an integer B, find if there exists a pair of elements in the array whose difference is B.

// Return 1 if any such pair exists else return 0.

// Approach -01: TC:O(NlogN); SC: O(1);

const A = [-100, 20, 80];
let B = 9;

let hashmap = new Map();
A.sort((a,b) => a-b);

let iPointer = 0;
let jPointer = 0;

let flag = 0;

while (iPointer < A.length && jPointer < A.length){
    if (A[jPointer] - A[iPointer] === B && iPointer !== jPointer){
        flag = 1;
        break;
    }else if(A[jPointer] - A[iPointer] <= B){
        jPointer++;
    }else{
        iPointer++;
    }
}

console.log(flag);
