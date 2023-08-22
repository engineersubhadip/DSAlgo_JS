const nums = [4,5,0,-2,-3,1];
let k = 5;

let hashmap = new Map();
hashmap.set(0,1);

let runningSum = 0;
let count = 0;

for (let i=0; i<nums.length; i++){
    runningSum = runningSum + nums[i];
    let another = (runningSum % k + k) % k;
    if (hashmap.has(another)){
        count+= hashmap.get(another)
    }
    
    if (hashmap.has(another)){
        hashmap.set(another,hashmap.get(another)+1)
    }else{
        hashmap.set(another,1);
    }
}

console.log(count);