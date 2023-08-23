const nums = [3,30,34,5,9];

function customComparator(numberOne,numberTwo){
    numberOneStr = String(numberOne)+String(numberTwo);
    numberTwoStr = String(numberTwo)+String(numberOne);

    if (numberOneStr >= numberTwoStr){
        return -1;
    }else{
        return 1;
    }

}

nums.sort(customComparator);

let value = "";
for (let i=0; i<nums.length; i++){
    value += String(nums[i]);
}

console.log(value);

