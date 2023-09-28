let A = [5,5,5];
let B = 3;

A.sort((a,b) => a-b);

let prefixSum = new Array(A.length).fill(0);
prefixSum[0] = A[0];

for (let i=1; i<A.length; i++){
    prefixSum[i] = prefixSum[i-1]+A[i];
}

let element = undefined;
let frequency = 0;

for (let i=0; i<A.length; i++){
    let left = 0;
    let right = i;
    let count = 0;

    while (left <= right){
        let mid = Math.floor((left+right)/2);
        let subStringLength = i-mid+1;
        let actualCost = A[i]*subStringLength;
        let originalCost = 0;

        if (mid == 0){
            originalCost = prefixSum[i];
        }else{
            originalCost = prefixSum[i] - prefixSum[mid-1];
        }

        if (actualCost - originalCost <= B){
            if (subStringLength > frequency){
                element = A[i];
                frequency = subStringLength;
            }
            right = mid-1;
        }
        else{
            left = mid+1;
        }
    }
}

console.log(frequency,element);
