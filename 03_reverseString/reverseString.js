const reverseString = function(aString) {
    let reverseReverse = "";
    aString.split("").forEach(function(item, index, array) {
        reverseReverse = item + reverseReverse;
        console.log(item);
    });
    return reverseReverse;
};

// Do not edit below this line
module.exports = reverseString;
