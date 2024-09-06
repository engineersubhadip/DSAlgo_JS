let arr = [[1,1],[2,2],[3,3],[4,4],[5,5]];


function dfs(arr,index,dp)
{
    if (index === arr.length-1)
    {
        return dp[index];
    }
    if (index >= arr.length)
    {
        return 0;
    }
    if (dp[index] !== -1)
    {
        return dp[index];
    }

    // solve :-
    let solve = arr[index][0] + dfs(arr,index+arr[index][1]+1,dp);
    let notSolve = dfs(arr,index+1,dp);

    dp[index] = Math.max(solve,notSolve);

    return dp[index];
}


let dp = new Array(arr.length).fill(-1);
dp[arr.length-1] = arr[arr.length-1][0];

dfs(arr,0,dp);

console.log(Math.max(...dp));