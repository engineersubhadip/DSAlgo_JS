const A = [3,3,7,7,10,11,11];

let left = 0;
let right = A.length-1;

while (left <= right){
    let mid = Math.floor((left+right)/2);

    if ((mid === 0 || A[mid] != A[mid-1]) && (mid === A.length-1 || A[mid] != A[mid+1])){
        console.log(A[mid]);
        break;
    }

    if (A[mid] === A[mid+1] && (mid % 2 === 0)){
        left = mid+1;
    }else if (A[mid] === A[mid-1] && ((mid-1) % 2 === 0)){
        left = mid+1;
    }

    if (A[mid] === A[mid+1] && (mid % 2 !== 0)){
        right = mid-1;
    }else if (A[mid] == A[mid-1] && ((mid-1) % 2 !== 0)){
        right = mid-1;
    }
}