let A = [2, 4, 3, 2];
let B = 3;

A.sort((a,b) => a-b);

function checkScenario(array,midVal,target){
    // * This count will basically tell us the rank of the midVal 
    let count = 0;
    
    for (let i=0; i<array.length; i++){
        let j = i+1;
        let k = array.length-1;
        while (j < k){
            if (array[i]+array[j]+array[k] <= midVal){
                count += (k-j);
                j++;
            }else{
                k--;
            }
        }
    }

    // * Using this rank we will determine whether it is smaller than or greater than equal to the target rank
    if (count < target){
        return false;
    }else{
        return true;
    }
}

// * Binary Search on Triplet Sum:-

let left = A[0]+A[1]+A[2];
let right = A[A.length-1]+A[A.length-2]+A[A.length-3];
let answer = undefined;

while (left <= right){
    let mid = Math.floor((left+right)/2);

    if (checkScenario(A,mid,B) == false){
        left = mid+1;
    }else{
        ans = mid;
        right = mid-1;
    }
}

console.log(ans);

