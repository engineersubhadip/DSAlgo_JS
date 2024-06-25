function getMax(arr,refEle,tarCount)
{
    let left = 0;
    let right = 0;
    let maxLen = 0;
    let count = 0;

    while (right < arr.length)
    {
        if (arr[right] !== refEle)
        {
            count += 1;
        }

        while (left <= right && count > tarCount)
        {
            if (arr[left] !== refEle)
            {
                count -= 1;
            }
            left += 1;
        }

        if (left <= right && count <= tarCount)
        {
            let runLength = right - left + 1;
            maxLen = Math.max(maxLen,runLength);
        }
        right += 1;
    }

    return maxLen;
}


let str = "ABCBBBA";
let k = 2;

let mySet = new Set();
for (let i=0; i<str.length; i++)
{
    mySet.add(str[i]);
}

let maxLen = 0;

for (let myChar of mySet)
{
    let refChar = myChar;
    let runLen = getMax(str,refChar,k);
    maxLen = Math.max(maxLen,runLen);
}

console.log(maxLen);

