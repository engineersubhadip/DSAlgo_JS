let coins = [2];
let amount = 3;

function backtracking(totalAmount,dp)
{
    if (totalAmount  === 0)
    {
        return dp[totalAmount];
    }

    if (totalAmount < 0)
    {
        return 1e12+7;
    }
    if (dp[totalAmount] !== 1e12+7)
    {
        return dp[totalAmount];
    }

    let minSum = 1e12 + 7;

    for (let i=0; i<coins.length; i++)
    {
        if (totalAmount >= coins[i])
        {
            let currentTotal = 1 + backtracking(totalAmount-coins[i],dp);
            minSum = Math.min(minSum,currentTotal);
        }
    }
    dp[totalAmount] = minSum;

    return dp[totalAmount];
}


let dp = new Array(amount+1).fill(1e12+7);
dp[0] = 0;

backtracking(amount,dp);

// console.log(dp);
let ans = dp[amount];

if (ans >= 1e12+7)
{
    console.log(-1);
}
else
{
    console.log(ans);
}

