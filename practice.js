function recursion(num)
{
    if (num === 1)
    {
        console.log(num);
        return;
    }
    console.log(num);
    recursion(num-1);
}

recursion(5);