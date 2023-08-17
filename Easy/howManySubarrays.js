// https://www.scaler.com/help_requests/809749/?ref=call-now

// Given a String we need to find out in how many Subarrays a particular element is present.

let string = "acdbccb";
let stringLength = string.length;
let total = Math.floor(stringLength * (stringLength+1)/2);
let start = 0;
let end = 0;



while (end < string.length){
    if (string[end] === 'b'){
        let runningLength = end-start;
        total -= Math.floor(runningLength * (runningLength+1)/2);
        start = end+1;
    }
    end++;
}

let runningLength = end-start;
total -= Math.floor(runningLength * (runningLength +1)/2);

console.log(total);
