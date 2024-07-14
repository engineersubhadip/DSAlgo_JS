function moveZeroes(mat)
{
    
    let row = mat.length;
    let col = mat[0].length;
    
    let refRow = undefined;
    let refCol = undefined;
    
    for (let i=0; i<row; i++)
    {
        for (let j=0; j<col; j++)
        {
            if (mat[i][j] === 0)
            {
                console.log("Yes",i,j)
                refRow = i;
                refCol = j;
                break;
            }
        }
        if (refRow !== undefined)
        {
            break;
        }
    }

    if ((refRow === undefined && refCol === undefined) || (refRow === row-1 && refCol === -1))
    {
        return mat;
    }

    let currRow = refRow;
    let currCol = refCol;

    console.log("refRow",refRow);
    console.log("refCol",refCol);
    console.log("currRow",currRow);
    console.log("currCol",currCol);

    while (currRow < row)
    {
        if (mat[currRow][currCol] === 0 && mat[refRow][refCol] === 0)
        {
            currCol += 1;
        }
        else if (mat[currRow][currCol] !== 0 && mat[refRow][refCol] === 0)
        {
            // Do something;
            let temp = mat[currRow][currCol];
            mat[currRow][currCol] = mat[refRow][refCol];
            mat[refRow][refCol] = temp;

            currCol += 1;
            refCol += 1;
        }

        if (currCol === col)
        {
            currRow += 1;
            currCol = 0;
        }
        
        if (refCol === col)
        {
            refRow += 1;
            refCol = 0;
        }
    }

    return mat;
}



let mat = [[1,3,4,0,0,6] , [7,8,0,9,10,0] , [0,5,12,13,14,16] , [18,0,19,0,0,0] , [20,21,22,23,0,0] , [0,0,0,25,0,0]];

let ans = moveZeroes(mat);

console.log(ans);