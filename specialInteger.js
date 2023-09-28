function scenario(array,window,target){
let start = 0;
let end = window;
let runningVal = 0;

for (let i=start; i<end; i++){
    runningVal += array[i];
}

if (runningVal > target){
    return false;
}

start = 1;

while (end < array.length){
    runningVal -= array[start-1];
    runningVal += array[end];

    if (runningVal > target){
        return false;
    }
    start++;
    end++;
}
return true;
}

let ans = 0;
let left = 0;
let right = A.length;

while (left <= right){
let mid = Math.floor((left+right)/2);
if (scenario(A,mid,B) == false){
    right = mid-1;
}else{
    ans = mid;
    left = mid+1;
}
}

return ans;
}
