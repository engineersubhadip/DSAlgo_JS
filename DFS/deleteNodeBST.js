let A = 4;

A = Number(A);

// let ans = "";
function dfs(num)
{
    if (num === 1)
    {
        return "1";
    }

    // let res = dfs(num-1) +` `+`${num}`;
    let res = `${num}` + ` ` + dfs(num-1);
    return res;
}

let res = dfs(A);
console.log(res);