// ! KMP Brute Force

function kmp(string){
    let prefixArray = new Array();

    for (let i=0; i<string.length-1; i++){
        let runString = "";
        for (let k=0; k<=i; k++){
            runString += string[k];
        }
        prefixArray.push(runString);
    }

    let suffixArray = new Array();

    for (let i=string.length-1; i>0; i--){
        let runString = "";
        for (let j=i;j<string.length; j++){
            runString += string[j];
        }
        suffixArray.push(runString);
    }

    let maxValue = 0;

    for (let i=0; i<prefixArray.length; i++){
        let flag = true;
        let currentPrefix = prefixArray[i];
        let currentSuffix = suffixArray[i];

        for (let j=0; j<currentPrefix.length; j++){
            if (currentPrefix[j] != currentSuffix[j]){
                flag = false;
                break;
            }
        }
        if (flag == true){
            maxValue = Math.max(maxValue,currentPrefix.length);
        }
    }

    return maxValue;
}

// "adacd" : 0 not
// 


// "dc"

// "dcaaaz $ zaaacd"
// "cdaaaz"

        |
1234#4321
        2

let string = "adacd#dcada";

let lpsArray = new Array(string.length).fill(0);
let index = 0;

for (let i=0; i<string.length; i++){
    let value = kmp(string.slice(0,i+1));
    lpsArray[index] = value;
    index+=1;
}

console.log(lpsArray);



