let str = 'gbcde';

function recursion(index,str)
{
    if (index === str.length-1)
    {
        return str[index];
    }

    let temp = {};

    let currChar = str[index];
    let faithCall = recursion(index+1,str);
    console.log("faithCall",faithCall);
    temp[currChar] = faithCall;
    console.log("temp",temp);
    return temp;
    
}

let ans = recursion(0,str);

console.log("ans",ans);