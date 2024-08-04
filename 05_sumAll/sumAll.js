const sumAll = function(start, end) {
    sum = 0;
    if ((typeof end !== "number") || (typeof start !== "number") || (end < 0) || (start < 0)) {
        return "ERROR";
    }
    if (end < start) {
        [end, start] = [start, end];
    }

    for (let i=start; i<=end; i++){
        sum += i;
    }
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
