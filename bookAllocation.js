let A = [12, 34, 67, 90];
let B = 2;

if (B > A.length){
    console.log(-1);
}

function checkScenario(array,midVal,target){
    let studentCount = 1;
    let workLoad = 0;

    for (let i=0; i<array.length; i++){
        workLoad += array[i];
        if (workLoad > midVal){
            studentCount+=1;
            workLoad=array[i];
        }
    }

    if (studentCount > target){
        return false;
    }else{
        return true;
    }
}

let left = Math.max(...A);
let right = 0;
for (let i=0; i<A.length; i++){
    right+=A[i];
}
let ans = -1;

while (left <= right){
    let mid = Math.floor((left+right)/2);
    if (checkScenario(A,mid,B) == false){
        left = mid+1;
    }else{
        ans = mid;
        right = mid-1;
    }
}

console.log(ans);
