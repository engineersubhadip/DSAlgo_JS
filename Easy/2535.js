const array = [1,15,6,3];

let arraySum = 0

for (let i=0; i< array.length; i++){
    arraySum+=array[i];
}

let digitSum = 0

for (let i=0; i< array.length; i++){
    let runningSum = 0;
    while (array[i] > 0){
        runningSum += array[i]%10;
        array[i] = Math.floor(array[i]/10);
    }
    digitSum += runningSum;
}

console.log(arraySum);
console.log(digitSum);

console.log(Math.abs(arraySum - digitSum));
