let maxArea = 0;
        let i = 0;
        let j = A.length-1;

        while (i < j){
            let maxHeight = Math.min(A[i],A[j]);
            let breadth = j-i;
            let runningArea = maxHeight * breadth;
            maxArea = Math.max(maxArea,runningArea);

            if (A[i] <= A[j]){
                i++;
            }else{
                j--;
            }
        }

        return maxArea;