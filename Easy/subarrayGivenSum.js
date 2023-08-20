// Given an array of positive integers A and an integer B, find and return first continuous subarray which adds to B.

// If the answer does not exist return an array with a single integer "-1".

// First sub-array means the sub-array for which starting index in minimum.

const A = [5, 10, 20, 100, 105];
const B = 110;

let left = 0;
let right = 0;
let runningSum = 0;

while (right < A.length){
    runningSum += Number(A[right]);

    while (left <= right && runningSum > B){
        runningSum -= Number(A[left]);
        left++
    }

    if (runningSum === B){
        console.log(A.slice(left,right+1));
        break;
    }
    right++;
}

console.log([-1])