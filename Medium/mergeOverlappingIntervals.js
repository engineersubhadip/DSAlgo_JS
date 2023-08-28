const intervals = [[1,3],[2,6],[8,10],[15,18]];

intervals.sort((a,b) => a[0]-b[0]);

let referenceStart = intervals[0][0];
let referenceEnd = intervals[0][1];

const result = [];

for (let i=1; i<intervals.length; i++){
    let currentStart = intervals[i][0];
    let currentEnd = intervals[i][1];

    // ! Overlapping Intervals:-
    if (currentStart <= referenceEnd){
        referenceStart = Math.min(referenceStart,currentStart);
        referenceEnd = Math.max(referenceEnd,currentEnd);
    }else{
        // ! Non-Overlapping Intervals:-
        result.push([referenceStart,referenceEnd]);
        referenceStart = currentStart;
        referenceEnd = currentEnd;
    }
}
result.push([referenceStart,referenceEnd]);

console.log(result);