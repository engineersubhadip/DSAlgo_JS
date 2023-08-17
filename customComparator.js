const a = [[12, 'AAA'], [18, 'EE'], [28, 'CCC'],[18, 'DDD']];

a.sort(customComparator);


function customComparator(a,b){
    if (a[0] == b[0]){
        if (a[1] <= b[1]){
            return -1;
        }else if (b[1] < a[1]){
            return 1
        }
    }else if(a[0] < b[0]){
        return -1;
    }else{
        return 1;
    }
}


console.log(a);
