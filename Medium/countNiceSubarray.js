const nums = [2,2,2,1,2,2,1,2,2,2];
let k = 2;

for (let i=0; i<nums.length; i++){
    if (nums[i] % 2 === 0){
        nums[i]=0;
    }else{
        nums[i]=1;
    }
}

let runningSum = 0;
let count = 0;
let hashmap = new Map();
hashmap.set(0,1);

for (let i=0; i<nums.length; i++){
    runningSum += nums[i];
    if (hashmap.has(runningSum-k)){
        count += hashmap.get(runningSum-k);
    }

    if (hashmap.has(runningSum)){
        hashmap.set(runningSum,hashmap.get(runningSum)+1);
    }else{
        hashmap.set(runningSum,1);
    }
}

console.log(count);

