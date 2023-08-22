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

// * We are using Continue above, because if we encounter a negative value, we will not initialize our
// * FinalStart and FinalEnd pointers as the negative element can never be part of our answer

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