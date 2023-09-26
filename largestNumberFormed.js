let array = [3,30,34,5,9];

for (let i=0; i<array.length; i++){
    array[i] = String(array[i]);
}

function comparator(val1,val2){
    let op1 = val1+val2;
    let op2 = val2+val1;

    if (op1 >= op2){
        return -1;
    }else{
        return 1;
    }
}

array.sort(comparator);

let finalAns = "";

for (let i=0; i<array.length; i++){
    finalAns += array[i];
}

if (array[0] == "0"){
    console.log("0");
}
console.log(Number(finalAns));



