const A = [5, 2, 1, 4];

// Calculation of Prefix Sum will give us access to Subarray Sum in a Range in O(1) TC
const prefixSum = [];

for (let i=0; i<A.length; i++){
    prefixSum.push(0);
}

prefixSum[0] = A[0];

for (let i=1; i<A.length; i++){
    prefixSum[i] = prefixSum[i-1]+A[i];
}

const array = [];

for (let i=0; i< A.length; i++){
    let runningSum = 0;
    for (let j=i; j< A.length; j++){
        if (i===0){
            runningSum = prefixSum[j];
        }else{
            runningSum = prefixSum[j] - prefixSum[i-1];
        }
        array.push(runningSum);
    }
}


// Sorting Subarray Sum in Descending Order:-
array.sort((a,b) => b-a);

console.log(array);

