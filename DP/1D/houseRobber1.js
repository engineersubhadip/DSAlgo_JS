let arr = [74,37,82,1];

let max = -1e9+7;


function dfs(arr,index,dp)
{
    
    if (index === arr.length-1) // consider a scenario if there was a single element in array.
    // we would have picked it and not skipped it
    {
        console.log("index",index,"arr[index]",arr[index]);
        return arr[index];
    }

    if (index >= arr.length)
    {
        console.log("index",index,-1e9+7);
        return 0;
    }

    if (dp[index] !== -1)
    {
        console.log("dp[index]","index",index,"dp[index]",dp[index])
        return dp[index];
    }
    // Rob :-
    let rob = arr[index] + dfs(arr,index+2,dp);

    let notRob = dfs(arr,index+1,dp);

    dp[index] = Math.max(rob,notRob);

    console.log("index",index,"dp[index]",dp[index]);
    return dp[index];
}

let dp = new Array(arr.length).fill(-1);
dp[arr.length-1] = arr[arr.length-1];

dfs(arr,0,dp);

console.log(dp);
console.log(max);