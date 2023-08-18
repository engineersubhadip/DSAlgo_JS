const A = [1, 2, 3, 4, 5];
let B = 4;

const prefixSum = [];

for(let i=0; i<A.length; i++){
    prefixSum.push(0);
}

prefixSum[0] = A[0];

for (let i=1; i<A.length; i++){
    prefixSum[i] = prefixSum[i-1]+A[i];
}

let count = 0;

for (let i=0; i<A.length; i++){
    let runningSum = 0;
    for (let j=i; j<A.length; j++){
        if (i===0){
            runningSum = prefixSum[j];
        }else{
            runningSum = prefixSum[j] - prefixSum[i-1];
        }

        if (((j-i+1) % 2 === 0) && (runningSum < B)){
            count++;
        }else if (((j-i+1) % 2 !== 0) && (runningSum > B)){
            count++;
        }
    }
}

console.log(count);




