let A = [4, 5, 6, 7, 0, 1, 2, 3];
let B = 4 ;

function searchRange(array,start,end,target){
    let left = start;
    let right = end;

    while (left <= right){
        let mid = Math.floor((left+right)/2);
        
        // * Target Found:-
        if (array[mid] == target){
            return mid;
        }
        //* Movement:-
        if (array[mid] < target){ //* Right Movement
            left = mid+1;
        }else{
            right = mid-1; //* Left Movement
        }
    }
    return -1;
}


let left = 0;
let right = A.length-1;
let rotIndex = undefined;

while (left <= right){
    let mid = Math.floor((left+right)/2);

    // * Rotation Index Captured:-
    if ((mid == 0 || A[mid] > A[mid-1]) && (mid == A.length-1 || A[mid] > A[mid+1])){
        rotIndex = mid;
        break;
    }

    // * Movement:-
    if (A[mid] > A[0]){ //* Right Movement
        left = mid+1;
    }else if (A[mid] < A[0]){ // * Left Movement
        right = mid-1;
    }
}

// * 0 to rotIndex search:-

let leftHalf = searchRange(A,0,rotIndex,B);
let rightHalf = searchRange(A,rotIndex+1,A.length-1,B);

if (leftHalf == -1 && rightHalf != -1){
    console.log(rightHalf);
}else if (leftHalf != -1 && rightHalf == -1){
    console.log(leftHalf);
}else{
    console.log(-1);
}
