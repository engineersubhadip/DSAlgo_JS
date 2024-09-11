function dfs(arr,index,target)
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

    // take :-
    let take = false;
    if (arr[index] <= target)
    {
        take = dfs(arr,index+1,target-arr[index]);
    }

    // not take :-
    let notTake = false;
    notTake = dfs(arr,index+1,target);

    return take || notTake;
}

let arr = [12, 1, 61, 5, 9, 2];
let target = 33;

let ans = dfs(arr,0,target);

console.log(ans);

