let A = 2;
let B = 5;
let C = [1, 10];

for (let i=0; i<C.length; i++){
    C[i] = C[i] * B;
}

let left = Math.max(... C);
let right = 0;
for (let i=0; i<C.length; i++){
    right+=C[i];
}

let ans = undefined;

function checkScenario(array,midVal,target){
    let workerCount = 1;
    let workLoad = 0;
    
    for (let i=0; i<array.length; i++){
        workLoad += array[i];
        if (workLoad > midVal){
            workerCount++;
            workLoad = array[i];
        }
    }

    if (workerCount > target){
        return false;
    }else{
        return true;
    }
}

while (left <= right){
    let mid = Math.floor((left+right)/2);
    if (checkScenario(C,mid,A) == false){
        left = mid+1;
    }else{
        ans = mid;
        right = mid-1;
    }
}

console.log(ans);