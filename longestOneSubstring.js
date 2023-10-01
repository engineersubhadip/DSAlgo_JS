let A = [1, 0, 0, 0, 1, 0, 1];
let B = 2;

let left = 0;
let right = 0;
let runningCount = 0;
let maxCount = 0;
let i = undefined;
let j = undefined;


while (right < A.length){
    if (A[right] == 0){
        runningCount += 1;
    }

    while (left <= right && runningCount > B){
        if (A[left] == 0){
            runningCount -= 1;
        }
        left+=1;
    }

    if (i == undefined && j == undefined){
        i = left;
        j = right;
    }else if ((right - left) > (j-i)){
        i = left;
        j = right;
    }

    right++;
}

if (i == undefined && j == undefined){
    console.log([]);
}

let result = new Array();

for (let pointer = i; pointer <= j; pointer++){
    result.push(pointer);
}

console.log(result);

