// You are given a constant array A.

// You are required to return another array which is the reversed form of the input array.

const A = [1,1,10];

const array = [];

let pointer = A.length-1;

while (pointer >= 0){
    array.push(A[pointer]);
    pointer -= 1;
}

console.log(array);