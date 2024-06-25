function recursion(num)
{
    if (num === 1)
    {
        console.log(num);
        return;
    }
    recursion(num-1);
    console.log(num);
}

recursion(5);