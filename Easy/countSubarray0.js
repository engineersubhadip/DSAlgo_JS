const A = [-1, 2, -1];

let hashmap = new Map();

hashmap.set(0,1);

let runningSum = 0;
let count = 0;

for (let i=0; i<A.length; i++){
    runningSum += A[i];
    if (hashmap.has(runningSum)){
        count += hashmap.get(runningSum);
    }

    if (hashmap.has(runningSum)){
        hashmap.set(runningSum,hashmap.get(runningSum)+1);
    }else{
        hashmap.set(runningSum,1);
    }
}

console.log(count);

