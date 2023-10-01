let nums = [2,6,4,8,10,9,15];

let left = undefined;

for (let i=1; i<nums.length; i++){
    if (nums[i-1] <= nums[i]){
        continue;
    }else{
        left = i-1;
        break;
    }
}

let right = undefined;

for (let j=nums.length-2; j >= 0; j--){
    if (nums[j] <= nums[j+1]){
        continue;
    }else{
        right = j+1;
        break;
    }
}

let minVal = Infinity;
let maxVal = -Infinity;

for (let i = left; i<=right; i++){
    minVal = Math.min(minVal,nums[i]);
    maxVal = Math.max(maxVal,nums[i]);
}

let i = 0;
let j = nums.length-1;

while (i <= left && nums[i] <= minVal){
    i++;
}

while (j >= right && nums[j] > maxVal){
    j--;
}

console.log(j-i+1);


