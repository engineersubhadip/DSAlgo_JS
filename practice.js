let  A = [2,2,2];

let hm = {};

for (let i=0; i<A.length; i++)
{
    A[i] = Number(A[i]);
    if (hm[A[i]] === undefined)
    {
        hm[A[i]] = 1;
    }
    else
    {
        hm[A[i]] += 1;
    }
}

let ans = [];

function custom(num)
{
    for (let i=1; i*i <= num; i++)
    {
        if (num % i === 0)
        {
            if (i*i === num)
            {
                return true;
            }
        }
    }
    return false;
}

function backtracking(runArr,index,lastSeen,hm)
{
    if (runArr.length === A.length)
    {
        let temp = [...runArr];
        if (temp.length > 1) // lets say the A = [41]. Then temp would have been [41]
        {
            ans.push(temp);
        }
        return;
    }

    for (let key in hm)
    {
        if (runArr.length === 0 && hm[key] > 0)
        {
            runArr.push(Number(key));
            lastSeen.push(Number(key));
            hm[key] -= 1;
            backtracking(runArr,index+1,lastSeen,hm);
            runArr.pop();
            lastSeen.pop();
            hm[key] += 1;
        }
        else if (runArr.length !== 0 && hm[key] > 0)
        {
            let lastNumber = lastSeen[lastSeen.length-1];
            let currNumber = Number(key);
            let status = custom(lastNumber+currNumber);
            if (status)
            {
                runArr.push(currNumber);
                lastSeen.push(currNumber);
                hm[currNumber] -= 1;
                backtracking(runArr,index+1,lastSeen,hm);
                runArr.pop();
                lastSeen.pop();
                hm[currNumber] += 1;
            }
        }
    }
}

backtracking([],0,[],hm);

console.log(ans);