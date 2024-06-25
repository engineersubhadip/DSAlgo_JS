let arr = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1];
let k = 3;
let maxLen = 0;


for (let i=0; i<arr.length; i++)
{
    for (let j=i; j<arr.length; j++)
    {
        let runArr = [];
        for (let k=i; k<=j; k++)
        {
            runArr.push(arr[k]);
        }
        let runCount = 0;
        for (let g = 0; g<runArr.length; g++)
        {
            if (runArr[g] === 0)
            {
                runCount += 1;
            }
        }
        if (runCount <= k)
        {
            maxLen = Math.max(maxLen,runArr.length);
        }
    }
}

console.log(maxLen);