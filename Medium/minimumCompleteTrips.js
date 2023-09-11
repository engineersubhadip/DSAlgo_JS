const time = [2];
let totalTrips = 1;

function checkScenario(array,referenceTripCount,midVal){
    let runningTripCount = 0;
    for (let i=0; i<array.length; i++){
        runningTripCount += Math.floor(midVal/array[i]);
    }
    if (runningTripCount < referenceTripCount){
        return false;
    }else{
        return true;
    }
}

let left = 1;
let right = 10**18;
let ans = null;

while (left <= right){
    let mid = Math.floor((left+right)/2);
    if (checkScenario(time,totalTrips,mid) === true){
        ans = mid;
        right = mid-1;
    }else{
        left = mid+1;
    }
}

console.log(ans);