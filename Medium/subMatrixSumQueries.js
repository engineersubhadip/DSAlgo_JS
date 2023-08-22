const A = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
const B = [1, 2];
const C = [1, 2];
const D = [2, 3];
const E = [2, 3];

// ! Function to calculate 2D Prefix Sum:-

function prefix2DSum(matrix){
    let mod = 1e9+7;
    let rowCount = matrix.length;
    let colCount = matrix[0].length;

    const prefixSum = [];
    for (let i=0; i<rowCount;i++){
        const container = [];
        for (let j=0;j<colCount;j++){
            container.push(0);
        }
        prefixSum.push(container);
    }
    
    // ! Row Wise Prefix Sum:-

    for (let i=0;i<rowCount;i++){
        for (let j=0; j<colCount; j++){
            if (j === 0){
                prefixSum[i][j] = matrix[i][j];
            }else{
                prefixSum[i][j] = (prefixSum[i][j-1]+matrix[i][j] + mod) % mod;
            }
        }
    }

    //! Col Wise Prefix Sum:-

    for (let i=1; i<rowCount; i++){
        for (let j=0; j<colCount; j++){
            prefixSum[i][j] = (prefixSum[i][j] + prefixSum[i-1][j] + mod) % mod;
        }
    }
    return prefixSum;
}   

prefixSumMatrix = prefix2DSum(A);

const array = new Array(B.length);

let mod = 1e9+7;

for (let i=0; i<B.length; i++){
    x1 = B[i]-1;
    y1 = C[i]-1;
    x2 = D[i]-1;
    y2 = E[i]-1;


    let runningSum = prefixSumMatrix[x2][y2] % mod;

    if (x1>0){
        runningSum = (runningSum -  prefixSumMatrix[x1-1][y2] + mod) % mod;
    }
    if (y1>0){
        runningSum = (runningSum - prefixSumMatrix[x2][y1-1] + mod) % mod;
    }
    if (x1>0 && y1>0){
        runningSum = (runningSum + prefixSumMatrix[x1-1][y1-1] + mod) % mod;
    }

    array[i] = runningSum;
}

console.log(array);