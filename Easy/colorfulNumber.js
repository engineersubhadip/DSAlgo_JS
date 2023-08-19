let A = 236;

const array = [];

while (A>0){
    let remainder = A%10;
    array.push(remainder);
    A = Math.floor(A/10);
}

array.reverse();



