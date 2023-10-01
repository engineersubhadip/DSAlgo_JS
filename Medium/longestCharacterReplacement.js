let s = "ABAB";
let k = 2;

let hashset = new Set();

for (let i=0; i<s.length; i++){
    if (hashset.has(s[i]) == false){
        hashset.add(s[i]);
    }
}

let maxLength = 0;

for (let [key,value] of hashset){
    let curChar = key;
    let left = 0;
    let right = 0;
    let runCount = 0;
    let otherCount = 0;

    while (right < s.length){
        if (s[right] != curChar){
            otherCount+=1;
        }

        while (left <= right && otherCount > k){
            if (s[left] != curChar){
                otherCount -= 1;
            }
            left+=1;
        }

        if (right-left+1 > runCount){
            runCount = right-left+1;
        }

        right+=1;
    }

    if (runCount > maxLength){
        maxLength = runCount;
    }
}

console.log(maxLength);