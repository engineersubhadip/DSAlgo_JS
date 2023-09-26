let A = [2, 0, 1, 3];

let count = 0;
let maxImpact = -Infinity;

for (let i=0; i<A.length; i++){
    maxImpact = Math.max(maxImpact,A[i]);
    if (maxImpact == i){
        count++;
    }
}

console.log(count);