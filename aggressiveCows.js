let A = [1, 2, 3, 4, 5];
let B = 3;

A.sort((a,b) => a-b);

function checkScenario(array,midVal,target){
    let cowCount = 1;
    let refDistance = array[0];

    for (let i=1; i<array.length; i++){
        if (array[i]-refDistance < midVal){
            continue;
        }else{
            cowCount+=1
            refDistance = array[i];
        }
    }

    if (cowCount < target){
        return false;
    }else{
        return true;
    }
}

let left = 0;
let right = A[A.length-1]-A[0];
let ans = undefined;

while (left <= right){
    let mid = Math.floor((left+right)/2);
    if (checkScenario(A,mid,B) == false){
        right = mid-1;
    }else{
        ans = mid;
        left = mid+1;
    }
}

console.log(ans);