function checkBit(number,bitPosition){
    if ((number & (1 << bitPosition)) === 0){
        return false;
    }else{
        return true;
    }
}

const nums = [1,2,1,3,2,5];

let result = 0;

for (let i=0; i<nums.length; i++){
    result = result ^ nums[i];
}

let refBitIndex = null;

for (let i=0; i<32; i++){
    if (checkBit(result,i) === true){
        refBitIndex = i;
        break;
    }
}

const setBit = new Array();
const unsetBit = new Array();

for (let i=0; i<nums.length; i++){
    if (checkBit(nums[i],refBitIndex) === true){
        setBit.push(nums[i]);
    }else{
        unsetBit.push(nums[i]);
    }
}

let valueOne = 0;
let valueTwo = 0;

for (let i=0; i<setBit.length; i++){
    valueOne = valueOne ^ setBit[i];
}

for (let i=0; i<unsetBit.length; i++){
    valueTwo = valueTwo ^ unsetBit[i];
}

console.log([valueOne,valueTwo]);
