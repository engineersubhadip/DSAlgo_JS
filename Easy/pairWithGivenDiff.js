//* Given an one-dimensional unsorted array A containing N integers.

//?  You are also given an integer B, find if there exists a pair of elements in the array whose difference is B.

//? Return 1 if any such pair exists else return 0.

//! Approach -01: TC:O(NlogN); SC: O(1);

// const A = [-100, 20, 80];
// let B = 9;

// let hashmap = new Map();
// A.sort((a,b) => a-b);

// let iPointer = 0;
// let jPointer = 0;

// let flag = 0;

// while (iPointer < A.length && jPointer < A.length){
//     if (A[jPointer] - A[iPointer] === B && iPointer !== jPointer){
//         flag = 1;
//         break;
//     }else if(A[jPointer] - A[iPointer] <= B){
//         jPointer++;
//     }else{
//         iPointer++;
//     }
// }

// console.log(flag);

// ! Approach-02: TC:O(N); SC:O(N)

const A = [5, 10, 3, 2, 50, 80];
let B = 78;

let hashmap = new Map();

for (let i=0; i<A.length; i++){
    if (hashmap.has(A[i])){
        hashmap.set(A[i],hashmap.get(A[i])+1);
    }else{
        hashmap.set(A[i],1);
    }
}

let flag = false;

for (let i=0; i<A.length; i++){
    let first = A[i];
    let second = first-B;
    if (hashmap.has(second)){
        if (first === second){
            if (hashmap.get(second) > 1){
                flag = true;
                break;
            }
        }else{
            flag = true;
            break;
        }
    }
}

console.log(flag);
