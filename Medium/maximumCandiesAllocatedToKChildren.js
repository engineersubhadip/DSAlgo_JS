const candies = [2,5];
let k = 11;

function checkScenario(array,childCount,midVal){
    let runningChildCount = 0;
    for (let i=0; i<array.length; i++){
        let runningValue = Math.floor(array[i]/midVal);
        runningChildCount += runningValue;
    }

    if (runningChildCount < childCount){
        return false;
    }else{
        return true;
    }
}

// * Binary Search in Candy allocation
let left = 1;
let right = 10**7;
let ans = 0;

while (left <= right){
    let mid = Math.floor((left+right)/2);
    if (checkScenario(candies,k,mid)===true){
        ans = mid;
        left = mid+1;
    }else{
        right = mid-1;
    }
}

console.log(ans);