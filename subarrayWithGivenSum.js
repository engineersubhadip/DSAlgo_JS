let A = [1, 2, 3, 4, 5];
let B = 5;

let left = 0;
let right = 0;
let runningSum = 0;
let flag = false;

while (right < A.length){
    runningSum += A[right];

    while (left <= right && runningSum > B){
        runningSum -= A[left];
        left++;
    }

    if (runningSum == B){
        flag = true;
        console.log(A.slice(left,right+1));
        break;
    }
    right++;
}

if (flag == false){
    console.log(-1);
}