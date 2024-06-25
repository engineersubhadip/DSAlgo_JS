let obj = {"g":8, "a":{"b":3,"c":{"f":5}}};

// OP :- {"g":8, "a-b":3, "a-c-f":5}
// TC : O(N) and SC : O(N) for the Recursive Stack Space

function dfs(obj)
{
    let finalObj = {};
    for (let key in obj)
    {
        if (typeof obj[key] === "number")
        {
            finalObj[key] = obj[key];
        }
        else
        {
            let prevKey = key; // "c"
            let tempObj = dfs(obj[key]); // {"f":5}
            
            // Updating the Key Name in tempObj
            for (let currKey in tempObj)
            {
                let newKey = prevKey+'-'+currKey;
                tempObj[newKey] = tempObj[currKey];
                delete tempObj[currKey];
            }
            // tempObj = {"c-f" : 5}
            // Pushing the content of tempObj into finalObj
            for (let newKey in tempObj)
            {
                finalObj[newKey] = tempObj[newKey];
            }
        }
    }
    return finalObj;
}

let ans = dfs(obj);

console.log(ans);