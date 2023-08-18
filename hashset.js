
const A = [1,2,3,5,12,2,1];

let hashset = new Set();

// Scenario to add elements in a set:-

for (let i=0; i<A.length; i++){
    hashset.add(A[i]);
}

// Scenario to delete an element from Hashset:-

hashset.delete(5);
console.log(hashset);


// Scenario to check if an element exists in Hashset or not?

for (let i=0; i<A.length; i++){
    if (hashset.has(A[i])){
        console.log(false);
        break;
    }else{
        hashset.add(A[i]);
    }
}
console.log(true);