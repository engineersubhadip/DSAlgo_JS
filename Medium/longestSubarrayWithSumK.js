const A = [-1, 2, 3];
let K = 6;

let hashmap = new Map();
hashmap.set(0,-1);

let runningSum = 0;
let longestLength = 0;

for (let i=0; i<A.length; i++){
    runningSum += Number(A[i]);
    if (hashmap.has(runningSum-K)){
        longestLength = Math.max(longestLength,i-hashmap.get(runningSum-K));
    }

    if (hashmap.has(runningSum)){
        continue;
    }else{
        hashmap.set(runningSum,i);
    }
}

console.log(longestLength);
