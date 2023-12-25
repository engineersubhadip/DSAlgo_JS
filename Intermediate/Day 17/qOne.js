// Count of elements

// Given an array A of N integers. 
// Count the number of elements that have at least 1 elements greater than itself.

// 1 <= N <= 105
// 1 <= A[i] <= 109

const A = [3, 1, 2]

let maxElement = Math.max(...A);

let count = 0;

for (let i=0; i<A.length; i++){
    if (A[i] == maxElement){
        count+=1;
    }
}

console.log(A.length-count);