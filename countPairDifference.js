let nums = [3,1,4,1,5];
let k = 2;

nums.sort((a,b) => a-b);

let count = 0;

let i = 0;
let j = i+1;

while (i < nums.length && j < nums.length){
    if (i == j){
        j+=1;
        continue;
    }

    if (Math.abs(nums[j] - nums[i]) == k){
        count+=1;

        let run_i = i;
        let run_j = j;

        while (run_i < nums.length && nums[run_i] == nums[i]){
            run_i++;
        }

        while (run_j < nums.length && nums[run_j] == nums[j]){
            run_j++;
        }

        i = run_i;
        j = run_j;

    }else if (Math.abs(nums[j] - nums[i]) < k){
        j++;
    }else{
        i++;
    }
}

console.log(count);