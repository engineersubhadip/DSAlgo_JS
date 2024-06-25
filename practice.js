let A = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]];
let B = 2;

let row = A.length;
let col = A[0].length;

let currRow = 0;
let currCol = col-1;
let ans = 1e9+7;

while (currRow < row && currCol >= 0)
{
    if (A[currRow][currCol] === B)
    {
        let run = currCol;
        while (run >= 0 && A[currRow][run] === B)
        {
            run -= 1;
        }
        run += 1;
        let start = currRow+1;
        let end = currCol + 1;
        let runAns = (start * 1009) + end;
        ans = Math.min(ans,runAns);
        run -= 1;
        currCol = run;
    }
    else if (A[currRow][currCol] < B)
    {
        currRow += 1;
    }
    else if (A[currRow][currCol] > B)
    {
        currCol -= 1;
    }
}

console.log(ans);