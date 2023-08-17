const gain = [-4,-3,-2,-1,4,3,2];

const prefix = []

for (let i=0; i< gain.length; i++){
    prefix.push(0);
}

prefix[0] = gain[0];

for (let i=1; i< gain.length; i++){
    prefix[i] = prefix[i-1]+gain[i];
}


if (Math.max(...prefix) > 0){
    console.log(Math.max(...prefix));
}else{
    console.log(0);
}



