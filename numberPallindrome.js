let number = 7778;
let convertedNumber = String(number);

let start = 0;
let end = convertedNumber.length - 1;
let flag = undefined;


while (start < end){
    if (convertedNumber[start] == convertedNumber[end]){
        start++;
        end--;
    }else{
        flag = true;
        break;
    }
}

if (flag == true){
    console.log("Not a Pallindrome");
}else{
    console.log("It is a Pallindrome");
}