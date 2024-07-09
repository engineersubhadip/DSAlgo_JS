// BetterStringGFG.js

// Given a pair of strings of equal lengths, Geek wants to find the better string. The better string is the string having more number of distinct subsequences.
// If both the strings have equal count of distinct subsequence then return str1.

let str1 = "busywyhviqbuucys";
let str2 = "ctzipqppautfdsgy";

let ans = {};

function backtracking(runArr,index,tarString)
{
    if (index >= tarString.length)
    {
        let temp = [...runArr];
        temp = temp.join('');

        if (ans[temp] === undefined && temp.length !== 0)
        {
            ans[temp] = 1;
        }
        return;
    }

    runArr.push(tarString[index]);
    backtracking(runArr,index+1,tarString);
    runArr.pop();

    backtracking(runArr,index+1,tarString);
}

ans = {};

backtracking([],0,str1);

let res1 = [];
for (let key in ans)
{
    res1.push(key);
}

ans = {};

backtracking([],0,str2);

let res2 = [];
for (let key in ans)
{
    res2.push(key);
}

if (res1.length >= res2.length)
{
    console.log("res1",res1.length,"res2",res2.length);
    console.log("str1",str1);
}
else
{
    console.log("str2",str2);
}