const repeatString = function(ogString, repeats) {
    if (repeats < 0) {
        return "ERROR";
    }
    let repeatedString = "";
    for (let i=0; i<repeats; i++) {
        repeatedString = repeatedString + ogString;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
