// Geek is going for a training program. He can perform any of these activities: Running, Fighting, and Learning Practice. Each activity has some point on each day. As Geek wants to improve all his skills, he can't do the same activity on two consecutive days. Help Geek to maximize his merit points as you are given a 2D array of points arr, corresponding to each day and activity.

let arr = [[1,2,5],[3,1,1],[3,3,3]];

function dfs(arr,index,lastTask)
{
    if (index === arr.length-1)
    {
        let maxVal = -1e9+7;
        for (let i=0; i<arr[index].length; i++)
        {
            if (i !== lastTask)
            {
                maxVal = Math.max(maxVal,arr[index][i]);
            }
        }
        return maxVal;
    }


    let maxVal = -1e9+7;

    for (let i=0; i<arr[index].length; i++)
    {
        if (i !== lastTask)
        {
            let runMax = arr[index][i] + dfs(arr,index+1,i);
            maxVal = Math.max(maxVal,runMax);
        }
    }

    return maxVal;
}

let ans = dfs(arr,0,3);

console.log(ans);

