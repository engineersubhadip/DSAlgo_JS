const nums = [1,2,3,4];
let k = 5;

// ! 2 Pointer Approach

nums.sort((a,b) => a-b);

let iPointer = 0;
let jPointer = nums.length-1;
let count = 0;

while (iPointer < jPointer){
    if (nums[iPointer] + nums[jPointer] === k){
        count++;
        iPointer++;
        jPointer--;
    }else if (nums[iPointer] + nums[jPointer] <= k){
        iPointer++;
    }else{
        jPointer--;
    }
}

console.log(count);