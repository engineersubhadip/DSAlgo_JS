const nums = [13,25,83,77];

const array = [];

for (let i=0; i< nums.length; i++){
    const container = [];
    while (nums[i] > 0){
        container.push(nums[i]%10);
        nums[i] = Math.floor(nums[i]/10);
    }
    let containerLength = container.length;
    for (let j=containerLength-1; j>=0; j--){
        array.push(container[j]);
    }
}

console.log(array);
