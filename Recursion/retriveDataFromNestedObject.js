let obj = {
    "a" : {
        "b" : {
            "c" : [1,2,4]
        }
    }
};

// getKey(obj,"a.b.c"); // 13
// getKey(obj,"a.b.c.0");
// getKey(obj,"a.b.c[1]");
// getKey(obj,["a","b","c","2"]);
// getKey(obj,"a.b.c[3]");
// getKey(obj,"a.c."learning");
// 
// str = str.split("."); // ["a","b","c"]

let str = "a.b.c.2";

function modifyString(str)
{
    if (Array.isArray(str) === true)
    {
        return str;
    }
    str = str.replace(/\[(\w+)\]/g,".$1");
    str = str.split(".");

    return str;
}


function getKey(obj,arr,index)
{
    let currObj = obj;
    for (let i=0; i<arr.length; i++)
    {
        if (currObj[arr[i]] === undefined)
        {
            return "Key Not Found";
        }
        currObj = currObj[arr[i]];
    }
    return currObj;
}

let arr = modifyString(str);

let ans = getKey(obj,arr,0);

console.log("ans",ans);

// str : ["a","b","c"]

// let obj = {
//     "a" : {
//         "b" : {
//             "c" : 13
//         }
//     }
// };

// 1. getKey(obj,["a","b","c",0]) currKey = "a"; 
// currObj = {
//         "b" : {
//             "c" : 13
//         }
//     }
// result = dfs(13)


// 2. getKey(obj,["a","b","c"],1)
// currKey = "b"
// currObj = {
//             "c" : 13
//         }
// result = dfs(13)

// 3. getKey({
//             "c" : 13
//         }, ["a","b","c"], 2)
// currKey = "c"
// currObj = 13 (returned);