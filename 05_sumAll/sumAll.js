/* const sumAll = function(start, end) {
    if ((start < 0) || (end < 0) || 
    (typeof start != "number") || (typeof end != "number")) {
        return "ERROR";
    }
    let sum = 0;
    if (start > end) {
        [start, end] = [end, start];
    }
    for (let a=start; a<=end; a++) {
        sum = sum + a;
    }

    return sum;
};
*/
const sumAll = function(start, end) {
    sum = 0;
    if (end > start) {
        [end, start] = [start, end];
    }
    for (let i=start; i<=end; i++){
        sum += i;
    }
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
