const mat = [[0,0],[1,1],[0,0]];

// ! Sorted every Row:-
for (let i=0; i<mat.length; i++){
    mat[i].sort((a,b) => a-b);
}

// * Variable Declarations:-
let rowCount = mat.length;
let colCount = mat[0].length;
let rowIndex = null;
let oneCount = 0;

// ! Go to every row and apply Binary Search:-
for (let i=0; i<rowCount; i++){
    let left = 0;
    let right = colCount-1;
    let runningOneCount = null;
    while (left <= right){
        let mid = Math.floor((left+right)/2);
        if (mat[i][mid] >= 1){
            runningOneCount = mid;
            right = mid-1;
        }else{
            left = mid+1;
        }
    }
    if (runningOneCount === null){
        continue;
    }else{
        if (colCount - runningOneCount > oneCount){
            oneCount = colCount-runningOneCount;
            rowIndex = i;
        }
    }
}

if (rowIndex === null){
    console.log([0,0]);
}else{
    console.log([rowIndex,oneCount]);
}

