// let x = [];
// let y = [1,2,3,NaN,"Sri Krishna",true];
// let z = ["abc","def","ghi"];

// console.log(x,y,z);

// let string = "ab";

// let result = 0;

// for (let i=0; i<string.length; i++){
//     console.log("ASCII VALUE IS ",string[i]," ",string[i].charCodeAt(0));
// }

// console.log(result);
let string = "abcd";

// for (let i=0; i<string.length; i++){
//         for (let j=i;j<string.length;j++){
//             let run = "";
//                 for (let k=i;k<=j;k++){
//                         run += string[k];
//                     }
//                 console.log(run);
//                 }
            
//             }
            
// let string = "abcd";

// for (let i=0; i<string.length; i++){
//     let run = "";
//     for (let k=0;k<=i;k++){
//         run += string[k];
//     }
//     console.log(run);

for (let i=string.length-1;i>=0;i--){
    let run = "";
    for (let k=i; k<string.length; k++){
        run += string[k];
    }
    console.log(run);
};
    

//     // console.log(string.slice(0,i+1));
    
// }
    i   
0 1 2 3
a b c d
    0

lps[i] = longest prefix from 0 to i;


abc

pref:- a ab
suff: c bc

lps[2] : 0;