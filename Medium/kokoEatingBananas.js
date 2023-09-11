const piles = [3,6,7,11];
let h = 8;

function checkScenario(array,guardHour,midVal){
    let runningHourCount = 0;
    for (let i=0; i<array.length; i++){
        let runningValue = Math.ceil(array[i]/midVal);
        runningHourCount+=runningValue;
    }

    if (runningHourCount > guardHour){
        return false;
    }else{
        return true;
    }
}

let left = 1;
let right = 10**9;
// * Binary Search on Eating speed.
let ans = null;

while (left <= right){
    let mid = Math.floor((left+right)/2);
    if (checkScenario(piles,h,mid)===true){
        ans = mid;
        right = mid-1;
    }else{
        left = mid+1;
    }
}
console.log(ans);