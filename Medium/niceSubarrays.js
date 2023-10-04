let nums = [1,1,2,1,1];
let k = 3;

for (let i=0; i<nums.length; i++){
    if (nums[i] % 2 == 0){
        nums[i] = 0;
    }else{
        nums[i] = 1;
    }
}

let hmLong = new Map();
let hmShort = new Map();
let i = 0;
let j = 0;
let right = 0;
let count = 0;

while (right < nums.length){

    if (hmLong.has(nums[right]) == false){
        hmLong.set(nums[right],1);
    }else{
        hmLong.set(nums[right],hmLong.get(nums[right])+1);
    }

    if (hmShort.has(nums[right]) == false){
        hmShort.set(nums[right],1);
    }else{
        hmShort.set(nums[right],hmShort.get(nums[right])+1);
    }

    while (i <= right && hmLong.size > k){
        hmLong.set(nums[i],hmLong.get(nums[i])-1);
        if (hmLong.get(nums[i]) == 0){
            hmLong.delete(nums[i]);
        }
        i+=1;
    }

    while (j <= right && hmShort.size > k){
        hmShort.set(nums[j],hmShort.get(nums[j])-1);
        if (hmShort.get(nums[j]) == 0){
            hmShort.delete(nums[j]);
        }
        j+=1;
    }

    while (j <= right && hmShort.size == k){
        if (hmShort.get(nums[j]) > 1){
            hmShort.set(nums[j],hmShort.get(nums[j])-1);
        }else{
            break;
        }
    }

    if (hmLong.size == k && hmShort.size == k){
        count += (j-i+1);
    }

    right+=1;
}

console.log(count);