let arr = [{name: 'Sara', age:24},{name: 'John', age:24}, {name: 'Jack', age:25}];

console.log("Before Sorting",arr);

arr.sort(function(a,b){
    let obj1 = a;
    let obj2 = b;

    let name1 = obj1.name.toLowerCase();
    let name2 = obj2.name.toLowerCase();

    let minName = undefined;
    let maxName = undefined;

    if (name1.length <= name2.length)
    {
        minName = name1;
        maxName = name2;
    }
    else
    {
        minName = name2;
        maxName = name1;
    }

    for (let i=0; i<minName.length; i++)
    {
        let ascii1 = minName[i].charCodeAt(0);
        let ascii2 = maxName[i].charCodeAt(0);

        if (ascii1 < ascii2)
        {
            if (name1 === minName)
            {
                return -1;
            }
            return 1;
        }
        else if (ascii2 < ascii1)
        {
            if (name1 === maxName)
            {
                return -1;
            }
            return 1;
        }
    }

    if (name1 === minName)
    {
        return -1;
    }
    return 1;
});

console.log("After Sorting",arr);

