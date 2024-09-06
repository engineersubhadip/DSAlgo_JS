let mat = [[1,2,3],[4,5,6],[7,8,9]];

let row = mat.length;
let col = mat[0].length;

let visited = new Array();

for (let i=0; i<row; i++)
{
    let newArr = new Array(col).fill(false);
    visited.push(newArr);
}

let ans = [];

function dfs(mat,runArr,currRow,currCol,visited)
{
    if (currRow >= row || currCol >= col || visited[currRow][currCol] === true)
    {
        return;
    }

    if (currRow === row-1 && currCol === col-1)
    {
        let temp = [...runArr];
        temp = temp.join("");
        ans.push(temp);
    }

    visited[currRow][currCol] = true;

    // go right :-
    runArr.push("R");
    dfs(mat,runArr,currRow,currCol+1,visited);
    runArr.pop();

    // go down :-
    runArr.push("D");
    dfs(mat,runArr,currRow+1,currCol,visited);
    runArr.pop();

    visited[currRow][currCol] = false;
}

dfs(mat,[],0,0,visited);

console.log(ans);
