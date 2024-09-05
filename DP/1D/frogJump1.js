let arr = [10,20,30,10];

function dfs(arr,index)
{
    // base -> later

    if (index === 0)
    {
        return 0;
    }
    if (index < 0)
    {
        return Number(1e9+7);
    }

    let oneJump = Number(1e9+7);
    if (index > 0)
    {
        oneJump = dfs(arr,index-1) + Math.abs(arr[index] - arr[index-1]);
    }
    
    let twoJump = Number(1e9+7);
    if (index > 1)
    {
        twoJump = dfs(arr,index-2) + Math.abs(arr[index] - arr[index-2]);
    }
    return Math.min(oneJump,twoJump);
}

let ans = dfs(arr,arr.length-1);
console.log(ans);