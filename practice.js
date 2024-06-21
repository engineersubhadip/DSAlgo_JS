let arr = [7,7,7,7,7,7,7];
let ans = undefined;
let maxLength = 0;

function backtracking(runArr,index,lastSeen)
{
    if (index >= arr.length)
    {
        if (runArr.length > maxLength)
        {
            let temp = [...runArr];
            maxLength = temp.length;
            ans = temp;
        }
        return;
    }

    // Take :-
    if (lastSeen < arr[index])
    {
        runArr.push(arr[index]);
        backtracking(runArr,index+1,arr[index]);
        runArr.pop();
    }

    // Not Take :-
    backtracking(runArr,index+1,lastSeen);
}

backtracking([],0,-1e9+7);

console.log("ans",ans,"maxLength",maxLength);