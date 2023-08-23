const A = [[-6 ,-6],[-29 ,-8],[3 ,-8],[-15 , 2],[25 ,25],[20 ,-5]];

function prefixColMatrix(matrix){
    let rowCount = matrix.length;
    let colCount = matrix[0].length;

    // const prefix = [];
    // for (let i=0; i<rowCount; i++){
    //     const container = [];
    //     for (let j=0; i<colCount; j++){
    //         container.push(0);
    //     }
    //     prefix.push(container);
    // }

    // ! Col Wise Prefix:-
    for (let i=1; i<rowCount; i++){
        for (let j=0; j<colCount; j++){
            // if (i == 0){
            //     prefix[i][j] = matrix[i][j];
            // }else{
             matrix[i][j] = matrix[i-1][j]+matrix[i][j];
            }
        }
    
    return matrix;
    }


function kadane(array){
    let runningSum = 0;
    let maxSum = -1e9;

    for (let i=0; i<array.length; i++){
        runningSum += array[i];
        maxSum = Math.max(maxSum,runningSum);

        if (runningSum < 0){
            runningSum = 0;
        }
    }
    return maxSum;
}

const prefixSum = prefixColMatrix(A);
let rowCount = A.length;
let colCount = A[0].length;
let maxSum = -1e9;

for (let r1=0; r1<rowCount; r1++){
    for (let r2 = r1; r2<rowCount; r2++){
        const container = new Array(colCount).fill(0);
        if (r1 === 0){
            for (let j=0; j<colCount; j++){
                container[j] = prefixSum[r2][j];
            }
        }else{
            for (let j=0; j<colCount; j++){
                container[j] = prefixSum[r2][j] - prefixSum[r1-1][j];
            }
        }

        let runningMaxSum = kadane(container);
        maxSum = Math.max(maxSum,runningMaxSum);
    }
}

console.log(maxSum);