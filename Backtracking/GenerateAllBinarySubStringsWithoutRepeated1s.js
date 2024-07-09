let num = 3;
let ans = [];

function backtracking(runArr,lastSeen)
{
    if (runArr.length === num)    
    {
        let temp = [...runArr];
        temp = temp.join('');
        ans.push(temp);
        return;
    }

    runArr.push(0);
    backtracking(runArr,0);
    runArr.pop();

    if (lastSeen !== 1)
    {
        runArr.push(1);
        backtracking(runArr,1);
        runArr.pop();
    }
}

backtracking([],0);

console.log(ans);