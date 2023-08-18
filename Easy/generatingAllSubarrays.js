const A = [5, 2, 1, 4];

const result = [];

for (let i=0; i<A.length; i++){
    for (let j=i; j<A.length; j++){
        const container=[];
        for (let k=i; k<=j; k++){
            container.push(A[k]);
        }
        result.push(container);
    }
}

console.log(result);
