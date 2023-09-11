const position = [5,4,3,2,1,1000000000]; 
let m = 2;

position.sort((a,b) => a-b);

function checkScenario(array,ballCount,midVal){
    let runningBallCount = 1;
    let referenceDistance = array[0];

    for (let i=1; i<array.length; i++){
        if (array[i]-referenceDistance >= midVal){
            runningBallCount++;
            referenceDistance = array[i];
        }
    }

    if (runningBallCount < ballCount){
        return false;
    }else{
        return true;
    }
}

let left = 1;
let right = position[position.length-1] - position[0];
let ans = null;

while (left <= right){
    let mid = Math.floor((left+right)/2);
    if (checkScenario(position,m,mid)===true){
        ans = mid;
        left = mid+1;
    }else{
        right = mid-1;
    }
}

console.log(ans);