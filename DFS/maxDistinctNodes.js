let arr = [[6,2],[5,2],[4,2]];

arr.sort(function(a,b){
    let lvl1 = a[1];
    let lvl2 = b[1];

    if (lvl1 < lvl2)
    {
        return -1;
    }
    else if (lvl2 < lvl1)
    {
        return 1;
    }
    else
    {
        if (a[0] <= b[0])
        {
            return -1;
        }
        return 1;
    }
});


let ans = [];

if (arr.length === 1) // [[x,y]]
{
    ans.push([arr[0][0]]);
}
else{
    let prevLevel = arr[0][1];
    let runAns = [arr[0][0]];
    for (let i=1; i<arr.length; i++)
    {
        let currLevel = arr[i][1];
        if (currLevel === prevLevel)
        {
            runAns.push(arr[i][0]);
        }
        else{
            ans.push(runAns);
            prevLevel = currLevel;
            runAns = [arr[i][0]];
        }
    }
    ans.push(runAns);

    console.log(ans);
}