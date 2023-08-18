const  A = [6, 10, 5, 4, 9, 120];

let hashmap = new Map();

for (let i=0; i<A.length; i++){
    if (hashmap.has(A[i])){
        hashmap.set(A[i],hashmap.get(A[i])+1);
    }else{
        hashmap.set(A[i],1);
    }
}

let result = -1;

for(let i=0; i<A.length; i++){
    if (hashmap.has(A[i])){
        if (hashmap.get(A[i]) >= 2){
            result = A[i];
            break;
        }
    }
}

console.log(result);


