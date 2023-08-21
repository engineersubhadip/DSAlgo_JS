//* You are given an array A of N integers and an integer B.
//? Count the number of pairs (i,j) such that A[i] - A[j] = B and i ≠ j.
//! Since the answer can be very large, return the remainder after dividing the count with 109+7.

// * TC: O(NlogN); SC: O(1)

const A = [3, 5, 1, 2];
let B = 4;
let mod = 1e9+7;

A.sort((a,b) => a-b);

let count = 0;

let i = 0;
let j = 0;

while (i < A.length && j < A.length){

    if (A[j]-A[i] === B){
        let run_i = i;
        let run_i_count = 0;

        while (run_i < A.length && A[run_i] === A[i]){
            run_i_count++;
            run_i++;
        }

        let run_j = j;
        let run_j_count = 0;

        while (run_j < A.length && A[run_j] === A[j]){
            run_j_count++;
            run_j++;
        }

        count += (run_i_count * run_j_count);
        i = run_i;
        j = run_j;

    }else if (A[j]- A[i] <= B){
        j++;

    }else{
        i++;
    }
}
console.log(count);

