// const nums = [3,1,3,4,3];
// let k = 6;

// // ! 2 Pointer Approach

// nums.sort((a,b) => a-b);

// let iPointer = 0;
// let jPointer = nums.length-1;
// let count = 0;

// while (iPointer < jPointer){
//     if (nums[iPointer] + nums[jPointer] === k){
//         count++;
//         iPointer++;
//         jPointer--;
//     }else if (nums[iPointer] + nums[jPointer] <= k){
//         iPointer++;
//     }else{
//         jPointer--;
//     }
// }

// console.log(count);

// ! Hashmap Appraoch:-

const nums = [2,2,2,3,1,1,4,1];
let k = 4;

let hashmap = new Map();

for (let i=0; i<nums.length;i++){
    if (hashmap.has(nums[i])){
        hashmap.set(nums[i],hashmap.get(nums[i])+1);
    }else{
        hashmap.set(nums[i],1);
    }
}

let count = 0;

for (let i=0; i<nums.length; i++){
    let first = nums[i];
    let second = k - first;

    if (first === second && hashmap.has(second)){
        if (hashmap.get(second) > 1){
            count++;
            hashmap.set(second,hashmap.get(second)-2);
            if (hashmap.get(second) === 0){
                hashmap.delete(second);
            }
        }
    }else if (first != second && hashmap.has(second) && hashmap.has(first)){
        count++;
        hashmap.set(first,hashmap.get(first)-1)
        hashmap.set(second,hashmap.get(second)-1);
        if (hashmap.get(second) === 0){
            hashmap.delete(second);
        }
        if (hashmap.get(first) === 0){
            hashmap.delete(first);
        }
    }
}

console.log(count);

