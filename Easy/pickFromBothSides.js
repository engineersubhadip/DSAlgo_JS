const A = [ 2, 3, -1, 4, 2, 1 ];
let B = 4;

let windowSize = A.length - B;

let totalSum = 0;
for (let i=0; i<A.length; i++){
    totalSum += A[i];
}

let maxAnswer = -1e9;
let runningAnswer = 0;
let start = 0;
let end = windowSize;

for (let i=start; i<end; i++){
    runningAnswer += A[i];
}

maxAnswer = Math.max(maxAnswer, totalSum-runningAnswer);

start = 1;

while (end < A.length){
    runningAnswer = runningAnswer - A[start-1] + A[end];
    maxAnswer = Math.max(maxAnswer, totalSum - runningAnswer);

    start++;
    end++;
}

console.log(maxAnswer);
