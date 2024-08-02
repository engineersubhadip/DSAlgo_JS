let arr = [
    {"name":"S1","city" : "C1", "pincode" : 123},
    {"name":"S2","city" : "C1", "pincode" : 124},
    {"name":"S3","city" : "C2", "pincode" : 125},
    {"name":"S4","city" : "C1", "pincode" : 126},
    {"name":"S5","city" : "C3", "pincode" : 127},
    {"name":"S6","city" : "C3", "pincode" : 132},
    {"name":"S7","city" : "C4", "pincode" : 112}
]

function getObjects(arr,cityName)
{
    let res = {};
    
    for (let i=0; i<arr.length; i++)
    {
        let currCity = arr[i].city;
    
        if (res[currCity] === undefined)
        {
            res[currCity] = [arr[i]];
        }
        else
        {
            res[currCity].push(arr[i]);
        }
    }
    
    // console.log(res);
    
    let output = [];

    for (let key in res)
    {
        if (key === cityName)
        {
            let arr = res[key];
            for (let i=0; i<arr.length; i++)
            {
                output.push(arr[i]);
            }
        }
    }

    if (output.length === 0)
    {
        return "City Not Found";
    }
    return output;
}

let res = getObjects(arr,"C5");

console.log(res);
