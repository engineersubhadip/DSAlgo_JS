function custom(arr,refEle)
{ 
    // TC : O(N**2) and SC : O(1)

    let i = 0;
    let count = 0;

    while (i < arr.length)
    {
        let j = i+1;
        let k = arr.length-1;
        while (j < k)
        {
            if (arr[i] + arr[j] + arr[k] <= refEle)
            {
                count += (k - j);
                j += 1;
            }
            else if (arr[i] + arr[j] + arr[k] > refEle)
            {
                k -= 1;
            }
        }
        i += 1;
    }
    return count;
}

// TC : O(N**2 * logN)  and SC : O(1)


let arr = [2, 4, 3, 2];
let res = [];
let B = 3;

arr.sort((a,b) => a-b);

let left = arr[0]+arr[1]+arr[2];
let right = arr[arr.length-1] + arr[arr.length-2] + arr[arr.length-3];
let ans = undefined;

while (left <= right)
{
    let mid = Math.floor((left + (right-left)/2));
    let runCount = custom(arr,mid);

    if (runCount >= B)
    {
        ans = mid;
        right = mid - 1;
    }
    else
    {
        left = mid + 1;
    }
}

console.log(ans);