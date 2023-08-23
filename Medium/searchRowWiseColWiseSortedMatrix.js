const A = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
let B = 2;

let rowCount = A.length;
let colCount = A[0].length;

let i = 0;
let j = colCount-1;
let minVal = 1e9;

while (i < rowCount && j >= 0){
    if (A[i][j] === B){
        let runningVal = ((i+1)*1009)+(j+1);
        minVal = Math.min(minVal,runningVal);
        j--;

    }else if(A[i][j] < B){
        i++;
    }else{
        j--;
    }
}

if (minVal === 1e9){
    console.log(-1);
}else{
    console.log(minVal);
}
