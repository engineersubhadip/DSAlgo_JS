const arr = [100, 200, 300, 400];
let k = 4;

let start = 0;
let end = k;
let runningSum = 0;
let maxSum = -1e9;

for (let i=start; i<end; i++){
    runningSum += arr[i];
}
maxSum = Math.max(maxSum,runningSum);

start = 1;

while (end<arr.length){
    runningSum -= arr[start-1];
    runningSum += arr[end];

    maxSum = Math.max(maxSum,runningSum);

    start++;
    end++;
}

console.log(maxSum);