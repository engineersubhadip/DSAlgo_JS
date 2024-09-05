let arr = [10, 30, 40, 50, 20];
let k = 3;

function dfs(arr,index)
{
    if (index === 0)
    {
        return 0;
    }
    if (index < 0)
    {
        return 1e9+7;
    }

    let minCost = 1e9+7;

    for(let i=1; i<=k; i++)
    {
        let runCost = 1e9+7;
        if (index >= i)
        {
            runCost = dfs(arr,index-i) + Math.abs(arr[index] - arr[index-i]);
        }
        minCost = Math.min(minCost,runCost);
    }

    return minCost;
}

let ans = dfs(arr,arr.length-1);

console.log("ans",ans);