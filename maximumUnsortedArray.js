let array = [12,15,19,17,16,21,22];

let leftMarker = undefined;
let rightMarker = undefined;

for (let i=1; i<array.length; i++){
    if (array[i] >= array[i-1]){
        continue;
    }else{
        leftMarker = i-1;
        break;
    }
}

for (let i=array.length-2; i>=0 ; i--){
    if (array[i] <= array[i+1]){
        continue;
    }else{
        rightMarker = i+1;
        break;
    }
}

if (leftMarker == undefined){
    console.log([-1]);
}
// console.log(leftMarker,rightMarker);

let maxValue = -Infinity;
let minValue = Infinity;

for (let i=leftMarker; i<=rightMarker; i++){
    maxValue = Math.max(maxValue,array[i]);
    minValue = Math.min(minValue,array[i]);
}

let i = 0;
let j = array.length-1;

while (i <= leftMarker && array[i] <= minValue){
    i++;
}

while(j >= rightMarker && array[j] >= maxValue){
    j--;
}

console.log(array.slice(i,j+1));