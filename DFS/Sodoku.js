let mat = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];


let ans = [];

function customCheck(mat,currRow,currCol,tarNum)
{
let row = mat.length;
let col = mat[0].length;

// Checking in the current Row :- Horizontally
for (let j=0; j<col; j++)
{
    if (mat[currRow][j] === tarNum)
    {
        return false;
    }
}

// Checking in the current Col :- Vertically
for (let i=0; i<row; i++)
{
    if (mat[i][currCol] === tarNum)
    {
        return false;
    }
}

// Checking in the Submatrix :-
for (let i=0; i<=8; i++)
{
    let subMatRow = (3 * Math.floor(currRow/3)) + Math.floor(i/3);
    let subMatCol = (3 * Math.floor(currCol/3)) + (i % 3);
    if (mat[subMatRow][subMatCol] === tarNum)
    {
        return false;
    }
}

return true;
}



let row = mat.length;
let col = mat[0].length;

function backtracking(mat,row,col)
{

    for (let i=0; i<row; i++)
    {
        for (let j=0; j<col; j++)
        {

            if (mat[i][j] === ".")
            {
                for (let num=1; num<=9; num++)
                {
                    let status = customCheck(mat,i,j,num);
                    if (status)
                    {
                        mat[i][j] = `${num}`;
                        backtracking(mat,row,col)
                        mat[i][j] = ".";
                    }
                }
            }
        }
    }
    return;
}

ans = [];

backtracking(mat,row,col);
console.log(mat);
// console.log(mat);
// console.log(ans);