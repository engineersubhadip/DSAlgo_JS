const array = [4,2,-7,6,9,1,-8,3];

let arrayLength = array.length;

let start = 0;

while (start < arrayLength){
    if (array[start] <= 0 || array[start] > arrayLength || array[start]-1 === start){
        start++;
    }else{
        let swapIndex = array[start]-1;
        if (array[start] === array[swapIndex]){
            start++;
        }else{
            let temp = array[start];
            array[start] = array[swapIndex];
            array[swapIndex] = temp;
        }
    }
}

let flag = false;
let value = null;

for (let i=0; i<array.length; i++){
    if (i !== array[i]-1){
        value = i+1
        flag = true;
        break;
    }
}

if (flag === false){
    console.log(arrayLength+1);
}else{
    console.log(value);
}