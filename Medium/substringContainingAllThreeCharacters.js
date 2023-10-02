let s = "abc";

let hmShort = new Map();

let j = 0;
let right = 0;
let count = 0;

while (right < s.length){
    if (hmShort.has(s[right]) == false){
        hmShort.set(s[right],1);
    }else{
        hmShort.set(s[right],hmShort.get(s[right])+1);
    }

    while (j <= right && hmShort.size == 3){
        if (hmShort.get(s[j]) > 1){
            hmShort.set(s[j],hmShort.get(s[j])-1);
        }else{
            break;
        }
        j++;
    }

    if (hmShort.size == 3){
        count += (j+1);
    }
    right+=1;
}

console.log(count);