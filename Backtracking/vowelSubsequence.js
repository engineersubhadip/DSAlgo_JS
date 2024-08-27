// let str = "aeeiioauu";
let str = "aaaeeiiioaouuu"

let maxLen = 1;

// Assuming we already have the array containing only vowels, with their relative
// order same as that of the given string

function backtracking(str,runArr,index,lastSeen)
{
    if (index >= str.length)
    {
        let temp = [...runArr];
        maxLen = Math.max(maxLen,temp.length);
        return;
    }

    if (str[index].charCodeAt(0) >= lastSeen)
    {
        runArr.push(str[index]);
        backtracking(str,runArr,index+1,str[index].charCodeAt(0));
        runArr.pop();
    }

    backtracking(str,runArr,index+1,lastSeen);
}

backtracking(str,[],0,-1e9+7);

console.log(maxLen);