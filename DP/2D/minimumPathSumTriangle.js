let mat = [[-10]];

let row = mat.length;

let minVal = 1e9+7;

function dfs(mat,currRow,currCol,runSum)
{
    if (currRow >= row)
    {
        minVal = Math.min(minVal,runSum);
        return;
    }

    runSum += mat[currRow][currCol];

    let south = dfs(mat,currRow+1,currCol,runSum);

    let southEast = dfs(mat,currRow+1,currCol+1,runSum);

    runSum -= mat[currRow][currCol];
}


dfs(mat,0,0,0);

console.log(minVal);