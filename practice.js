let arr = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1];
let k = 3;


let count = 0;
for (let i=0; i<arr.length; i++)
{
    if (arr[i] === 1)
    {
        count += 1;
    }
}

if (count === arr.length)
{
    return count;
}

let maxLen = 0;
let left = 0;
let right = 0;
let oneCount = 0;
let zeroCount = 0;

while (right < arr.length)
{
    if (arr[right] === 1) 
    {
        oneCount += 1;
    }
    else
    {
        zeroCount += 1;
    }

    while (left <= right && zeroCount > k)
    {
        if (arr[left] === 0)
        {
            zeroCount -= 1;
        }
        else
        {
            oneCount -= 1;
        }
        left += 1;
    }

    if (left <= right && zeroCount <= k && (oneCount + zeroCount > maxLen))
    {
        maxLen = oneCount + zeroCount;
    }
    right += 1;
}

console.log(maxLen);
