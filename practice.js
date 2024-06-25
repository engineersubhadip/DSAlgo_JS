// Count all the Prime Factors of a Number

let num = 19;
let i = 2;
let ans = 0;

while (i * i <= num)
{
    if (num % i === 0)
    {
        ans += 1;
        while (num % i === 0)
        {
            num = Math.floor(num/i);
        }
    }
    i += 1;
}

if (num > 1)
{
    ans += 1;
}

console.log(ans);