let s = "abciiidef";
let k = 3;

const array = [];
const vowels = ['a','e','i','o','u'];

let start = 0;
let end = k;
let runningCount = 0;

for (let i=start;i<end;i++){
    if (vowels.includes(s[i])){
        runningCount ++;
    }
}

array.push(runningCount);
start = 1;

while (end<s.length){
    if (vowels.includes(s[start-1])){
        runningCount -= 1;
    }

    if (vowels.includes(s[end])){
        runningCount += 1;
    }

    array.push(runningCount);
    start++;
    end++;
}


console.log(Math.max(...array));

