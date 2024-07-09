let arr = [1, 17, 8];

// TC : O(SqrtM * N * N!)
// SC : O(N[Recursive Stack Space] + M*K[M : Number of Perms; K : Avg Size of Perms])

if (arr.length === 1)
{
    console.log(0);
}

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

function checkSquare(num1,num2)
{
    let curr = num1 + num2;
    if (curr === 0)
    {
        return true;
    }

    for (let i=1; i*i <= curr; i++)
    {
        if (curr % i === 0)
        {
            if (i *i === curr)
            {
                return true;
            }
        }
    }
    return false;
}

let ans = [];

function backtracking(runArr,index,lastSeen)
{
    if (runArr.length === arr.length)
    {
        let temp = [...runArr];
        ans.push(temp);
        return;
    }

    for (let key in hm)
    {
        if (lastSeen === 0)
        {
            runArr.push(Number(key));
            hm[key] -= 1;
            backtracking(runArr,index+1,Number(key));
            runArr.pop();
            hm[key] += 1;
        }
        else if (hm[key] !== 0)
        {
            let curr = Number(key);
            let checkStatus = checkSquare(curr,lastSeen);
            if (checkStatus)
            {
                runArr.push(curr);
                hm[key] -= 1;
                backtracking(runArr,index+1,curr);
                runArr.pop();
                hm[key] += 1;
            }
        }
    }
}

backtracking([],0,0);

console.log(ans);