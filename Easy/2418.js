const names = ["Mary","John","Emma"];
const heights = [180,165,170];

let hashmap = new Map();

for (let i = 0; i< names.length; i++){
    if (! hashmap.has(names[i])){
        hashmap.set(names[i],heights[i]);

    }
}

const array = [];

for (let [key,value] of hashmap){
    array.push([key,hashmap.get(key)]);
}


array.sort(customComparator);


function customComparator(a,b){
    if (a[1] >= b[1]){
        return -1;
    }else{
        return 1;
    }
}

const resultArray = [];

for (let i=0; i< array.length; i++){
    resultArray.push(array[i][0]);
}

console.log(resultArray);

