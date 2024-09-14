let arr = [1,2,3,5];

let sumTotal = arr.reduce(function(curr,acc){return curr+acc},0);

// if sumTotal is ODD return false

let target = sumTotal/2;

let dp = new Array();
for (let i=0; i<arr.length; i++)
{
    let newArr = new Array(target+1).fill(-1);
    dp.push(newArr);
}

function dfs(index,arr,target,dp)
{
    if (target === 0)
    {
        return true;
    }
    if (index >= arr.length)
    {
        if (target === 0)
        {
            return true;
        }
        return false;
    }
    if (dp[index][target] !== -1)
    {
        return dp[index][target];
    }

    let take = false;
    if (arr[index] <= target)
    {
        take = dfs(index+1,arr,target-arr[index],dp);
    }

    let notTake = false;
    notTake = dfs(index+1,arr,target,dp);

    dp[index][target] = take || notTake;

    return dp[index][target];
}

dfs(0,arr,target,dp);

console.log(dp[0][target]);