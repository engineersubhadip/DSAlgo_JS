// Count Number of Distinct elements in Array.

const A = [3, 4, 3, 6, 6];

let hashmap = new Map();

for (let i=0; i<A.length; i++){
    if (hashmap.has(A[i])){
        hashmap.set(A[i],hashmap.get(A[i])+1);
    }else{
        hashmap.set(A[i],1);
    }
}

let count = hashmap.size;

console.log(count);



