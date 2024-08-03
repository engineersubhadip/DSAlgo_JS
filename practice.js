let str = "stataestanrstante";
let tar = "stan";

let res = "";
let i = 0;

while (i < str.length)
{
    if (str[i] === tar[0])
    {
        let tempI = i;
        let tempJ = 0;

        while (tempI < str.length && tempJ < tar.length && str[tempI] === tar[tempJ])
        {
            tempI += 1;
            tempJ += 1;
        }

        if (tempJ === tar.length)
        {
            i = tempI;
        }
        else
        {
            res += str[i];
            i += 1;
        }
        
    }
    else
    {
        res += str[i];
        i += 1;
    }
}

console.log(res);