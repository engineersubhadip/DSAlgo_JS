let s = "applepenapple";
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

let ans = false;

function backtracking(runArr,index,hm) {
    if (runArr.join("").length > s.length)
    {
        return;
    }
    if (runArr.join("").length === s.length)
    {
        let temp = [...runArr];
        temp = temp.join("");
        let flag = true;
        console.log("temp",temp);
        for (let i=0; i<temp.length; i++)
        {
            if (temp[i] !== s[i])
            {
                flag = false;
                break;
            }
        }

        if (flag)
        {
            ans = true;
        }
        return;
    }

    for (let key in hm)
    {
        runArr.push(key);
        backtracking(runArr,index+1,hm);
        runArr.pop();
    }
}


backtracking([],0,hm);

console.log(ans);