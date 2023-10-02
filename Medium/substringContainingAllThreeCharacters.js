let s = "abcabc";

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

// 0 1 2 3 4 5
// a b c a b c
//       j
//           R

// ans = j+1 = 1(abc)+2(bca,abca)+3(cab,bcab,abcab)+4(abc,cabc,bcabc,abcabc)
// hm:
// a:1
// b:1
// c:1
