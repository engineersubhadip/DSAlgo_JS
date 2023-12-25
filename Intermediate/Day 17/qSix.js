// You are given an integer array A. 
// You have to find the second largest element/value in the array 
// or report that no such element exists.

let A = [2, 1, 2, 6, 3, 6, 4];

let maxElement = Math.max(...A);

let secondLargest = -1;

for (let i=0; i<A.length; i++){
    if (A[i] > secondLargest && A[i] < maxElement){
        secondLargest = A[i];
    }
}

console.log(secondLargest);