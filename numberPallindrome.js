let number = 709;
let convertedNumber = String(number);

let start = 0;
let end = convertedNumber.length - 1;


while (start < end){
    if (convertedNumber[start] == convertedNumber[end]){
        start++;
        end--;
    }else{
        console.log("Not a Pallindrome");
        break;
    }
}

if (start > end){
    console.log("Pallindrome");
}