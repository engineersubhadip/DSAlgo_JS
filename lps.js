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

let string = "aabaaba";

let value = kmp(string);

console.log(value);



