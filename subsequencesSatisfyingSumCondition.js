nums.sort((a,b) => a-b);

let mod = 1e9+7;
n = nums.length;
let power = new Array(n+2).fill(0);
power[0] = 1;

for (let i=1; i<nums.length; i++){
power[i] = power[i-1]*2;
power[i] = power[i] % mod;
}

let count = 0;
let i = 0;
let j = nums.length-1;

while (i <= j){
if (nums[i] + nums[j] <= target){
    count += power[j-i];
    i+=1;
}else{
    j-=1
}
}

return count % mod;
