let A = 5;
const B = [[1, 2, 10], [2, 3, 20], [2, 5, 25]];

const array = new Array(A+1).fill(0);

for (let i=0; i<B.length; i++){
    let startPoint = B[i][0]-1;
    let endPoint = B[i][1];
    let valueInsertion = B[i][2];

    array[startPoint]+=valueInsertion;
    array[endPoint]-=valueInsertion;
}

array.pop();

const prefixSum = new Array(array.length).fill(0);

prefixSum[0] = array[0];

for (let i=1; i<array.length; i++){
    prefixSum[i] = prefixSum[i-1]+array[i];
}

console.log(prefixSum);