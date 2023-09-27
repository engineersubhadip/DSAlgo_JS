let left = 0;
let right = arr.length-1;

while (left <= right){
    let mid = Math.floor((left+right)/2);
    
    if ((mid == 0 || arr[mid] > arr[mid-1]) && (mid == arr.length-1 || arr[mid] > arr[mid+1])){
        return arr[mid];
    }
    
    if (arr[mid] > arr[mid-1]){
        left = mid+1;
    }else if (arr[mid] > arr[mid+1]){
        right = mid-1;
    }
}