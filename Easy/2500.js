const grid = [[9,81],[33,17]];

let rowLength = grid.length;
let colLength = grid[0].length;

for (let i = 0; i< rowLength; i++){
    grid[i].sort((a,b) => a-b);
}



let total = 0;


for (let j = 0; j< colLength; j++){
    let runningTotal = 0;
    for (let i=0; i< rowLength; i++){
        runningTotal = Math.max(runningTotal, grid[i][j]);
    }
    total += runningTotal;
}

console.log(total);


// const array = [1,3,2,4];

// array.sort();

// console.log(array);

