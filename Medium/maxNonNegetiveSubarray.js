const A = [1, 2, 5, -7, 2, 3];

let runningSum = 0;
let maxSum = -1e9;
let startPoint = 0;
let endPoint = -1;
let finalStart = -1;
let finalEnd = -1;
let runningLength = 0;

for (let i=0; i<A.length;i++){
    if (A[i] >= 0){
        runningSum += Number(A[i]);
        endPoint = i;
    }else{
        runningSum = 0;
        startPoint = i+1;
        endPoint = i+1;
        continue;
    }

    if (runningSum > maxSum){
        maxSum = runningSum;
        finalStart = startPoint;
        finalEnd = endPoint;
        runningLength = finalEnd - finalStart;

    }else if (runningSum === maxSum){
        if (endPoint-startPoint > runningLength){
            finalStart = startPoint;
            finalEnd = endPoint;
            runningLength = endPoint-startPoint;
        }
    }
}

console.log(A.slice(finalStart,finalEnd+1));