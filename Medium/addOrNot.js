const A = [3, 1, 2, 2, 1];
let B = 3;

// * NlogN

A.sort((a,b) => a-b); 

const prefixArray = new Array(A.length).fill(0);
prefixArray[0] = A[0];

for (let i=1; i<A.length; i++){
    prefixArray[i] = prefixArray[i-1]+A[i];
}
console.log(prefixArray);

let element = null;
let elementLength = 0;

for (let i=0; i<A.length; i++){
    let left = 0;
    let right = i;
    let runningOperation = 0;

    while (left <= right){
        let mid = Math.floor((left+right)/2);
        let substringLength = (i-mid+1);
        let afterConversionCost = substringLength*A[i];
        let beforeConversionCost = 0;
        if (mid === 0){
            beforeConversionCost = prefixArray[i];
        }else{
            beforeConversionCost = prefixArray[i] - prefixArray[mid-1];
        }
        let totalCost = afterConversionCost - beforeConversionCost;
        
        if (totalCost <= B){
            if (elementLength < substringLength){
                elementLength = substringLength;
                element = A[i];
            }
            right = mid-1;
        }else{
            left = mid+1;
        }
        
    }
}

console.log(element,elementLength);

