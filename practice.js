let arr = [1,2,3,4,5];
let pfOR = new Array(arr.length).fill(0);
pfOR[0] = arr[0];

for (let i=1; i<arr.length; i++)
{
    pfOR[i] = pfOR[i-1] | arr[i];
}

console.log(pfOR);