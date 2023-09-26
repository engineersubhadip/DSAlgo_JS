let array = [10,3,8,15,6,12,2,18,7,15,14];

function rearrangeArray(array,start,end){
    let reference = array[start];
    let i = start;
    let j = end;

    while (i <= j){
        if (array[i] <= reference){
            i++;
        }else if (array[j] > reference){
            j--;
        }else{
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    let temp = array[start];
    array[start] = array[j];
    array[j] = temp;

    return j;
}

function quickSort(array,start,end){
    if (start >= end){
        return;
    }

    let setPoint = rearrangeArray(array,start,end);
    quickSort(array,start,setPoint-1);
    quickSort(array,setPoint+1,end);
}

quickSort(array,0,array.length-1);
console.log(array);