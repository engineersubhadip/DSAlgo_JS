let arr = [1,2,3,4,5,6,7,8,9,10];

// * 1. Given index is at 0
// * 2. Given index is at last
// * 3. Given index is at middle
// * 4. Given index is out of bounds

// * Insert at 0th, last, middle, unbounded
function validInsertion(arr,pos,ele)
{
    if (pos > arr.length)
    {
        return "Enter a valid Position...";
    }
    if (pos === 0)
    {
        let newArr = [];
        newArr.push(ele);
        for (let i=0; i<arr.length; i++)
        {
            newArr.push(arr[i]);
        }

        let lastEle = arr[arr.length-1];
        for (let i=0; i<arr.length; i++)
        {
            arr[i] = newArr[i];
        }
        arr.push(lastEle);
        return arr;
    }
    else if (pos === arr.length)
    {
        arr.push(ele);
        return arr;
    }
    else
    {
        // middle
        let arr1 = arr.slice(0,pos);
        let arr2 = arr.slice(pos,arr.length);
        arr1.push(ele);
        arr1 = arr1.concat(arr2);
        for (let i=0; i<arr1.length; i++)
        {
            arr[i] = arr1[i];
        }

        return arr;
    }
}

let ans = validInsertion(arr,8,"Twenty");

console.log(ans);