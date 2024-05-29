const sumAll = function(start, end) {
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

// Do not edit below this line
module.exports = sumAll;
