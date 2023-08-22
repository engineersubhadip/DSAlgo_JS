const A = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
const B = [1, 2];
const C = [1, 2];
const D = [2, 3];
const E = [2, 3];

// ! Function to calculate 2D Prefix Sum:-

function prefix2DSum(matrix){
    let rowCount = matrix.length;
    let colCount = matrix[0].length;

    console.log(rowCount,colCount);

    // let prefixSum = new Array(rowCount).fill(new Array(colCount).fill(0));

    // let prefixSum = [...Array(matrix.length)].map(() =>Array(matrix[0].length).fill(0));

    const prefixSum = [];
    for (let i=0; i<rowCount;i++){
        const container = [];
        for (let j=0;j<colCount;j++){
            container.push(0);
        }
        prefixSum.push(container);
    }
    
    for (let i=0;i<rowCount;i++){
        console.log(matrix[i][0]);
        prefixSum[i][0] += matrix[i][0];
    }

    for (let i=0; i<rowCount;i++){
        console.log(prefixSum[i]);
    }
    return prefixSum;
}   

console.log(prefix2DSum(A));