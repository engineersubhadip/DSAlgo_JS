let arr = [[3,2],[4,3],[4,4],[2,5]];

let maxSum = 0;

function backtracking(arr,runSum,index)
{
    if (index >= arr.length)
    {
        maxSum = Math.max(maxSum,runSum);
        return;
    }

    // pick :-
    runSum += arr[index][0];
    // console.log("runSum Before",runSum);
    backtracking(arr,runSum,index+arr[index][1]+1);
    runSum -= arr[index][0];
    // console.log("runSum After",runSum);

    // not pick:-
    backtracking(arr,runSum,index+1);
}

backtracking(arr,0,0);

console.log(maxSum);