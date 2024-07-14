let arr = [3, 4, 5];

if (arr.length === 0)
{
    console.log([]);
}

let pfArr = new Array(arr.length).fill(0);
pfArr[0] = arr[0];

for (let i=1; i<arr.length; i++)
{
    pfArr[i] = pfArr[i-1] * arr[i];
}

let sfArr = new Array(arr.length).fill(0);
sfArr[sfArr.length-1] = arr[arr.length-1];

for (let i=arr.length-2; i>=0; i--)
{
    sfArr[i] = sfArr[i+1] * arr[i];
}

let res = [];

for (let i=0; i<arr.length; i++)
{
    if (i === 0)
    {
        res.push(sfArr[i+1]);
    }
    else if (i === arr.length-1)
    {
        res.push(pfArr[i-1]);
    }
    else
    {
        res.push(pfArr[i-1] * sfArr[i+1]);
    }
}

console.log(res);