const A = [[1, 1, 1, 1, 1],[2, 2, 2, 2, 2],[3, 8, 6, 7, 3],[4, 4, 4, 4, 4],[5, 5, 5, 5, 5]];
let B = 3;

function prefixMatrix(matrix){
    let rowCount = matrix.length;
    let colCount = matrix[0].length;

    const prefixSum = [];

    for (let i=0; i<rowCount; i++){
        const container = [];
        for (let j=0; j<colCount; j++){
            container.push(0);
        }
        prefixSum.push(container);
    }

    // !Row Wise Prefix:-
    for (let i=0; i<rowCount; i++){
        for (let j=0; j<colCount; j++){
            if (j === 0){
                prefixSum[i][j] = matrix[i][j];
            }else{
                prefixSum[i][j] = prefixSum[i][j-1]+matrix[i][j];
            }
        }
    }

    // !Col Wise Prefix:-
    for (let i=1; i<rowCount; i++){
        for (let j=0; j<colCount; j++){
            prefixSum[i][j] = prefixSum[i-1][j] + prefixSum[i][j];
        }
    }

    return prefixSum;
}

const prefixSum = prefixMatrix(A);

let rowCount = A.length;
let colCount = A[0].length;

let maxSumVal = -1e9;

for (let i=0; i<=rowCount-B; i++){
    for (let j=0; j<=colCount-B; j++){
        let x1 = i;
        let y1 = j;
        let x2 = i+B-1;
        let y2 = j+B-1;

        let runningVal = 0;
        runningVal += prefixSum[x2][y2];

        if (x1 > 0){
            runningVal -= prefixSum[x1-1][y2];
        }
        if (y1 > 0){
            runningVal -= prefixSum[x2][y1-1];
        }
        if (x1 > 0 && y1 > 0){
            runningVal += prefixSum[x1-1][y1-1];
        }

        maxSumVal = Math.max(maxSumVal,runningVal);
    }
}

console.log(maxSumVal);

