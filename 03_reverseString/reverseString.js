const reverseString = function(aString) {
    let reversed = "";
    for (let i=0; i<aString.toString().length; i++) {
        reversed = aString[i] + reversed;
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
