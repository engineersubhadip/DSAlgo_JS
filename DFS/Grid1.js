function dfs(rowNum,row,colNum,col,visitedArr,mat,refEle)
{
    if (rowNum < 0 || colNum < 0 || rowNum >= row || colNum >= col || visitedArr[rowNum][colNum] === true)
    {
        return 0;
    }
    if (mat[rowNum][colNum] <= refEle)
    {
        return 0;
    }
    
    visitedArr[rowNum][colNum] = true;
    
    let down = dfs(rowNum+1,row,colNum,col,visitedArr,mat,mat[rowNum][colNum]);
    let left = dfs(rowNum,row,colNum-1,col,visitedArr,mat,mat[rowNum][colNum]);
    let right = dfs(rowNum,row,colNum+1,col,visitedArr,mat,mat[rowNum][colNum]);
    let up = dfs(rowNum-1,row,colNum,col,visitedArr,mat,mat[rowNum][colNum]);
    
    visitedArr[rowNum][colNum] = false;
    
    let arr = [down,left,right,up];
    
    let runMax = Math.max(...arr);
    
    return runMax + 1;
}



let mat = [[9,9,4],[6,6,8],[2,1,1]];

let row = mat.length;
let col = mat[0].length;

let visitedArr = [];
for (let i=0; i<row; i++)
{
    let runArr = new Array(col).fill(false);
    visitedArr.push(runArr);
}


let maxLength = 0;


for (let i=0; i<row; i++)
{
    for (let j=0; j<col; j++)
    {
        let runLength = dfs(i,row,j,col,visitedArr,mat,-1);
        maxLength = Math.max(maxLength,runLength);
    }
}

console.log(maxLength);
