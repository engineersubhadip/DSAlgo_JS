let arr = [1,5,11,5];

let sumTotal = arr.reduce(function(curr,acc){return curr+acc},0);

let target = sumTotal/2;

function backtracking(index,arr,target)
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

    let take = false;
    if (arr[index] <= target)
    {
        take = backtracking(index+1,arr,target-arr[index]);
    }
    let notTake = false;
    notTake = backtracking(index+1,arr,target);

    return take || notTake;
}

let ans = backtracking(0,arr,target);

console.log(ans);