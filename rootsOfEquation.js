function solve(a,b,c){
    // ax2 + bx + c
    let rootValue = Math.sqrt(b*b - 4*a*c);
    let root1 = (-b + rootValue) /(2*a);
    let root2 = (-b - rootValue) /(2*a);
    console.log(root1,root2);
}

// let val1 = solve(2,5,3)[0];
// let val2 = solve(2,5,3)[1];

let val2 = null;

val2 = solve(2,5,3);
console.log(val2);