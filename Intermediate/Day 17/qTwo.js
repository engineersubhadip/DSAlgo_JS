// Given an array A and an integer B. A pair(i, j) in the array is a good pair if i != j 
// and (A[i] + A[j] == B). Check if any good pair exist or not.

let count = 0;

for (let i=0; i<A.length; i++){
    for (let j=i+1; j<A.length; j++){
        if (A[i]+A[j] == B){
            return 1;
        }
    }
}

return 0