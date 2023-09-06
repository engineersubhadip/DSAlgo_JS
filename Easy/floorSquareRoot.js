let num = 84;

let left = 1;
let right = num;
let ans = null;

while (left <= right){
    let mid = Math.floor((left+right)/2);

    if (mid*mid > num){
        right = mid-1;
    }else{
        ans = mid;
        left = mid+1;
    }
}

console.log(ans);