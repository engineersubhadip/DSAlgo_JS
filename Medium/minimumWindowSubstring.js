let s = "a";
let t = "aa";

if (t.length > s.length){
    console.log("");
}

let hm1 = new Map();
for (let i=0; i<t.length; i++){
    if (hm1.has(t[i]) == false){
        hm1.set(t[i],1);
    }else{
        hm1.set(t[i],hm1.get(t[i])+1);
    }
}

let left = 0;
let right = 0;
let i = -1;
let j = -1;
let hm2 = new Map();

while (right < s.length){
    if (hm2.has(s[right]) == false){
        hm2.set(s[right],1);
    }else{
        hm2.set(s[right],hm2.get(s[right])+1);
    }

    while (left <= right && (hm1.has(s[left]) == false || hm2.get(s[left]) > hm1.get(s[left]))){
        hm2.set(s[left],hm2.get(s[left])-1);
        if (hm2.has(s[left]) == false){
            hm2.delete(s[left]);
        }
        left+=1;
    }

    let flag = true;

    for (let [key,value] of hm1){
        if (hm2.has(key) == false || hm2.get(key) < hm1.get(key)){
            flag = false;
            break;
        }
    }

    if (flag){
        if (i == -1 && j == -1){
            i = left;
            j = right;
        }else if (j-i > right-left){
            i = left;
            j = right;
        }
    }

    right+=1;
}

console.log(s.slice(i,j+1));