let A = [1, 4, 10, 2, 1, 5];

function mergeArray(A,start,mid,end){
    let array = new Array(end-start+1).fill(0);
    let i = start;
    let j = mid+1;
    let k = 0;

    while (i <= mid && j <= end){
        if (A[i] <= A[j]){
            array[k] = A[i];
            i+=1;
        }else{
            array[k] = A[j];
            j+=1;
        }
        k+=1;
    }

    while (i <= mid){
        array[k] = A[i];
        i+=1;
        k+=1;
    }

    while (j <= end){
        array[k] = A[j];
        j+=1;
        k+=1;
    }

    for (let p = start; p<=end; p++){
        A[p] = array[p-start];
    }
    
}
function mergeSort(array,start,end){
    if (start >= end){
        return;
    }
    let mid = Math.floor((start+end)/2);
    mergeSort(array,start,mid);
    mergeSort(array,mid+1,end);
    mergeArray(array,start,mid,end);
}

mergeSort(A,0,A.length-1);

console.log(A);
