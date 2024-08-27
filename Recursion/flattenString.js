let str = "3[b2[ca]]"; // bcacabcacabcaca


// [2,a,2,b]
//1.  arr = [2,a,2,b]; index = 0
// number = 2; retVal = dfs -> "abb"; ans = "abbabb"

// 2. arr = [2,a,2,b]; index = 1
// ans = "a"; retVal = dfs -> "bb" , ans = "abb" (returing)

// 3. arr = [2,a,2,b]; index = 2
// number = 2; retVal = dfs -> "b"; ans = "bb" (returning)

// 4. arr = [2,a,2,b]; index = 3
// base case

function convertStringArr(str)
{
    let arr = [];
    let i = 0;

    while (i < str.length)
    {
        if (str[i] >= "0" && str[i] <= "9")
        {
            let temp = "";
            let runI = i;
            while (runI < str.length && (str[runI] >= "0" && str[runI] <= "9"))
            {
                temp += str[runI];
                runI += 1;
            }
            let currNumber = Number(temp);
            arr.push(currNumber);

            i = runI;
        }
        else if (str[i] === "[" || str[i] === "]")
        {
            i += 1;
        }
        else
        {
            let temp = "";
            let runI = i;

            while (runI < str.length && (str[runI] >= "a" && str[runI] <= "z"))
            {
                temp += str[runI];
                runI += 1;
            }

            arr.push(temp);
            i = runI;
        }
    }

    return arr;
}


function dfs(arr,index)
{
    
    if (index === arr.length-1)
    {
        return arr[index];
    }

    let ans = "";
    if (typeof arr[index] === "number")
    {
        let number = arr[index]; // 2
        let retVal = dfs(arr,index+1); // "b"
        for (let i=0; i<number; i++)
        {
            ans += retVal;
        }
    }
    else
    {
        ans += arr[index];
        let retVal = dfs(arr,index+1);
        ans += retVal;
    }
    return ans;
}


let arr = convertStringArr(str);

let ans = dfs(arr,0);

// console.log("arr",arr);
console.log("ans",ans);
