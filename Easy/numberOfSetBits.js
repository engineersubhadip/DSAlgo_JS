function checkBit(number,bitPosition){
    if ((number & (1 << bitPosition)) === 0){
        return false;
    }else{
        return true;
    }
}

let number = 11;
let count = 0;

for (let i=0; i<=31; i++){
    if (checkBit(number,i) === true){
        count++;
    }
}

console.log(count);