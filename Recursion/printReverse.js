let str = "scaleracademy";
console.log("Before",str);
str = str.split("");


let res = "";

function recursion(str,start,end)
{
    if (start > end)
    {
        return;
    }

    let temp = str[start];
    str[start] = str[end];
    str[end] = temp;

    recursion(str,start+1,end-1);
}

recursion(str,0,str.length-1);

str = str.join("");

console.log("After",str);