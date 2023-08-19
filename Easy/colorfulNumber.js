let A = 23;

const array = [];

while (A>0){
    let remainder = A%10;
    array.push(remainder);
    A = Math.floor(A/10);
}

array.reverse();

const prefix = [];

for (let i=0; i<array.length; i++){
    prefix.push(1);
}

prefix[0] = array[0];

for (let i=1; i<array.length; i++){
    prefix[i] = prefix[i-1]*array[i];
}

let hashset = new Set();

for (let i=0; i<array.length; i++){
    let runningProduct = 0;
    for (let j=i; j<array.length; j++){
        if (i === 0){
            runningProduct = prefix[j];
        }else{
            runningProduct = Math.floor(prefix[j]/prefix[i-1]);
        }

        if (hashset.has(runningProduct)){
            console.log(false);
        }else{
            hashset.add(runningProduct);
        }
    }
}

console.log(true);



