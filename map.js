const array = [1,1,2,3,2];

let hashmap = new Map();

for (let i=0; i<array.length; i++){
    if (hashmap.has(array[i]) === true){
        hashmap.set(array[i],hashmap.get(array[i])+1);
    }else{
        hashmap.set(array[i],1);
    }
}

// console.log(hashmap);

// Iterating in a hashmap
for (let [key,val] of hashmap){
    console.log(key,hashmap.get(key));
}