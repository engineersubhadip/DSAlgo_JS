function gcd(a,b)
{
    if (b === 0)
    {
        return a;
    }
    return gcd(b,a%b);
}

let ans = (12*8)/gcd(12,8);

console.log(ans);