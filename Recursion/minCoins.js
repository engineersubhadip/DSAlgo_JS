function recursion(num)
{
    if (num === 0)
    {
        return 0;
    }

    let call1 = recursion(Math.floor(num/2));
    let call2 = recursion(Math.floor(num/3));
    let call3 = recursion(Math.floor(num/4));

    let runCall = call1+call2+call3;
    
    return Math.max(num,runCall);
}

let ans = recursion(24);

console.log(ans);