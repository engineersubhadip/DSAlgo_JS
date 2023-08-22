// ! KADANE'S ALGORITHM

const A = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

let runningSum = 0;
let maxSum = -1e9;

for (let i=0; i<A.length; i++){
    runningSum += Number(A[i]);
    maxSum = Math.max(maxSum,runningSum);

    if (runningSum < 0){
        runningSum = 0;
    }
}

console.log(maxSum);