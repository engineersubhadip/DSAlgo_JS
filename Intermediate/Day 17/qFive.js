// Given an integer array A of size N and an integer B, 
// you have to return the same array after rotating it B times towards the right.

function rotation(array,start,end){
    let temp = undefined;
    while (start < end){
        temp = array[start];
        array[start] = array[end];
        array[end] = temp;

        start+=1;
        end-=1;
    }
    return array;
}


let A = [2, 5, 6];
let B = 1;

B %= A.length;

let valueOne = rotation(A,0,A.length-1);
let valueTwo = rotation(valueOne,0,B-1);
let valueThree = rotation(valueTwo,B,A.length-1);

console.log(valueThree);