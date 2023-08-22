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
    
    // ! Row Wise Prefix Sum:-

    for (let i=0;i<rowCount;i++){
        for (let j=0; j<colCount; j++){
            if (j === 0){
                prefixSum[i][j] = matrix[i][j];
            }else{
                prefixSum[i][j] = prefixSum[i][j-1]+matrix[i][j];
            }
        }
    }

    //! Col Wise Prefix Sum:-
    

    
}   

console.log(prefix2DSum(A));