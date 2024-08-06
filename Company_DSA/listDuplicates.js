const users = [
    { id: 1, name: 'Amit Kumar', email: 'amit@example.com' },
    { id: 2, name: 'Sumit Kumar', email: 'sumit@example.com' },
    { id: 3, name: 'Ami Kumar', email: 'amit@example.com' },
    { id: 4, name: 'Raj Kumar', email: 'raj@example.com' },
    { id: 5, name: 'Amit Kumar', email: 'amit@example.com' }
];

function filterDuplicates(arr,reference)
{
    let duplicates = [];

    let hm = {};
    for (let i=0; i<arr.length; i++)
    {
        let currObj = arr[i];
        if (currObj[reference] === undefined)
        {
            return "Enter valid Key...";
        }
        let currReference = currObj[reference];

        if (hm[currReference] === undefined)
        {
            hm[currReference] = 1;
        }
        else
        {
            hm[currReference] += 1;
        }
    }

    for (let i=0; i<arr.length; i++)
    {
        let currObj = arr[i];
        let currReference = currObj[reference];

        if (hm[currReference] > 1)
        {
            duplicates.push(currObj);
        }
    }

    return duplicates; // * return arr of objects
}

let ans = filterDuplicates(users,"email");

console.log(ans);
