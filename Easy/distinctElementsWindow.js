const A = [1, 2, 1, 3, 4, 3];
let B = 3;

if (B > A.length){
    console.log([]);
}

let start = 0;
let end = B;
const array = [];
let hashmap = new Map();

for (let i=start; i<end; i++){
    if (hashmap.has(A[i])){
        hashmap.set(A[i],hashmap.get(A[i])+1);
    }else{
        hashmap.set(A[i],1);
    }
}

array.push(hashmap.size);
start = 1;

while (end < A.length){
    hashmap.set(A[start-1],hashmap.get(A[start-1])-1)
    if (hashmap.get(A[start-1]) <= 0){
        hashmap.delete(A[start-1]);
    }

    if (hashmap.has(A[end])){
        hashmap.set(A[end],hashmap.get(A[end])+1);
    }else{
        hashmap.set(A[end],1);
    }

    array.push(hashmap.size);

    start++;
    end++;
}

console.log(array);




