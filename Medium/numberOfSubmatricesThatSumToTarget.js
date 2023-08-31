const matrix = [[0,1,0],[1,1,1],[0,1,0]];
let target = 0;

function colWisePrefix(matrix){
    let rowCount = matrix.length;
    let colCount = matrix[0].length;

    const prefixSum = [];

    for (let i=0; i<rowCount; i++){
        const runningArray = [];
        for (let j=0; j<colCount; j++){
            runningArray.push(0);
        }
        prefixSum.push(runningArray);
    }

    for (let j=0; j<colCount; j++){
        prefixSum[0][j] = matrix[0][j];
    }

    for (let i=1; i<rowCount; i++){
        for (let j=0; j<colCount; j++){
            prefixSum[i][j] = prefixSum[i-1][j]+matrix[i][j];
        }
    }
    return prefixSum;
}

function countSubarray(array,target){
    let hashmap = new Map();
    hashmap.set(0,1);

    let runningSum = 0;
    let count = 0;

    for (let i=0; i<array.length; i++){
        runningSum += array[i];
        if (hashmap.has(runningSum-target) === true){
            count += hashmap.get(runningSum-target);
        }
        if (hashmap.has(runningSum) === true){
            hashmap.set(runningSum,hashmap.get(runningSum)+1);
        }else{
            hashmap.set(runningSum,1);
        }
    }
    return count;
}


let rowCount = matrix.length;
let colCount = matrix[0].length;
const prefix = colWisePrefix(matrix);
let totalCount = 0;

for (let r1 = 0; r1<rowCount; r1++){
    for (let r2 = r1; r2<rowCount; r2++){
        let array = new Array(colCount).fill(0);
        if (r1 === 0){
            for (let j=0; j<colCount; j++){
                array[j] = prefix[r2][j];
            }
        }else{
            for (let j=0; j<colCount; j++){
                array[j] = prefix[r2][j] - prefix[r1-1][j];
            }
        }
        totalCount += countSubarray(array,target);
    }
}

console.log(totalCount);