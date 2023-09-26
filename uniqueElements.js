let A = [2, 4, 5];
A.sort((a,b) => a-b);

let count = 0;

for (let i=1; i<A.length; i++){
    if (A[i-1] < A[i]){
        continue;
    }else if (A[i-1] == A[i]){
        A[i]+=1;
        count++;
    }else if (A[i-1] > A[i]){
        let difference = Math.abs(A[i-1] - A[i]);
        A[i] += difference+1;
        count += difference+1;
    }
}

console.log(count);