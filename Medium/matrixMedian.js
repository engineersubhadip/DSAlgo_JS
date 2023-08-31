const A = [[1, 3, 5],[2, 6, 9],[3, 6, 9]];

function checkScenario(matrix,refElement){
    let rowCount = matrix.length;
    let colCount = matrix[0].length;
    let cumCount = 0;

    for (let i=0; i<rowCount; i++){
        let left = 0;
        let right = colCount-1;
        let runningCount = 0;
        let flag = false;

        while (left <= right){
            let mid = Math.floor((left+right)/2);

            if (matrix[i][mid] <= refElement){
                flag = true
                runningCount = mid;
                left = mid+1;
            }else{
                right = mid-1;
            }
        }
        if (flag === true){
            cumCount += runningCount+1;
        }
    }
    return cumCount;
}

let rowCount = A.length;
let colCount = A[0].length;
let totalCount = rowCount * colCount;
let targetCount = Math.floor(totalCount/2)+1;


let left = 1;
let right = 1e9;
let ans = null;

while (left <= right){
    let mid = Math.floor((left+right)/2);
    if (checkScenario(A,mid) < targetCount){
        left = mid+1;
    }else{
        ans = mid;
        right = mid-1
    }
}
console.log(ans);
