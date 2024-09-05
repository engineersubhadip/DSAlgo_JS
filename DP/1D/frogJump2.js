let arr = [10, 30, 40, 50, 20];
let k = 3;

function dfs(arr,index,dp)
{
    if (index === 0)
    {
        return 0;
    }
    if (index < 0)
    {
        return 1e9+7;
    }

    if (dp[index] !== -1)
    {
        return dp[index];
    }

    let minCost = 1e9+7;

    for(let i=1; i<=k; i++)
    {
        let runCost = 1e9+7;
        if (index >= i)
        {
            runCost = dfs(arr,index-i,dp) + Math.abs(arr[index] - arr[index-i]);
        }
        minCost = Math.min(minCost,runCost);
    }

    dp[index] = minCost;
    return dp[index];
}

let dp = new Array(arr.length).fill(-1);
dp[0] = 0;

dfs(arr,arr.length-1,dp);

console.log("dp",dp);
console.log(dp[arr.length-1]);