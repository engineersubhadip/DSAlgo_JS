let arr1 = [1,2,99,100,115];
let arr2 = [2,5,99,5,1,5];

arr1.sort((a,b) => a-b);

let set = new Set();

for (let i=0; i<arr2.length; i++)
{
    set.add(arr2[i]);
}

for (let i=0; i<arr1.length; i++)
{
    if (set.has(arr1[i]) === false)
    {
        console.log(arr1[i]);
        break;
    }
}

console.log(-1);
// arr2.sort((a,b) => a-b);


// let ans = -1;

// let i = 0;
// let j = 0;

// while (i < arr1.length && j < arr2.length)
// {
//     if (arr1[i] === arr2[j])
//     {
//         let tempI = i;
//         while (tempI < arr1.length && arr1[tempI] === arr1[i])
//         {
//             tempI += 1;
//         }

//         let tempJ = j;
//         while (tempJ < arr2.length && arr2[tempJ] === arr2[j])
//         {
//             tempJ += 1;
//         }

//         i = tempI;
//         j = tempJ;
//     }
//     else if (arr1[i] < arr2[j])
//     {
//         ans = arr1[i];
//         break;
//     }
//     else if (arr2[j] < arr1[i])
//     {
//         j ++;
//     }
// }

// console.log(ans);