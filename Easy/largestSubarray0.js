const A = [4,-3,-6,5,1,6,8];

let hashmap = new Map();

hashmap.set(0,-1);

let runningSum = 0;
let runningSize = 0;
let largestSize = 0;

for (let i=0; i<A.length; i++){
    runningSum += A[i];
    if (hashmap.has(runningSum)){
        runningSize = i-hashmap.get(runningSum);
        largestSize = Math.max(largestSize,runningSize);
    }

    if (hashmap.has(runningSum)){
        continue;
    }else{
        hashmap.set(runningSum,i);
    }
}

console.log(largestSize);
