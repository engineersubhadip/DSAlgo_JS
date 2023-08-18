const A = [2,5,6];
const B = 10;

const prefixSum = [];

for (let i=0; i<A.length; i++){
    prefixSum.push(0);
}

prefixSum[0] = A[0];

for (let i=1; i<A.length; i++){
    prefixSum[i] = prefixSum[i-1]+A[i];
}

let count = 0;

for (let i=0; i< A.length; i++){
    let runningSum = 0;
    for (let j=i; j<A.length; j++){
        if (i === 0){
            runningSum = prefixSum[j];
        }else{
            runningSum = prefixSum[j] - prefixSum[i-1];
        }

        if (runningSum < B){
            count++;
        }
    }
}

console.log(count);


