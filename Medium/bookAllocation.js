const A = [12, 15, 78];
let B = 4;

if (B > A.length){
    console.log(-1);
}

function checkScenario(array,studentCount,midVal){
    let runningStudentCount = 1;
    let runningPageCount = 0;

    for (let i=0; i<array.length; i++){
        runningPageCount += array[i];
        if (runningPageCount > midVal){
            runningStudentCount++;
            runningPageCount = array[i]
        }
    }

    if (runningStudentCount > studentCount){
        return false;
    }else{
        return true;
    }
}

let left = -1e9;
let right = 0;

for (let i=0; i<A.length; i++){
    left = Math.max(left,A[i]);
    right += A[i];
}

let ans = -1;

while (left <= right){
    let mid = Math.floor((left+right)/2);
    if (checkScenario(A,B,mid) === true){
        ans = mid;
        right = mid-1;
    }else{
        left = mid+1;
    }
}
console.log(ans);