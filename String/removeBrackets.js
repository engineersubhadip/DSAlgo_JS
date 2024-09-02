let str = "d(ef"
// "d(ef" -> "def"

let stack = [];
let wrong = new Set();

for (let i=0; i<str.length; i++)
{
    if (str[i] === "(")
    {
        stack.push(i);
    }
    else if (str[i] === ")")
    {
        if (stack.length === 0)
        {
            wrong.add(i);
        }
        else
        {
            stack.pop();
        }
    }
}

for (let i=0; i<stack.length; i++)
{
    wrong.add(stack[i]);
}

let res = "";
console.log("wrong",wrong);
for (let i=0; i<str.length; i++)
{
    if (wrong.has(i) === true)
    {
        continue;
    }
    else
    {
        res += str[i];
    }
}

console.log(res);
