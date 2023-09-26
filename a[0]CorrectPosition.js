let array = [10,3,8,15,6,12,2,18,7,15,14];

let start = 0; // I Pointer
let end = array.length-1; // J pointer
let reference = array[0];

while (start <= end){
    if (array[start] <= reference){
        start++;
    }else if (array[end] > reference){
        end--;
    }else{
        let temp = array[start];
        array[start] = array[end];
        array[end] = temp;
    }
}

let temp = array[0];
array[0] = array[end];
array[end] = temp;

console.log(array);