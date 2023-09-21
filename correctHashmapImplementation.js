let array = [1,0,0,1,1,1,0,1,0,0,1];

// * Creating a Frequency Map:-
let hashmap = new Map();
hashmap.set("name","Subhadip");

for (let i=0; i<array.length; i++){
    if (! hashmap.has(array[i])){ // You are encountering it for the first time.
        // ! Increase the frequency:-
        hashmap.set(array[i],1)
    }else{ // You are encountering it for the first time.
        hashmap.set(array[i],hashmap.get(array[i])+1)
    }
}

console.log(hashmap);
console.log(hashmap.get(0));
hashmap.delete(0);
console.log(hashmap);