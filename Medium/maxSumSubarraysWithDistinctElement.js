const nums = [1,5,4,2,9,9,9];
let k = 3;

let hashmap = new Map();

let start = 0;
let end = k;
let maxSum = 0;
let runningSum = 0;

for (let i=start; i<end; i++){
    runningSum += nums[i];
    if (! hashmap.has(nums[i])){
        hashmap.set(nums[i],1);
    }
    else{
        hashmap.set(nums[i],hashmap.get(nums[i])+1);
    }
}

if (hashmap.size === k){
    maxSum = Math.max(maxSum,runningSum);
}

start = 1;

while (end < nums.length){
    // * Handling the start pointer
    hashmap.set(nums[start-1],hashmap.get(nums[start-1])-1);
    runningSum -= nums[start-1];

    if (hashmap.get(nums[start-1]) === 0){
        hashmap.delete(nums[start-1]);
    }

    // * Handling the End pointer
    runningSum += nums[end];
    if (! hashmap.has(nums[end])){
        hashmap.set(nums[end],1);
    }else{
        hashmap.set(nums[end],hashmap.get(nums[end])+1);
    }

    // * Handling the MaxSum Value;

    if (hashmap.size === k){
        maxSum = Math.max(maxSum,runningSum);
    }

    start++;
    end++;
}

console.log(maxSum);