const intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]];
const newInterval = [4,8];

let referenceStart = newInterval[0];
let referenceEnd = newInterval[1];

const result = [];
let flag = false;
let startPointer = null;

for (let i=0; i<intervals.length; i++){
    let currentStart = intervals[i][0];
    let currentEnd = intervals[i][1];

    // ! No Overlap Scenario-01:-
    if (currentEnd < referenceStart){
        result.push([currentStart,currentEnd]);
    
    }else if (referenceEnd < currentStart){
        result.push([referenceStart,referenceEnd]);
        flag = true;
        startPointer = i;
        break;
    }else{
        // ! Overlap Scenario
        referenceStart = Math.min(referenceStart,currentStart);
        referenceEnd = Math.max(referenceEnd,currentEnd);
    }
}

if (flag === true){
    for (let j=startPointer; j<intervals.length; j++){
        let currentStart = intervals[j][0];
        let currentEnd = intervals[j][1];
        result.push([currentStart,currentEnd]);
    }
    console.log(result);
}else{
    result.push([referenceStart,referenceEnd]);
    console.log(result);
}