const A = [ [1,   3,  5,  7],[10, 11, 16, 20],[23, 30, 34, 50]];
let B = 12;

let rowCount = A.length;
let colCount = A[0].length;
let totalCount = rowCount * colCount;
let flag = false;

let left = 0;
let right = totalCount-1;

while (left <= right){
    let mid = Math.floor((left+right)/2);
    let targetRow = Math.floor(mid/colCount);
    let targetCol = Math.floor(mid%colCount);

    if (A[targetRow][targetCol] === B){
        flag = true;
        break;
    }else if (A[targetRow][targetCol] < B){
        left = mid+1;
    }else{
        right = mid-1;
    }
}

console.log(flag);