const nums = [11,13,15,17]

let rotationIndex = null;
let left = 0;
let right = nums.length-1;

while (left <= right){
    let mid = Math.floor((left+right)/2);

    if ((mid === 0 || nums[mid] > nums[mid-1]) && (mid === nums.length-1 || nums[mid] > nums[mid+1])){
        rotationIndex = mid;
        break;
    }

    if (nums[mid] >= nums[0]){
        left = mid+1;
    }else if (nums[mid] < nums[0]){
        right = mid-1;
    }
}

if (rotationIndex === nums.length-1){
    console.log(nums[0]);
}else{
    console.log(nums[rotationIndex+1]);
}
