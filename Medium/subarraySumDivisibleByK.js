const nums = [4,5,0,-2,-3,1];
let k = 5;

let hashmap = new Map();
hashmap.set(0,1);

let runningSum = 0;
let count = 0;

for (let i=0; i<nums.length; i++){
    runningSum += nums[i];
    if (hashmap.has(runningSum % k)){
        count+= hashmap.get(runningSum % k)
    }

    if (hashmap.has(runningSum % k)){
        hashmap.set(runningSum % k,hashmap.get(runningSum % k)+1)
    }else{
        hashmap.set(runningSum % k,1);
    }
}

console.log(count);