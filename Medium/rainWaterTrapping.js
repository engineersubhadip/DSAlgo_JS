const height = [4,2,0,3,2,5];

const prefixMax = new Array(height.length).fill(0);
prefixMax[0] = height[0];

for (let i=1; i<height.length; i++){
    prefixMax[i] = Math.max(prefixMax[i-1],height[i]);
}

const suffixMax = new Array(height.length).fill(0);
suffixMax[height.length-1] = height[height.length-1];

for (let i=height.length-2; i>=0; i--){
    suffixMax[i] = Math.max(suffixMax[i+1],height[i]);
}

let result = 0;

for (let i=1; i<height.length-1; i++){
    let leftBlockade = prefixMax[i-1];
    let rightBlockade = suffixMax[i+1];
    let yourBlockade = Math.min(leftBlockade,rightBlockade) - height[i];

    if (yourBlockade >= 0){
        result += yourBlockade;
    }
}

console.log(result);