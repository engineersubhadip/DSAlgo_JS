// Given an Array of integers B, and a target sum A.
// Check if there exists a pair (i,j) such that Bi + Bj = A and i!=j.

const B = [9, 10, 7, 10, 9, 1, 5, 1, 5];
let A = 21;

let hashmap = new Map();

let flag = 0;

for (let i=0; i<B.length; i++){
    let targetVal = A-Number(B[i]);

    if (hashmap.has(targetVal)){
        flag = 1;
        break;
    }

    if (hashmap.has(B[i])){
        hashmap.set(B[i],hashmap.get(B[i])+1);
    }else{
        hashmap.set(B[i],1);
    }
}

if (flag === 0){
    console.log(0);
}else{
    console.log(1);
}