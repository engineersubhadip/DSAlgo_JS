let arr = [-3,-2,4];

let minSum = 1e9+7;
let runSum = 0;

for (let i=0; i<arr.length; i++)
{
    if (runSum <= 0)
    {
        runSum += arr[i];
    }
    else
    {
        runSum = arr[i];
    }
    minSum = Math.min(minSum,runSum);
}

console.log(minSum);