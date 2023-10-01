let mod = 1e9+7;
let i = 0;
let j = A.length-1;
let count = 0;

while (i < j){
    if (A[i]+ A[j] == B){
        let run_i = i;
        let run_j = j;
        let count_i = 0;
        let count_j = 0;

        while (run_i < A.length && A[i] == A[run_i]){
            count_i+=1;
            run_i++;
        }

        while (run_j >= 0 && A[j] == A[run_j]){
            count_j+=1;
            run_j--;
        }

        if (A[i] == A[j]){
            count += Math.floor(count_i * (count_i-1)/2);
        }else{
            count += (count_i * count_j);
        }

        i = run_i;
        j = run_j;
    }else if (A[i] + A[j] < B){
        i++;
    }else{
        j--;
    }
}
return count % mod;