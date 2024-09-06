let mat = [[1,2,3],[4,5,6],[7,8,9]];

let row = mat.length;
let col = mat[0].length;

function dfs(mat,currRow,currCol)
{
    if (currRow === 0 || currCol === 0)
    {
        return 1;
    }

    // go top :-
    let top = dfs(mat,currRow-1,currCol);

    // go left :-
    let left = dfs(mat,currRow,currCol-1);

    return top + left;
}

let ans = dfs(mat,row-1,col-1);

console.log(ans);
