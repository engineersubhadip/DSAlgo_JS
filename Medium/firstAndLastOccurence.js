const A = [5, 7, 7, 8, 8, 10];
let B = 8;

// ! First Occurence:-
let first = null;

let leftFirst = 0;
let rightFirst = A.length-1;

while (leftFirst <= rightFirst){
    let mid = Math.floor((leftFirst+rightFirst)/2);

    if (A[mid] === B){
        first = mid;
        rightFirst = mid-1;
    }

    if (A[mid] < B){
        leftFirst = mid+1;
    }else{
        rightFirst = mid-1;
    }
}

