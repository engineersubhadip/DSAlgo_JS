function recursion(arr,start,end)
{
    if (start >= end)
    {
        return true;
    }

    if (arr[start] !== arr[end])
    {
        return false;
    }
    return recursion(arr,start+1,end-1);
}

let ans = recursion("malayalam",0,"malaalam".length-1);

console.log(ans);