let array = [3,3,5,5,8,8,9,10,10,12,12];

let left = 0;
let right = array.length-1;

while (left <= right){
    let mid = Math.floor((left+right)/2);

    // * Target Found:-
    if ((mid == 0 || array[mid] != array[mid-1]) && (mid == array.length-1 || array[mid] != array[mid+1])){
        console.log(array[mid]);
        break;
    }

    // * Right Movement:-
    if (array[mid] == array[mid-1] && (mid-1) % 2 == 0){
        left = mid+1;
    }else if (array[mid] == array[mid+1] && mid % 2 == 0){
        left = mid+1;
    }

    // * Left Movement:-
    if (array[mid] == array[mid+1] && mid % 2 == 1){
        right = mid-1;
    }else if (array[mid] == array[mid-1] && (mid-1) % 2 == 1){
        right = mid-1;
    }
}
