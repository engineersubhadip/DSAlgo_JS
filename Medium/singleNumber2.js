function checkBit(number,bitPosition){
    if ((number & (1 << bitPosition))===0){
        return false;
    }else{
        return true;
    }
}

const nums = [2,2,3,2];
let answer = 0;

for (let i=0; i<32; i++){
    let count = 0;
    for (let j=0; j<nums.length; j++){
        if (checkBit(nums[j],i) === true){
            count++;
        }
    }
    if (count % 3 === 1){
        answer += (1 << i);
    }
}

console.log(answer);
