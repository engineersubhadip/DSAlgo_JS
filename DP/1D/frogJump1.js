let arr = [10,20,30,10];

function dfs(arr,index,dp)
{
    // base :-

    if (index === 0)
    {
        return 0;
    }
    if (index < 0)
    {
        return Number(1e9+7);
    }

    if (dp[index] !== -1)
    {
        return dp[index];
    }

    let oneJump = Number(1e9+7);
    if (index > 0)
    {
        oneJump = dfs(arr,index-1,dp) + Math.abs(arr[index] - arr[index-1]);
    }

    let twoJump = Number(1e9+7);
    if (index > 1)
    {
        twoJump = dfs(arr,index-2,dp) + Math.abs(arr[index] - arr[index-2]);
    }

    dp[index] = Math.min(oneJump,twoJump);
    return dp[index];
}

let dp = new Array(arr.length).fill(-1);
dp[0] = 0;

dfs(arr,arr.length-1,dp);
console.log("dp",dp);
console.log(dp[arr.length-1]);