let num = 24;
let dp = new Array(num+1).fill(-1);

function dfs(num,dp)
{
    if (num <= 1)
    {
        dp[num] = num;
        return num;
    }

    if (dp[num] !== -1)
    {
        return dp[num];
    }

    let partOne = dfs(Math.floor(num/2),dp);
    let partTwo = dfs(Math.floor(num/3),dp);
    let partThree = dfs(Math.floor(num/4),dp);

    dp[num] = Math.max(num,partOne+partTwo+partThree);

    return dp[num];
}

dfs(num,dp);

console.log("dp",dp);

console.log(dp[num]);