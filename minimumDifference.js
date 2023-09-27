let C = [[7, 3],[2, 1],[4, 9]];

let rowCount = C.length;
let colCount = C[0].length;

for (let i=0; i<rowCount; i++){
    C[i].sort((a,b) => a-b);
}

function justGreater(element,array){
   
    // * If the just greater element than current element does not exists then return the last value of the array.

    let answer = array[array.length-1];
    let left = 0;
    let right = array.length-1;

    while (left <= right){
        let mid = Math.floor((left+right)/2);
        if (array[mid] >= element){
            answer = array[mid];
            right = mid-1;
        }else{
            left = mid+1;
        }
    }

    return answer;
}

function justSmaller(element,array){

    // * If the just smaller element than the current element does not exists then return the first value of the array.

    let answer = array[0];
    let left = 0;
    let right = array.length-1;

    while (left <= right){
        let mid = Math.floor((left+right)/2);
        if (array[mid] <= element){
            answer = array[mid];
            left = mid+1;
        }else{
            right = mid-1;
        }
    }
    return answer;
}

let minDiff = Infinity;

for (let i=0; i<=rowCount-2; i++){
    for (let j=0; j<colCount; j++){
        let justGreaterElement = justGreater(C[i][j],C[i+1]);
        let justSmallerElement = justSmaller(C[i][j],C[i+1]);
        let returnValueOne = Math.abs(C[i][j] - justGreaterElement);
        let returnValueTwo = Math.abs(C[i][j] - justSmallerElement);
        let finalReturnValue = Math.min(returnValueOne,returnValueTwo);

        minDiff = Math.min(minDiff,finalReturnValue);
    }
}

console.log(minDiff);