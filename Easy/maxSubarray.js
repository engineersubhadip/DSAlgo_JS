const C = [1,2,3,4,4];
let A = 5;
let B = 8;

// Left and Right denotes the Window Size
let left = 1;
let right = A;

let maxValue = 0;
let maxWindowSize = 0;

function scenarioCheck(refWindowSize,array,refSumValue){
    let start = 0;
    let end = refWindowSize;

    let runningMaxValue = 0;
    let runningSum = 0;

    for (let i=start; i<end; i++){
        runningSum += array[i];
    }

    if (runningSum > refSumValue){
        return false;
    }

    runningMaxValue = Math.max(runningMaxValue, runningSum);

    start = 1;

    while (end < array.length){
        runningSum = runningSum - array[start-1] + array[end];
        
        if (runningSum > refSumValue){
            return false;
        }

        runningMaxValue = Math.max(runningMaxValue, runningSum);

        start++;
        end++;
    }

    // if (runningMaxValue === 0){
    //     return [false];
    // }
    refMaxValue = runningMaxValue;
    
    return [true,runningMaxValue];

}

while (left <= right){

    let mid = Math.floor((left+right)/2);
    let runningMaxValue = 0;

    if (scenarioCheck(mid,C,B)[0] === true){
        maxValue = Math.max(maxValue,scenarioCheck(mid,C,B)[1]);
        maxWindowSize = mid;
        left = mid+1;
    }else{
        right = mid-1;
    }
}

console.log('Max Value ->',' ',maxValue);
console.log('Max Window Size ->',' ',maxWindowSize);
