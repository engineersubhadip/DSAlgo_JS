let mat = [[1,2,3],[4,5,6],[7,8,9]];

let row = mat.length;
let col = mat[0].length;

let dp = new Array();

for (let i=0; i<row; i++)
{
    let newArr = new Array(col).fill(-1);
    dp.push(newArr);
}

function dfs(mat,currRow,currCol,dp)
{
    if (currRow === 0 || currCol === 0)
    {
        return 1;
    }

    if (dp[currRow][currCol] !== -1)
    {
        dp[currRow][currCol];
    }
    // go top :-
    let top = dfs(mat,currRow-1,currCol,dp);

    // go left :-
    let left = dfs(mat,currRow,currCol-1,dp);

    dp[currRow][currCol] = top + left;

    return dp[currRow][currCol];
}

let ans = dfs(mat,row-1,col-1,dp);

console.log(dp[row-1][col-1]);
