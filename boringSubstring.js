let A = "abcd";

let odd = "";
let even = "";

for (let i=0; i<A.length; i++){
    let asciiValue = A[i].charCodeAt(0);
    if (asciiValue % 2 == 0){
        even += A[i];
    }else{
        odd += A[i];
    }
}

let valueOne = odd.split("").sort().join("");
let valueTwo = even.split("").sort().join("");

let resultOne = valueOne+valueTwo;
let resultTwo = valueTwo+valueOne;

let flagOne = true;

for (let i=1;i<resultOne.length;i++){
    let asciiValueOld = resultOne[i-1].charCodeAt(0);
    let asciiValueNew = resultOne[i].charCodeAt(0);

    if (Math.abs(asciiValueNew-asciiValueOld) == 1){
        flagOne = false;
        break;
    }
}

let flagTwo = true;

for (let i=1; i<resultTwo.length; i++){
    let asciiValueOld = resultTwo[i-1].charCodeAt(0);
    let asciiValueNew = resultTwo[i].charCodeAt(0);

    if (Math.abs(asciiValueNew-asciiValueOld) == 1){
        flagTwo = false;
        break;
    }
}

if (flagOne == true || flagTwo == true){
    console.log(1);
}else{
    console.log(0);
}