let arr = [12,13,9,8,23,4,1,6];

console.log("Before Sorting",arr);

function findPiv(arr,start,end)
{
    let refEle = arr[start];
    let left = start+1;
    let right = end;

    while (left <= right)
    {
        if (arr[left] <= refEle)
        {
            left += 1;
        }
        else if (arr[right] > refEle)
        {
            right -= 1;
        }
        else
        {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left += 1;
            right -= 1;
        }
    }

    let temp = arr[start];
    arr[start] = arr[right];
    arr[right] = temp;

    return right;
}


function quickSort(arr,start,end)
{
    if (start >= end)
    {
        return;
    }
    
    let pivot = findPiv(arr,start,end);
    quickSort(arr,start,pivot-1);
    quickSort(arr,pivot+1,end);
}

quickSort(arr,0,arr.length-1);

console.log("After Sorting",arr);