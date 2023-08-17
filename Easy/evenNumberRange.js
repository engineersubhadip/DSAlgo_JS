const A = [2, 1, 8, 3, 9, 6];
const B = [[0, 3],[3, 5],[1, 3],[2, 4]];

for (let i=0; i< A.length; i++){
    if (A[i] % 2 === 0){
        A[i] = 1;
    }else{
        A[i]=0;
    }
}

const prefixSum = [];
for (let i=0; i< A.length; i++){
    prefixSum.push(0);
}

prefixSum[0] = A[0];

for (let i=1; i<A.length; i++){
    prefixSum[i] = prefixSum[i-1]+A[i];
}

const answer = [];

for (let i=0; i<B.length; i++){
    let startPoint = B[i][0];
    let endPoint = B[i][1];

    if (startPoint === 0){
        answer.push(prefixSum[endPoint]);
    }else{
        answer.push(prefixSum[endPoint]-prefixSum[startPoint-1]);
    }
    }

console.log(answer);


