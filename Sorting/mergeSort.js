let arr = [12,13,9,8,23,4,1,6];

console.log("Before Sorting",arr);

function mergeArr(arr,start,mid,end)
{
    let newArr = new Array(end-start+1).fill(0);

    let left = start; //start,mid
    let right = mid+1; //mid+1,end
    let k = 0;

    while (left <= mid && right <= end)
    {
        if (arr[left] <= arr[right]) 
        {
            newArr[k] = arr[left];
            left += 1;
        }
        else
        {
            newArr[k] = arr[right];
            right += 1;
        }
        k += 1;
    }

    while (left <= mid)
    {
        newArr[k] = arr[left];
        left += 1;
        k += 1;
    }

    while (right <= end)
    {
        newArr[k] = arr[right];
        right += 1;
        k += 1;
    }

    for (let i=start; i<=end; i++)
    {
        arr[i] = newArr[i-start];
    }
}


function mergeSort(arr,start,end)
{
    if (start >= end)
    {
        return;
    }

    let mid = Math.floor((start+end)/2);
    mergeSort(arr,start,mid);
    mergeSort(arr,mid+1,end);
    mergeArr(arr,start,mid,end);
}

mergeSort(arr,0,arr.length-1);

console.log("After Sorting",arr);