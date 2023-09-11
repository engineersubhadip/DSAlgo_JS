const A = [1, 2, 3, 4, 5];
let B = 3;

A.sort((a,b) => a-b);

function scenario(array,cowCount,midVal){
    let runningCowCount = 1;
    let referenceDistance = array[0];

    for (let i=1; i<array.length; i++){
        if (array[i] - referenceDistance >= midVal){
            runningCowCount++;
            referenceDistance = array[i];
        }
    }

    if (runningCowCount < cowCount){
        return false;
    }else{
        return true;
    }
}

let left = 1;
let right = A[A.length-1]-A[0];
let ans = null;

while (left <= right){
    // * Mid gives us the distance we are claiming between 2 cows.
    let mid = Math.floor((left+right)/2);
    if (scenario(A,B,mid)===true){
        ans = mid;
        left = mid+1;
    }else{
        right = mid-1;
    }
}

console.log(ans);