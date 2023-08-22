const nums = [1,12,-5,-6,50,3];
let k = 4;

let start = 0;
let end = k;
let runningSum = 0;
const array = [];

for (let i=start; i<end; i++){
    runningSum += Number(nums[i]);
}

array.push(runningSum/k);

start = 1

while (end < nums.length){
    runningSum -= Number(nums[start-1]);
    runningSum += Number(nums[end]);

    array.push(runningSum/k);
    start++;
    end++;
}

console.log(Math.max(...array));
