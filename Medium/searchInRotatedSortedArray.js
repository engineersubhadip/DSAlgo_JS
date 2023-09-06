const nums = [1];
let target = 0;

// ! Finding out the Rotation Point:-
let rotationPoint = null;
let left = 0;
let right = nums.length-1;

while (left <= right){
    let mid = Math.floor((left+right)/2);
    
    if ((mid === 0 || nums[mid] >= nums[mid-1]) && (mid === nums.length-1 || nums[mid] >= nums[mid+1])){
        rotationPoint = mid;
        break;
    }

    if (nums[mid] >= nums[0]){
        left = mid+1;
    }else if (nums[mid] < nums[0]){
        right = mid-1;
    }
}

// ! Search Target in the First Half:-
let targetFirst = -1;
let leftFirst = 0;
let rightFirst = rotationPoint;

while (leftFirst <= rightFirst){
    let mid = Math.floor((leftFirst+rightFirst)/2);

    if (nums[mid] === target){
        targetFirst = mid;
        break;
    }

    if (nums[mid] < target){
        leftFirst = mid+1;
    }else{
        rightFirst = mid-1;
    }
}

// ! Search in the Second Half:-
let targetSecond = -1;
let leftSecond = rotationPoint+1;
let rightSecond = nums.length-1;

while (leftSecond <= rightSecond){
    let mid = Math.floor((leftSecond+rightSecond)/2);

    if (nums[mid] === target){
        targetSecond = mid;
        break;
    }

    if (nums[mid] < target){
        leftSecond = mid+1;
    }else{
        rightSecond = mid-1;
    }
}

if (targetFirst === -1){
    console.log(targetSecond);
}else{
    console.log(targetFirst);
}