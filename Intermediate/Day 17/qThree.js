// Given an array A of N integers and also given two integers B and C. 
// Reverse the elements of the array A within the given inclusive range [B, C].

let A = [1, 2, 3, 4, 5, 3, 7, 8];
let B = 2;
let C = 6;
let temp = undefined;

while (B < C){
    temp = A[B];
    A[B] = A[C];
    A[C] = temp;
    B+=1;
    C-=1;
}

console.log(A);