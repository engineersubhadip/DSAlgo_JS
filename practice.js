let s = "penapplepen";
let arr = ["apple","pen"];
let hm = {};

for (let i=0; i<arr.length; i++)
{
    if (hm[arr[i]] === undefined)
    {
        hm[arr[i]] = 1;
    }
    else
    {
        hm[arr[i]] += 1;
    }
}

// let ans = false;

function backtracking(runArr,index,hm)
{
    if (runArr.join('').length > s.length)
    { 
        return false;
    }

    if (runArr.join('').length === s.length)
    {
        let temp = [...runArr];
        temp = temp.join('');
        if (temp === s)
        {
            console.log("temp",temp);
            // ans = true;
        }
        return temp === s;
    }

    for (let key in hm)
    {
        runArr.push(key);
        let boolVal = backtracking(runArr,index+1,hm);
        if (boolVal)
        {
            return true;
        }
        runArr.pop();
    }
}


let ans = backtracking([],0,hm);

console.log(ans);
