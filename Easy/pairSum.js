const A = [9,18,17,17,6,16,13,11,15,7];
let B = 15;


// Approach -01:- Traditional Way of Writing Hashmap Code:-

// let hashmap = new Map();

// let count = 0;

// for (let i=0; i<A.length; i++){
//     if (hashmap.has(B-Number(A[i]))){
//         count += hashmap.get(B-A[i]);
//         // count ++
//     }

//     if (hashmap.has(A[i])){
//         hashmap.set(A[i],hashmap.get(A[i])+1);
//     }else{
//         hashmap.set(A[i],1);
//     }
// }

// console.log(count);

// Approach-02: Short Code with fewer IF ELSE:- Optimized Way of Writing Hashmap JS Code
// https://www.scaler.com/help_requests/811659/?ref=join-call-now - Explanation

let hashmap = new Map();
let mod = BigInt(1e9+7);
let count = 0n;

for (let i=0; i<A.length; i++){
    // if (hashmap.has(B-Number(A[i]))){
    //     console.log('Yes')
        count = (count + BigInt(hashmap.get(BigInt(B)-BigInt(A[i])) || 0n)) % mod  ;
    // }

    // if (hashmap.has(A[i])){
    //     console.log('YYYY')
        hashmap.set(BigInt(A[i]),(hashmap.get(BigInt(A[i])) || 0n)+1n);
    // }else{
        // console.log('NNNN');
        // hashmap.set(A[i],1);
    }
// }

val = count % mod
console.log(Number(val));
