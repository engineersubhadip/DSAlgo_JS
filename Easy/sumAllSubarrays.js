const A = [1,2,3];

let total = BigInt(0);

let totalLength = A.length;


for (let i=0; i<A.length; i++){
    let leftPart = BigInt(i+1);
    let rightPart = BigInt(totalLength - i);
    total += BigInt(A[i]) * (leftPart*rightPart);
}

console.log(total);
