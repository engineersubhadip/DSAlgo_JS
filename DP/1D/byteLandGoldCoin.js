let num = 24;

function dfs(num)
{
    if (num <= 1)
    {
        return num;
    }

    let partOne = dfs(Math.floor(num/2));
    let partTwo = dfs(Math.floor(num/3));
    let partThree = dfs(Math.floor(num/4));

    return Math.max(num,partOne+partTwo+partThree);
}

let ans = dfs(num);

console.log(ans);