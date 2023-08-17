const A = [1, 2, 3];

const prefixSum = [];
for (let i=0; i<A.length;i++){
    prefixSum.push(0);
}

prefixSum[0] = A[0];

for (let i = 1; i< A.length; i++){
    prefixSum[i] = prefixSum[i-1]+A[i];
}

const suffixSum = [];
for (let i = 0; i< A.length; i++){
    suffixSum.push(0);
}

suffixSum[A.length-1] = A[A.length-1];

for (let i=A.length-2; i>=0; i--){
    suffixSum[i] = suffixSum[i+1]+A[i];
}


for(let i=0; i<=A.length-1; i++){
    let leftSum = 0;
    let rightSum = 0;

    if (i === 0){
        leftSum = 0;
        rightSum = suffixSum[i+1];
    }else if(i === A.length-1){
        leftSum = prefixSum[A.length-2];
        rightSum = 0;
    }else{
        leftSum = prefixSum[i-1];
        rightSum = suffixSum[i+1];
    }

    if (leftSum === rightSum){
        console.log(i)
    }

}
console.log(false);





