let maxLength = 0;

function calculateMaxPath(root,hm)
{
    if (root === null)
    {
        return;
    }

    if (hm[root.data] === undefined)
    {
        hm[root.data] = 1;
    }
    else
    {
        return;
    }

    if (root.left === null && root.right === null)
    {
        let runLen = Object.keys(hm).length;
        maxLength = Math.max(maxLength,runLen);
        return;
    }

    calculateMaxPath(root.left,hm);
    calculateMaxPath(root.right,hm);
}

calculateMaxPath(root,{});

