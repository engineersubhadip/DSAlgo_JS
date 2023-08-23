//* Given a row-wise and column-wise sorted matrix A of size N * M.
//? Return the maximum non-empty submatrix sum of this matrix

const A = [[-5,-4,-3],[-1,2,3],[2,2,4]]

// ! Function to return 2D Prefix Sum:-
function prefixSumConversion(matrix){
    let rowCount = matrix.length;
    let colCount = matrix[0].length;
    
    const prefixSum = [];
    for (let i=0; i<rowCount;i++){
        const container = [];
        for (let j=0; j<colCount;j++){
            container.push(0);
        }
        prefixSum.push(container);
    }

    // ! Row Wise Prefix Calculation:-
    for (let i=0; i<rowCount;i++){
        for (let j=0; j<colCount;j++){
            if (j===0){
                prefixSum[i][j] = matrix[i][j];
            }else{
                prefixSum[i][j] = prefixSum[i][j-1]+matrix[i][j];
            }
        }
    }

    // ! Col Wise Prefix Calculation:-
    for (let i=1; i<rowCount; i++){
        for (let j=0; j<colCount; j++){
            prefixSum[i][j] = prefixSum[i-1][j]+ prefixSum[i][j];
        }
    }

    return prefixSum;
}

prefixSumMatrix = prefixSumConversion(A);

let maxSum = -1e9;

let rowCount = A.length;
let colCount = A[0].length;

let x2 = rowCount-1;
let y2 = colCount-1;

for (let i=0; i<rowCount; i++){
    for (let j=0; j<colCount; j++){
        let x1 = i;
        let y1 = j;
        let runningSum = 0;
        runningSum += prefixSumMatrix[x2][y2];

        if (x1>0){
            runningSum -= prefixSumMatrix[x1-1][y2];
        }
        if (y1>0){
            runningSum -= prefixSumMatrix[x2][y1-1];
        }
        if (x1>0 && y1>0){
            runningSum += prefixSumMatrix[x1-1][y1-1];
        }

        maxSum = Math.max(maxSum,runningSum);
    }
}

console.log(maxSum);