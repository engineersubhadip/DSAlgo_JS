const array = [1, 9, 2, 8, 6, 4, 3];
let k = 100;

let left = 0;
let right = 0;
let count = 0;
let runningProduct = 1;

while (right < array.length){
    runningProduct *= array[right];
    while (left <= right && runningProduct >= k){
        runningProduct = Math.floor(runningProduct/array[left]);
        left++
    }

    if (runningProduct < k){
        count += (right-left+1);
    }

    right++;
}

console.log(count);