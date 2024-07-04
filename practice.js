// Even Numbers whose SET Bit Count is Prime Numbers
// 1 to 100

let arr = [];
for (let i=1; i<=100; i++)
{
    arr.push(i);
}

function checkBit(num,bit)
{
    if ((num & (1 << bit)) === 0)
    {
        return false;
    }
    else
    {
        return true;
    }
}

function isPrime(num)
{
    if (num <= 1)
    {
        return false;
    }
    for (let i=2; i*i <= num ; i++)
    {
        if (num % i === 0)
        {
            return false;
        }
    }
    return true;
}

let ans = [];

for (let i=0; i<arr.length; i++)
{
    if (arr[i] % 2 === 0)
    {
        let runCount = 0;
        for (let j=0; j<=31; j++)
        {
            let res = checkBit(arr[i],j);
            if (res)
            {
                runCount += 1;
            }
        }
        let primeStatus = isPrime(runCount);
        if (primeStatus)
        {
            ans.push(arr[i]);
        }
    }
}

console.log(ans);