let str = "javascript";

let hashmap = new Map();

for (let char of str){
    if (hashmap.has(char)){
        hashmap.set(char,hashmap.get(char)+1);
    }else{
        hashmap.set(char,1);
    }
}

console.log(hashmap);