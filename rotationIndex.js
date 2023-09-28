let array = [12,15,17,18,1,5,7,9];

let left = 0;
let right = array.length-1;

while (left <= right){
    let mid = Math.floor((left+right)/2);

    // * Target Found:-
    if ((mid == 0 || array[mid] > array[mid-1]) && (mid == array.length-1 || array[mid] > array[mid+1])){
        console.log(array[mid]);
        break;
    }

    // * Movement:Left
    if (array[mid] >= array[0]){
        left = mid+1;
    }else if (array[mid] < array[0]){ //* Movement:Right
        right = mid-1;
    }
}
