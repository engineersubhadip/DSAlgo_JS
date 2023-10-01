let s = "pwwkew";

let hashmap = new Map();

let left = 0;
let right = 0;
let maxLength = 0;

while (right < s.length){
    if (hashmap.has(s[right]) == false){
        hashmap.set(s[right],1);
    }else{
        while (left <= right && hashmap.has(s[right]) == true && hashmap.get(s[right]) == 1){
            hashmap.set(s[left],hashmap.get(s[left])-1);
            if (hashmap.get(s[left]) == 0){
                hashmap.delete(s[left]);
            }
            left+=1;
        }
    }

    hashmap.set(s[right],1);

    if (hashmap.size > maxLength){
        maxLength = hashmap.size;
    }

    right+=1;

}

console.log(maxLength);